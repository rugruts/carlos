import React, { useEffect } from 'react';

interface AccessibilityUtilsProps {
  children: React.ReactNode;
}

const AccessibilityUtils: React.FC<AccessibilityUtilsProps> = ({ children }) => {
  useEffect(() => {
    // Focus management for keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-nav');
    };

    window.addEventListener('keydown', handleKeyDown as any);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown as any);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:bg-toxic focus:text-black focus:px-4 focus:py-2 focus:rounded focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility statement */}
      <div className="sr-only" aria-live="polite">
        This website follows WCAG 2.1 AA accessibility standards.
      </div>

      {children}
    </>
  );
};

// Helper component for screen reader only content
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
};

// Helper component for visually hidden but accessible content
export const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="visually-hidden">
      {children}
    </span>
  );
};

export default AccessibilityUtils;