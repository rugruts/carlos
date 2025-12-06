import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ModernHeroProps {
  title: string;
  subtitle?: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  backgroundImage?: string;
  overlayPattern?: 'dots' | 'grid' | 'waves';
  accentColor?: 'toxic' | 'orange' | 'blue' | 'purple';
}

export default function ModernHero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlayPattern = 'grid',
  accentColor = 'toxic',
}: ModernHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const colorClasses = {
    toxic: {
      gradient: 'from-toxic/10 to-transparent',
      glow: 'rgba(142, 255, 96, 0.3)',
      border: 'rgba(142, 255, 96, 0.2)',
    },
    orange: {
      gradient: 'from-orange/10 to-transparent',
      glow: 'rgba(255, 122, 26, 0.3)',
      border: 'rgba(255, 122, 26, 0.2)',
    },
    blue: {
      gradient: 'from-blue-500/10 to-transparent',
      glow: 'rgba(59, 130, 246, 0.3)',
      border: 'rgba(59, 130, 246, 0.2)',
    },
    purple: {
      gradient: 'from-purple-500/10 to-transparent',
      glow: 'rgba(168, 85, 247, 0.3)',
      border: 'rgba(168, 85, 247, 0.2)',
    },
  };

  const colors = colorClasses[accentColor];

  // Modern overlay patterns
  const getOverlayPattern = () => {
    switch (overlayPattern) {
      case 'dots':
        return {
          backgroundImage: `radial-gradient(circle, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        };
      case 'grid':
        return {
          backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px),
                            linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        };
      case 'waves':
        return {
          backgroundImage: `linear-gradient(45deg, ${colors.border} 1px, transparent 1px),
                            linear-gradient(-45deg, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        };
      default:
        return {};
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-void">
      {/* Background with modern gradient */}
      <div className="absolute inset-0">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center,
              ${colors.glow} 0%,
              rgba(0, 0, 0, 0) 70%
            )`,
          }}
        />

        {/* Modern overlay pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={getOverlayPattern()}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Modern animated title */}
          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mb-6"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              background: `linear-gradient(135deg, #ffffff 0%, ${colors.glow} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </motion.h1>

          {/* Modern subtitle with gradient */}
          {subtitle && (
            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="mb-10 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Modern CTA buttons with enhanced effects */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {primaryAction && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {primaryAction}
              </motion.div>
            )}
            {secondaryAction && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {secondaryAction}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Modern decorative elements */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{
          width: '200px',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
          borderRadius: '1px',
        }}
      />
    </section>
  );
}