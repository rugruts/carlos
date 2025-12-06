import React from 'react';
import { motion } from 'framer-motion';
import { variants, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: 'toxic' | 'orange' | 'blue' | 'purple';
}

interface ModernFeatureGridProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  showDividers?: boolean;
}

export default function ModernFeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  showDividers = true,
}: ModernFeatureGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const colorClasses = {
    toxic: {
      border: 'border-toxic/30',
      glow: 'shadow-glow',
    },
    orange: {
      border: 'border-orange/30',
      glow: 'shadow-glow-orange',
    },
    blue: {
      border: 'border-blue-500/30',
      glow: 'shadow-blue-500/20',
    },
    purple: {
      border: 'border-purple-500/30',
      glow: 'shadow-purple-500/20',
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-void/50 to-void">
      <div className="container-custom">
        {/* Modern Section Header */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {subtitle && (
            <div className="text-sm font-bold uppercase tracking-wider mb-4 text-toxic">
              {subtitle}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            {title}
          </h2>
        </motion.div>

        {/* Modern Feature Grid */}
        <motion.div
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'show'}
          className={`grid ${gridClasses[columns]} gap-8`}
        >
          {features.map((feature, index) => {
            const accentColor = feature.accentColor || 'toxic';
            const colors = colorClasses[accentColor];

            return (
              <motion.div
                key={feature.id}
                variants={variants.fadeUp(20)}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`card-hover p-8 h-full border-t-4 ${colors.border} ${colors.glow} transition-all duration-300`}>
                  {/* Modern Icon with glow effect */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-${accentColor}/20 to-${accentColor}/5 border border-${accentColor}/30`}>
                      <div className={`w-7 h-7 text-${accentColor}`} aria-hidden="true">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Modern Title */}
                  <h3 className="text-2xl font-black uppercase mb-4 text-white tracking-tight group-hover:text-toxic transition-colors">
                    {feature.title}
                  </h3>

                  {/* Modern Description */}
                  <p className="text-dsMuted leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Modern Divider */}
                {showDividers && index < features.length - 1 && (
                  <div className={`h-px ${colors.border} mt-8 opacity-30`} />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}