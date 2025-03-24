'use client';

import { FeminineDivider } from "@/components/ui/feminine-theme";
import { FeminineFooter } from "@/components/ui/feminine-footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ForHerHimSection } from "@/components/sections/ForHerHimSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SessionOfferingsSection } from "@/components/sections/SessionOfferingsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-transparent relative z-10">
      <HeroSection />
      
      <FeminineDivider />
      
      <MissionSection />
      
      <FeminineDivider />
      
      <AboutSection />
      
      <FeminineDivider />
      
      <ServicesSection />
      
      <FeminineDivider />
      
      <ForHerHimSection />
      
      <FeminineDivider />
      
      <TestimonialsSection />
      
      <FeminineDivider />
      
      <SessionOfferingsSection />
      
      <FeminineDivider />
      
      <FAQSection />
      
      <FeminineDivider />
      
      <ContactSection />
      
      <FeminineFooter />
    </main>
  );
};

export default Home;
