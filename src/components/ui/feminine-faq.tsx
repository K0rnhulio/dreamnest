import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen = false, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-pink-100 dark:border-pink-800/30 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-medium focus:outline-none"
      >
        <span className="text-lg">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-pink-400 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <div className="prose prose-pink dark:prose-invert max-w-none">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
};

interface FeminineFAQProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  className?: string;
}

export function FeminineFAQ({ items, className }: FeminineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "rounded-xl p-6 bg-white/80 backdrop-blur-sm",
        "border border-pink-100/30 dark:border-pink-800/20",
        "shadow-sm",
        "relative overflow-hidden",
        className
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.9))'
      }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-purple-200/10 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200/20 to-purple-200/10 rounded-tr-full -z-10" />
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </MotionDiv>
  );
}
