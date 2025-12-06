import React from 'react';

interface SkipLinkProps {
  href: string;
  children?: React.ReactNode;
}

/**
 * SkipLink - Accessible skip-to-content link
 * Visually hidden by default, becomes visible when focused
 * Allows keyboard users to bypass navigation and jump to main content
 */
const SkipLink: React.FC<SkipLinkProps> = ({
  href,
  children = 'Skip to main content',
}) => {
  return (
    <a
      href={href}
      className="skip-link fixed top-4 left-4 z-[9999] px-6 py-3 bg-toxic text-black font-bold uppercase text-sm rounded-lg shadow-glow focus:outline-none focus:ring-4 focus:ring-toxic/50 transition-transform -translate-y-32 focus:translate-y-0"
      style={{
        // Ensure it's truly hidden until focused
        clipPath: 'inset(50%)',
      }}
      onFocus={(e) => {
        // Remove clip-path on focus to make it visible
        e.currentTarget.style.clipPath = 'none';
      }}
      onBlur={(e) => {
        // Restore clip-path on blur to hide it again
        e.currentTarget.style.clipPath = 'inset(50%)';
      }}
    >
      {children}
    </a>
  );
};

SkipLink.displayName = 'SkipLink';

export default SkipLink;
