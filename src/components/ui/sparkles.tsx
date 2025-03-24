"use client"

import React, { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function SparklesCore({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  id: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }

    initCanvas()
    generateParticles()
    animate()

    window.addEventListener("resize", initCanvas)
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", initCanvas)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [maxSize, minSize, particleColor, particleDensity, speed])

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      
      context.current.scale(dpr, dpr)
    }
  }

  const generateParticles = () => {
    particles.current = []
    const density = particleDensity || 100
    
    for (let i = 0; i < density; i++) {
      const particle = new Particle(
        canvasSize.current.w,
        canvasSize.current.h,
        minSize || 0.8,
        maxSize || 2.5,
        particleColor || "#FFFFFF",
        speed || 1
      )
      particles.current.push(particle)
    }
  }

  const onMouseMove = (e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      mousePosition.current.x = e.clientX - rect.left
      mousePosition.current.y = e.clientY - rect.top
    }
  }

  const animate = () => {
    if (context.current && canvasRef.current) {
      // Clear canvas with background color
      context.current.fillStyle = background || "transparent"
      context.current.fillRect(0, 0, canvasSize.current.w, canvasSize.current.h)

      // Smooth mouse tracking
      mouse.current.x += (mousePosition.current.x - mouse.current.x) * 0.05
      mouse.current.y += (mousePosition.current.y - mouse.current.y) * 0.05

      // Update and draw particles
      particles.current.forEach((particle) => {
        particle.update(canvasSize.current.w, canvasSize.current.h, mouse.current)
        particle.draw(context.current!)
      })
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  return (
    <div
      ref={canvasContainerRef}
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        id={id}
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </div>
  )
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  originalSize: number
  baseSpeedFactor: number
  shape: "circle" | "star" | "heart"
  rotation: number
  rotationSpeed: number
  opacity: number
  targetOpacity: number
  
  constructor(
    canvasWidth: number,
    canvasHeight: number,
    minSize: number,
    maxSize: number,
    color: string,
    speedFactor: number
  ) {
    // Position
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    
    // Size
    this.size = Math.random() * (maxSize - minSize) + minSize
    this.originalSize = this.size
    
    // Speed - increased for better visibility
    this.baseSpeedFactor = speedFactor
    this.speedX = (Math.random() - 0.5) * 0.8 * speedFactor
    this.speedY = (Math.random() - 0.5) * 0.8 * speedFactor
    
    // Ensure minimum speed so particles always move
    if (Math.abs(this.speedX) < 0.2) this.speedX = (this.speedX < 0) ? -0.2 : 0.2
    if (Math.abs(this.speedY) < 0.2) this.speedY = (this.speedY < 0) ? -0.2 : 0.2
    
    // Appearance
    this.color = color
    
    // Shape selection - feminine shapes for DreamNest
    const shapes: ("circle" | "star" | "heart")[] = ["circle", "star", "heart"]
    this.shape = shapes[Math.floor(Math.random() * shapes.length)]
    
    // Rotation for stars
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.02 * speedFactor
    
    // Opacity for twinkling effect
    this.opacity = Math.random() * 0.5 + 0.3
    this.targetOpacity = Math.random() * 0.5 + 0.3
  }
  
  update(canvasWidth: number, canvasHeight: number, mouse: { x: number, y: number }) {
    // Move particles
    this.x += this.speedX
    this.y += this.speedY
    
    // Subtle size pulsing
    this.size = this.originalSize * (0.9 + Math.sin(Date.now() * 0.002) * 0.1)
    
    // Rotate stars
    this.rotation += this.rotationSpeed
    
    // Opacity animation for twinkling
    if (Math.abs(this.opacity - this.targetOpacity) < 0.01) {
      this.targetOpacity = Math.random() * 0.5 + 0.3
    }
    
    this.opacity += (this.targetOpacity - this.opacity) * 0.02
    
    // Wrap around canvas edges
    if (this.x < -this.size) this.x = canvasWidth + this.size
    else if (this.x > canvasWidth + this.size) this.x = -this.size
    
    if (this.y < -this.size) this.y = canvasHeight + this.size
    else if (this.y > canvasHeight + this.size) this.y = -this.size
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color
    
    // Draw different shapes
    if (this.shape === "circle") {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    } else if (this.shape === "star") {
      this.drawStar(ctx, this.x, this.y, 5, this.size, this.size / 2)
    } else if (this.shape === "heart") {
      this.drawHeart(ctx, this.x, this.y, this.size)
    }
    
    ctx.restore()
  }
  
  drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3 + this.rotation
    let x = cx
    let y = cy
    let step = Math.PI / spikes
    
    ctx.beginPath()
    ctx.moveTo(cx, cy - outerRadius)
    
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy + Math.sin(rot) * outerRadius
      ctx.lineTo(x, y)
      rot += step
      
      x = cx + Math.cos(rot) * innerRadius
      y = cy + Math.sin(rot) * innerRadius
      ctx.lineTo(x, y)
      rot += step
    }
    
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath()
    ctx.fill()
  }
  
  drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    ctx.beginPath()
    const topCurveHeight = size * 0.3
    
    // Starting point at the bottom of the heart
    ctx.moveTo(x, y + size)
    
    // Left curve
    ctx.bezierCurveTo(
      x - size, y + size * 0.7, // control point 1
      x - size, y - topCurveHeight, // control point 2
      x, y - topCurveHeight // end point
    )
    
    // Right curve
    ctx.bezierCurveTo(
      x + size, y - topCurveHeight, // control point 1
      x + size, y + size * 0.7, // control point 2
      x, y + size // end point
    )
    
    ctx.closePath()
    ctx.fill()
  }
}
