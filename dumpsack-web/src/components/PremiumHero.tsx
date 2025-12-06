import React from 'react';
import { motion } from 'framer-motion';
import { variants, dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PremiumHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  mockupSrc?: string;
  mockupAlt?: string;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({
  kicker,
  title,
  subtitle,
  actions,
  mockupSrc = '/mockups/wallet-hero.svg',
  mockupAlt = 'DumpSack Wallet',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Plasma Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(142,255,96,0.25) 0%, transparent 70%)',
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.25, 0.15],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={shouldReduceMotion ? undefined : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'show'}
            variants={variants.fadeUp(20)}
            transition={{ duration: dur.md, ease: ease.out }}
            className="text-left"
          >
            {/* Kicker */}
            {kicker && (
              <motion.span
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: dur.sm }}
                className="kicker"
              >
                {kicker}
              </motion.span>
            )}

            {/* Title - NOT CAPS */}
            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: dur.md }}
              className="mb-6"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: dur.md }}
                className="text-lg lg:text-xl mb-8 max-w-xl"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Actions */}
            {actions && (
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: dur.md }}
                className="flex flex-wrap gap-4"
              >
                {actions}
              </motion.div>
            )}
          </motion.div>

          {/* Right: Mockup with Floating Animation */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: dur.lg, ease: ease.out }}
            className="relative hidden lg:block"
          >
            {/* Glow Effect Behind Mockup */}
            <div className="absolute inset-0 bg-gradient-radial from-toxic-faint to-transparent opacity-40 blur-3xl" />

            {/* Mockup with Subtle Float */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <img
                src={mockupSrc}
                alt={mockupAlt}
                className="w-full h-auto drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

PremiumHero.displayName = 'PremiumHero';

export default PremiumHero;

