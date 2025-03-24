"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { SparklesCore } from "@/components/ui/sparkles"

export function ParticleBackground({
  className,
  children,
  particleDensity = 60,
  minSize = 0.8,
  maxSize = 1.8,
  speed = 1.5,
  background = "transparent",
  particleColor,
}: {
  className?: string
  children?: React.ReactNode
  particleDensity?: number
  minSize?: number
  maxSize?: number
  speed?: number
  background?: string
  particleColor?: string
}) {
  const { theme } = useTheme()
  const [color, setColor] = useState<string>("")

  useEffect(() => {
    // Default feminine color palette
    if (!particleColor) {
      setColor(theme === "dark" ? "#ffc0cb" : "#ff69b4")
    } else {
      setColor(particleColor)
    }
  }, [theme, particleColor])

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ transform: 'translate3d(0, 0, 0)' }}>
      <div className="w-full absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background={background}
          minSize={minSize}
          maxSize={maxSize}
          particleDensity={particleDensity}
          className="w-full h-full"
          particleColor={color}
          speed={speed}
        />
      </div>
      {children}
    </div>
  )
}
