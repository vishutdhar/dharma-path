import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false, // Run tests sequentially to avoid state conflicts
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Single worker to ensure sequential execution
  reporter: 'html',
  timeout: 60000, // 60 second timeout per test
  // Snapshot settings for visual regression testing
  snapshotDir: './e2e/snapshots',
  snapshotPathTemplate: '{snapshotDir}/{testFilePath}/{arg}{ext}',
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01, // Allow 1% pixel difference
      threshold: 0.2, // Color threshold for anti-aliasing
    },
  },
  use: {
    baseURL: 'http://localhost:3002',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Use existing dev server on port 3002
  webServer: {
    command: 'npm run dev -- --port 3002',
    url: 'http://localhost:3002',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
