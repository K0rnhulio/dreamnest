'use client';

import { FeminineButton, FeminineCard, FeminineHeading, FeminineParagraph, FeminineSection } from "@/components/ui/feminine-theme";
import { Sparkles } from 'lucide-react';

export const SessionOfferingsSection = () => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="corner">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FeminineHeading size="lg" className="mb-6">Session Offerings</FeminineHeading>
          <FeminineParagraph>
            Choose the journey that resonates with your current needs and desires. 
            All packages include personalized support and resources to deepen your transformation.
          </FeminineParagraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeminineCard variant="outlined" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-1 bg-white/90 dark:bg-gray-900/90" />
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Single Session</h3>
              <div className="text-3xl font-bold mb-2">$150</div>
              <p className="text-sm text-muted-foreground">90-minute deep dive</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Personalized session focused on your specific needs</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Follow-up email with key insights and practices</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">One week of voice message support</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Access to digital resources library</span>
              </li>
            </ul>
            
            <FeminineButton variant="outline" className="w-full">Book Now</FeminineButton>
          </FeminineCard>
          
          <FeminineCard variant="outlined" className="relative overflow-hidden border-pink-300/30">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/90 dark:bg-gray-900/90 rounded-full blur-xl" />
            <div className="absolute top-0 right-0 w-full h-1 bg-white/90 dark:bg-gray-900/90" />
            
            <div className="absolute top-0 left-0 w-full h-1 bg-white/90 dark:bg-gray-900/90" />
            
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 text-white text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </div>
            
            <div className="text-center mb-6 mt-4">
              <h3 className="text-xl font-semibold mb-2">Transformation Package</h3>
              <div className="text-3xl font-bold mb-2">$550</div>
              <p className="text-sm text-muted-foreground">4 sessions over 2 months</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Four 90-minute coaching sessions</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Personalized action plan and practices</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Unlimited voice/text support between sessions</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Complimentary guided meditation recordings</span>
              </li>
            </ul>
            
            <FeminineButton className="w-full">Book Now</FeminineButton>
          </FeminineCard>
          
          <FeminineCard variant="outlined" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-1 bg-white/90 dark:bg-gray-900/90" />
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Deep Immersion</h3>
              <div className="text-3xl font-bold mb-2">$1,200</div>
              <p className="text-sm text-muted-foreground">3-month journey</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Eight 90-minute coaching sessions</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Two emergency/celebration calls</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">Comprehensive resource library access</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                <span className="text-sm">VIP access to group workshops</span>
              </li>
            </ul>
            
            <FeminineButton variant="outline" className="w-full">Book Now</FeminineButton>
          </FeminineCard>
        </div>
        
        <div className="mt-12 text-center">
          <FeminineParagraph className="text-sm italic max-w-2xl mx-auto">
            All sessions are available virtually or in-person in Bali. Payment plans are available for 
            packages. If you're drawn to this work but have financial constraints, please inquire about 
            sliding scale options.
          </FeminineParagraph>
        </div>
      </div>
    </FeminineSection>
  );
};
