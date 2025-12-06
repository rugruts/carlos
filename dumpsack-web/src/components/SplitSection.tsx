import React from 'react';
import { motion } from 'framer-motion';
import { variants, dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitSectionProps {
  kicker?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  actions?: React.ReactNode;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  kicker,
  title,
  description,
  children,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  actions,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isImageRight = imagePosition === 'right';

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Text Content */}
      <motion.div
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, margin: '-100px' }}
        variants={variants.fadeUp(20)}
        transition={{ duration: dur.md, ease: ease.out }}
        className={`${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Kicker */}
        {kicker && <span className="kicker">{kicker}</span>}

        {/* Title */}
        <h2 className="mb-6">{title}</h2>

        {/* Description */}
        {description && (
          <p className="text-lg mb-6 leading-relaxed">{description}</p>
        )}

        {/* Custom Content */}
        {children && <div className="mb-6">{children}</div>}

        {/* Actions */}
        {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: dur.lg, ease: ease.out }}
        className={`relative ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-toxic-faint to-transparent opacity-30 blur-2xl" />

        {/* Image */}
        <div className="relative z-10">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

SplitSection.displayName = 'SplitSection';

export default SplitSection;

