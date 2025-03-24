"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface NetworkParticlesProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  particleCount?: number;
  lineOpacity?: number;
  particleOpacity?: number;
  lineWidth?: number;
  particleSize?: number;
  speed?: number;
  connectDistance?: number;
  children?: React.ReactNode;
}

export function NetworkParticles({
  className,
  particleColor,
  lineColor,
  particleCount = 80,
  lineOpacity = 0.2,
  particleOpacity = 0.7,
  lineWidth = 1,
  particleSize = 2,
  speed = 0.8,
  connectDistance = 150,
  children
}: NetworkParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  // Set default colors based on theme
  const defaultParticleColor = theme === "dark" ? "#ffc0cb" : "#ff69b4";
  const defaultLineColor = theme === "dark" ? "#ffc0cb80" : "#ff69b480";
  const actualParticleColor = particleColor || defaultParticleColor;
  const actualLineColor = lineColor || defaultLineColor;

  // Initialize on client-side only
  useEffect(() => {
    setIsClient(true);
    console.log("NetworkParticles initialized");
  }, []);

  // Initialize canvas and particles
  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      if (canvas.parentElement) {
        const { width, height } = canvas.parentElement.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
        console.log("Canvas resized:", width, height);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Force a resize after a short delay to ensure proper initialization
    setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient]);

  // Create particles when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    console.log("Creating particles:", particleCount);
    
    // Create particles with minimum speed to ensure movement
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const speedX = (Math.random() - 0.5) * speed;
      const speedY = (Math.random() - 0.5) * speed;
      
      // Ensure minimum speed
      const adjustedSpeedX = Math.abs(speedX) < 0.2 ? (speedX < 0 ? -0.2 : 0.2) : speedX;
      const adjustedSpeedY = Math.abs(speedY) < 0.2 ? (speedY < 0 ? -0.2 : 0.2) : speedY;
      
      return {
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * particleSize + 1,
        speedX: adjustedSpeedX,
        speedY: adjustedSpeedY,
        opacity: Math.random() * 0.3 + particleOpacity
      };
    });
  }, [dimensions, particleCount, particleSize, speed, particleOpacity]);

  // Animation loop
  useEffect(() => {
    if (!isClient || dimensions.width === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.log("Starting animation loop");
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        else if (particle.x > canvas.width) particle.x = 0;
        
        if (particle.y < 0) particle.y = canvas.height;
        else if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = actualParticleColor;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Connect particles within distance
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const particle2 = particlesRef.current[j];
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Draw line with opacity based on distance
            const opacity = lineOpacity * (1 - distance / connectDistance);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = actualLineColor;
            ctx.lineWidth = lineWidth;
            ctx.globalAlpha = opacity;
            ctx.stroke();
          }
        }
        
        // Connect to mouse if within distance
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);
        
        if (mouseDistance < connectDistance * 1.5) {
          // Create a stronger connection to mouse
          const opacity = lineOpacity * 2 * (1 - mouseDistance / (connectDistance * 1.5));
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = actualLineColor;
          ctx.lineWidth = lineWidth * 2;
          ctx.globalAlpha = opacity;
          ctx.stroke();
          
          // Slightly push particles away from mouse for interactive effect
          const pushFactor = 0.05;
          const normalizedDx = dx / mouseDistance;
          const normalizedDy = dy / mouseDistance;
          particle.x += normalizedDx * pushFactor;
          particle.y += normalizedDy * pushFactor;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient, dimensions, actualParticleColor, actualLineColor, connectDistance, lineOpacity, lineWidth]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)} style={{ position: 'relative' }}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ 
            transform: 'translate3d(0, 0, 0)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      {children && <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>}
    </div>
  );
}
