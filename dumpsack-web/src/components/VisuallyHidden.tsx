import React from 'react';

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const srOnlyStyle: React.CSSProperties = {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
      ...style,
    };

    return (
      <span ref={ref} className={className} style={srOnlyStyle} {...props}>
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
