"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroAction {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  icon?: React.ReactNode;
}

interface ModernHeroProps {
  badge?: {
    text: string;
    variant?: "default" | "primary" | "secondary";
  };
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  actions?: HeroAction[];
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
  align?: "left" | "center";
  withPattern?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ModernHero({
  badge,
  title,
  subtitle,
  description,
  actions = [],
  image,
  className,
  align = "left",
  withPattern = true,
}: ModernHeroProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Background Elements */}
      {withPattern && (
        <>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
          
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        </>
      )}

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className={cn(
              "md:w-1/2 flex flex-col",
              align === "center" && "items-center"
            )}
          >
            {badge && (
              <motion.div
                variants={itemVariants}
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6 border",
                  badge.variant === "primary"
                    ? "bg-primary/10 text-primary border-primary/20"
                    : badge.variant === "secondary"
                    ? "bg-secondary/10 text-secondary border-secondary/20"
                    : "bg-muted text-muted-foreground border-muted"
                )}
              >
                {badge.text}
              </motion.div>
            )}

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground font-light mb-4"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-8 max-w-lg"
            >
              {description}
            </motion.p>

            {actions.length > 0 && (
              <motion.div
                variants={itemVariants}
                className={cn(
                  "flex gap-4 flex-wrap",
                  align === "center" && "justify-center"
                )}
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    size="lg"
                    className={cn(
                      "h-12 px-6 rounded-full transition-all",
                      action.variant === "default" ? 
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20" : 
                        "hover:scale-105"
                    )}
                    asChild
                  >
                    <Link href={action.href}>
                      {action.text}
                      {action.icon && (
                        <span className="ml-2">{action.icon}</span>
                      )}
                    </Link>
                  </Button>
                ))}
              </motion.div>
            )}
          </div>

          {image && (
            <motion.div
              variants={itemVariants}
              className="md:w-1/2 relative"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-background/50 p-1 backdrop-blur">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
