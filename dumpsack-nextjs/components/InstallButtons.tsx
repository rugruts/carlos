'use client';

import React from 'react';
import { Chrome, Download } from 'lucide-react';

export default function InstallButtons() {
  const [browser, setBrowser] = React.useState<string>('chrome');

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('firefox')) {
      setBrowser('firefox');
    } else if (userAgent.includes('edg')) {
      setBrowser('edge');
    } else if (userAgent.includes('brave')) {
      setBrowser('brave');
    } else {
      setBrowser('chrome');
    }
  }, []);

  const installLink = '#'; // Placeholder - replace with actual extension store link

  return (
    <div className="flex flex-col gap-4">
      <a
        href={installLink}
        className="btn-primary"
        onClick={() => {
          // Track event
          if (typeof window !== 'undefined' && (window as any).plausible) {
            (window as any).plausible('install_click', { props: { browser } });
          }
        }}
      >
        <Chrome size={20} />
        Install Extension
      </a>
      <a
        href="/download"
        className="btn-ghost text-sm"
      >
        <Download size={16} />
        Manual installation help
      </a>
    </div>
  );
}

