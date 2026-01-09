import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests
 *
 * These tests capture screenshots of key pages and compare them against baselines.
 * Run `npx playwright test --update-snapshots` to update baselines after intentional changes.
 */

test.describe('Visual Regression', () => {
  test.beforeEach(async ({ page, context }) => {
    // Clear storage for consistent state
    await context.clearCookies();
    // Navigate to page first
    await page.goto('/');
    // Set localStorage to skip onboarding
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem('hasSeenOnboarding', 'true');
    });
  });

  test('home page', async ({ page }) => {
    // Reload to apply localStorage changes
    await page.goto('/');
    // Skip onboarding if it still shows
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }
    // Wait for main content
    await page.waitForSelector('nav', { timeout: 10000 });
    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('learn page', async ({ page }) => {
    await page.goto('/learn');
    // Skip onboarding if shown
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }
    // Wait for page content
    await page.waitForSelector('nav', { timeout: 10000 });
    await expect(page).toHaveScreenshot('learn-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('gita chapters list', async ({ page }) => {
    await page.goto('/gita');
    // Wait for chapters to load
    await page.waitForSelector("text=Arjuna's Dilemma", { timeout: 10000 });
    await expect(page).toHaveScreenshot('gita-chapters.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('gita chapter page with verse picker', async ({ page }) => {
    await page.goto('/gita/2');
    // Wait for verse to load
    await page.waitForSelector('text=2.1', { timeout: 10000 });
    // Wait for verse picker to render
    await page.waitForSelector('text=Jump to verse', { timeout: 5000 });
    await expect(page).toHaveScreenshot('gita-chapter-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('gita verse detail', async ({ page }) => {
    await page.goto('/gita/2/47');
    // Wait for verse content
    await page.waitForSelector('text=2.47', { timeout: 10000 });
    await expect(page).toHaveScreenshot('gita-verse-detail.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('search page', async ({ page }) => {
    await page.goto('/search');
    // Wait for search input
    await page.waitForSelector('input[placeholder*="Search" i]', { timeout: 5000 });
    await expect(page).toHaveScreenshot('search-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('profile page', async ({ page }) => {
    await page.goto('/profile');
    // Wait for sign in button (unauthenticated state)
    await page.waitForSelector('text=Sign In', { timeout: 5000 });
    await expect(page).toHaveScreenshot('profile-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('upanishads page', async ({ page }) => {
    await page.goto('/upanishads');
    // Wait for content to load
    await page.waitForSelector('text=Upanishads', { timeout: 10000 });
    await expect(page).toHaveScreenshot('upanishads-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('vedas page', async ({ page }) => {
    await page.goto('/vedas');
    // Wait for content to load
    await page.waitForSelector('text=Vedas', { timeout: 10000 });
    await expect(page).toHaveScreenshot('vedas-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('lesson detail page', async ({ page }) => {
    await page.goto('/learn/1');
    // Wait for lesson content to load
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('lesson-detail.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('saved bookmarks page', async ({ page }) => {
    await page.goto('/profile/saved');
    // Wait for page to load
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('saved-bookmarks.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('upanishad detail page', async ({ page }) => {
    await page.goto('/upanishads/isha');
    // Wait for content to load
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('upanishad-detail.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('vedas hymn detail page', async ({ page }) => {
    await page.goto('/vedas/gayatri');
    // Wait for content to load
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('vedas-hymn-detail.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('festival detail page', async ({ page }) => {
    await page.goto('/festivals/diwali');
    // Wait for content to load
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('festival-detail.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
});

test.describe('Visual Regression - Verse Picker Centering', () => {
  test('verse picker centers selected verse', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('hasSeenOnboarding', 'true');
    });

    await page.goto('/gita/2');
    // Wait for page to load
    await page.waitForSelector('text=Jump to verse', { timeout: 10000 });

    // Navigate to verse 3 to test centering (visible in initial pagination 1-5)
    const verseButton = page.locator('button[aria-label="Go to verse 3"]');
    await verseButton.waitFor({ state: 'visible', timeout: 10000 });
    await verseButton.click();
    // Wait for scroll animation
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot('verse-picker-centered.png', {
      fullPage: false,
      maxDiffPixelRatio: 0.01,
    });
  });
});
