'use client';

import { FeminineButton } from "@/components/ui/feminine-theme";
import { VideoBox } from "@/components/ui/video-box";

const services = [
  {
    title: "Personal Growth",
    description: "Discover your authentic self and unlock your full potential through personalized coaching.",
    icon: <Flower className="h-8 w-8 text-white" strokeWidth={1.5} />
  },
  {
    title: "Relationship Coaching",
    description: "Learn to create and nurture deep, meaningful connections in all your relationships.",
    icon: <Heart className="h-8 w-8 text-white" strokeWidth={1.5} />
  },
  {
    title: "Breathwork Sessions",
    description: "Release emotional blocks and connect more deeply with your body's wisdom through guided breathwork.",
    icon: <Wind className="h-8 w-8 text-white" strokeWidth={1.5} />
  },
];

import { Flower, Heart, Wind } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Modern background with subtle elements */}
      <div className="absolute inset-0 bg-transparent dark:bg-transparent z-0">
        {/* Clean modern background */}
        <div className="absolute inset-0" style={{ transform: 'translate3d(0, 0, 0)' }}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'translate3d(0, 0, 0)'
          }} />
          
          {/* Modern accent elements */}
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full opacity-[0.04] bg-pink-300 blur-[80px]" 
                style={{ transform: 'translate3d(0, 0, 0)' }} />
          <div className="absolute bottom-40 right-[15%] w-80 h-80 rounded-full opacity-[0.04] bg-purple-300 blur-[100px]" 
                style={{ transform: 'translate3d(0, 0, 0)' }} />
                
          {/* Minimal decorative elements */}
          <div className="absolute top-[15%] right-[20%] w-px h-40 bg-gradient-to-b from-transparent via-pink-200/20 to-transparent"
                style={{ transform: 'translate3d(0, 0, 0)' }} />
          <div className="absolute bottom-[20%] left-[30%] w-px h-40 bg-gradient-to-b from-transparent via-purple-200/20 to-transparent"
                style={{ transform: 'translate3d(0, 0, 0)' }} />
                
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(#a855f7 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'translate3d(0, 0, 0)'
          }} />
        </div>
        
        {/* Modern glass panels */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-pink-100/5 to-purple-100/3 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2" 
          style={{ 
            backdropFilter: 'blur(4px)', 
            WebkitBackdropFilter: 'blur(4px)',
            transform: 'translate3d(0, 0, 0) translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-100/5 to-pink-100/3 backdrop-blur-sm transform translate-x-1/2 translate-y-1/2" 
          style={{ 
            backdropFilter: 'blur(4px)', 
            WebkitBackdropFilter: 'blur(4px)',
            transform: 'translate3d(0, 0, 0) translate(50%, 50%)'
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 tracking-tight">
              Discover Your <br />Inner Harmony
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Personalized coaching to help you navigate life's challenges with confidence and grace.
            </p>
            
            {/* Mobile video box - visible only on small screens */}
            <div className="md:hidden w-full mb-8">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 mix-blend-overlay z-10"></div>
                <VideoBox 
                  src="https://dreamnest.b-cdn.net/DreamNest-Lena.mp4"
                  poster="/images/hero.jpg"
                  title="Transformative coaching experience"
                  aspectRatio="16/9"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  className="w-full h-auto"
                />
                
                {/* Modern decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
                
                {/* Floating accent */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-3 shadow-lg z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    <span className="text-sm font-medium">Now Booking</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <FeminineButton className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 rounded-full px-8 py-3 text-lg">
                Book a Session
              </FeminineButton>
              <FeminineButton variant="outline" className="border-pink-200 dark:border-pink-800 text-pink-500 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/30 rounded-full px-8 py-3 text-lg">
                Learn More
              </FeminineButton>
            </div>
            
            {/* Modern trust indicators */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-8">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-pink-500">500+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</span>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-purple-500">5.0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Rating</span>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-pink-500">8+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative hidden md:block">
            {/* Modern video treatment - hidden on mobile, visible on medium screens and up */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 mix-blend-overlay z-10"></div>
              <VideoBox 
                src="https://dreamnest.b-cdn.net/DreamNest-Lena.mp4"
                poster="/images/hero.jpg"
                title="Transformative coaching experience"
                aspectRatio="16/9"
                autoPlay={true}
                loop={true}
                muted={true}
                className="w-full h-auto"
              />
              
              {/* Modern decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              
              {/* Floating accent */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-3 shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm font-medium">Now Booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern service highlights */}
        <div id="Home" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-16 mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="rounded-xl border border-white/10 relative overflow-hidden backdrop-blur-sm shadow-lg p-1"
              style={{
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              {/* Subtle gradient border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/3 dark:to-purple-500/3 opacity-30"></div>
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="relative z-10">
                <div 
                  className="rounded-xl bg-white/5 dark:bg-gray-950/5 backdrop-blur-sm relative overflow-hidden text-center p-8 h-full"
                  style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
                    transform: 'translate3d(0, 0, 0)'
                  }}
                >
                  {/* Modern icon style */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(168, 85, 247, 0.7))',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 15px rgba(219, 39, 119, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transform: 'translate3d(0, 0, 0)'
                    }}
                  >
                    <div className="flex items-center justify-center w-full h-full text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Modern typography */}
                  <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                  
                  {/* Subtle accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full mx-auto mt-6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
