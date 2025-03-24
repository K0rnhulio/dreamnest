"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MousePosition {
  x: number
  y: number
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return mousePosition
}

interface FeminineParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  colors?: string[];
  vx?: number;
  vy?: number;
  particleShape?: 'circle' | 'heart' | 'star' | 'mixed';
  opacity?: number;
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  color: string;
  shape: 'circle' | 'heart' | 'star';
}

export const FeminineParticles: React.FC<FeminineParticlesProps> = ({
  className = "",
  quantity = 30,
  staticity = 90,
  ease = 80,
  size: particleSize = 1,
  refresh = false,
  colors = ["#ffb6c1", "#ffc0cb", "#ff69b4", "#da70d6", "#dda0dd"],
  vx = 0,
  vy = 0.1,
  particleShape = 'mixed',
  opacity = 0.6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mousePosition = useMousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d", { willReadFrequently: true })
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    if (refresh) {
      initCanvas()
    }
  }, [refresh])

  useEffect(() => {
    mouse.current.x = mousePosition.x
    mouse.current.y = mousePosition.y
  }, [mousePosition])

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = []
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)

      for (let i = 0; i < quantity; i++) {
        const circle = circleParams()
        circles.current.push(circle)
        drawShape(circle)
      }
    }
  }

  const circleParams = (): Circle => {
    const x = Math.random() * canvasSize.current.w
    const y = Math.random() * canvasSize.current.h
    const translateX = 0
    const translateY = 0
    const size = Math.random() * particleSize * 2 + 0.5
    const alpha = 0
    const targetAlpha = parseFloat((Math.random() * opacity + 0.2).toFixed(2))
    const dx = (Math.random() - 0.5) * 0.3
    const dy = (Math.random() - 0.5) * 0.3
    const magnetism = Math.random() * 0.5 + 0.5
    const color = colors[Math.floor(Math.random() * colors.length)]
    
    let shape: 'circle' | 'heart' | 'star' = 'circle';
    if (particleShape === 'mixed') {
      const shapes: ('circle' | 'heart' | 'star')[] = ['circle', 'heart', 'star'];
      shape = shapes[Math.floor(Math.random() * shapes.length)];
    } else {
      shape = particleShape;
    }

    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
      color,
      shape
    }
  }

  const drawShape = (circle: Circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha, color, shape } = circle
      context.current.save()
      context.current.globalAlpha = alpha
      context.current.fillStyle = color
      context.current.strokeStyle = color
      context.current.lineWidth = 0.5
      context.current.translate(translateX, translateY)
      
      if (shape === 'heart') {
        // Draw heart shape
        context.current.beginPath()
        const heartSize = size * 6
        context.current.moveTo(x, y)
        context.current.bezierCurveTo(
          x - heartSize / 2, y - heartSize / 2,
          x - heartSize, y + heartSize / 3,
          x, y + heartSize
        )
        context.current.bezierCurveTo(
          x + heartSize, y + heartSize / 3,
          x + heartSize / 2, y - heartSize / 2,
          x, y
        )
        context.current.closePath()
        context.current.fill()
      } else if (shape === 'star') {
        // Draw star shape
        context.current.beginPath()
        const spikes = 5
        const outerRadius = size * 6
        const innerRadius = size * 3
        
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius
          const angleRad = (Math.PI / spikes) * i
          const starX = x + Math.cos(angleRad) * radius
          const starY = y + Math.sin(angleRad) * radius
          
          if (i === 0) {
            context.current.moveTo(starX, starY)
          } else {
            context.current.lineTo(starX, starY)
          }
        }
        
        context.current.closePath()
        context.current.fill()
      } else {
        // Default circle shape
        context.current.beginPath()
        context.current.arc(x, y, size * 2, 0, Math.PI * 2)
        context.current.closePath()
        context.current.fill()
      }
      
      context.current.restore()

      if (!update) {
        circle.alpha = circle.targetAlpha
      }
    }
  }

  const animate = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      )
    }

    circles.current.forEach((circle, i) => {
      // Handle alpha animation
      if (circle.alpha < circle.targetAlpha) {
        circle.alpha += 0.01
      } else if (circle.alpha > circle.targetAlpha) {
        circle.alpha -= 0.01
      }
      
      // Handle movement
      circle.x += circle.dx + vx
      circle.y += circle.dy + vy
      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
        ease
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
        ease

      drawShape(circle, true)

      // circle gets out of the canvas
      if (
        circle.x < -circle.size * 8 ||
        circle.x > canvasSize.current.w + circle.size * 8 ||
        circle.y < -circle.size * 8 ||
        circle.y > canvasSize.current.h + circle.size * 8
      ) {
        // remove the circle from the array
        circles.current.splice(i, 1)
        // create a new circle
        const newCircle = circleParams()
        circles.current.push(newCircle)
        drawShape(newCircle)
      }
    })
    window.requestAnimationFrame(animate)
  }

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      style={{ 
        transform: 'translate3d(0, 0, 0)',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}
