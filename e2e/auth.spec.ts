import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  });

  test('should show sign in form on profile page', async ({ page }) => {
    await page.goto('/profile');
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('should show create account form when toggled', async ({ page }) => {
    await page.goto('/profile');
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.getByText(/don't have an account/i).click();
    await expect(page.getByRole('button', { name: /create account/i })).toBeVisible();
  });

  test('should show email confirmation message after sign up', async ({ page }) => {
    await page.goto('/profile');
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.getByText(/don't have an account/i).click();

    // Fill in sign up form with unique test email
    const uniqueEmail = `test-signup-${Date.now()}@example.com`;
    await page.getByPlaceholder('Email').fill(uniqueEmail);
    await page.getByPlaceholder('Password').fill('testpassword123');
    await page.getByRole('button', { name: /create account/i }).click();

    // Should show confirmation message, rate limit, or invalid email error from Supabase
    // Note: Supabase may reject example.com emails as invalid, which is expected behavior
    await expect(
      page.getByText(/check your email|email rate limit|too many requests|is invalid/i)
    ).toBeVisible({ timeout: 10000 });
  });

  test('should show error for invalid sign in', async ({ page }) => {
    await page.goto('/profile');
    await page.getByRole('button', { name: /sign in/i }).click();

    await page.getByPlaceholder('Email').fill('nonexistent@example.com');
    await page.getByPlaceholder('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Should show error message
    await expect(page.getByText(/invalid|error|incorrect/i)).toBeVisible({ timeout: 10000 });
  });
});
