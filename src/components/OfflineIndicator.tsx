'use client';

import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

/**
 * Shows a banner when the user is offline
 * Automatically hides when back online
 */
export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check initial status
    setIsOffline(!navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 dark:bg-amber-600 text-white px-4 py-2 text-center text-sm font-medium shadow-md">
      <div className="flex items-center justify-center gap-2">
        <WifiOff size={16} />
        <span>You're offline. Some features may be limited.</span>
      </div>
    </div>
  );
}
