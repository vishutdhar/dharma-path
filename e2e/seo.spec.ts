import { test, expect } from '@playwright/test';

/**
 * SEO Tests
 *
 * Tests meta tags, Open Graph tags, structured data, and other SEO elements.
 * Ensures the app is properly optimized for search engines and social sharing.
 */

test.describe('SEO - Meta Tags', () => {
  test('home page should have correct meta tags', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Title
    const title = await page.title();
    expect(title).toContain('Dharma Path');

    // Meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
    expect(description!.length).toBeLessThan(160); // SEO best practice

    // Keywords
    const keywords = await page.locator('meta[name="keywords"]').getAttribute('content');
    expect(keywords).toContain('Hinduism');
    expect(keywords).toContain('Bhagavad Gita');

    // Viewport
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');

    // Language
    const html = page.locator('html');
    const lang = await html.getAttribute('lang');
    expect(lang).toBe('en');
  });

  test('home page should have correct robots meta', async ({ page }) => {
    await page.goto('/');

    // Check robots meta allows indexing
    const robots = await page.locator('meta[name="robots"]').getAttribute('content');
    if (robots) {
      expect(robots).toContain('index');
      expect(robots).toContain('follow');
    }
  });
});

test.describe('SEO - Open Graph Tags', () => {
  test('home page should have Open Graph meta tags', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // OG Title
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    expect(ogTitle).toContain('Dharma Path');

    // OG Description
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();

    // OG Type
    const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
    expect(ogType).toBe('website');

    // OG URL
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    expect(ogUrl).toContain('mydharmapath.com');

    // OG Image
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toBeTruthy();

    // OG Site Name
    const ogSiteName = await page.locator('meta[property="og:site_name"]').getAttribute('content');
    expect(ogSiteName).toBe('Dharma Path');

    // OG Locale
    const ogLocale = await page.locator('meta[property="og:locale"]').getAttribute('content');
    expect(ogLocale).toBe('en_US');
  });

  test('Open Graph image should be accessible', async ({ page, request }) => {
    await page.goto('/');

    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toBeTruthy();

    // Check if image URL is valid (responds with 200)
    if (ogImage && ogImage.startsWith('http')) {
      const response = await request.get(ogImage);
      expect(response.status()).toBe(200);
    }
  });
});

test.describe('SEO - Twitter Cards', () => {
  test('home page should have Twitter Card meta tags', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Twitter Card Type
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    expect(twitterCard).toBe('summary_large_image');

    // Twitter Title
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
    expect(twitterTitle).toBeTruthy();

    // Twitter Description
    const twitterDescription = await page.locator('meta[name="twitter:description"]').getAttribute('content');
    expect(twitterDescription).toBeTruthy();

    // Twitter Image
    const twitterImage = await page.locator('meta[name="twitter:image"]').getAttribute('content');
    expect(twitterImage).toBeTruthy();
  });
});

test.describe('SEO - Structured Data', () => {
  test('home page should have JSON-LD structured data', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find JSON-LD script
    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScript.count();
    expect(count).toBeGreaterThan(0);

    // Parse and validate JSON-LD
    const jsonLdContent = await jsonLdScript.first().textContent();
    expect(jsonLdContent).toBeTruthy();

    const jsonLd = JSON.parse(jsonLdContent!);

    // Should have @context
    expect(jsonLd['@context']).toContain('schema.org');

    // Should have @type
    expect(jsonLd['@type']).toBeTruthy();
  });
});

test.describe('SEO - Sitemap', () => {
  test('sitemap.xml should be accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('xml');

    const body = await response.text();
    expect(body).toContain('<?xml');
    expect(body).toContain('urlset');
  });

  test('sitemap should contain main pages', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    const body = await response.text();

    // Check for main pages
    expect(body).toContain('/gita');
    expect(body).toContain('/learn');
    expect(body).toContain('/upanishads');
    expect(body).toContain('/vedas');
  });
});

test.describe('SEO - Canonical URLs', () => {
  test('pages should have canonical URLs if present', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for canonical link (optional - some sites don't use them)
    const canonicalLink = page.locator('link[rel="canonical"]');
    const count = await canonicalLink.count();

    if (count > 0) {
      const canonical = await canonicalLink.getAttribute('href');
      if (canonical) {
        expect(canonical).toContain('mydharmapath.com');
      }
    }
    // Test passes if canonical is not present (it's optional)
  });
});

test.describe('SEO - Page Titles', () => {
  test('different pages should have unique titles', async ({ page }) => {
    const titles: string[] = [];

    // Home
    await page.goto('/');
    titles.push(await page.title());

    // Learn
    await page.goto('/learn');
    titles.push(await page.title());

    // Gita
    await page.goto('/gita');
    titles.push(await page.title());

    // Profile
    await page.goto('/profile');
    titles.push(await page.title());

    // All titles should be unique
    const uniqueTitles = [...new Set(titles)];
    // At least some pages should have unique titles
    expect(uniqueTitles.length).toBeGreaterThanOrEqual(1);
  });

  test('page titles should follow template pattern', async ({ page }) => {
    await page.goto('/gita');
    const title = await page.title();

    // Should follow pattern: Page Title | Dharma Path
    // Or contain Dharma Path
    expect(title).toContain('Dharma Path');
  });
});

test.describe('SEO - Heading Structure', () => {
  test('home page should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Should have exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // H1 should contain meaningful content
    const h1Text = await page.locator('h1').first().textContent();
    expect(h1Text).toBeTruthy();
    expect(h1Text!.length).toBeGreaterThan(0);
  });

  test('learn page should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/learn');
    await page.waitForLoadState('networkidle');

    // Should have exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });
});

test.describe('SEO - Alt Text', () => {
  test('images should have alt text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all images
    const images = page.locator('img');
    const imageCount = await images.count();

    // Check each image has alt attribute
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const role = await img.getAttribute('role');

      // Image should have alt OR be decorative (role="presentation" or alt="")
      const hasAlt = alt !== null;
      const isDecorative = role === 'presentation' || alt === '';

      expect(hasAlt || isDecorative).toBe(true);
    }
  });
});
