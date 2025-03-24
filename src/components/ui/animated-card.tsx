"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: 'lift' | 'glow' | 'tilt' | 'scale' | 'none';
  glassEffect?: boolean;
  borderGlow?: boolean;
  withShadow?: boolean;
}

export function AnimatedCard({
  className,
  children,
  hoverEffect = 'lift',
  glassEffect = false,
  borderGlow = false,
  withShadow = true,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Base styles
  const baseStyles = cn(
    'relative rounded-xl overflow-hidden transition-all duration-300',
    withShadow && 'shadow-lg',
    glassEffect && 'backdrop-blur-md bg-white/10',
    borderGlow && 'border border-transparent',
    isHovered && borderGlow && 'border-white/30',
    className
  );

  // Motion variants based on hover effect
  const getMotionProps = () => {
    switch (hoverEffect) {
      case 'lift':
        return {
          whileHover: { y: -10, transition: { duration: 0.3 } },
        };
      case 'glow':
        return {
          whileHover: { 
            boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.2)',
            transition: { duration: 0.3 } 
          },
        };
      case 'tilt':
        return {
          whileHover: { 
            rotateX: 5, 
            rotateY: 5,
            transition: { duration: 0.3 } 
          },
        };
      case 'scale':
        return {
          whileHover: { 
            scale: 1.05,
            transition: { duration: 0.3 } 
          },
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={baseStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...getMotionProps()}
    >
      {borderGlow && isHovered && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-xl blur-xl animate-gradient-shift" />
      )}
      {children}
    </motion.div>
  );
}

interface AnimatedFeatureCardProps extends AnimatedCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
}

export function AnimatedFeatureCard({
  className,
  icon,
  title,
  description,
  accentColor = 'from-purple-500 to-blue-500',
  hoverEffect = 'lift',
  glassEffect = true,
  borderGlow = true,
  withShadow = true,
}: AnimatedFeatureCardProps) {
  return (
    <AnimatedCard
      className={cn('p-6', className)}
      hoverEffect={hoverEffect}
      glassEffect={glassEffect}
      borderGlow={borderGlow}
      withShadow={withShadow}
    >
      {icon && (
        <div className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center mb-4',
          `bg-gradient-to-br ${accentColor} bg-opacity-20`
        )}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </AnimatedCard>
  );
}

interface AnimatedPricingCardProps extends AnimatedCardProps {
  plan: string;
  price: string;
  features: string[];
  popular?: boolean;
  accentColor?: string;
  ctaText?: string;
  onClickCta?: () => void;
}

export function AnimatedPricingCard({
  className,
  plan,
  price,
  features,
  popular = false,
  accentColor = 'from-purple-500 to-blue-500',
  ctaText = 'Get Started',
  onClickCta,
  hoverEffect = 'lift',
  glassEffect = true,
  borderGlow = true,
  withShadow = true,
}: AnimatedPricingCardProps) {
  return (
    <AnimatedCard
      className={cn('p-6', popular && 'scale-105 z-10', className)}
      hoverEffect={hoverEffect}
      glassEffect={glassEffect}
      borderGlow={borderGlow}
      withShadow={withShadow}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-300">/month</span>}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onClickCta}
        className={cn(
          'w-full py-2 rounded-lg font-medium transition-all',
          popular 
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/20' 
            : 'bg-white/10 hover:bg-white/20 text-white'
        )}
      >
        {ctaText}
      </button>
    </AnimatedCard>
  );
}

interface AnimatedTeamCardProps extends AnimatedCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: {
    icon: React.ReactNode;
    url: string;
  }[];
}

export function AnimatedTeamCard({
  className,
  name,
  role,
  image,
  bio,
  socialLinks,
  hoverEffect = 'tilt',
  glassEffect = true,
  borderGlow = true,
  withShadow = true,
}: AnimatedTeamCardProps) {
  return (
    <AnimatedCard
      className={cn('overflow-hidden', className)}
      hoverEffect={hoverEffect}
      glassEffect={glassEffect}
      borderGlow={borderGlow}
      withShadow={withShadow}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-purple-300 mb-2">{role}</p>
        {bio && <p className="text-gray-300 mb-4 text-sm">{bio}</p>}
        {socialLinks && (
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </AnimatedCard>
  );
}

interface AnimatedBlogCardProps extends AnimatedCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  category?: string;
  url: string;
}

export function AnimatedBlogCard({
  className,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  url,
  hoverEffect = 'lift',
  glassEffect = true,
  borderGlow = true,
  withShadow = true,
}: AnimatedBlogCardProps) {
  return (
    <AnimatedCard
      className={cn('overflow-hidden', className)}
      hoverEffect={hoverEffect}
      glassEffect={glassEffect}
      borderGlow={borderGlow}
      withShadow={withShadow}
    >
      <a href={url} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          {category && (
            <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">
              {category}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            {author.avatar && (
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-8 h-8 rounded-full mr-2" 
              />
            )}
            <div className="text-sm">
              <p className="text-gray-300">{author.name}</p>
              <p className="text-gray-400">{date}</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 hover:text-purple-300 transition-colors">{title}</h3>
          <p className="text-gray-300 text-sm line-clamp-3">{excerpt}</p>
        </div>
      </a>
    </AnimatedCard>
  );
}
