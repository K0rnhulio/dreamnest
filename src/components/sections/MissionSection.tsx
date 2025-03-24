'use client';

import Image from 'next/image';
import { FeminineHeading, FeminineParagraph, FeminineSection, FeminineTag } from "@/components/ui/feminine-theme";
import { Feather, Shield, Sparkles } from 'lucide-react';

export const MissionSection = () => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="subtle">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <FeminineHeading size="lg" className="mb-4">
              My Mission
            </FeminineHeading>
            <FeminineParagraph className="mb-6">
              I believe that sexual wellness is an essential part of overall health and happiness. 
              My mission is to guide you on a journey of self-discovery and empowerment, helping you 
              embrace your authentic desires and create fulfilling intimate relationships.
            </FeminineParagraph>
            <FeminineParagraph className="mb-8">
              Through personalized coaching, education, and mindfulness practices, I provide a safe, 
              non-judgmental space where you can explore, heal, and grow. Whether you're seeking to 
              overcome challenges, deepen connection, or simply expand your understanding of yourself, 
              I'm here to support you every step of the way.
            </FeminineParagraph>
            <div className="flex flex-wrap gap-4">
              <FeminineTag icon={<Shield size={14} />}>Confidential</FeminineTag>
              <FeminineTag icon={<Sparkles size={14} />}>Transformative</FeminineTag>
              <FeminineTag icon={<Feather size={14} />}>Gentle Approach</FeminineTag>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-2xl blur-md"></div>
              <Image 
                src="https://dreamnest.b-cdn.net/Coaching-Breathwork.jpg" 
                alt="Breathwork coaching session" 
                width={600} 
                height={400}
                className="relative rounded-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </FeminineSection>
  );
};
