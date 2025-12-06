import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { variants, stagger, dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface GridFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: GridFeature[];
  columns?: 2 | 3 | 4;
  iconSize?: 'sm' | 'md' | 'lg';
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  columns = 3,
  iconSize = 'md',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  const containerVariants = shouldReduceMotion
    ? undefined
    : {
        hidden: {},
        show: {
          transition: stagger.medium,
        },
      };

  const itemVariants = shouldReduceMotion ? undefined : variants.fadeUp(15);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={`grid ${gridClasses[columns]} gap-6`}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: dur.md, ease: ease.out }}
            className="card p-6 hover:border-toxic-subtle transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic-faint group-hover:bg-toxic-subtle transition-colors duration-300">
                <Icon className={`${iconSizes[iconSize]} text-toxic`} strokeWidth={2} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>

            {/* Description */}
            <p className="text-sm text-dsMuted leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

FeatureGrid.displayName = 'FeatureGrid';

export default FeatureGrid;

