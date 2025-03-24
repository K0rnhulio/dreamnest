'use client';

import { FeminineButton, FeminineCard, FeminineParagraph, FeminineSection } from "@/components/ui/feminine-theme";
import { Heart } from 'lucide-react';

export const ForHerHimSection = () => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="corner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeminineCard variant="glass" className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/90 dark:bg-gray-900/90 rounded-bl-full -z-10" />
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">For Her</h3>
              <FeminineParagraph>
                As women, we often carry the weight of societal expectations, dimming our light to fit into 
                prescribed roles. My work with women focuses on reclaiming your innate power, embracing your 
                sensuality, and honoring your cyclical nature.
              </FeminineParagraph>
              
              <FeminineParagraph className="mt-4">
                Through our work together, you'll learn to listen to your body's wisdom, set healthy 
                boundaries, and express your desires with confidence. You'll reconnect with your feminine 
                essence while integrating your masculine strengths for true balance and empowerment.
              </FeminineParagraph>
            </div>
            
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ 
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(168, 85, 247, 0.7))',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 15px rgba(219, 39, 119, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="flex items-center justify-center w-full h-full">
                <Heart className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            
            <FeminineButton variant="soft">Discover Your Path</FeminineButton>
          </FeminineCard>
          
          <FeminineCard variant="glass" className="p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/90 dark:bg-gray-900/90 rounded-br-full -z-10" />
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">For Him</h3>
              <FeminineParagraph>
                Men today face unique challenges as traditional definitions of masculinity evolve. My work 
                with men centers on developing emotional intelligence, authentic expression, and conscious 
                relationship skills.
              </FeminineParagraph>
              
              <FeminineParagraph className="mt-4">
                Together, we'll explore how to balance strength with vulnerability, passion with presence, 
                and independence with deep connection. You'll learn to embody a new paradigm of masculinity 
                that honors both your power and your heart.
              </FeminineParagraph>
            </div>
            
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ 
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(168, 85, 247, 0.7))',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 15px rgba(219, 39, 119, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="flex items-center justify-center w-full h-full">
                <Heart className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            
            <FeminineButton variant="soft">Discover Your Path</FeminineButton>
          </FeminineCard>
        </div>
      </div>
    </FeminineSection>
  );
};
