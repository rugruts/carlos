/**
 * External link utility for safe link hygiene.
 * Automatically adds target="_blank" and rel="noreferrer noopener" for external URLs.
 */

export function externalLinkProps(url?: string) {
  if (!url) return {};

  const isExternal = /^https?:\/\//i.test(url);

  return isExternal
    ? { target: '_blank' as const, rel: 'noreferrer noopener' }
    : {};
}
