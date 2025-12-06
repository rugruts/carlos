import React from 'react';
import Button from './Button';
import { Apple, Chrome } from 'lucide-react';

type ButtonSize = 'sm' | 'md' | 'lg';

interface DownloadButtonsProps {
  size?: ButtonSize;
  showFirefox?: boolean;
  layout?: 'row' | 'stack';
  className?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({
  size = 'md',
  showFirefox = false,
  layout = 'row',
  className = '',
}) => {
  const iosUrl = import.meta.env.VITE_IOS_URL;
  const androidUrl = import.meta.env.VITE_ANDROID_URL;
  const chromeUrl = import.meta.env.VITE_CHROME_URL;

  const layoutClasses = {
    row: 'flex flex-col sm:flex-row gap-4',
    stack: 'flex flex-col gap-4',
  };

  const containerClasses = `${layoutClasses[layout]} ${className}`.trim();

  // Android icon (using a simple SVG since lucide doesn't have Android)
  const AndroidIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" />
    </svg>
  );

  return (
    <div className={containerClasses}>
      {/* iOS */}
      {iosUrl ? (
        <Button
          as="a"
          href={iosUrl}
          target="_blank"
          variant="primary"
          size={size}
          leadingIcon={<Apple className="w-5 h-5" aria-hidden="true" />}
          aria-label="Download DumpSack for iOS from the App Store"
        >
          iOS
        </Button>
      ) : (
        <Button
          variant="secondary"
          size={size}
          disabled
          leadingIcon={<Apple className="w-5 h-5" aria-hidden="true" />}
          title="Coming soon"
          aria-label="iOS version coming soon"
        >
          iOS
        </Button>
      )}

      {/* Android */}
      {androidUrl ? (
        <Button
          as="a"
          href={androidUrl}
          target="_blank"
          variant="primary"
          size={size}
          leadingIcon={<AndroidIcon />}
          aria-label="Download DumpSack for Android from Google Play"
        >
          Android
        </Button>
      ) : (
        <Button
          variant="secondary"
          size={size}
          disabled
          leadingIcon={<AndroidIcon />}
          title="Coming soon"
          aria-label="Android version coming soon"
        >
          Android
        </Button>
      )}

      {/* Chrome */}
      {chromeUrl ? (
        <Button
          as="a"
          href={chromeUrl}
          target="_blank"
          variant="primary"
          size={size}
          leadingIcon={<Chrome className="w-5 h-5" aria-hidden="true" />}
          aria-label="Download DumpSack extension for Chrome from the Web Store"
        >
          Chrome
        </Button>
      ) : (
        <Button
          variant="secondary"
          size={size}
          disabled
          leadingIcon={<Chrome className="w-5 h-5" aria-hidden="true" />}
          title="Coming soon"
          aria-label="Chrome extension coming soon"
        >
          Chrome
        </Button>
      )}

      {/* Firefox (optional) */}
      {showFirefox && (
        <Button
          variant="secondary"
          size={size}
          disabled
          title="Coming soon"
          aria-label="Firefox extension coming soon"
        >
          Firefox
        </Button>
      )}
    </div>
  );
};

export default DownloadButtons;
