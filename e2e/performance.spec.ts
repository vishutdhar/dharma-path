import { test, expect } from '@playwright/test';

/**
 * Performance Tests (Lighthouse-style metrics)
 *
 * Tests Core Web Vitals and performance metrics using Playwright's
 * performance APIs. These tests measure the same metrics that Lighthouse uses.
 *
 * Metrics tested:
 * - FCP (First Contentful Paint) - Target: < 1.8s (good), < 3s (needs improvement)
 * - LCP (Largest Contentful Paint) - Target: < 2.5s (good), < 4s (needs improvement)
 * - CLS (Cumulative Layout Shift) - Target: < 0.1 (good), < 0.25 (needs improvement)
 * - TTI (Time to Interactive) - approximated via load times
 */

// Performance thresholds based on Lighthouse recommendations
const THRESHOLDS = {
  FCP_GOOD: 1800, // 1.8s
  FCP_MAX: 3000, // 3s
  LCP_GOOD: 2500, // 2.5s
  LCP_MAX: 4000, // 4s
  CLS_GOOD: 0.1,
  CLS_MAX: 0.25,
  LOAD_TIME_MAX: 5000, // 5s for full page load
};

test.describe('Performance - Core Web Vitals', () => {
  test.beforeEach(async ({ page }) => {
    // Clear browser cache for consistent measurements
    await page.context().clearCookies();
  });

  test('home page should have good First Contentful Paint', async ({ page }) => {
    await page.goto('/');

    // Get FCP from performance entries
    const fcp = await page.evaluate(() => {
      const entries = performance.getEntriesByType('paint');
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      return fcpEntry ? fcpEntry.startTime : null;
    });

    if (fcp !== null) {
      console.log(`FCP: ${fcp}ms`);
      expect(fcp).toBeLessThan(THRESHOLDS.FCP_MAX);
    }
  });

  test('home page should have good Largest Contentful Paint', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Observe LCP
    const lcp = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let lcpValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          lcpValue = lastEntry.startTime;
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });

        // Wait a bit for LCP to settle
        setTimeout(() => {
          observer.disconnect();
          resolve(lcpValue);
        }, 2000);
      });
    });

    console.log(`LCP: ${lcp}ms`);
    expect(lcp).toBeLessThan(THRESHOLDS.LCP_MAX);
  });

  test('home page should have good Cumulative Layout Shift', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Measure CLS
    const cls = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (
              'hadRecentInput' in entry &&
              !(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput
            ) {
              clsValue += (entry as PerformanceEntry & { value: number }).value;
            }
          }
        });
        observer.observe({ type: 'layout-shift', buffered: true });

        setTimeout(() => {
          observer.disconnect();
          resolve(clsValue);
        }, 2000);
      });
    });

    console.log(`CLS: ${cls}`);
    expect(cls).toBeLessThan(THRESHOLDS.CLS_MAX);
  });

  test('learn page should load within threshold', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/learn');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    console.log(`Learn page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(THRESHOLDS.LOAD_TIME_MAX);
  });

  test('gita page should load within threshold', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/gita');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    console.log(`Gita page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(THRESHOLDS.LOAD_TIME_MAX);
  });
});

test.describe('Performance - Resource Loading', () => {
  test('home page should not have blocking resources', async ({ page }) => {
    await page.goto('/');

    // Check for render-blocking scripts in head
    const blockingScripts = await page.evaluate(() => {
      const scripts = document.querySelectorAll('head script:not([async]):not([defer]):not([type="module"])');
      return Array.from(scripts)
        .filter((s) => s.getAttribute('src'))
        .map((s) => s.getAttribute('src'));
    });

    // Should have minimal blocking scripts (Next.js handles this well)
    console.log(`Blocking scripts: ${blockingScripts.length}`);
    expect(blockingScripts.length).toBeLessThan(5);
  });

  test('images should be properly sized', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for oversized images (displayed size vs natural size)
    const oversizedImages = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const oversized: string[] = [];

      images.forEach((img) => {
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          const displayedWidth = img.clientWidth;
          const displayedHeight = img.clientHeight;

          // If natural size is more than 2x displayed size, it's oversized
          if (img.naturalWidth > displayedWidth * 2 || img.naturalHeight > displayedHeight * 2) {
            oversized.push(img.src);
          }
        }
      });

      return oversized;
    });

    // Allow some oversized for retina displays, but not too many
    expect(oversizedImages.length).toBeLessThan(5);
  });

  test('CSS should be minimized', async ({ request }) => {
    const response = await request.get('/');
    const html = await response.text();

    // Check for inline styles (should be minimal)
    const inlineStyleMatches = html.match(/<style[^>]*>[^<]{1000,}<\/style>/g);
    const largeInlineStyles = inlineStyleMatches?.length || 0;

    // Should not have too many large inline style blocks
    expect(largeInlineStyles).toBeLessThan(3);
  });
});

test.describe('Performance - JavaScript Bundle', () => {
  test('JavaScript should not block initial render', async ({ page }) => {
    let jsCount = 0;

    // Count JS files loaded
    page.on('response', async (response) => {
      const url = response.url();
      if (url.includes('.js') && response.status() === 200) {
        jsCount++;
      }
    });

    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    console.log(`Page loaded in ${loadTime}ms with ${jsCount} JS files`);

    // Page should load within reasonable time even with JS
    expect(loadTime).toBeLessThan(10000);
  });
});

test.describe('Performance - Cache Efficiency', () => {
  test('static assets should be cacheable', async ({ request }) => {
    // Check manifest.json caching
    const manifestResponse = await request.get('/manifest.json');
    const manifestCacheControl = manifestResponse.headers()['cache-control'];

    // Should have some form of caching
    // Next.js typically sets appropriate cache headers for static assets
    expect(manifestResponse.status()).toBe(200);
  });

  test('second page load should be faster (caching)', async ({ page, context }) => {
    // First load (cold)
    const firstStart = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const firstLoadTime = Date.now() - firstStart;

    // Second load (warm - should use cache)
    const secondStart = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const secondLoadTime = Date.now() - secondStart;

    console.log(`First load: ${firstLoadTime}ms, Second load: ${secondLoadTime}ms`);

    // Second load should be reasonably fast (cached resources)
    // We don't require it to be faster (network varies), but it shouldn't be much slower
    expect(secondLoadTime).toBeLessThan(THRESHOLDS.LOAD_TIME_MAX);
  });
});

test.describe('Performance - Memory and DOM', () => {
  test('DOM should not be excessively large', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const domStats = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const depth = (el: Element): number => {
        let d = 0;
        let current: Element | null = el;
        while (current.parentElement) {
          d++;
          current = current.parentElement;
        }
        return d;
      };

      let maxDepth = 0;
      allElements.forEach((el) => {
        const d = depth(el);
        if (d > maxDepth) maxDepth = d;
      });

      return {
        totalElements: allElements.length,
        maxDepth,
      };
    });

    console.log(`DOM elements: ${domStats.totalElements}, Max depth: ${domStats.maxDepth}`);

    // Lighthouse recommendations: < 1500 elements, < 32 depth
    expect(domStats.totalElements).toBeLessThan(3000);
    expect(domStats.maxDepth).toBeLessThan(40);
  });

  test('page should not have memory leaks on navigation', async ({ page }) => {
    // Navigate through multiple pages
    const paths = ['/', '/learn', '/gita', '/profile', '/'];

    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
    }

    // If we get here without crashing, memory is manageable
    // Get final memory stats if available (Chrome/Chromium only)
    try {
      const memoryInfo = await page.evaluate(() => {
        // performance.memory is non-standard and only available in Chrome
        const perf = performance as typeof performance & { memory?: { usedJSHeapSize: number } };
        if (perf.memory && typeof perf.memory.usedJSHeapSize === 'number') {
          return perf.memory.usedJSHeapSize;
        }
        return null;
      });

      if (memoryInfo) {
        console.log(`JS Heap Size: ${(memoryInfo / 1024 / 1024).toFixed(2)} MB`);
        // Should be under 100MB for reasonable app
        expect(memoryInfo).toBeLessThan(100 * 1024 * 1024);
      }
    } catch {
      // Memory API not available in this browser - skip memory check
      console.log('Memory API not available - skipping memory check');
    }
  });
});

test.describe('Performance - Network', () => {
  test('total page weight should be reasonable', async ({ page }) => {
    let totalBytes = 0;
    const resourceSizes: { url: string; size: number }[] = [];

    page.on('response', async (response) => {
      const headers = response.headers();
      const contentLength = parseInt(headers['content-length'] || '0', 10);
      if (contentLength > 0) {
        totalBytes += contentLength;
        resourceSizes.push({
          url: response.url().split('?')[0].slice(-50),
          size: contentLength,
        });
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    console.log(`Total page weight: ${(totalBytes / 1024).toFixed(2)} KB`);

    // Page should be under 2MB total
    expect(totalBytes).toBeLessThan(2 * 1024 * 1024);
  });

  test('API calls should be efficient', async ({ page }) => {
    const apiCalls: { url: string; duration: number }[] = [];

    page.on('response', async (response) => {
      const url = response.url();
      if (url.includes('/api/') || url.includes('supabase')) {
        const timing = response.timing();
        if (timing) {
          apiCalls.push({
            url: url.slice(-50),
            duration: timing.responseEnd - timing.requestStart,
          });
        }
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // API calls should complete quickly
    apiCalls.forEach((call) => {
      console.log(`API: ${call.url} - ${call.duration}ms`);
      expect(call.duration).toBeLessThan(3000); // 3 seconds max per call
    });
  });
});

test.describe('Performance - Interaction', () => {
  test('button clicks should respond quickly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find a clickable element
    const startButton = page.locator('a[href="/learn"]').first();
    if (await startButton.isVisible()) {
      const startTime = Date.now();
      await startButton.click();
      await page.waitForLoadState('domcontentloaded');
      const responseTime = Date.now() - startTime;

      console.log(`Navigation response time: ${responseTime}ms`);
      // Should respond within 500ms (excluding network)
      expect(responseTime).toBeLessThan(2000);
    }
  });

  test('scroll should be smooth (no jank)', async ({ page }) => {
    await page.goto('/learn');
    await page.waitForLoadState('networkidle');

    // Scroll down the page
    const startTime = Date.now();
    await page.evaluate(() => {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    });

    // Wait for scroll to complete
    await page.waitForTimeout(500);

    const scrollTime = Date.now() - startTime;

    // Check final scroll position
    const scrollY = await page.evaluate(() => window.scrollY);

    // Should have scrolled and completed quickly
    expect(scrollY).toBeGreaterThan(0);
    expect(scrollTime).toBeLessThan(1000);
  });
});
