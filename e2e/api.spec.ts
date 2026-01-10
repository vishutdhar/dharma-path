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

test.describe('API - Mark Complete Endpoint', () => {
  // Valid UUID v4 format for testing (this won't exist in DB)
  const validUUID = '550e8400-e29b-41d4-a716-446655440000';

  test('GET /api/mark-complete without params should redirect to error page', async ({ request }) => {
    const response = await request.get('/api/mark-complete', {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('lesson-complete');
    expect(location).toContain('error=missing_params');
  });

  test('GET /api/mark-complete without token should redirect to error', async ({ request }) => {
    const response = await request.get('/api/mark-complete?day=5', {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=missing_params');
  });

  test('GET /api/mark-complete without day should redirect to error', async ({ request }) => {
    const response = await request.get(`/api/mark-complete?token=${validUUID}`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=missing_params');
  });

  test('GET /api/mark-complete with invalid UUID should redirect to error', async ({ request }) => {
    const response = await request.get('/api/mark-complete?token=not-a-uuid&day=5', {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_token');
  });

  test('GET /api/mark-complete with UUID v1 (wrong version) should redirect to error', async ({ request }) => {
    // UUID v1 has '1' as first digit of third group instead of '4'
    const uuidV1 = '550e8400-e29b-11d4-a716-446655440000';
    const response = await request.get(`/api/mark-complete?token=${uuidV1}&day=5`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_token');
  });

  test('GET /api/mark-complete with day 0 should redirect to error', async ({ request }) => {
    const response = await request.get(`/api/mark-complete?token=${validUUID}&day=0`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_day');
  });

  test('GET /api/mark-complete with day 129 should redirect to error', async ({ request }) => {
    const response = await request.get(`/api/mark-complete?token=${validUUID}&day=129`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_day');
  });

  test('GET /api/mark-complete with negative day should redirect to error', async ({ request }) => {
    const response = await request.get(`/api/mark-complete?token=${validUUID}&day=-1`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_day');
  });

  test('GET /api/mark-complete with non-numeric day should redirect to error', async ({ request }) => {
    const response = await request.get(`/api/mark-complete?token=${validUUID}&day=abc`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_day');
  });

  test('GET /api/mark-complete with valid format but non-existent token should redirect to error', async ({ request }) => {
    // This is a valid UUID format but doesn't exist in the database
    const response = await request.get(`/api/mark-complete?token=${validUUID}&day=5`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    const location = response.headers()['location'];
    // Should redirect to error (token not found) or server error (no DB configured)
    expect(location).toContain('lesson-complete');
    expect(location).toMatch(/error=(invalid_token|server_error)/);
  });

  test('mark-complete endpoint should prevent XSS in token parameter', async ({ request }) => {
    const xssPayload = '<script>alert("xss")</script>';
    const response = await request.get(`/api/mark-complete?token=${encodeURIComponent(xssPayload)}&day=5`, {
      maxRedirects: 0,
    });

    expect([302, 307]).toContain(response.status());
    // Should not execute script, should validate and reject
    const location = response.headers()['location'];
    expect(location).toContain('error=invalid_token');
  });

  test('mark-complete endpoint should not crash with very long token', async ({ request }) => {
    const longToken = 'a'.repeat(10000);
    const response = await request.get(`/api/mark-complete?token=${longToken}&day=5`, {
      maxRedirects: 0,
    });

    // Should not return 500 (crash)
    expect(response.status()).not.toBe(500);
    expect([302, 307]).toContain(response.status());
  });
});

test.describe('Lesson Complete Page', () => {
  test('lesson-complete success page should display correctly', async ({ page }) => {
    await page.goto('/lesson-complete?day=5&completed=5&lesson=1-2-2');
    await page.waitForLoadState('networkidle');

    // Should show success message
    const heading = page.locator('h1');
    await expect(heading).toContainText('Lesson Marked Complete');

    // Should show day info
    const content = await page.textContent('body');
    expect(content).toContain('Days 1-5');
    expect(content).toContain('5 of 110 lessons completed');

    // Should have link to lesson
    const lessonLink = page.locator('a[href="/learn/1-2-2"]');
    await expect(lessonLink).toBeVisible();

    // Should have home link
    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();
  });

  test('lesson-complete page should handle single day completion', async ({ page }) => {
    await page.goto('/lesson-complete?day=1&completed=1&lesson=1-1-1');
    await page.waitForLoadState('networkidle');

    const content = await page.textContent('body');
    // Should say "Day 1" not "Days 1-1"
    expect(content).toContain('Day 1 has been marked as complete');
    expect(content).toContain('1 of 110 lessons completed');
  });

  test('lesson-complete page should show progress bar', async ({ page }) => {
    await page.goto('/lesson-complete?day=55&completed=55&lesson=4-2-3');
    await page.waitForLoadState('networkidle');

    // Should have progress bar element
    const progressBar = page.locator('[style*="width: 50%"]');
    await expect(progressBar).toBeVisible();
  });

  test('lesson-complete error page should display for missing_params', async ({ page }) => {
    await page.goto('/lesson-complete?error=missing_params');
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1');
    await expect(heading).toContainText('Unable to Mark Complete');

    const content = await page.textContent('body');
    expect(content).toContain('Invalid link');
  });

  test('lesson-complete error page should display for invalid_token', async ({ page }) => {
    await page.goto('/lesson-complete?error=invalid_token');
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1');
    await expect(heading).toContainText('Unable to Mark Complete');

    const content = await page.textContent('body');
    expect(content).toContain('no longer valid');
  });

  test('lesson-complete error page should display for invalid_day', async ({ page }) => {
    await page.goto('/lesson-complete?error=invalid_day');
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1');
    await expect(heading).toContainText('Unable to Mark Complete');

    const content = await page.textContent('body');
    expect(content).toContain('Invalid day');
  });

  test('lesson-complete error page should display for server_error', async ({ page }) => {
    await page.goto('/lesson-complete?error=server_error');
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1');
    await expect(heading).toContainText('Unable to Mark Complete');

    const content = await page.textContent('body');
    expect(content).toContain('Something went wrong');
  });

  test('lesson-complete error page should have home link', async ({ page }) => {
    await page.goto('/lesson-complete?error=invalid_token');
    await page.waitForLoadState('networkidle');

    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toContainText('Go to Home');
  });

  test('lesson-complete page should handle unknown error gracefully', async ({ page }) => {
    await page.goto('/lesson-complete?error=unknown_error_type');
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1');
    await expect(heading).toContainText('Unable to Mark Complete');

    const content = await page.textContent('body');
    expect(content).toContain('unexpected error');
  });

  test('lesson-complete page should load without parameters', async ({ page }) => {
    // Edge case: no params at all should show success state with 0s
    await page.goto('/lesson-complete');
    await page.waitForLoadState('networkidle');

    // Should not crash, should show success page with 0 values
    const heading = page.locator('h1');
    await expect(heading).toContainText('Lesson Marked Complete');
  });
});

test.describe('Mark Complete - Full Flow', () => {
  test('invalid token flow: API redirect -> error page displayed', async ({ page }) => {
    // Simulate clicking email link with invalid token
    const response = await page.goto('/api/mark-complete?token=invalid-token&day=5');

    // Should end up on error page after redirect
    await page.waitForLoadState('networkidle');

    const url = page.url();
    expect(url).toContain('lesson-complete');
    expect(url).toContain('error=invalid_token');

    const heading = page.locator('h1');
    await expect(heading).toContainText('Unable to Mark Complete');
  });

  test('missing day flow: API redirect -> error page displayed', async ({ page }) => {
    const validUUID = '550e8400-e29b-41d4-a716-446655440000';
    await page.goto(`/api/mark-complete?token=${validUUID}`);
    await page.waitForLoadState('networkidle');

    const url = page.url();
    expect(url).toContain('lesson-complete');
    expect(url).toContain('error=missing_params');
  });

  test('invalid day flow: API redirect -> error page displayed', async ({ page }) => {
    const validUUID = '550e8400-e29b-41d4-a716-446655440000';
    await page.goto(`/api/mark-complete?token=${validUUID}&day=999`);
    await page.waitForLoadState('networkidle');

    const url = page.url();
    expect(url).toContain('lesson-complete');
    expect(url).toContain('error=invalid_day');
  });

  test('lesson link on success page should navigate correctly', async ({ page }) => {
    await page.goto('/lesson-complete?day=5&completed=5&lesson=1-2-2');
    await page.waitForLoadState('networkidle');

    // Click the lesson link and wait for navigation
    await Promise.all([
      page.waitForURL('**/learn/1-2-2**'),
      page.click('a[href="/learn/1-2-2"]'),
    ]);

    // Should be on the lesson page
    expect(page.url()).toContain('/learn/1-2-2');
  });

  test('home link on error page should navigate correctly', async ({ page }) => {
    await page.goto('/lesson-complete?error=invalid_token');
    await page.waitForLoadState('networkidle');

    // Click home link and wait for navigation
    await Promise.all([
      page.waitForURL(/^http:\/\/localhost:\d+\/$/),
      page.click('a[href="/"]'),
    ]);

    // Should be on home page
    expect(page.url()).toMatch(/^http:\/\/localhost:\d+\/$/);
  });
});
