import { test, expect } from '@playwright/test';

/**
 * Dark Mode Visual Regression Tests
 *
 * Tests the same pages as visual.spec.ts but with dark mode enabled.
 * Run `npx playwright test --update-snapshots` to update baselines after intentional changes.
 */

test.describe('Visual Regression - Dark Mode', () => {
  test.beforeEach(async ({ page, context }) => {
    // Clear storage for consistent state
    await context.clearCookies();
    // Enable dark mode via media query emulation
    await page.emulateMedia({ colorScheme: 'dark' });
    // Navigate to page first
    await page.goto('/');
    // Set localStorage to skip onboarding
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem('hasSeenOnboarding', 'true');
    });
  });

  test('home page - dark mode', async ({ page }) => {
    await page.goto('/');
    // Skip onboarding if it still shows
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }
    await page.waitForSelector('nav', { timeout: 10000 });
    await expect(page).toHaveScreenshot('home-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('learn page - dark mode', async ({ page }) => {
    await page.goto('/learn');
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }
    await page.waitForSelector('nav', { timeout: 10000 });
    await expect(page).toHaveScreenshot('learn-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('lesson detail page - dark mode', async ({ page }) => {
    await page.goto('/learn/1');
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('lesson-detail-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('gita chapters list - dark mode', async ({ page }) => {
    await page.goto('/gita');
    await page.waitForSelector("text=Arjuna's Dilemma", { timeout: 10000 });
    await expect(page).toHaveScreenshot('gita-chapters-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('gita chapter page - dark mode', async ({ page }) => {
    await page.goto('/gita/2');
    await page.waitForSelector('text=2.1', { timeout: 10000 });
    await page.waitForSelector('text=Jump to verse', { timeout: 5000 });
    await expect(page).toHaveScreenshot('gita-chapter-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('gita verse detail - dark mode', async ({ page }) => {
    await page.goto('/gita/2/47');
    await page.waitForSelector('text=2.47', { timeout: 10000 });
    await expect(page).toHaveScreenshot('gita-verse-detail-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('search page - dark mode', async ({ page }) => {
    await page.goto('/search');
    await page.waitForSelector('input[placeholder*="Search" i]', { timeout: 5000 });
    await expect(page).toHaveScreenshot('search-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('profile page - dark mode', async ({ page }) => {
    await page.goto('/profile');
    await page.waitForSelector('text=Sign In', { timeout: 5000 });
    await expect(page).toHaveScreenshot('profile-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('saved bookmarks page - dark mode', async ({ page }) => {
    await page.goto('/profile/saved');
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('saved-bookmarks-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('upanishads page - dark mode', async ({ page }) => {
    await page.goto('/upanishads');
    await page.waitForSelector('text=Upanishads', { timeout: 10000 });
    await expect(page).toHaveScreenshot('upanishads-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('upanishad detail page - dark mode', async ({ page }) => {
    await page.goto('/upanishads/isha');
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('upanishad-detail-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('vedas page - dark mode', async ({ page }) => {
    await page.goto('/vedas');
    await page.waitForSelector('text=Vedas', { timeout: 10000 });
    await expect(page).toHaveScreenshot('vedas-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('vedas hymn detail page - dark mode', async ({ page }) => {
    await page.goto('/vedas/gayatri');
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('vedas-hymn-detail-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('festival detail page - dark mode', async ({ page }) => {
    await page.goto('/festivals/diwali');
    await page.waitForSelector('main', { timeout: 10000 });
    await expect(page).toHaveScreenshot('festival-detail-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
});
