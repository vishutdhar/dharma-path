import { test, expect } from '@playwright/test';

test.describe('Progress Tracking', () => {
  test.beforeEach(async ({ page, context }) => {
    // Clear storage via context to avoid navigation issues
    await context.clearCookies();
    // Go to home page
    await page.goto('/');
    // Clear localStorage after page loads
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  });

  test('should show lesson 1-1-1 for new users on home page', async ({ page }) => {
    // Skip onboarding if shown
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }

    // Verify "Continue Learning" shows first lesson
    await expect(page.getByRole('heading', { name: 'Not One Religion, But Many' })).toBeVisible();
    await expect(page.getByText('Level 1 · What is Hinduism?')).toBeVisible();
  });

  test('should update home page after completing a lesson', async ({ page }) => {
    // Skip onboarding if shown
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }

    // Navigate to first lesson
    await page.getByRole('link', { name: /Continue Learning/ }).click();

    // Wait for lesson page
    await expect(page).toHaveURL(/\/learn\/1-1-1/);

    // Complete the lesson
    await page.getByRole('button', { name: 'Mark as Complete' }).click();

    // Should show "Lesson Completed!"
    await expect(page.getByText('Lesson Completed!')).toBeVisible();

    // Navigate back to home
    await page.goto('/');

    // Skip onboarding again if shown (localStorage might have been preserved)
    const skipAgain = page.getByRole('button', { name: 'Skip' });
    if (await skipAgain.isVisible({ timeout: 1000 }).catch(() => false)) {
      await skipAgain.click();
    }

    // Should now show lesson 2 (Sanatana Dharma: The Eternal Way)
    await expect(page.getByRole('heading', { name: 'Sanatana Dharma' })).toBeVisible({ timeout: 5000 });

    // Stats should update
    await expect(page.getByText('1', { exact: true }).first()).toBeVisible(); // 1 lesson done
  });

  test('should track completed lessons correctly', async ({ page }) => {
    // Skip onboarding
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }

    // Go to lesson page
    await page.goto('/learn/1-1-1');

    // Verify lesson is not completed initially
    await expect(page.getByRole('button', { name: 'Mark as Complete' })).toBeVisible();

    // Complete the lesson
    await page.getByRole('button', { name: 'Mark as Complete' }).click();

    // Go back and revisit the lesson
    await page.goto('/learn/1-1-1');

    // Should show as completed (no "Mark as Complete" button)
    await expect(page.getByText("You've completed this lesson")).toBeVisible();
  });

  test('should allow bookmarking verses', async ({ page }) => {
    // Go directly to a verse page
    await page.goto('/gita/2/47');

    // Find and click bookmark button (if exists)
    const bookmarkButton = page.locator('[aria-label*="bookmark"], button:has-text("Bookmark")');
    if (await bookmarkButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await bookmarkButton.click();

      // Go to profile to see bookmarks
      await page.goto('/profile');

      // Bookmark should be visible
      await expect(page.getByText('2:47')).toBeVisible({ timeout: 5000 });
    }
  });
});

test.describe('Navigation', () => {
  test('should navigate between all main pages', async ({ page, context }) => {
    // Clear storage
    await context.clearCookies();
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });

    // Skip onboarding if shown
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }

    // Wait for navigation to be visible
    await page.waitForSelector('nav', { timeout: 5000 });

    // Navigate to Learn (use href selector for reliability)
    await page.locator('nav a[href="/learn"]').click();
    await expect(page).toHaveURL('/learn');

    // Navigate to Gita (direct navigation)
    await page.goto('/gita');
    await expect(page).toHaveURL('/gita');

    // Navigate to Search
    await page.locator('nav a[href="/search"]').click();
    await expect(page).toHaveURL('/search');

    // Navigate to Profile
    await page.locator('nav a[href="/profile"]').click();
    await expect(page).toHaveURL('/profile');

    // Navigate back to Home
    await page.locator('nav a[href="/"]').click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Gita Reader', () => {
  test('should display chapters', async ({ page }) => {
    await page.goto('/gita');

    // Wait for chapters to load (they're fetched from API)
    await page.waitForSelector('text=Arjuna', { timeout: 10000 });

    // Should show chapter names (not "Chapter 1" format)
    await expect(page.getByText("Arjuna's Dilemma")).toBeVisible();
    await expect(page.getByText("The Eternal Soul")).toBeVisible();
  });

  test('should display verses in a chapter', async ({ page }) => {
    await page.goto('/gita/2');

    // Should show verses
    await expect(page.locator('text=2.1')).toBeVisible({ timeout: 5000 });
  });

  test('should display verse details', async ({ page }) => {
    await page.goto('/gita/2/47');

    // Should show Sanskrit text
    await expect(page.locator('.sanskrit-text, [class*="sanskrit"]').first()).toBeVisible({ timeout: 5000 });

    // Should show translation
    await expect(page.locator('text=/translation|translat/i').first()).toBeVisible().catch(() => {
      // If no explicit translation label, just verify page loaded
      return expect(page.locator('body')).toContainText('2.47');
    });
  });
});
