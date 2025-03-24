'use client';

import { FeminineButton, FeminineHeading, FeminineParagraph, FeminineQuote, FeminineSection } from "@/components/ui/feminine-theme";
import { GlassmorphismContainer } from "@/components/ui/feminine-theme";
import { Calendar } from 'lucide-react';

export const ContactSection = () => {
  return (
    <FeminineSection className="bg-transparent dark:bg-transparent" decorationVariant="default">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeminineSection>
  );
};
