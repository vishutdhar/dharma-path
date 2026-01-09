/**
 * k6 Load Testing Script for Dharma Path
 *
 * This script simulates concurrent users accessing the application
 * to test how it handles load and identify bottlenecks.
 *
 * Install k6: brew install k6 (macOS) or https://k6.io/docs/get-started/installation/
 *
 * Run locally: k6 run stress-tests/k6/load-test.js
 * Run against production: k6 run -e BASE_URL=https://mydharmapath.com stress-tests/k6/load-test.js
 */

import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');
const pageLoadTime = new Trend('page_load_time');

// Configuration - can be overridden via environment variables
const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

// Test scenarios
export const options = {
  scenarios: {
    // Scenario 1: Smoke test - light load to verify system works
    smoke: {
      executor: 'constant-vus',
      vus: 1,
      duration: '30s',
      startTime: '0s',
      tags: { test_type: 'smoke' },
    },

    // Scenario 2: Load test - normal expected load
    load: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 10 },  // Ramp up to 10 users
        { duration: '3m', target: 10 },  // Stay at 10 users
        { duration: '1m', target: 0 },   // Ramp down
      ],
      startTime: '35s',
      tags: { test_type: 'load' },
    },

    // Scenario 3: Stress test - beyond normal load
    stress: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 20 },  // Ramp up to 20 users
        { duration: '2m', target: 50 },  // Push to 50 users
        { duration: '2m', target: 50 },  // Stay at 50 users
        { duration: '1m', target: 0 },   // Ramp down
      ],
      startTime: '6m',
      tags: { test_type: 'stress' },
    },

    // Scenario 4: Spike test - sudden traffic burst
    spike: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: 100 }, // Sudden spike to 100 users
        { duration: '1m', target: 100 },  // Stay at 100
        { duration: '10s', target: 0 },   // Quick drop
      ],
      startTime: '13m',
      tags: { test_type: 'spike' },
    },
  },

  // Thresholds - test fails if these aren't met
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests must complete within 2s
    http_req_failed: ['rate<0.05'],    // Less than 5% failure rate
    errors: ['rate<0.1'],              // Custom error rate below 10%
  },
};

// Main test function - each VU runs this
export default function () {
  // Simulate a realistic user journey

  group('Homepage', () => {
    const start = Date.now();
    const res = http.get(`${BASE_URL}/`);
    pageLoadTime.add(Date.now() - start);

    const success = check(res, {
      'homepage status is 200': (r) => r.status === 200,
      'homepage has content': (r) => r.body && r.body.length > 0,
      'homepage loads fast': (r) => r.timings.duration < 2000,
    });

    errorRate.add(!success);
    sleep(1 + Math.random() * 2); // Random think time 1-3 seconds
  });

  group('Learn Page', () => {
    const start = Date.now();
    const res = http.get(`${BASE_URL}/learn`);
    pageLoadTime.add(Date.now() - start);

    const success = check(res, {
      'learn page status is 200': (r) => r.status === 200,
      'learn page has curriculum': (r) => r.body && r.body.includes('Level'),
    });

    errorRate.add(!success);
    sleep(1 + Math.random() * 2);
  });

  group('Gita Chapters', () => {
    const start = Date.now();
    const res = http.get(`${BASE_URL}/gita`);
    pageLoadTime.add(Date.now() - start);

    const success = check(res, {
      'gita page status is 200': (r) => r.status === 200,
      'gita page has content': (r) => r.body && r.body.length > 1000, // Client-rendered page, check for substantial content
    });

    errorRate.add(!success);
    sleep(0.5 + Math.random());
  });

  group('Gita Chapter 2', () => {
    const start = Date.now();
    const res = http.get(`${BASE_URL}/gita/2`);
    pageLoadTime.add(Date.now() - start);

    const success = check(res, {
      'chapter 2 status is 200': (r) => r.status === 200,
      'chapter 2 loads': (r) => r.timings.duration < 3000,
    });

    errorRate.add(!success);
    sleep(2 + Math.random() * 3); // Longer reading time
  });

  group('Gita Verse Navigation', () => {
    // Test the URL persistence we just added
    const verses = [1, 10, 20, 47];
    for (const verse of verses) {
      const res = http.get(`${BASE_URL}/gita/2?v=${verse}`);

      const success = check(res, {
        [`verse ${verse} loads`]: (r) => r.status === 200,
      });

      errorRate.add(!success);
      sleep(0.5);
    }
  });

  group('Search Page', () => {
    const start = Date.now();
    const res = http.get(`${BASE_URL}/search`);
    pageLoadTime.add(Date.now() - start);

    const success = check(res, {
      'search page status is 200': (r) => r.status === 200,
    });

    errorRate.add(!success);
    sleep(1 + Math.random());
  });

  group('Profile Page', () => {
    const start = Date.now();
    const res = http.get(`${BASE_URL}/profile`);
    pageLoadTime.add(Date.now() - start);

    const success = check(res, {
      'profile page status is 200': (r) => r.status === 200,
    });

    errorRate.add(!success);
    sleep(1 + Math.random());
  });

  group('Upanishads', () => {
    const res = http.get(`${BASE_URL}/upanishads`);

    const success = check(res, {
      'upanishads page status is 200': (r) => r.status === 200,
    });

    errorRate.add(!success);
    sleep(0.5 + Math.random());
  });

  group('Vedas', () => {
    const res = http.get(`${BASE_URL}/vedas`);

    const success = check(res, {
      'vedas page status is 200': (r) => r.status === 200,
    });

    errorRate.add(!success);
    sleep(0.5 + Math.random());
  });

  group('Static Assets', () => {
    // Test manifest and service worker
    const manifest = http.get(`${BASE_URL}/manifest.json`);
    check(manifest, {
      'manifest loads': (r) => r.status === 200,
    });

    const sw = http.get(`${BASE_URL}/sw.js`);
    check(sw, {
      'service worker loads': (r) => r.status === 200,
    });
  });
}

// Lifecycle hooks
export function setup() {
  console.log(`Starting load test against: ${BASE_URL}`);

  // Verify the server is up before starting
  const res = http.get(`${BASE_URL}/`);
  if (res.status !== 200) {
    throw new Error(`Server not ready. Status: ${res.status}`);
  }

  return { startTime: Date.now() };
}

export function teardown(data) {
  const duration = (Date.now() - data.startTime) / 1000;
  console.log(`Load test completed in ${duration.toFixed(2)} seconds`);
}
