/**
 * FIGMA ICON SYSTEM - LUCIDE STANDARD
 * Ensures consistent sizing and stroke weight across all Lucide icons
 */

export const iconSizes = {
  '16px': 16, // Icon/16px (stroke 1.75)
  '20px': 20, // Icon/20px (stroke 1.75)
  '24px': 24, // Icon/24px (stroke 2.0)
  '32px': 32, // Icon/32px (stroke 2.0)
} as const;

export const iconStroke = {
  standard: 1.75, // For 16px and 20px icons
  bold: 2.0,     // For 24px and 32px icons
} as const;

export const iconCornerRadius = {
  standard: 2, // 2px corner radius for all icons
} as const;

export const iconGrid = {
  keyline: 24, // 24x24 keyline grid
} as const;

export const iconColors = {
  muted: 'text-brand-white-45', // Default gray
  toxic: 'text-toxic-green',    // Neon green (status, highlights)
  white: 'text-brand-white',   // High contrast
  orange: 'text-orange',        // Secondary accent
} as const;

/**
 * Standard icon props for consistent usage
 */
export const getIconProps = (
  size: keyof typeof iconSizes = '24px',
  color: keyof typeof iconColors = 'muted',
  strokeWeight: keyof typeof iconStroke = 'standard'
) => ({
  size: iconSizes[size],
  strokeWidth: iconStroke[strokeWeight],
  className: iconColors[color],
  cornerRadius: iconCornerRadius.standard,
});

export type IconSize = keyof typeof iconSizes;
export type IconColor = keyof typeof iconColors;
export type IconStroke = keyof typeof iconStroke;

