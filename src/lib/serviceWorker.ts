/**
 * Service Worker Registration Helper
 * Handles SW registration, updates, and status
 */

type ServiceWorkerStatus = 'unsupported' | 'registering' | 'registered' | 'error';

interface ServiceWorkerState {
  status: ServiceWorkerStatus;
  registration: ServiceWorkerRegistration | null;
  error: Error | null;
}

let swState: ServiceWorkerState = {
  status: 'unsupported',
  registration: null,
  error: null,
};

/**
 * Register the service worker
 * Should be called once on app initialization
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  // Check if service workers are supported
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    console.log('[SW] Service workers not supported');
    swState.status = 'unsupported';
    return null;
  }

  // Don't register in development (optional - comment out to test in dev)
  if (process.env.NODE_ENV === 'development') {
    console.log('[SW] Skipping SW registration in development');
    return null;
  }

  try {
    swState.status = 'registering';
    console.log('[SW] Registering service worker...');

    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    swState.status = 'registered';
    swState.registration = registration;

    console.log('[SW] Service worker registered successfully');

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;

      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available
            console.log('[SW] New content available, refresh to update');
            // Optionally notify the user here
            dispatchUpdateEvent();
          }
        });
      }
    });

    return registration;
  } catch (error) {
    console.error('[SW] Registration failed:', error);
    swState.status = 'error';
    swState.error = error instanceof Error ? error : new Error(String(error));
    return null;
  }
}

/**
 * Unregister the service worker
 * Useful for debugging or resetting
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const success = await registration.unregister();

    if (success) {
      console.log('[SW] Service worker unregistered');
      swState.status = 'unsupported';
      swState.registration = null;
    }

    return success;
  } catch (error) {
    console.error('[SW] Unregistration failed:', error);
    return false;
  }
}

/**
 * Get the current service worker status
 */
export function getServiceWorkerStatus(): ServiceWorkerState {
  return { ...swState };
}

/**
 * Check if the app is being served from cache (offline)
 */
export function isOffline(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return !navigator.onLine;
}

/**
 * Skip waiting and activate new service worker
 */
export function skipWaiting(): void {
  if (swState.registration?.waiting) {
    swState.registration.waiting.postMessage('skipWaiting');
  }
}

/**
 * Dispatch custom event when SW update is available
 */
function dispatchUpdateEvent(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('swUpdate'));
  }
}

/**
 * Listen for online/offline status changes
 */
export function onOnlineStatusChange(callback: (isOnline: boolean) => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleOnline = () => callback(true);
  const handleOffline = () => callback(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

/**
 * Listen for service worker updates
 */
export function onServiceWorkerUpdate(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleUpdate = () => callback();
  window.addEventListener('swUpdate', handleUpdate);

  return () => {
    window.removeEventListener('swUpdate', handleUpdate);
  };
}
