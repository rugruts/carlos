import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [])
  );
  const triggerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentId: string) => {
    const currentIndex = items.findIndex((item) => item.id === currentId);
    let targetIndex = currentIndex;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        targetIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowUp':
        e.preventDefault();
        targetIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'Home':
        e.preventDefault();
        targetIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        targetIndex = items.length - 1;
        break;
      default:
        return;
    }

    const targetId = items[targetIndex].id;
    triggerRefs.current.get(targetId)?.focus();
  };

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="card-hover overflow-hidden">
            {/* Trigger Button */}
            <button
              id={triggerId}
              ref={(el) => {
                if (el) {
                  triggerRefs.current.set(item.id, el);
                } else {
                  triggerRefs.current.delete(item.id);
                }
              }}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-card/50 transition-colors"
            >
              <span className="font-bold text-lg">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-toxic flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={
                    shouldReduceMotion ? undefined : { height: 0, opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { height: 'auto', opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion ? undefined : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: dur.sm, ease: ease.out }}
                  style={{ overflow: 'hidden' }}
                  className="px-6"
                >
                  <div className="pb-6 text-dsMuted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
