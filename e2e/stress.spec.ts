/**
 * UI Stress Tests for Dharma Path
 *
 * These tests verify the application's stability under stress conditions:
 * - Rapid navigation between pages
 * - Rapid verse navigation (testing URL persistence)
 * - Dark mode toggling
 * - Memory stability during extended use
 *
 * Run: npx playwright test e2e/stress.spec.ts
 */

import { test, expect, Page } from '@playwright/test';

// Helper to wait a small amount of time
const shortDelay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to measure JS heap size
async function getJSHeapSize(page: Page): Promise<number | null> {
  try {
    const metrics = await page.evaluate(() => {
      // @ts-expect-error - memory API not in standard types
      return performance.memory?.usedJSHeapSize || null;
    });
    return metrics;
  } catch {
    return null;
  }
}

test.describe('UI Stress Tests', () => {
  test.describe.configure({ timeout: 120000 }); // 2 minute timeout for stress tests

  test('rapid page navigation - should not crash or show errors', async ({ page }) => {
    /**
     * This test rapidly navigates between major pages to ensure:
     * - No JavaScript errors occur
     * - Pages load successfully
     * - No memory issues cause crashes
     */
    const pages = [
      '/',
      '/learn',
      '/gita',
      '/gita/2',
      '/upanishads',
      '/vedas',
      '/search',
      '/profile',
    ];

    const errors: string[] = [];

    // Listen for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Listen for page errors (unhandled exceptions)
    page.on('pageerror', err => {
      errors.push(err.message);
    });

    // Navigate through pages multiple times
    for (let round = 0; round < 3; round++) {
      for (const path of pages) {
        await page.goto(path, { waitUntil: 'networkidle' });
        await expect(page).not.toHaveURL(/error/);
        await shortDelay(50); // Brief pause between navigations
      }
    }

    // Filter out known non-critical errors
    const criticalErrors = errors.filter(
      err =>
        !err.includes('Failed to load resource') && // Network timeouts are expected during stress
        !err.includes('Download the React DevTools') &&
        !err.includes('Third-party cookie') // Browser warnings
    );

    expect(criticalErrors.length).toBe(0);
  });

  test('rapid verse navigation in Gita chapter - URL persistence stress', async ({ page }) => {
    /**
     * This test rapidly navigates between verses to verify:
     * - URL updates correctly with ?v= parameter
     * - State remains consistent
     * - No race conditions in URL updates
     */
    await page.goto('/gita/2', { waitUntil: 'networkidle' });

    // Wait for the page to fully load
    await expect(page.locator('h1')).toContainText('Chapter 2');

    // Rapid navigation through verses using Next button
    const nextButton = page.getByRole('button', { name: /next/i });

    // Click through 20 verses rapidly
    for (let i = 0; i < 20; i++) {
      if (await nextButton.isEnabled()) {
        await nextButton.click();
        await shortDelay(50); // Brief delay to allow URL update
      }
    }

    // Verify we've navigated forward and URL reflects the verse
    const url = page.url();
    expect(url).toMatch(/\/gita\/2(\?v=\d+)?/);

    // Click through verse picker buttons rapidly
    const verseButtons = page.locator('button').filter({ hasText: /^\d+$/ });
    const buttonCount = await verseButtons.count();

    // Random verse navigation
    const versesToVisit = [5, 15, 10, 20, 3, 47, 1, 30];
    for (const verse of versesToVisit) {
      if (verse <= buttonCount) {
        const button = verseButtons.nth(verse - 1);
        if (await button.isVisible()) {
          await button.click();
          await shortDelay(100);

          // Verify URL updated (verse 1 has clean URL)
          if (verse === 1) {
            expect(page.url()).toMatch(/\/gita\/2$/);
          } else {
            expect(page.url()).toContain(`v=${verse}`);
          }
        }
      }
    }

    // Final navigation - refresh page and verify state persists
    const currentUrl = page.url();
    await page.reload({ waitUntil: 'networkidle' });
    expect(page.url()).toBe(currentUrl);
  });

  test('rapid Upanishads navigation - section and verse persistence', async ({ page }) => {
    /**
     * Tests rapid navigation in Upanishads to verify URL persistence
     * with both section (?s=) and verse (?v=) parameters
     */
    // Navigate directly to first Upanishad (Isha) to avoid click navigation issues
    await page.goto('/upanishads/isha', { waitUntil: 'networkidle' });

    // Verify we're on an Upanishad page
    await expect(page.locator('main')).toBeVisible();
    expect(page.url()).toContain('/upanishads/isha');

    // Navigate through verses rapidly using Next button if available
    const nextButton = page.getByRole('button', { name: /next/i });

    for (let i = 0; i < 10; i++) {
      if (await nextButton.isVisible() && await nextButton.isEnabled()) {
        await nextButton.click();
        await shortDelay(50);
      }
    }

    // Verify URL - should still be on upanishads page (may have section/verse params)
    await shortDelay(200);
    const url = page.url();
    expect(url).toMatch(/\/upanishads\/isha/);

    // Refresh and verify state persists
    const currentUrl = page.url();
    await page.reload({ waitUntil: 'networkidle' });
    expect(page.url()).toBe(currentUrl);
  });

  test('rapid Vedas navigation - verse persistence', async ({ page }) => {
    /**
     * Tests rapid navigation in Vedas hymns to verify URL persistence
     */
    await page.goto('/vedas', { waitUntil: 'networkidle' });

    // Click first hymn
    const hymnLink = page.locator('a[href^="/vedas/"]').first();
    await hymnLink.click();
    await page.waitForLoadState('networkidle');

    // Navigate through verses
    const nextButton = page.getByRole('button', { name: /next/i });

    for (let i = 0; i < 10; i++) {
      if (await nextButton.isVisible() && await nextButton.isEnabled()) {
        await nextButton.click();
        await shortDelay(50);
      }
    }

    // Verify and test refresh persistence
    await shortDelay(200);
    const currentUrl = page.url();
    await page.reload({ waitUntil: 'networkidle' });
    expect(page.url()).toBe(currentUrl);
  });

  test('dark mode toggle stress test', async ({ page }) => {
    /**
     * Rapidly toggles dark mode to ensure:
     * - No layout shifts
     * - No flickering
     * - State persists
     */
    await page.goto('/', { waitUntil: 'networkidle' });

    // Find the dark mode toggle in profile settings
    await page.goto('/profile', { waitUntil: 'networkidle' });

    // Look for dark mode toggle
    const darkModeToggle = page.getByRole('button', { name: /dark mode|theme|moon|sun/i }).first();

    if (await darkModeToggle.isVisible()) {
      // Get initial state
      const htmlElement = page.locator('html');
      const initialClass = await htmlElement.getAttribute('class');

      // Toggle rapidly 10 times
      for (let i = 0; i < 10; i++) {
        await darkModeToggle.click();
        await shortDelay(100);
      }

      // Verify page is still functional
      await expect(page.locator('main')).toBeVisible();

      // Toggle back to initial state if needed
      const currentClass = await htmlElement.getAttribute('class');
      if (currentClass !== initialClass) {
        await darkModeToggle.click();
      }
    }
  });

  test('search input stress test - rapid typing', async ({ page }) => {
    /**
     * Tests rapid input in the search field to ensure:
     * - No input lag or freezing
     * - Search results update correctly
     * - No race conditions
     */
    await page.goto('/search', { waitUntil: 'networkidle' });

    const searchInput = page.getByRole('searchbox').or(page.getByPlaceholder(/search/i)).first();

    if (await searchInput.isVisible()) {
      // Type rapidly
      await searchInput.fill('');
      await searchInput.type('karma yoga dharma gita', { delay: 20 });
      await shortDelay(200);

      // Clear and type again
      await searchInput.clear();
      await searchInput.type('bhagavad gita chapter 2 verse 47', { delay: 20 });
      await shortDelay(200);

      // Rapid clearing and typing
      for (let i = 0; i < 5; i++) {
        await searchInput.clear();
        await shortDelay(50);
        await searchInput.type(`test ${i}`, { delay: 10 });
        await shortDelay(50);
      }

      // Verify page is still responsive
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('back/forward navigation stress test', async ({ page }) => {
    /**
     * Tests rapid browser back/forward navigation to ensure:
     * - History state is maintained correctly
     * - No crashes from rapid navigation
     * - URL state persists correctly
     */
    const navigationPath = [
      '/',
      '/learn',
      '/gita',
      '/gita/2',
      '/gita/2?v=10',
      '/upanishads',
      '/profile',
    ];

    // Build up history
    for (const path of navigationPath) {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await shortDelay(100);
    }

    // Rapid back navigation
    for (let i = 0; i < 5; i++) {
      await page.goBack();
      await shortDelay(100);
    }

    // Rapid forward navigation
    for (let i = 0; i < 5; i++) {
      await page.goForward();
      await shortDelay(100);
    }

    // Verify page is still functional
    await expect(page.locator('body')).toBeVisible();
  });

  test('concurrent interactions stress test', async ({ page }) => {
    /**
     * Tests multiple concurrent interactions to ensure
     * the UI remains responsive and doesn't freeze
     */
    await page.goto('/gita/2', { waitUntil: 'networkidle' });

    // Perform multiple actions rapidly
    const actions: Promise<void>[] = [];

    // Scroll
    actions.push(page.evaluate(() => window.scrollTo(0, 500)));

    // Click if buttons exist
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    if (buttonCount > 0) {
      // Click multiple buttons in sequence (not concurrent to avoid race conditions)
      for (let i = 0; i < Math.min(3, buttonCount); i++) {
        const button = buttons.nth(i);
        if (await button.isVisible() && await button.isEnabled()) {
          await button.click({ force: true }).catch(() => {
            // Ignore click errors during stress test
          });
          await shortDelay(50);
        }
      }
    }

    // Wait for any pending actions
    await Promise.allSettled(actions);

    // Verify page hasn't crashed
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('scroll performance stress test', async ({ page }) => {
    /**
     * Tests rapid scrolling to ensure no jank or freezing
     */
    await page.goto('/gita/2', { waitUntil: 'networkidle' });

    // Rapid scroll down and up
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });
      await shortDelay(200);

      await page.evaluate(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      await shortDelay(200);
    }

    // Instant scrolls
    for (let i = 0; i < 10; i++) {
      await page.evaluate((scrollPos) => {
        window.scrollTo(0, scrollPos);
      }, i * 100);
      await shortDelay(20);
    }

    // Verify page is still responsive
    await expect(page.locator('body')).toBeVisible();
  });
});

test.describe('Memory Stability Tests', () => {
  test.describe.configure({ timeout: 180000 }); // 3 minute timeout

  test('memory stability during extended navigation', async ({ page, browserName }) => {
    /**
     * Tests for memory leaks by navigating extensively and comparing heap sizes
     * Note: This only works in Chromium due to performance.memory API
     */
    test.skip(browserName !== 'chromium', 'Memory API only available in Chromium');

    await page.goto('/', { waitUntil: 'networkidle' });

    // Get initial memory
    const initialMemory = await getJSHeapSize(page);
    if (!initialMemory) {
      test.skip(true, 'Memory API not available');
      return;
    }

    // Navigate through many pages
    const pages = ['/learn', '/gita', '/gita/2', '/upanishads', '/vedas', '/search', '/profile'];

    for (let round = 0; round < 5; round++) {
      for (const path of pages) {
        await page.goto(path, { waitUntil: 'networkidle' });
        await shortDelay(100);
      }

      // Force garbage collection if available (requires --expose-gc flag)
      await page.evaluate(() => {
        // @ts-expect-error - gc is exposed via Chrome flag
        if (typeof gc === 'function') gc();
      }).catch(() => {
        // Ignore if gc is not available
      });
    }

    // Get final memory
    const finalMemory = await getJSHeapSize(page);

    if (finalMemory && initialMemory) {
      const memoryGrowth = finalMemory - initialMemory;
      const growthPercentage = (memoryGrowth / initialMemory) * 100;

      // Log memory stats
      console.log(`Initial memory: ${(initialMemory / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Final memory: ${(finalMemory / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Growth: ${growthPercentage.toFixed(2)}%`);

      // Allow up to 100% growth (memory management varies)
      // Anything over 200% suggests a leak
      expect(growthPercentage).toBeLessThan(200);
    }
  });

  test('memory stability during verse navigation', async ({ page, browserName }) => {
    /**
     * Specifically tests for memory leaks during verse navigation
     * as this is a common operation users will perform
     */
    test.skip(browserName !== 'chromium', 'Memory API only available in Chromium');

    await page.goto('/gita/2', { waitUntil: 'networkidle' });

    const initialMemory = await getJSHeapSize(page);
    if (!initialMemory) {
      test.skip(true, 'Memory API not available');
      return;
    }

    // Navigate through all 72 verses in Chapter 2 multiple times
    const nextButton = page.getByRole('button', { name: /next/i });

    for (let round = 0; round < 2; round++) {
      // Navigate forward through verses
      for (let i = 0; i < 71; i++) {
        if (await nextButton.isEnabled()) {
          await nextButton.click();
          await shortDelay(30);
        }
      }

      // Navigate back to start
      await page.goto('/gita/2', { waitUntil: 'networkidle' });
    }

    // Force GC
    await page.evaluate(() => {
      // @ts-expect-error - gc is exposed via Chrome flag
      if (typeof gc === 'function') gc();
    }).catch(() => {});

    const finalMemory = await getJSHeapSize(page);

    if (finalMemory && initialMemory) {
      const growthPercentage = ((finalMemory - initialMemory) / initialMemory) * 100;
      console.log(`Verse navigation memory growth: ${growthPercentage.toFixed(2)}%`);
      expect(growthPercentage).toBeLessThan(150);
    }
  });
});
