'use client';

import { FeminineButton, FeminineHeading, FeminineParagraph, FeminineSection } from "@/components/ui/feminine-theme";
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

// Define service type for TypeScript
interface ServiceType {
  title: string;
  description: string;
  primaryImage: string;
  fallbackImage: string;
  features: string[];
}

// Define service data for better maintainability
const services: ServiceType[] = [
  {
    title: "1:1 Coaching",
    description: "Personalized guidance tailored to your unique journey, helping you reconnect with your authentic desires and develop practical tools for transformation.",
    primaryImage: "https://dreamnest.b-cdn.net/Lenacoach.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1000",
    features: [
      "90-minute deep dive sessions",
      "Personalized action plans",
      "Voice/text support between sessions"
    ]
  },
  {
    title: "Breathwork Sessions",
    description: "Harness the power of your breath to release emotional blockages, reduce stress, and connect more deeply with your body's wisdom.",
    primaryImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    fallbackImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    features: [
      "60-minute guided sessions",
      "Techniques for emotional release",
      "Integration support"
    ]
  },
  {
    title: "Group Workshops",
    description: "Join a supportive community of like-minded individuals for transformative experiences focused on specific themes of personal growth and expression.",
    primaryImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000",
    fallbackImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000",
    features: [
      "Monthly themed gatherings",
      "Interactive exercises",
      "Community support"
    ]
  }
];

// Service card component with proper TypeScript props
interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[500px]">
    {/* Full Card Image */}
    <div className="absolute inset-0 w-full h-full">
      <Image 
        src={service.primaryImage} 
        alt={`${service.title} service`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = service.fallbackImage;
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }} // Hardware acceleration
      />
    </div>
    
    {/* Gradient Overlay - using low opacity for better rendering */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"
         style={{ transform: 'translate3d(0, 0, 0)' }}></div>
    
    {/* Card Content */}
    <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 text-white" style={{ height: '45%' }}>
      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
      <p className="text-white/80 mb-4 text-sm">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start text-sm text-white/90">
            <Sparkles className="h-4 w-4 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <FeminineButton 
        className="w-full mt-auto text-lg px-8 py-5"
        variant="default"
      >
        Learn More
      </FeminineButton>
    </div>
  </div>
);

export const ServicesSection = () => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FeminineHeading size="lg" className="mb-6">Services</FeminineHeading>
          <FeminineParagraph>
            I offer a range of personalized services designed to support your unique journey 
            toward authentic expression, deeper connection, and embodied freedom.
          </FeminineParagraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-component-name="ServicesSection">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </FeminineSection>
  );
};
