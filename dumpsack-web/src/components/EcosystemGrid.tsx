import React from 'react';
import { motion } from 'framer-motion';
import { variants, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import IconBlock from './IconBlock';

export interface EcosystemItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
}

interface EcosystemGridProps {
  items: EcosystemItem[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const EcosystemGrid: React.FC<EcosystemGridProps> = ({
  items,
  columns = 2,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const containerClasses =
    `grid ${gridClasses[columns]} gap-6 ${className}`.trim();

  const containerVariants = shouldReduceMotion
    ? undefined
    : {
        hidden: {},
        show: {
          transition: stagger.medium,
        },
      };

  const itemVariants = shouldReduceMotion ? {} : variants.fadeUp(10);

  return (
    <motion.div
      className={containerClasses}
      initial={shouldReduceMotion ? undefined : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'show'}
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          <IconBlock
            icon={item.icon}
            label={item.title}
            caption={item.description}
            href={item.href}
            asCard
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EcosystemGrid;
