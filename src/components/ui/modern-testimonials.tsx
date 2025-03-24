"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
};

interface ModernTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

export const ModernTestimonials = ({
  testimonials,
  autoplay = true,
  interval = 5000,
  className,
}: ModernTestimonialsProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const next = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      next();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, testimonials.length]);

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <div className={cn("w-full py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Quote className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            What our clients say
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Discover how our coaching has helped people embrace authentic expression and personal freedom.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background decorative elements */}
          <div className="absolute -z-10 top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute -z-10 bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />
          
          {/* Testimonial card */}
          <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="flex flex-col items-center">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full flex flex-col items-center text-center"
                >
                  <div className="mb-6">
                    <Avatar className="h-20 w-20 border-4 border-background shadow-lg">
                      <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                      <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <blockquote className="relative mb-6 max-w-3xl">
                    <span className="absolute -top-10 -left-10 text-6xl text-primary/20 font-serif">"</span>
                    <p className="text-xl md:text-2xl italic text-foreground leading-relaxed">
                      {testimonials[current].quote}
                    </p>
                    <span className="absolute -bottom-10 -right-10 text-6xl text-primary/20 font-serif">"</span>
                  </blockquote>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-lg">{testimonials[current].name}</p>
                    <p className="text-muted-foreground">
                      {testimonials[current].role}
                      {testimonials[current].company && ` at ${testimonials[current].company}`}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? "right" : "left");
                  setCurrent(index);
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === current
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
