import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface IconBlockProps {
  icon: React.ReactNode;
  label: string;
  caption?: string;
  href?: string;
  asCard?: boolean;
  className?: string;
}

const IconBlock: React.FC<IconBlockProps> = ({
  icon,
  label,
  caption,
  href,
  asCard = false,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const baseClasses =
    `flex items-start gap-4 ${asCard ? 'card p-6' : ''} ${className}`.trim();
  const hoverClasses = href
    ? 'hover:border-toxic/30 transition-colors group'
    : '';
  const combinedClasses = `${baseClasses} ${hoverClasses}`.trim();

  const content = (
    <>
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 flex items-center justify-center">
        <div className="w-6 h-6 text-toxic" aria-hidden="true">
          {icon}
        </div>
      </div>

      {/* Text */}
      <motion.div
        className="flex-1 min-w-0"
        initial="rest"
        whileHover={href && !shouldReduceMotion ? 'hover' : undefined}
        animate="rest"
        variants={variants.nudge}
      >
        <h4 className="font-bold text-white mb-1">{label}</h4>
        {caption && <p className="text-sm text-dsMuted">{caption}</p>}
      </motion.div>
    </>
  );

  // Render as link
  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  // Render as div
  return <div className={combinedClasses}>{content}</div>;
};

export default IconBlock;
