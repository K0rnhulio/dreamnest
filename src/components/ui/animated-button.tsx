"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  gradientColors?: string;
  hoverEffect?: 'scale' | 'glow' | 'slide' | 'none';
  withArrow?: boolean;
  asChild?: boolean;
  href?: string;
}

export function AnimatedButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  gradientColors = 'from-purple-500 to-blue-500',
  hoverEffect = 'scale',
  withArrow = false,
  asChild = false,
  href,
  ...props
}: AnimatedButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
    ghost: 'text-blue-500 hover:bg-blue-100',
    gradient: `bg-gradient-to-r ${gradientColors} text-white`,
  };

  // Hover effect variants
  const getHoverEffectProps = () => {
    switch (hoverEffect) {
      case 'scale':
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.98 },
        };
      case 'glow':
        return {
          whileHover: { 
            boxShadow: '0 0 15px 2px rgba(123, 97, 255, 0.3)',
          },
          whileTap: { scale: 0.98 },
        };
      case 'slide':
        return {
          whileHover: { x: 5 },
          whileTap: { scale: 0.98 },
        };
      case 'none':
      default:
        return {
          whileTap: { scale: 0.98 },
        };
    }
  };

  // Base button classes
  const buttonClasses = cn(
    'relative rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center',
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    fullWidth && 'w-full',
    className
  );

  // Render as link if href is provided
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...getHoverEffectProps()}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
        {withArrow && (
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        )}
      </motion.a>
    );
  }

  // Regular button
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...getHoverEffectProps()}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
      {withArrow && (
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      )}
    </motion.button>
  );
}

// Specialized button variants
export function GradientButton({
  children,
  className,
  gradientColors = 'from-purple-500 to-blue-500',
  size = 'md',
  ...props
}: Omit<AnimatedButtonProps, 'variant'> & {
  gradientColors?: string;
}) {
  return (
    <AnimatedButton
      variant="gradient"
      gradientColors={gradientColors}
      size={size}
      className={cn('shadow-md', className)}
      hoverEffect="glow"
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}

export function PrimaryButton({
  children,
  className,
  size = 'md',
  ...props
}: Omit<AnimatedButtonProps, 'variant'>) {
  return (
    <AnimatedButton
      variant="primary"
      size={size}
      className={className}
      hoverEffect="scale"
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}

export function OutlineButton({
  children,
  className,
  size = 'md',
  ...props
}: Omit<AnimatedButtonProps, 'variant'>) {
  return (
    <AnimatedButton
      variant="outline"
      size={size}
      className={className}
      hoverEffect="scale"
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}

export function ArrowButton({
  children,
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: Omit<AnimatedButtonProps, 'withArrow'>) {
  return (
    <AnimatedButton
      variant={variant}
      size={size}
      className={className}
      withArrow={true}
      hoverEffect="slide"
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}
