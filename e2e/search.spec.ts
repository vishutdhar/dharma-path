import { test, expect } from '@playwright/test';

test.describe('Search', () => {
  test('should load search page', async ({ page }) => {
    await page.goto('/search');
    await expect(page.getByPlaceholder(/search/i)).toBeVisible();
  });

  test('should return results when searching for "karma"', async ({ page }) => {
    await page.goto('/search');
    await page.getByPlaceholder(/search/i).fill('karma');

    // Wait for results to appear
    await expect(page.getByText(/karma/i).first()).toBeVisible({ timeout: 5000 });
  });

  test('should return results when searching for "dharma"', async ({ page }) => {
    await page.goto('/search');
    await page.getByPlaceholder(/search/i).fill('dharma');

    // Wait for results to appear
    await expect(page.getByText(/dharma/i).first()).toBeVisible({ timeout: 5000 });
  });

  test('should show no results message for gibberish', async ({ page }) => {
    await page.goto('/search');
    await page.getByPlaceholder(/search/i).fill('xyznonexistent123');

    // Should show no results or empty state
    await page.waitForTimeout(1000);
    const resultsCount = await page.locator('[data-testid="search-result"]').count();
    expect(resultsCount).toBe(0);
  });
});
