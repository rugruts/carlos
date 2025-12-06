import React from 'react';
import { motion } from 'framer-motion';
import { dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StripeCTAProps {
  title: string;
  description?: string;
  actions: React.ReactNode;
  variant?: 'default' | 'gradient';
}

const StripeCTA: React.FC<StripeCTAProps> = ({
  title,
  description,
  actions,
  variant = 'default',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variantClasses = {
    default: 'bg-glass border-t border-b border-glass-border',
    gradient:
      'bg-gradient-to-r from-toxic-faint via-transparent to-toxic-faint border-t border-b border-toxic-subtle',
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: dur.md, ease: ease.out }}
      className={`py-16 ${variantClasses[variant]}`}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="mb-4">{title}</h2>

          {/* Description */}
          {description && (
            <p className="text-lg text-dsMuted mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center">{actions}</div>
        </div>
      </div>
    </motion.div>
  );
};

StripeCTA.displayName = 'StripeCTA';

export default StripeCTA;

