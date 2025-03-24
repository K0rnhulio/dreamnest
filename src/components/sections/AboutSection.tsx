'use client';

import { FeminineHeading, FeminineParagraph, FeminineSection, FeminineTag } from "@/components/ui/feminine-theme";
import { Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="corner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 relative order-1 md:order-1">
            <div className="absolute -z-10 inset-0 rounded-full bg-white/90 dark:bg-gray-900/90 blur-xl transform rotate-3"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-pink-200/20 shadow-xl aspect-square">
              <img 
                src="https://dreamnest.b-cdn.net/Lena-Coach.jpg" 
                alt="Lena, Founder of DreamNest"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000";
                }}
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full p-4 shadow-lg border border-pink-200/30">
              <Heart className="h-8 w-8 text-pink-500" fill="currentColor" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="md:w-3/5 order-2 md:order-2">
            <FeminineHeading size="lg" className="mb-6">About Me</FeminineHeading>
            
            <FeminineParagraph className="mb-4">
              Hello, I'm Lena, the heart and soul behind DreamNest. My journey into coaching began after 
              years of feeling disconnected from my own desires and authentic self. Like many, I had 
              internalized society's expectations, leaving little room for my own voice to emerge.
            </FeminineParagraph>
            
            <FeminineParagraph className="mb-4">
              Through my own healing journey, I discovered the transformative power of embracing one's 
              true desires and authentic expression. This personal metamorphosis inspired me to create 
              DreamNest—a sanctuary where others could embark on their own journeys of self-discovery 
              and empowerment.
            </FeminineParagraph>
            
            <FeminineParagraph className="mb-6">
              Today, I bring my expertise in sexual wellness, emotional intelligence, and embodiment 
              practices to guide clients toward a life of fulfillment and joy. My approach is gentle 
              yet powerful, honoring your unique path while providing the tools and support you need 
              to thrive.
            </FeminineParagraph>
            
            <div className="flex flex-wrap gap-3">
              <FeminineTag>Certified Coach</FeminineTag>
              <FeminineTag>Breathwork Facilitator</FeminineTag>
              <FeminineTag>Embodiment Specialist</FeminineTag>
              <FeminineTag>Sexual Wellness Expert</FeminineTag>
            </div>
          </div>
        </div>
      </div>
    </FeminineSection>
  );
};
