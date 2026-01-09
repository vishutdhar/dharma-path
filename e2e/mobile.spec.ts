import { test, expect } from '@playwright/test';

/**
 * Mobile Viewport Tests
 *
 * Tests responsive design on various mobile devices.
 * Uses viewport dimensions instead of device presets to avoid worker conflicts.
 */

// Mobile viewport configurations (extracted from device presets)
const IPHONE_13 = { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true };
const IPAD_PRO_11 = { viewport: { width: 834, height: 1194 }, hasTouch: true, isMobile: true };
const PIXEL_5 = { viewport: { width: 393, height: 851 }, hasTouch: true, isMobile: true };

test.describe('Mobile Responsiveness - iPhone', () => {
  test.use(IPHONE_13);

  test('home page should display correctly on iPhone', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Allow time for hydration

    // Check body content is visible (more reliable than main)
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Ensure no horizontal scrollbar (content fits viewport)
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Take screenshot for visual verification
    await expect(page).toHaveScreenshot('home-iphone.png', { maxDiffPixelRatio: 0.02 });
  });

  test('learn page should display correctly on iPhone', async ({ page }) => {
    await page.goto('/learn');
    await page.waitForLoadState('networkidle');

    // Check lesson cards are visible
    const lessonCards = page.locator('[class*="rounded"]').first();
    await expect(lessonCards).toBeVisible();

    // Ensure no horizontal scrollbar
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    await expect(page).toHaveScreenshot('learn-iphone.png', { maxDiffPixelRatio: 0.02 });
  });

  test('gita chapter page should display correctly on iPhone', async ({ page }) => {
    await page.goto('/gita/2');
    await page.waitForLoadState('networkidle');

    // Check verse picker is visible and properly sized
    const versePicker = page.locator('text=Jump to verse').first();
    await expect(versePicker).toBeVisible();

    // Ensure verse picker scrolls horizontally if needed (expected behavior)
    // but main content doesn't overflow
    const mainHasScroll = await page.evaluate(() => {
      const main = document.querySelector('main');
      return main ? main.scrollWidth > main.clientWidth : false;
    });
    // Main content should not overflow
    expect(mainHasScroll).toBe(false);

    await expect(page).toHaveScreenshot('gita-chapter-iphone.png', { maxDiffPixelRatio: 0.02 });
  });

  test('search page should be usable on iPhone', async ({ page }) => {
    await page.goto('/search');
    await page.waitForLoadState('networkidle');

    // Check search input is visible and tappable
    const searchInput = page.getByPlaceholder(/search/i);
    await expect(searchInput).toBeVisible();

    // Type and search
    await searchInput.fill('karma');
    await searchInput.press('Enter');
    await page.waitForTimeout(500);

    // Results should be visible
    const results = page.locator('main');
    await expect(results).toBeVisible();

    await expect(page).toHaveScreenshot('search-iphone.png', { maxDiffPixelRatio: 0.02 });
  });

  test('navigation should be accessible on iPhone', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Allow time for hydration

    // Check nav links exist (use href selectors for reliability)
    const learnLink = page.locator('a[href="/learn"]').first();
    const searchLink = page.locator('a[href="/search"]').first();
    const profileLink = page.locator('a[href="/profile"]').first();

    // At least some navigation should be visible
    const navVisible =
      (await learnLink.isVisible().catch(() => false)) ||
      (await searchLink.isVisible().catch(() => false)) ||
      (await profileLink.isVisible().catch(() => false));

    expect(navVisible).toBe(true);

    // Test navigation works if learn link is visible
    if (await learnLink.isVisible()) {
      await learnLink.click();
      await expect(page).toHaveURL('/learn');
    }
  });
});

test.describe('Mobile Responsiveness - iPad', () => {
  test.use(IPAD_PRO_11);

  test('home page should display correctly on iPad', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Allow time for hydration

    // Check body content is visible
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Ensure no horizontal scrollbar
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    await expect(page).toHaveScreenshot('home-ipad.png', { maxDiffPixelRatio: 0.02 });
  });

  test('gita chapters list should display in grid on iPad', async ({ page }) => {
    await page.goto('/gita');
    await page.waitForLoadState('networkidle');

    // On tablet, chapters might display in a grid
    const chapters = page.locator('a[href^="/gita/"]');
    const count = await chapters.count();
    expect(count).toBeGreaterThan(0);

    await expect(page).toHaveScreenshot('gita-list-ipad.png', { maxDiffPixelRatio: 0.02 });
  });
});

test.describe('Mobile Responsiveness - Android', () => {
  test.use(PIXEL_5);

  test('home page should display correctly on Android', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Allow time for hydration

    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Ensure no horizontal scrollbar
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    await expect(page).toHaveScreenshot('home-android.png', { maxDiffPixelRatio: 0.02 });
  });

  test('profile page should display correctly on Android', async ({ page }) => {
    await page.goto('/profile');
    await page.waitForLoadState('networkidle');

    // Check stats section is visible
    const stats = page.locator('text=Days Learning');
    await expect(stats).toBeVisible();

    await expect(page).toHaveScreenshot('profile-android.png', { maxDiffPixelRatio: 0.02 });
  });
});

test.describe('Touch Interactions', () => {
  test.use(IPHONE_13);

  test('verse card should be tappable', async ({ page }) => {
    await page.goto('/gita/2');
    await page.waitForLoadState('networkidle');

    // Find and tap on explanation toggle
    const expandButton = page.locator('text=What Does This Mean?').first();
    if (await expandButton.isVisible()) {
      await expandButton.tap();
      await page.waitForTimeout(300);

      // Content should expand
      const explanation = page.locator('text=Going Deeper').first();
      await expect(explanation).toBeVisible();
    }
  });

  test('navigation buttons should be large enough for touch', async ({ page }) => {
    await page.goto('/gita/2');
    await page.waitForLoadState('networkidle');

    // Check Next button has adequate touch target size (at least 44x44 pixels)
    const nextButton = page.locator('button:has-text("Next")').first();
    if (await nextButton.isVisible()) {
      const box = await nextButton.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});
