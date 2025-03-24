'use client';

import { ArrowRight } from 'lucide-react';
import { FeminineButton, FeminineHeading, FeminineParagraph, FeminineSection, FeminineTestimonial } from "@/components/ui/feminine-theme";
import { GlassmorphismContainer } from "@/components/ui/feminine-theme";

interface TestimonialType {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialType[];
}

export const TestimonialsSection = ({ 
  testimonials = [
    {
      quote: "Working with Lena has been truly transformative. She created a safe space for me to explore parts of myself I had long suppressed. I've never felt more alive and connected to my desires.",
      author: "Sarah K.",
      role: "Creative Director, 34"
    },
    {
      quote: "As a man, I was hesitant to seek coaching around intimacy and expression. Lena's approach is refreshingly balanced and judgment-free. I've gained tools that have transformed not just my relationships, but my entire outlook on life.",
      author: "Michael T.",
      role: "Entrepreneur, 41"
    },
    {
      quote: "The breathwork sessions with Lena helped me release emotional blocks I didn't even know I was carrying. I feel lighter, more present, and more in tune with my body's wisdom.",
      author: "Amelia J.",
      role: "Yoga Teacher, 29"
    }
  ]
}: TestimonialsSectionProps) => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FeminineHeading size="lg" className="mb-6">Client Experiences</FeminineHeading>
          <FeminineParagraph>
            The true measure of my work is in the transformations my clients experience. 
            Here are some of their stories and reflections on our journey together.
          </FeminineParagraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassmorphismContainer 
              key={index} 
              intensity="light" 
              hoverEffect={true} 
              className="p-1" 
              style={{ transform: 'translate3d(0, 0, 0)' }}
            >
              <FeminineTestimonial
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                className="h-full"
              />
            </GlassmorphismContainer>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <FeminineButton variant="outline" className="gap-2">
            Read More Stories <ArrowRight className="h-4 w-4" />
          </FeminineButton>
        </div>
      </div>
    </FeminineSection>
  );
};
