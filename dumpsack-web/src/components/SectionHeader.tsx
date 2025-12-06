import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  caption?: string;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  caption,
  align = 'left',
  as: HeadingTag = 'h2',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  const containerClasses =
    `mb-12 max-w-3xl ${alignClasses[align]} ${className}`.trim();

  return (
    <div className={containerClasses}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-wider text-toxic mb-3">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="mb-4 font-black uppercase">{title}</HeadingTag>
      {caption && (
        <p className="text-lg text-dsMuted leading-relaxed">{caption}</p>
      )}
    </div>
  );
};

export default SectionHeader;
