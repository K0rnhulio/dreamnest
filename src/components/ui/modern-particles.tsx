"use client";

import React, { useId, useMemo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type ModernParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  lineWidth?: number;
  lineColor?: string;
  lineOpacity?: number;
  connectDistance?: number;
  children?: React.ReactNode;
};

export function ModernParticles({
  id,
  className,
  background = "transparent",
  minSize = 0.8,
  maxSize = 2,
  speed = 1,
  particleColor = "#ff69b4",
  particleDensity = 80,
  lineWidth = 0.8,
  lineColor,
  lineOpacity = 0.4,
  connectDistance = 150,
  children
}: ModernParticlesProps) {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();
  
  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  // Use the provided line color or default to particle color
  const actualLineColor = lineColor || particleColor;
  
  const options: ISourceOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: actualLineColor,
        distance: connectDistance,
        enable: true,
        opacity: lineOpacity,
        width: lineWidth,
        triangles: {
          enable: false,
          opacity: 0.1
        }
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: speed,
        straight: false,
        trail: {
          enable: false,
          length: 5,
          fillColor: background
        }
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: particleDensity,
        limit: 0
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.3,
          sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: minSize, max: maxSize },
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
          sync: false
        }
      },
    },
    detectRetina: true,
  };
  
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <motion.div 
        animate={controls} 
        initial={{ opacity: 0 }}
        className="absolute inset-0 -z-10"
      >
        {init && (
          <Particles
            id={id || generatedId}
            className="h-full w-full"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        )}
      </motion.div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
