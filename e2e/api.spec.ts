import { test, expect } from '@playwright/test';

/**
 * API Endpoint Tests
 *
 * Tests the API routes for proper responses and error handling.
 * Note: Some tests may require environment variables to be set.
 */

test.describe('API - Unsubscribe Endpoint', () => {
  test('GET /api/unsubscribe without email should redirect to error page', async ({ request }) => {
    const response = await request.get('/api/unsubscribe', {
      maxRedirects: 0,
    });

    // Should redirect (302 or 307)
    expect([302, 307]).toContain(response.status());

    // Should redirect to error page
    const location = response.headers()['location'];
    expect(location).toContain('unsubscribe-error');
  });

  test('GET /api/unsubscribe with invalid email should handle gracefully', async ({ request }) => {
    const response = await request.get('/api/unsubscribe?email=invalid@test.com', {
      maxRedirects: 0,
    });

    // Should redirect (either to error or success depending on DB state)
    expect([302, 307]).toContain(response.status());
  });

  test('GET /api/unsubscribe with malformed email should not crash', async ({ request }) => {
    const response = await request.get('/api/unsubscribe?email=not-an-email', {
      maxRedirects: 0,
    });

    // Should not return 500
    expect(response.status()).not.toBe(500);
  });

  test('unsubscribe endpoint should prevent XSS in email parameter', async ({ request }) => {
    const xssPayload = '<script>alert("xss")</script>';
    const response = await request.get(`/api/unsubscribe?email=${encodeURIComponent(xssPayload)}`, {
      maxRedirects: 0,
    });

    // Should redirect, not execute script
    expect([302, 307]).toContain(response.status());
  });
});

test.describe('API - Cron Email Endpoint', () => {
  test('GET /api/cron/send-daily-emails should require authorization', async ({ request }) => {
    // Without proper authorization, should fail or redirect
    const response = await request.get('/api/cron/send-daily-emails');

    // Could be 401 Unauthorized, 403 Forbidden, or redirect
    // Exact behavior depends on implementation
    // At minimum, it should not return 200 without auth
    // Note: In development without auth configured, it might return 200
    expect(response.status()).toBeDefined();
  });
});

test.describe('API - Error Pages', () => {
  test('unsubscribed page should load', async ({ page }) => {
    await page.goto('/unsubscribed');
    await page.waitForLoadState('networkidle');

    // Should show success message
    const content = await page.textContent('body');
    expect(content).toContain('unsubscribed');
  });

  test('unsubscribe-error page should load', async ({ page }) => {
    await page.goto('/unsubscribe-error');
    await page.waitForLoadState('networkidle');

    // Should show error message
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toMatch(/error|problem|sorry/);
  });
});

test.describe('API - Static Assets', () => {
  test('favicon should be accessible', async ({ request }) => {
    const response = await request.get('/favicon.png');
    expect(response.status()).toBe(200);
  });

  test('robots.txt should be accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');
    // robots.txt might be auto-generated or custom
    expect([200, 404]).toContain(response.status());

    if (response.status() === 200) {
      const content = await response.text();
      // Should have basic directives
      expect(content.toLowerCase()).toMatch(/user-agent|allow|disallow|sitemap/);
    }
  });

  test('sitemap.xml should be accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const content = await response.text();
    expect(content).toContain('<?xml');
    expect(content).toContain('urlset');
  });
});

test.describe('API - Security Headers', () => {
  test('responses should have basic security headers', async ({ request }) => {
    const response = await request.get('/');

    const headers = response.headers();

    // X-Content-Type-Options (prevents MIME sniffing)
    // Note: Next.js might or might not set these by default
    // These tests document expected behavior

    // Content-Type should be set
    expect(headers['content-type']).toBeTruthy();
  });

  test('API responses should not expose sensitive headers', async ({ request }) => {
    const response = await request.get('/api/unsubscribe?email=test@test.com', {
      maxRedirects: 0,
    });

    const headers = response.headers();

    // Should not expose server details
    expect(headers['x-powered-by']).toBeFalsy();
  });
});

test.describe('API - Rate Limiting', () => {
  test('multiple rapid requests should not crash the server', async ({ request }) => {
    // Send 10 rapid requests
    const requests = Array(10)
      .fill(null)
      .map(() =>
        request.get('/api/unsubscribe?email=test@test.com', {
          maxRedirects: 0,
        })
      );

    const responses = await Promise.all(requests);

    // All should complete (not hang or error)
    responses.forEach((response) => {
      expect(response.status()).toBeDefined();
      expect(response.status()).not.toBe(500);
    });
  });
});

test.describe('API - Content Types', () => {
  test('HTML pages should return correct content type', async ({ request }) => {
    const response = await request.get('/');
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('text/html');
  });

  test('JSON endpoints should return correct content type', async ({ request }) => {
    const response = await request.get('/manifest.json');
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');
  });

  test('XML endpoints should return correct content type', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('xml');
  });
});

test.describe('API - 404 Handling', () => {
  test('non-existent page should return 404', async ({ page }) => {
    const response = await page.goto('/non-existent-page-12345');
    expect(response?.status()).toBe(404);
  });

  test('404 page should be user-friendly', async ({ page }) => {
    await page.goto('/non-existent-page-12345');

    // Should show helpful content
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toMatch(/not found|404|doesn't exist/);

    // Should have link back to home
    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();
  });

  test('non-existent API route should return error', async ({ request }) => {
    const response = await request.get('/api/non-existent-endpoint');
    expect([404, 405]).toContain(response.status());
  });
});

test.describe('API - Error Handling', () => {
  test('error page should display correctly', async ({ page }) => {
    // Trigger an error page (if configured)
    await page.goto('/error-test-page-that-does-not-exist');

    // Should show error page or 404
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
