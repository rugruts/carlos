import React from 'react';
import { motion } from 'framer-motion';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  title?: string;
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  onClose,
  title,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className={`bg-bg-glass backdrop-blur-xl border border-border-glass rounded-[16px] p-6 ${className}`}
    >
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="h3 text-brand-white">{title}</h3>
          {onClose && (
            <button
              onClick={onClose}
              className="text-brand-white-45 hover:text-toxic-green transition-colors"
              aria-label="Close panel"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default GlassPanel;