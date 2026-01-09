/**
 * Lighthouse CI Configuration for Dharma Path
 *
 * This configuration sets up performance budgets and audit thresholds
 * to ensure the application maintains high performance standards.
 *
 * Install: npm install -D @lhci/cli
 *
 * Run locally: npx lhci autorun
 * Run specific URL: npx lhci collect --url=http://localhost:3000
 */

module.exports = {
  ci: {
    collect: {
      // URLs to test - covers all major page types
      url: [
        'http://localhost:3000/',                    // Homepage
        'http://localhost:3000/learn',              // Learn/curriculum page
        'http://localhost:3000/gita',               // Gita chapters list
        'http://localhost:3000/gita/2',             // Gita chapter (heavy page)
        'http://localhost:3000/gita/2?v=47',        // Gita with verse param (URL persistence)
        'http://localhost:3000/upanishads',         // Upanishads list
        'http://localhost:3000/vedas',              // Vedas list
        'http://localhost:3000/search',             // Search page
        'http://localhost:3000/profile',            // Profile page
      ],
      // Number of times to run Lighthouse per URL (3 for statistical significance)
      numberOfRuns: 3,
      // Settings for collection
      settings: {
        // Chrome flags for consistent testing
        chromeFlags: '--no-sandbox --disable-gpu --headless',
        // Throttling to simulate mobile network
        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
        },
        // Skip specific audits that don't apply
        skipAudits: [
          'uses-http2',  // Only relevant for production
        ],
      },
      // Start the server before collecting
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready in',
      startServerReadyTimeout: 30000,
    },

    assert: {
      // Assertions that must pass for CI to succeed
      assertions: {
        // Performance metrics - Core Web Vitals
        'categories:performance': ['error', { minScore: 0.8 }],         // 80% performance score
        'categories:accessibility': ['error', { minScore: 0.9 }],       // 90% accessibility score
        'categories:best-practices': ['error', { minScore: 0.85 }],     // 85% best practices
        'categories:seo': ['warn', { minScore: 0.9 }],                  // 90% SEO score (warn only)

        // Core Web Vitals - Critical metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],  // FCP < 2s
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }], // LCP < 2.5s (Core Web Vital)
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],   // CLS < 0.1 (Core Web Vital)
        'total-blocking-time': ['error', { maxNumericValue: 300 }],       // TBT < 300ms (proxy for INP)
        'speed-index': ['warn', { maxNumericValue: 3400 }],              // Speed Index < 3.4s
        'interactive': ['warn', { maxNumericValue: 3800 }],              // TTI < 3.8s

        // Resource budgets
        'resource-summary:script:size': ['warn', { maxNumericValue: 300000 }],    // JS < 300KB
        'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 50000 }], // CSS < 50KB
        'resource-summary:image:size': ['warn', { maxNumericValue: 500000 }],     // Images < 500KB
        'resource-summary:total:size': ['warn', { maxNumericValue: 1000000 }],    // Total < 1MB

        // Accessibility - specific checks
        'color-contrast': 'error',           // Must have sufficient color contrast
        'document-title': 'error',           // Must have page title
        'html-has-lang': 'error',            // Must have lang attribute
        'meta-viewport': 'error',            // Must have viewport meta tag
        'button-name': 'error',              // Buttons must have accessible names
        'link-name': 'error',                // Links must have accessible names
        'image-alt': 'error',                // Images must have alt text

        // Best practices
        'errors-in-console': 'warn',         // Console errors should be fixed
        'no-vulnerable-libraries': 'error',  // No known vulnerabilities
        'csp-xss': 'warn',                   // Content Security Policy

        // PWA checks (important for mobile experience)
        'service-worker': 'warn',            // Has service worker
        'installable-manifest': 'warn',      // Can be installed as PWA
        'themed-omnibox': 'warn',            // Theme color set
      },

      // Aggregate method for multiple runs
      aggregationMethod: 'median-run',
    },

    upload: {
      // For local development, use temporary public storage
      target: 'temporary-public-storage',
    },
  },
};
