'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoBoxProps {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: 'square' | '16/9' | '4/3';
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoBox({
  src,
  poster,
  title,
  subtitle,
  className,
  aspectRatio = '16/9',
  autoPlay = false,
  loop = true,
  muted = true,
}: VideoBoxProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectRatioClasses = {
    'square': 'aspect-square',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={cn("relative group overflow-hidden rounded-xl", className)}>
      {/* Gradient overlay for better control visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={cn(
          "w-full h-full object-cover transform-gpu",
          aspectRatioClasses[aspectRatio]
        )}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Video controls */}
      <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center z-20">
        {/* Play/Pause button */}
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>

        {/* Info text */}
        <div className="flex-1 mx-4">
          {title && <p className="text-white font-medium text-sm truncate">{title}</p>}
          {subtitle && <p className="text-white/70 text-xs truncate">{subtitle}</p>}
        </div>

        {/* Mute/Unmute button */}
        <button 
          onClick={toggleMute}
          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[14px] -z-10 opacity-75 group-hover:opacity-100 transition duration-500"></div>
    </div>
  );
}
