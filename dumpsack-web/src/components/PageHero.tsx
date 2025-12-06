import React from 'react';
import { motion } from 'framer-motion';
import { variants, stagger, dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  actions,
  media,
  align = 'left',
  id,
}) => {
  const headingId = id || 'page-hero-heading';
  const isCenter = align === 'center';
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-labelledby={headingId}
    >
      {/* Background Treatment */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient vignette */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(142,255,96,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(142,255,96,0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,122,26,0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div
          className={`grid ${media ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 items-center`}
        >
          {/* Text Content */}
          <div
            className={
              isCenter
                ? 'text-center mx-auto max-w-4xl'
                : 'text-center lg:text-left'
            }
          >
            {/* Title */}
            <motion.h1
              id={headingId}
              initial={shouldReduceMotion ? undefined : 'hidden'}
              animate={shouldReduceMotion ? undefined : 'show'}
              variants={variants.fadeUp(10)}
              className="mb-6"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={shouldReduceMotion ? undefined : 'hidden'}
                animate={shouldReduceMotion ? undefined : 'show'}
                variants={variants.fade}
                transition={{ delay: 0.1, duration: dur.sm, ease: ease.out }}
                className={`text-xl md:text-2xl text-dsMuted mb-8 leading-relaxed ${
                  isCenter ? 'mx-auto max-w-3xl' : 'max-w-2xl mx-auto lg:mx-0'
                }`}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Actions */}
            {actions && (
              <motion.div
                initial={shouldReduceMotion ? undefined : 'hidden'}
                animate={shouldReduceMotion ? undefined : 'show'}
                variants={{
                  hidden: {},
                  show: { transition: stagger.fast },
                }}
                className={`flex flex-col sm:flex-row gap-4 ${
                  isCenter
                    ? 'justify-center'
                    : 'justify-center lg:justify-start'
                }`}
              >
                {actions}
              </motion.div>
            )}
          </div>

          {/* Media */}
          {media && (
            <motion.div
              initial={shouldReduceMotion ? undefined : 'hidden'}
              animate={shouldReduceMotion ? undefined : 'show'}
              variants={variants.grow}
              transition={{ delay: 0.3, duration: dur.md, ease: ease.out }}
              className="hidden lg:block"
            >
              <div className="toxic-ring">{media}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

PageHero.displayName = 'PageHero';

export default PageHero;
