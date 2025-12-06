import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * FocusRestore - Manages focus on route changes
 * Moves focus to main content area when navigating between pages
 * Improves accessibility for keyboard and screen reader users
 */
const FocusRestore: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to avoid layout thrash
    // and ensure DOM has updated after route change
    requestAnimationFrame(() => {
      const mainElement = document.getElementById('main');

      if (mainElement) {
        // Move focus to main content
        mainElement.focus();
      } else {
        // Fallback to body if main element not found
        document.body.focus();
      }
    });
  }, [location.pathname]);

  // This component doesn't render anything
  return null;
};

FocusRestore.displayName = 'FocusRestore';

export default FocusRestore;
