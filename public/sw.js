/**
 * Dharma Path Service Worker
 * Enables offline functionality for the PWA
 */

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `dharma-path-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dharma-path-dynamic-${CACHE_VERSION}`;
const API_CACHE = `dharma-path-api-${CACHE_VERSION}`;

// Assets to precache on install
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.png',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
];

// URLs to never cache (auth, analytics, etc.)
const NEVER_CACHE = [
  'supabase.co',
  'supabase.in',
  'googleapis.com/identitytoolkit',
  'chrome-extension://',
];

// API domains to cache with stale-while-revalidate
const API_DOMAINS = [
  'vedicscriptures.github.io',
];

/**
 * Install event - precache static assets
 */
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Precaching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        // Activate immediately without waiting
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Precache failed:', error);
      })
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Delete old version caches
              return cacheName.startsWith('dharma-path-') &&
                     !cacheName.includes(CACHE_VERSION);
            })
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

/**
 * Fetch event - serve from cache or network
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip requests we should never cache
  if (NEVER_CACHE.some(domain => request.url.includes(domain))) {
    return;
  }

  // Handle API requests with stale-while-revalidate
  if (API_DOMAINS.some(domain => request.url.includes(domain))) {
    event.respondWith(staleWhileRevalidate(request, API_CACHE));
    return;
  }

  // Handle static assets (Next.js bundles) with cache-first
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Handle fonts with cache-first
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Handle navigation requests with network-first
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    return;
  }

  // Handle other requests with network-first
  event.respondWith(networkFirst(request, DYNAMIC_CACHE));
});

/**
 * Cache-first strategy
 * Best for static assets that rarely change
 */
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first fetch failed:', error);
    // Return offline fallback if available
    return caches.match('/');
  }
}

/**
 * Network-first strategy
 * Best for HTML pages and dynamic content
 */
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Return cached homepage as fallback for navigation
    if (request.mode === 'navigate') {
      return caches.match('/');
    }

    throw error;
  }
}

/**
 * Stale-while-revalidate strategy
 * Best for API responses - return cached immediately, update in background
 */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Fetch from network in background
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch((error) => {
      console.log('[SW] Background fetch failed:', error);
      return null;
    });

  // Return cached response immediately, or wait for network
  return cachedResponse || fetchPromise;
}

/**
 * Handle messages from the client
 */
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }

  if (event.data === 'getVersion') {
    event.ports[0].postMessage(CACHE_VERSION);
  }
});

console.log('[SW] Service worker loaded');
