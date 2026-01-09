import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility Tests
 *
 * These tests use axe-core to check for WCAG accessibility violations.
 * Violations are categorized by impact: critical, serious, moderate, minor.
 */

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page, context }) => {
    // Clear storage for consistent state
    await context.clearCookies();
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem('hasSeenOnboarding', 'true');
    });
  });

  test('home page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/');
    // Skip onboarding if shown
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }
    await page.waitForSelector('nav', { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('learn page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/learn');
    const skipButton = page.getByRole('button', { name: 'Skip' });
    if (await skipButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipButton.click();
    }
    await page.waitForSelector('nav', { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('gita chapters page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/gita');
    await page.waitForSelector("text=Arjuna's Dilemma", { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('gita chapter page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/gita/2');
    await page.waitForSelector('text=Jump to verse', { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('gita verse detail page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/gita/2/47');
    await page.waitForSelector('text=2.47', { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('search page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/search');
    await page.waitForSelector('input[placeholder*="Search" i]', { timeout: 5000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('profile page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/profile');
    await page.waitForSelector('text=Sign In', { timeout: 5000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('upanishads page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/upanishads');
    await page.waitForSelector('text=Upanishads', { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('vedas page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/vedas');
    await page.waitForSelector('text=Vedas', { timeout: 10000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });
});
