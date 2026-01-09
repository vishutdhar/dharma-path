import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Dark Mode Accessibility Tests
 *
 * Tests WCAG 2.1 AA compliance in dark mode.
 * Dark mode has different color combinations that need separate validation.
 */

test.describe('Dark Mode Accessibility', () => {
  // Set dark mode for all tests in this describe block
  test.use({ colorScheme: 'dark' });

  test('home page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('learn page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/learn');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('gita chapter page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/gita/2');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('profile page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/profile');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('search page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/search');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('upanishads page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/upanishads');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test('vedas page should have no critical accessibility violations in dark mode', async ({ page }) => {
    await page.goto('/vedas');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalViolations.length > 0) {
      console.log('Critical/Serious Dark Mode Accessibility Violations:');
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        console.log(`  Help: ${v.helpUrl}`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });
});
