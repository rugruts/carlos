import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'card' | 'gradient';
  spacing?: 'default' | 'compact' | 'large';
  containerWidth?: 'default' | 'narrow' | 'wide' | 'full';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'default',
  spacing = 'default',
  containerWidth = 'default',
}: SectionProps) {
  const backgroundClasses = {
    default: '',
    card: 'bg-card/30',
    gradient: 'bg-gradient-to-b from-card/20 to-transparent',
  };

  const spacingClasses = {
    default: 'section-spacing',
    compact: 'py-12 md:py-16',
    large: 'py-20 md:py-32',
  };

  const containerClasses = {
    default: 'container-custom',
    narrow: 'container-custom max-w-4xl',
    wide: 'container-custom max-w-7xl',
    full: 'w-full px-6',
  };

  return (
    <section
      id={id}
      className={`relative ${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className={containerClasses[containerWidth]}>{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  accentColor?: 'toxic' | 'orange';
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  accentColor = 'toxic',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const accentClass = accentColor === 'toxic' ? 'text-toxic' : 'text-orange';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 max-w-3xl ${alignClasses}`}
    >
      {subtitle && (
        <div
          className={`text-sm font-bold uppercase tracking-wider mb-4 ${accentClass}`}
        >
          {subtitle}
        </div>
      )}
      <h2 className="mb-6">{title}</h2>
      {description && (
        <p className="text-xl text-dsMuted leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
