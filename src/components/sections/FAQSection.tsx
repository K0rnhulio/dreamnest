'use client';

import { FeminineHeading, FeminineParagraph, FeminineSection } from "@/components/ui/feminine-theme";
import { FeminineFAQ } from "@/components/ui/feminine-faq";

export const FAQSection = () => {
  const faqItems = [
    {
      question: "What can I expect in our first session?",
      answer: "Our first session is about creating a safe container and getting clear on your desires and challenges. We'll discuss your history, current situation, and goals. I'll share my approach and how we might work together. You'll leave with initial insights and practices to begin your journey. Most importantly, you'll get a feel for my style and whether we're a good fit."
    },
    {
      question: "How many sessions will I need?",
      answer: "Transformation is a unique journey for each person. Some clients experience significant shifts after just 1-3 sessions, while deeper patterns may take longer to rewire. I recommend starting with a single session to experience my approach, then considering a package if it resonates. Most clients work with me for 2-6 months to create lasting change, though our relationship may continue in different forms as you evolve."
    },
    {
      question: "Is this therapy?",
      answer: "No, coaching is distinct from therapy. While therapy often focuses on healing past wounds and managing mental health conditions, coaching focuses on present awareness and future creation. As a coach, I help you clarify desires, overcome obstacles, and create actionable plans for growth. That said, our work can be deeply healing and transformative. If I believe therapy would better serve you, I'll provide referrals to trusted therapists."
    },
    {
      question: "Do you work with couples?",
      answer: "Yes! I love supporting couples in deepening intimacy, improving communication, and rekindling desire. Couples work can be particularly powerful as both partners learn and grow together. I offer both joint sessions and individual sessions within the couples framework, depending on your specific needs and goals."
    },
    {
      question: "Do you offer group programs or workshops?",
      answer: "Yes! I regularly host group workshops and programs on topics like authentic communication, mindful relationships, and feminine embodiment. These offer a more affordable option and the power of community learning. Check my 'Events' page or join my newsletter to stay informed about upcoming opportunities."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I understand that life happens. I request 24 hours' notice for cancellations or rescheduling. Sessions canceled with less notice may be charged the full fee, except in cases of emergency. This policy respects both our time commitments."
    }
  ];

  return (
    <FeminineSection className="py-20 bg-white dark:bg-gray-950" decorationVariant="default">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <FeminineHeading size="lg" className="mb-4">Frequently Asked Questions</FeminineHeading>
          <FeminineParagraph className="max-w-2xl mx-auto">
            Here are answers to some common questions about my coaching services and approach.
            If you don't find what you're looking for, feel free to reach out directly.
          </FeminineParagraph>
        </div>
        
        <FeminineFAQ
          items={faqItems}
          className="bg-white/90 dark:bg-gray-900/90"
        />
      </div>
    </FeminineSection>
  );
};
