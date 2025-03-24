"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  MotionH2, 
  MotionP, 
  MotionDiv, 
  MotionButton, 
  MotionSection,
  MotionSpan
} from "@/components/ui/motion-wrapper";
import { Heart, Sparkles, Star } from "lucide-react";
import { ReactNode } from "react";

// Custom CSS for cross-browser gradient support
const styles = {
  iconBackground: `
    background-color: #ffd7d7; /* Fallback color */
    background-image: -webkit-linear-gradient(top right, rgba(255, 215, 215, 0.9), rgba(255, 182, 193, 0.9));
    background-image: -moz-linear-gradient(top right, rgba(255, 215, 215, 0.9), rgba(255, 182, 193, 0.9));
    background-image: -o-linear-gradient(top right, rgba(255, 215, 215, 0.9), rgba(255, 182, 193, 0.9));
    background-image: linear-gradient(to bottom left, rgba(255, 215, 215, 0.9), rgba(255, 182, 193, 0.9));
  `,
  buttonGradient: `
    background-color: #ff99cc; /* Fallback color */
    background-image: -webkit-linear-gradient(left, #ff99cc, #ffa07a);
    background-image: -moz-linear-gradient(left, #ff99cc, #ffa07a);
    background-image: -o-linear-gradient(left, #ff99cc, #ffa07a);
    background-image: linear-gradient(to right, #ff99cc, #ffa07a);
  `,
  softButtonGradient: `
    background-color: #ffc5c5; /* Fallback color */
    background-image: -webkit-linear-gradient(left, #ffc5c5, #ffd7d7);
    background-image: -moz-linear-gradient(left, #ffc5c5, #ffd7d7);
    background-image: -o-linear-gradient(left, #ffc5c5, #ffd7d7);
    background-image: linear-gradient(to right, #ffc5c5, #ffd7d7);
  `,
};

// Animated heading with enhanced feminine styling
export function FeminineHeading({
  children,
  className,
  size = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg" | "xl";
}) {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    default: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl lg:text-5xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <MotionH2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        sizeClasses[size],
        "font-bold relative inline-block",
        "after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/3 after:h-1 after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 after:rounded-full",
        "tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
      <MotionSpan
        className="absolute -top-6 -right-6 text-pink-400/30 hidden md:block"
        initial={{ rotate: -15, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Star className="h-8 w-8" strokeWidth={1.5} />
      </MotionSpan>
    </MotionH2>
  );
}

// Animated paragraph with enhanced feminine styling
export function FeminineParagraph({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MotionP
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className={cn(
        "text-muted-foreground leading-relaxed", 
        "first-letter:text-lg first-letter:font-medium first-letter:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </MotionP>
  );
}

// Animated card with enhanced feminine styling
export function FeminineCard({
  children,
  className,
  variant = "default",
  style,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "soft" | "outlined";
  style?: React.CSSProperties & { [key: string]: any };
}) {
  const variantClasses = {
    default: [
      "rounded-xl p-6 border border-pink-100 bg-white",
      "dark:border-pink-800/30 dark:bg-gray-950",
      "shadow-sm",
      "relative overflow-hidden",
    ],
    glass: [
      "rounded-xl p-6 border-none",
      "bg-white/80 dark:bg-gray-950/80",
      "backdrop-blur-sm",
      "shadow-sm",
      "relative overflow-hidden",
    ],
    soft: [
      "rounded-xl p-6 border-none",
      "shadow-sm",
      "relative overflow-hidden",
    ],
    outlined: [
      "rounded-xl p-6 bg-transparent",
      "border border-pink-200 dark:border-pink-800/50",
      "relative overflow-hidden",
    ],
  };

  // Custom styles for soft variant to ensure cross-browser compatibility
  const softCardStyle = variant === 'soft' ? {
    background: "linear-gradient(145deg, rgba(252, 231, 243, 0.5), rgba(233, 213, 255, 0.5))",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "0 4px 15px rgba(219, 39, 119, 0.1)"
  } : {};

  // Custom styles for glass variant to ensure cross-browser compatibility
  const glassCardStyle = variant === 'glass' ? {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  } : {};

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "transition-all duration-300",
        "hover:shadow-lg",
        variantClasses[variant],
        className
      )}
      style={{
        ...softCardStyle,
        ...glassCardStyle,
        ...style
      }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

// Animated button with enhanced feminine styling
export function FeminineButton({
  children,
  className,
  variant = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "soft" | "link";
}) {
  const variantClasses = {
    default: [
      "text-white",
      "border border-white/10",
      "before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
    ],
    outline: [
      "bg-transparent text-primary",
      "border border-primary/30 hover:border-primary/60",
      "hover:bg-primary/5",
      "shadow-sm hover:shadow-md shadow-primary/10",
      "backdrop-blur-sm",
    ],
    soft: [
      "text-pink-700 dark:text-white",
      "border border-pink-200/50 dark:border-pink-800/30",
      "shadow-sm",
    ],
    link: [
      "bg-transparent text-primary underline-offset-4 hover:underline",
      "p-0 h-auto",
      "shadow-none",
    ],
  };

  // Custom styles for different button variants
  const buttonStyle = {
    ...(variant === 'default' && {
      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(168, 85, 247, 0.9))',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 4px 15px rgba(219, 39, 119, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }),
    ...(variant === 'soft' && {
      background: 'linear-gradient(135deg, rgba(253, 242, 248, 0.8), rgba(245, 208, 254, 0.8))',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 4px 10px rgba(219, 39, 119, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    })
  };

  return (
    <MotionButton
      whileHover={{ scale: variant === "link" ? 1 : 1.03 }}
      whileTap={{ scale: variant === "link" ? 0.98 : 0.98 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium",
        "transition-all duration-300",
        "relative overflow-hidden",
        "flex items-center justify-center",
        variantClasses[variant],
        className
      )}
      style={buttonStyle}
      {...props}
    >
      {children}
    </MotionButton>
  );
}

// Decorative elements with enhanced animation
export function FeminineDecoration({ className, variant = "default" }: { className?: string, variant?: "default" | "corner" | "subtle" }) {
  const variants = {
    default: (
      <>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3], 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-400/10 blur-3xl"
        />
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute w-56 h-56 -right-20 top-20 rounded-full bg-gradient-to-tr from-pink-300/20 to-purple-300/10 blur-3xl"
        />
      </>
    ),
    corner: (
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-40 h-40 bg-gradient-to-br from-pink-400/10 to-purple-400/5 rounded-full blur-2xl"
      />
    ),
    subtle: (
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        className="absolute inset-0 bg-gradient-to-br from-pink-100/5 to-purple-100/5 rounded-3xl"
      />
    )
  };

  return (
    <div className={cn("absolute pointer-events-none", className)}>
      {variants[variant]}
    </div>
  );
}

// Section with enhanced feminine styling
export function FeminineSection({
  children,
  className,
  decorationVariant = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  decorationVariant?: "default" | "corner" | "subtle" | "none";
}) {
  return (
    <MotionSection
      className={cn(
        "py-16 md:py-24 relative overflow-hidden bg-transparent",
        className
      )}
      {...props}
    >
      {decorationVariant !== "none" && (
        <FeminineDecoration className="-z-10" variant={decorationVariant} />
      )}
      {children}
    </MotionSection>
  );
}

// Testimonial card with enhanced feminine styling
export function FeminineTestimonial({
  quote,
  author,
  role,
  title,
  avatar,
  className,
}: {
  quote: string;
  author: string;
  role?: string;
  title?: string;
  avatar?: string;
  className?: string;
}) {
  // Use title as fallback for role or vice versa
  const displayRole = role || title;
  
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-200/20",
        "relative overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-50/10 before:to-purple-50/5 before:opacity-30 before:-z-10 dark:before:from-pink-950/10 dark:before:to-purple-950/5",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-purple-400/5 rounded-bl-3xl -z-10" />
      
      <div className="mb-4 text-pink-400/80">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11C10 8.17 7.83 6 5 6H4V8H5C6.7 8 8 9.3 8 11V17H14V11H10Z" fill="currentColor" />
          <path d="M20 11C20 8.17 17.83 6 15 6H14V8H15C16.7 8 18 9.3 18 11V17H24V11H20Z" fill="currentColor" />
        </svg>
      </div>
      
      <p className="mb-6 italic text-muted-foreground">{quote}</p>
      
      <div className="flex items-center">
        {avatar ? (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-pink-400/20">
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-400/30 mr-3 flex items-center justify-center text-white font-medium">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{displayRole}</p>
        </div>
      </div>
    </MotionDiv>
  );
}

// New component: FeminineFeature for highlighting features/services
export function FeminineFeature({
  icon,
  title,
  description,
  className,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-start p-6",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100/30 to-purple-100/20 dark:from-pink-900/20 dark:to-purple-900/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </MotionDiv>
  );
}

// New component: FeminineQuote for highlighted quotes
export function FeminineQuote({
  children,
  author,
  className,
}: {
  children: ReactNode;
  author?: string;
  className?: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative px-8 py-6 my-8",
        "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-pink-400 before:to-purple-400 before:rounded-full",
        "after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-1 after:bg-gradient-to-b after:from-purple-400 after:to-pink-400 after:rounded-full",
        className
      )}
    >
      <p className="italic text-lg text-foreground/90 leading-relaxed">{children}</p>
      {author && (
        <p className="mt-4 text-right text-sm text-muted-foreground">— {author}</p>
      )}
    </MotionDiv>
  );
}

// New component: FeminineDivider for section separation
export function FeminineDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px w-full my-12", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-200/30 dark:via-pink-800/20 to-transparent" />
        <div className="absolute">
          <Heart className="h-4 w-4 text-pink-400/40" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

// New component: FeminineGallery for image displays
export function FeminineGallery({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}
    >
      {images.map((image, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative overflow-hidden rounded-xl aspect-square"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white p-4 font-medium">{image.alt}</p>
          </div>
        </MotionDiv>
      ))}
    </MotionDiv>
  );
}

// New component: FeminineTag for labels and categories
export function FeminineTag({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <MotionSpan
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "bg-pink-100/80 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300",
        "border border-pink-200/50 dark:border-pink-800/30",
        className
      )}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </MotionSpan>
  );
}

// New component: FeminineAccordion for FAQ or collapsible content
export function FeminineAccordion({
  title,
  children,
  defaultOpen = false,
  className,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={cn("border-b border-pink-100/20 dark:border-pink-900/20 py-4", className)}>
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

// New component: GlassmorphismContainer for enhanced glassmorphism effects
export function GlassmorphismContainer({
  children,
  className,
  intensity = "medium",
  hoverEffect = false,
  borderGlow = false,
  style,
  ...props
}: {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  hoverEffect?: boolean;
  borderGlow?: boolean;
  style?: React.CSSProperties;
}) {
  const intensityClasses = {
    light: "bg-white/5 backdrop-blur-sm border-white/10",
    medium: "bg-white/10 backdrop-blur-md border-white/20",
    heavy: "bg-white/15 backdrop-blur-lg border-white/30",
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={cn(
        "rounded-xl border relative overflow-hidden",
        intensityClasses[intensity],
        borderGlow && "after:content-[''] after:absolute after:inset-0 after:rounded-xl after:border after:border-pink-300/30 after:blur-[1px] after:z-[-1]",
        "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
        className
      )}
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        ...style
      }}
      {...props}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/10 to-purple-100/5 dark:from-pink-500/5 dark:to-purple-500/5 opacity-30 pointer-events-none" />
      
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </MotionDiv>
  );
}
