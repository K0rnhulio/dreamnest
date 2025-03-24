'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  FeminineAccordion,
  FeminineButton, 
  FeminineCard, 
  FeminineDivider,
  FeminineFeature,
  FeminineGallery,
  FeminineHeading, 
  FeminineParagraph, 
  FeminineSection, 
  FeminineTag,
  FeminineTestimonial,
  FeminineQuote,
  GlassmorphismContainer
} from "@/components/ui/feminine-theme";
import { FeminineFAQ } from "@/components/ui/feminine-faq";
import { 
  ArrowRight, 
  Calendar, 
  Feather, 
  Flower, 
  Gem, 
  Heart, 
  Shield, 
  Sparkles, 
  Star, 
  Users, 
  Wind, 
  Zap 
} from 'lucide-react';
import { 
  MotionDiv, 
  MotionH1, 
  MotionP, 
  MotionSection,
  MotionSpan
} from '@/components/ui/motion-wrapper';
import { AboutMe } from '@/components/ui/about-me';
import { AppointmentBookingForm } from '@/components/ui/appointment-booking-form';
import { VideoBox } from '@/components/ui/video-box';
import '@/styles/animations.css';

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

const Home = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote: "Working with Lena transformed my relationship with intimacy. I've never felt more confident and empowered.",
      author: "Sarah J.",
      title: "Client",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The personalized approach helped me overcome barriers I'd struggled with for years. Truly life-changing guidance.",
      author: "Michael R.",
      title: "Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "I learned to embrace my authentic self and communicate my needs effectively. Every session was enlightening.",
      author: "Priya T.",
      title: "Client",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Modern background with subtle elements */}
        <div className="absolute inset-0 bg-white dark:bg-gray-950 z-0">
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
            
            <div className="md:w-1/2 relative">
              {/* Modern video treatment */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 mix-blend-overlay z-10" data-component-name="Home"></div>
                <VideoBox 
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
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

      {/* About Me Section */}
      <AboutMe 
        videoSrc="https://static.videezy.com/system/resources/previews/000/005/529/original/Reaviling_Sjusj%C3%B8en_smaller.mp4"
        videoPoster="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop"
        title="About Me"
        subtitle="Sexual Wellness Coach"
        description="I'm a certified sexual wellness coach dedicated to helping individuals and couples embrace their authentic selves. With a compassionate approach and extensive training, I create a safe space for exploration and growth in all aspects of sexual wellbeing and personal freedom."
        personalInfo={{
          name: "Dr. Jordan Taylor",
          location: "New York, NY",
          experience: "10+ years",
          specialties: ["LGBTQ+ Affirming", "Trauma-Informed", "Sex-Positive Approach"]
        }}
      />

      {/* Mission Section */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="subtle">
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
                  src="/images/mission.jpg" 
                  alt="My mission" 
                  width={600} 
                  height={400}
                  className="relative rounded-xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </FeminineSection>
      
      <FeminineDivider />
      
      {/* About Section */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="corner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5 relative order-2 md:order-1">
              <div className="absolute -z-10 inset-0 rounded-full bg-white/90 dark:bg-gray-900/90 blur-xl transform rotate-3"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-pink-200/20 shadow-xl aspect-square">
                <img 
                  src="/images/about-me.jpg" 
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
            
            <div className="md:w-3/5 order-1 md:order-2">
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
      
      <FeminineDivider />
      
      {/* Services Section */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FeminineHeading size="lg" className="mb-6">How We Can Work Together</FeminineHeading>
            <FeminineParagraph>
              I offer a variety of personalized services designed to meet you exactly where you are 
              on your journey. Whether you're seeking one-on-one guidance, transformative breathwork, 
              or community connection, there's a perfect pathway for you at DreamNest.
            </FeminineParagraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeminineCard variant="soft" className="flex flex-col h-full">
              <div className="mb-6">
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
                <h3 className="text-xl font-semibold mb-2">1:1 Coaching</h3>
                <p className="text-muted-foreground mb-4">
                  Personalized guidance tailored to your unique journey, helping you reconnect with your 
                  authentic desires and develop practical tools for transformation.
                </p>
              </div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">90-minute deep dive sessions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Personalized action plans</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Voice/text support between sessions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Custom resources and practices</span>
                </li>
              </ul>
              
              <FeminineButton className="mt-auto">Learn More</FeminineButton>
            </FeminineCard>
            
            <FeminineCard variant="soft" className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ 
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(168, 85, 247, 0.7))',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 15px rgba(219, 39, 119, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <div className="flex items-center justify-center w-full h-full">
                    <Wind className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Breathwork Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  Harness the power of your breath to release emotional blockages, reduce stress, and 
                  connect more deeply with your body's wisdom.
                </p>
              </div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">60-minute guided sessions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Techniques for emotional release</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Integration support</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Recorded practices for home use</span>
                </li>
              </ul>
              
              <FeminineButton className="mt-auto">Learn More</FeminineButton>
            </FeminineCard>
            
            <FeminineCard variant="soft" className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ 
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(168, 85, 247, 0.7))',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 15px rgba(219, 39, 119, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <div className="flex items-center justify-center w-full h-full">
                    <Flower className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Group Workshops</h3>
                <p className="text-muted-foreground mb-4">
                  Join a supportive community of like-minded individuals for transformative experiences 
                  focused on specific themes of personal growth and expression.
                </p>
              </div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Monthly themed gatherings</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Interactive exercises</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                  <span className="text-sm">Virtual and in-person options</span>
                </li>
              </ul>
              
              <FeminineButton className="mt-auto">Learn More</FeminineButton>
            </FeminineCard>
          </div>
        </div>
      </FeminineSection>
      
      {/* For Her/Him Section */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="corner">
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
                  <Wind className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              <FeminineButton variant="soft">Begin Your Journey</FeminineButton>
            </FeminineCard>
          </div>
        </div>
      </FeminineSection>
      
      <FeminineDivider />
      
      {/* Testimonials Section */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FeminineHeading size="lg" className="mb-6">Client Experiences</FeminineHeading>
            <FeminineParagraph>
              The true measure of my work is in the transformations my clients experience. 
              Here are some of their stories and reflections on our journey together.
            </FeminineParagraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassmorphismContainer intensity="light" hoverEffect={true} className="p-1" style={{ transform: 'translate3d(0, 0, 0)' }}>
              <FeminineTestimonial
                quote="Working with Lena has been truly transformative. She created a safe space for me to explore parts of myself I had long suppressed. I've never felt more alive and connected to my desires."
                author="Sarah K."
                role="Creative Director, 34"
                className="h-full"
              />
            </GlassmorphismContainer>
            
            <GlassmorphismContainer intensity="light" hoverEffect={true} className="p-1" style={{ transform: 'translate3d(0, 0, 0)' }}>
              <FeminineTestimonial
                quote="As a man, I was hesitant to seek coaching around intimacy and expression. Lena's approach is refreshingly balanced and judgment-free. I've gained tools that have transformed not just my relationships, but my entire outlook on life."
                author="Michael T."
                role="Entrepreneur, 41"
                className="h-full"
              />
            </GlassmorphismContainer>
            
            <GlassmorphismContainer intensity="light" hoverEffect={true} className="p-1" style={{ transform: 'translate3d(0, 0, 0)' }}>
              <FeminineTestimonial
                quote="The breathwork sessions with Lena helped me release emotional blocks I didn't even know I was carrying. I feel lighter, more present, and more in tune with my body's wisdom."
                author="Amelia J."
                role="Yoga Teacher, 29"
                className="h-full"
              />
            </GlassmorphismContainer>
          </div>
          
          <div className="mt-16 text-center">
            <FeminineButton variant="outline" className="gap-2">
              Read More Stories <ArrowRight className="h-4 w-4" />
            </FeminineButton>
          </div>
        </div>
      </FeminineSection>
      
      <FeminineDivider />
      
      {/* Session Offerings */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="corner">
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
      
      <FeminineDivider />
      
      {/* FAQ Section */}
      <FeminineSection className="py-20 bg-white dark:bg-gray-950" decorationVariant="default">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <FeminineHeading size="lg" className="mb-4">Frequently Asked Questions</FeminineHeading>
            <FeminineParagraph className="max-w-2xl mx-auto">
              Here are answers to some common questions about my coaching services and approach.
              If you don't find what you're looking for, feel free to reach out directly.
            </FeminineParagraph>
          </div>

          <div className="max-w-3xl mx-auto">
            <FeminineFAQ 
              items={[
                {
                  question: "How do coaching sessions typically work?",
                  answer: "Our coaching journey begins with a complimentary consultation to ensure we're a good fit. Regular sessions are typically 60 minutes, held via video call or in person. I provide a safe, confidential space for exploration, with practical tools and gentle accountability to support your growth between sessions."
                },
                {
                  question: "How many sessions will I need?",
                  answer: "Every journey is unique. Some clients experience meaningful shifts in just a few sessions, while others benefit from longer-term support. Most clients find that 8-12 sessions provide substantial transformation. We'll regularly assess your progress and adjust our approach as needed."
                },
                {
                  question: "What's the difference between coaching and therapy?",
                  answer: "While therapy often focuses on healing past wounds and treating mental health conditions, coaching is present and future-oriented, focusing on personal growth, goal achievement, and creating positive change. As a coach, I don't diagnose or treat psychological disorders but can work alongside therapeutic support if you're currently seeing a therapist."
                },
                {
                  question: "Do you offer group programs or workshops?",
                  answer: "Yes! I regularly host group workshops and programs on topics like authentic communication, mindful relationships, and feminine embodiment. These offer a more affordable option and the power of community learning. Check my 'Events' page or join my newsletter to stay informed about upcoming opportunities."
                },
                {
                  question: "What is your cancellation policy?",
                  answer: "I understand that life happens. I request 24 hours' notice for cancellations or rescheduling. Sessions canceled with less notice may be charged the full fee, except in cases of emergency. This policy respects both our time commitments."
                }
              ]}
              className="bg-white/90 dark:bg-gray-900/90"
            />
          </div>
        </div>
      </FeminineSection>

      {/* Contact Section */}
      <FeminineSection className="bg-white dark:bg-gray-950" decorationVariant="default">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FeminineHeading size="lg" className="mb-6">Begin Your Journey</FeminineHeading>
              <FeminineParagraph>
                Ready to take the first step toward a more authentic, expressed, and joyful life? 
                Reach out to schedule a complimentary 30-minute discovery call where we can explore 
                how we might work together.
              </FeminineParagraph>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <GlassmorphismContainer intensity="medium" borderGlow={true} className="p-1" style={{ transform: 'translate3d(0, 0, 0)' }}>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-pink-400" strokeWidth={1.5} />
                      Book Your Discovery Call
                    </h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Your Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 rounded-lg border border-pink-200/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400/30"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 rounded-lg border border-pink-200/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400/30"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Your Message</label>
                        <textarea 
                          className="w-full px-4 py-2 rounded-lg border border-pink-200/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400/30 min-h-[120px]"
                          placeholder="Share a bit about what brings you here..."
                        ></textarea>
                      </div>
                      
                      <FeminineButton className="w-full">Send Message</FeminineButton>
                    </form>
                  </div>
                </GlassmorphismContainer>
              </div>
              
              <div>
                <GlassmorphismContainer intensity="light" className="p-6 mb-8" style={{ transform: 'translate3d(0, 0, 0)' }}>
                  <FeminineQuote author="Lena">
                    The journey of a thousand miles begins with a single step. Your courage to reach out 
                    is already a beautiful act of self-love.
                  </FeminineQuote>
                </GlassmorphismContainer>
                
                <div className="space-y-6 mt-8">
                  <GlassmorphismContainer intensity="light" className="p-4" style={{ transform: 'translate3d(0, 0, 0)' }}>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Connect With Me</h4>
                      <div className="flex items-center space-x-4">
                        <a href="#" className="p-2 rounded-full bg-pink-100/10 hover:bg-pink-100/20 transition-colors">
                          <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-pink-100/10 hover:bg-pink-100/20 transition-colors">
                          <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-pink-100/10 hover:bg-pink-100/20 transition-colors">
                          <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </GlassmorphismContainer>
                  
                  <GlassmorphismContainer intensity="light" className="p-4" style={{ transform: 'translate3d(0, 0, 0)' }}>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Connect With Me</h4>
                      <div className="flex items-center space-x-4">
                        <a href="#" className="p-2 rounded-full bg-pink-100/10 hover:bg-pink-100/20 transition-colors">
                          <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-pink-100/10 hover:bg-pink-100/20 transition-colors">
                          <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-pink-100/10 hover:bg-pink-100/20 transition-colors">
                          <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </GlassmorphismContainer>
                  
                  <GlassmorphismContainer intensity="light" className="p-4" style={{ transform: 'translate3d(0, 0, 0)' }}>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Location</h4>
                      <p className="text-muted-foreground">
                        Based in Bali, Indonesia<br />
                        Available for virtual sessions worldwide
                      </p>
                    </div>
                  </GlassmorphismContainer>
                  
                  <GlassmorphismContainer intensity="light" className="p-4" style={{ transform: 'translate3d(0, 0, 0)' }}>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Email</h4>
                      <p className="text-muted-foreground">hello@dreamnest.com</p>
                    </div>
                  </GlassmorphismContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeminineSection>
      
      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground"> 2025 DreamNest. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Made with <Heart className="inline-block h-3 w-3 text-pink-400" fill="currentColor" /> by DreamNest
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
