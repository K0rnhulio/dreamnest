"use client";

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

const cardVariants = cva("w-full relative", {
  variants: {
    variant: {
      default: [
        "border rounded-lg shadow-sm",
        "border-border bg-background",
        "transition-all duration-300 hover:shadow-md",
      ],
      dots: [
        "relative mx-auto w-full",
        "rounded-lg border border-dashed",
        "border-border",
        "px-4 sm:px-6 md:px-8",
      ],
      pattern: [
        "overflow-hidden",
        "border rounded-lg",
        "border-border bg-background",
      ],
      neubrutalism: [
        "border-[0.5px]",
        "border-border",
        "relative",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0)]",
        "dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]",
        "transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)]",
        "dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)]",
      ],
      lifted: [
        "border rounded-xl",
        "border-border",
        "relative",
        "shadow-[0px_5px_0px_0px_rgba(0,0,0,0.1)]",
        "dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.1)]",
        "bg-background",
        "transition-all duration-300 hover:shadow-[0px_7px_0px_0px_rgba(0,0,0,0.1)]",
        "dark:hover:shadow-[0px_6px_0px_0px_rgba(255,255,255,0.1)]",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ModernCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string
  description?: string
  icon?: React.ReactNode
  animate?: boolean
}

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
CardContent.displayName = "CardContent"

const PatternBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      aria-hidden="true"
    />
  </div>
)

const CardWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
CardWrapper.displayName = "CardWrapper"

const ModernCard = React.forwardRef<HTMLDivElement, ModernCardProps>(
  (
    { className, variant, title, description, icon, animate = true, ...props },
    ref
  ) => {
    const animationProps = animate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: {
            delay: 0.1,
            duration: 0.4,
            ease: "easeInOut",
          },
        }
      : {}

    const content = title ? (
      <CardContent className="flex flex-col items-start gap-4">
        {icon && (
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            {icon}
          </div>
        )}
        <div className="space-y-2">
          {title && <h3 className="text-xl font-bold">{title}</h3>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {props.children}
      </CardContent>
    ) : (
      props.children
    )

    if (variant === "pattern") {
      return (
        <CardWrapper
          ref={ref}
          className={cn(cardVariants({ variant, className }))}
          {...props}
          {...animationProps}
        >
          <PatternBackground />
          {content}
        </CardWrapper>
      )
    }

    return (
      <CardWrapper
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
        {...animationProps}
      >
        {content}
      </CardWrapper>
    )
  },
)
ModernCard.displayName = "ModernCard"

export { ModernCard, CardContent, cardVariants }
