'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FeminineDecorationsProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  variant?: 'circles' | 'waves' | 'blobs' | 'mixed';
}

export const FeminineDecorations: React.FC<FeminineDecorationsProps> = ({
  className,
  density = 'low',
  variant = 'mixed',
}) => {
  // Use state to store decorations
  const [decorations, setDecorations] = useState<React.ReactNode[]>([]);
  
  // Generate decorations only on the client side
  useEffect(() => {
    // Determine number of elements based on density
    const elementCount = {
      low: 5,
      medium: 10,
      high: 15
    }[density];

    const elements: React.ReactNode[] = [];
    
    for (let i = 0; i < elementCount; i++) {
      // Randomize positions
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      
      // Randomize sizes (keeping them relatively small for performance)
      const size = Math.floor(Math.random() * 150) + 100;
      
      // Higher opacity for visibility
      const opacity = (Math.random() * 0.3) + 0.2;
      
      // Randomize colors with more vibrant options
      const colors = [
        'bg-pink-200', 
        'bg-purple-200',
        'bg-rose-200',
        'bg-fuchsia-200'
      ];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
      
      // Randomize blur (keeping it minimal)
      const blur = Math.random() > 0.5 ? 'blur-sm' : 'blur-[3px]';
      
      // Determine element type based on variant
      let elementType: 'circle' | 'wave' | 'blob' = 'circle';
      if (variant === 'mixed') {
        const types: ('circle' | 'wave' | 'blob')[] = ['circle', 'wave', 'blob'];
        elementType = types[Math.floor(Math.random() * types.length)];
      } else if (variant === 'circles') {
        elementType = 'circle';
      } else if (variant === 'waves') {
        elementType = 'wave';
      } else if (variant === 'blobs') {
        elementType = 'blob';
      }
      
      // Animation duration
      const animationDuration = 20 + Math.random() * 30;
      
      // Create element based on type
      if (elementType === 'circle') {
        elements.push(
          <div
            key={`circle-${i}`}
            className={cn(
              'absolute rounded-full',
              blur,
              colorClass
            )}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              transform: 'translate3d(0, 0, 0)',
              WebkitBackdropFilter: 'blur(1px)',
              backdropFilter: 'blur(1px)',
              zIndex: 0,
              animation: `float ${animationDuration}s ease-in-out infinite`
            }}
            aria-hidden="true"
          />
        );
      } else if (elementType === 'wave') {
        // Create a wave-like shape
        elements.push(
          <div
            key={`wave-${i}`}
            className={cn(
              'absolute',
              blur,
              colorClass
            )}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size * 1.5}px`,
              height: `${size * 0.5}px`,
              opacity: opacity,
              borderRadius: '50%',
              transform: `translate3d(0, 0, 0) rotate(${Math.random() * 180}deg)`,
              WebkitBackdropFilter: 'blur(1px)',
              backdropFilter: 'blur(1px)',
              zIndex: 0,
              animation: `float ${animationDuration}s ease-in-out infinite`
            }}
            aria-hidden="true"
          />
        );
      } else if (elementType === 'blob') {
        // Create a blob shape with border-radius
        const borderRadius = `${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%`;
        elements.push(
          <div
            key={`blob-${i}`}
            className={cn(
              'absolute',
              blur,
              colorClass
            )}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              borderRadius: borderRadius,
              transform: 'translate3d(0, 0, 0)',
              WebkitBackdropFilter: 'blur(1px)',
              backdropFilter: 'blur(1px)',
              zIndex: 0,
              animation: `float ${animationDuration}s ease-in-out infinite`
            }}
            aria-hidden="true"
          />
        );
      }
    }
    
    setDecorations(elements);
  }, [density, variant]);

  return (
    <div 
      className={cn("pointer-events-none fixed inset-0 overflow-hidden", className)}
      aria-hidden="true"
      style={{ transform: 'translate3d(0, 0, 0)', zIndex: 0 }}
    >
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(10px);
          }
          50% {
            transform: translateY(5px) translateX(-5px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
        }
      `}</style>
      {decorations}
    </div>
  );
};
