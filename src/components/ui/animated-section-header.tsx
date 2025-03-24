"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedSectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
  withAccent?: boolean;
  accentColor?: string;
  withAnimation?: boolean;
}

export function AnimatedSectionHeader({
  title,
  subtitle,
  align = 'center',
  titleClassName,
  subtitleClassName,
  className,
  withAccent = true,
  accentColor = 'bg-gradient-to-r from-purple-500 to-blue-500',
  withAnimation = true,
}: AnimatedSectionHeaderProps) {
  // Alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const accentVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: align === 'center' ? '80px' : '40px',
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  // Render with or without animation
  if (!withAnimation) {
    return (
      <div className={cn('mb-12', alignmentClasses[align], className)}>
        <h2 className={cn('text-3xl md:text-4xl font-bold mb-4', titleClassName)}>
          {title}
        </h2>
        
        {withAccent && (
          <div 
            className={cn(
              'h-1 rounded-full mb-6',
              align === 'center' ? 'w-20 mx-auto' : 'w-10',
              accentColor
            )} 
          />
        )}
        
        {subtitle && (
          <p className={cn('text-gray-300 max-w-2xl', subtitleClassName)}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  // Render with animation
  return (
    <motion.div 
      className={cn('mb-12', alignmentClasses[align], className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2 
        className={cn('text-3xl md:text-4xl font-bold mb-4', titleClassName)}
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      {withAccent && (
        <motion.div 
          className={cn(
            'h-1 rounded-full mb-6',
            align === 'center' ? 'mx-auto' : '',
            accentColor
          )}
          variants={accentVariants}
        />
      )}
      
      {subtitle && (
        <motion.p 
          className={cn('text-gray-300 max-w-2xl', subtitleClassName)}
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

// Specialized variants for different section types
export function HeroSectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatedSectionHeader
      title={title}
      subtitle={subtitle}
      align="center"
      titleClassName="text-4xl md:text-5xl lg:text-6xl font-extrabold"
      subtitleClassName="text-xl max-w-3xl"
      className={className}
      accentColor="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
    />
  );
}

export function FeatureSectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}) {
  return (
    <AnimatedSectionHeader
      title={title}
      subtitle={subtitle}
      align={align}
      className={className}
      accentColor="bg-gradient-to-r from-blue-500 to-purple-500"
    />
  );
}

export function TestimonialSectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatedSectionHeader
      title={title}
      subtitle={subtitle}
      align="center"
      className={className}
      accentColor="bg-gradient-to-r from-yellow-500 to-orange-500"
    />
  );
}

export function BlogSectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatedSectionHeader
      title={title}
      subtitle={subtitle}
      align="center"
      className={className}
      accentColor="bg-gradient-to-r from-green-500 to-teal-500"
    />
  );
}

export function ContactSectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatedSectionHeader
      title={title}
      subtitle={subtitle}
      align="center"
      className={className}
      accentColor="bg-gradient-to-r from-purple-500 to-pink-500"
    />
  );
}
