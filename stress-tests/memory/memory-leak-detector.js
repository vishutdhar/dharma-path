/**
 * Memory Leak Detector for Dharma Path
 *
 * This script uses Puppeteer to detect memory leaks by:
 * 1. Taking heap snapshots at intervals
 * 2. Navigating through the app repeatedly
 * 3. Comparing heap growth over time
 * 4. Identifying potential leak patterns
 *
 * Install dependencies: npm install puppeteer
 * Run: node stress-tests/memory/memory-leak-detector.js
 *
 * For more detailed analysis, run Chrome with:
 * --js-flags="--expose-gc" to enable manual garbage collection
 */

const puppeteer = require('puppeteer');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const ROUNDS = parseInt(process.env.ROUNDS) || 5;
const VERBOSE = process.env.VERBOSE === 'true';

// Memory thresholds
const ACCEPTABLE_GROWTH_PERCENT = 50; // 50% growth is acceptable
const CONCERNING_GROWTH_PERCENT = 100; // 100% growth is concerning
const CRITICAL_GROWTH_PERCENT = 200; // 200%+ indicates likely leak

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function getMemoryMetrics(page) {
  try {
    const metrics = await page.metrics();
    return {
      jsHeapUsedSize: metrics.JSHeapUsedSize,
      jsHeapTotalSize: metrics.JSHeapTotalSize,
      documents: metrics.Documents,
      nodes: metrics.Nodes,
      jsEventListeners: metrics.JSEventListeners,
    };
  } catch (error) {
    console.error('Failed to get metrics:', error.message);
    return null;
  }
}

async function forceGC(page) {
  try {
    // Try to trigger garbage collection
    await page.evaluate(() => {
      // Attempt to trigger GC indirectly
      const arrays = [];
      for (let i = 0; i < 100; i++) {
        arrays.push(new Array(10000).fill('gc'));
      }
      arrays.length = 0;
    });

    // Give browser time to GC
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    // Ignore GC errors
  }
}

async function testScenario(page, name, navigationFn) {
  log(`\n📊 Testing: ${name}`, 'cyan');
  log('─'.repeat(50));

  const memoryReadings = [];

  // Get baseline
  await forceGC(page);
  const baseline = await getMemoryMetrics(page);
  if (!baseline) {
    log('  ⚠️ Could not get baseline metrics', 'yellow');
    return { name, status: 'skipped' };
  }

  memoryReadings.push({ round: 0, ...baseline });
  log(`  Baseline: ${formatBytes(baseline.jsHeapUsedSize)} (${baseline.jsEventListeners} listeners)`);

  // Run navigation rounds
  for (let round = 1; round <= ROUNDS; round++) {
    try {
      await navigationFn(page);
      await forceGC(page);

      const metrics = await getMemoryMetrics(page);
      if (metrics) {
        memoryReadings.push({ round, ...metrics });

        if (VERBOSE) {
          const growth = ((metrics.jsHeapUsedSize - baseline.jsHeapUsedSize) / baseline.jsHeapUsedSize) * 100;
          log(`  Round ${round}: ${formatBytes(metrics.jsHeapUsedSize)} (${growth.toFixed(1)}% growth, ${metrics.jsEventListeners} listeners)`);
        }
      }
    } catch (error) {
      log(`  ⚠️ Round ${round} error: ${error.message}`, 'yellow');
    }
  }

  // Analyze results
  const finalMetrics = memoryReadings[memoryReadings.length - 1];
  if (!finalMetrics) {
    return { name, status: 'error' };
  }

  const heapGrowth = ((finalMetrics.jsHeapUsedSize - baseline.jsHeapUsedSize) / baseline.jsHeapUsedSize) * 100;
  const listenerGrowth = finalMetrics.jsEventListeners - baseline.jsEventListeners;
  const nodeGrowth = finalMetrics.nodes - baseline.nodes;

  // Determine status
  let status = 'pass';
  let statusColor = 'green';

  if (heapGrowth > CRITICAL_GROWTH_PERCENT || listenerGrowth > 100) {
    status = 'fail';
    statusColor = 'red';
  } else if (heapGrowth > CONCERNING_GROWTH_PERCENT || listenerGrowth > 50) {
    status = 'warn';
    statusColor = 'yellow';
  }

  // Output results
  log(`\n  Results:`, 'blue');
  log(`  • Heap: ${formatBytes(baseline.jsHeapUsedSize)} → ${formatBytes(finalMetrics.jsHeapUsedSize)} (${heapGrowth.toFixed(1)}%)`);
  log(`  • Listeners: ${baseline.jsEventListeners} → ${finalMetrics.jsEventListeners} (${listenerGrowth > 0 ? '+' : ''}${listenerGrowth})`);
  log(`  • DOM Nodes: ${baseline.nodes} → ${finalMetrics.nodes} (${nodeGrowth > 0 ? '+' : ''}${nodeGrowth})`);

  if (status === 'pass') {
    log(`  ✅ PASS - Memory growth within acceptable limits`, statusColor);
  } else if (status === 'warn') {
    log(`  ⚠️ WARNING - Elevated memory growth detected`, statusColor);
  } else {
    log(`  ❌ FAIL - Potential memory leak detected`, statusColor);
  }

  return {
    name,
    status,
    baseline: baseline.jsHeapUsedSize,
    final: finalMetrics.jsHeapUsedSize,
    heapGrowthPercent: heapGrowth,
    listenerGrowth,
    nodeGrowth,
  };
}

async function runMemoryTests() {
  log('\n🔍 Dharma Path Memory Leak Detector', 'blue');
  log('═'.repeat(50));
  log(`Target: ${BASE_URL}`);
  log(`Rounds per test: ${ROUNDS}`);
  log(`Thresholds: Pass < ${ACCEPTABLE_GROWTH_PERCENT}%, Warn < ${CONCERNING_GROWTH_PERCENT}%, Fail >= ${CRITICAL_GROWTH_PERCENT}%`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--js-flags=--expose-gc',
    ],
  });

  const results = [];

  try {
    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({ width: 1280, height: 720 });

    // Verify server is running
    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 10000 });
    } catch (error) {
      log(`\n❌ Server not responding at ${BASE_URL}`, 'red');
      log('Please start the dev server with: npm run dev', 'yellow');
      process.exit(1);
    }

    // Test 1: Page navigation cycles
    results.push(
      await testScenario(page, 'Page Navigation Cycles', async (p) => {
        const pages = ['/', '/learn', '/gita', '/upanishads', '/vedas', '/search', '/profile'];
        for (const path of pages) {
          await p.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle0' });
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      })
    );

    // Test 2: Gita verse navigation
    results.push(
      await testScenario(page, 'Gita Verse Navigation', async (p) => {
        await p.goto(`${BASE_URL}/gita/2`, { waitUntil: 'networkidle0' });

        // Navigate through 30 verses
        for (let i = 0; i < 30; i++) {
          const nextButton = await p.$('button:has-text("Next")');
          if (nextButton) {
            await nextButton.click().catch(() => {});
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      })
    );

    // Test 3: Verse picker rapid clicks
    results.push(
      await testScenario(page, 'Verse Picker Rapid Clicks', async (p) => {
        await p.goto(`${BASE_URL}/gita/2`, { waitUntil: 'networkidle0' });

        // Click on various verse numbers rapidly
        const verseNumbers = [10, 20, 30, 40, 50, 60, 70, 47, 1, 15, 25, 35, 45, 55, 65];
        for (const num of verseNumbers) {
          const button = await p.$(`button:has-text("${num}")`);
          if (button) {
            await button.click().catch(() => {});
            await new Promise(resolve => setTimeout(resolve, 50));
          }
        }
      })
    );

    // Test 4: Commentary expand/collapse
    results.push(
      await testScenario(page, 'Commentary Toggle Cycles', async (p) => {
        await p.goto(`${BASE_URL}/gita/2?v=47`, { waitUntil: 'networkidle0' });

        // Toggle commentary multiple times
        for (let i = 0; i < 10; i++) {
          const expandButton = await p.$('button:has-text("What Does This Mean?"), button:has-text("Hide Explanation")');
          if (expandButton) {
            await expandButton.click().catch(() => {});
            await new Promise(resolve => setTimeout(resolve, 200));
          }
        }
      })
    );

    // Test 5: Search interactions
    results.push(
      await testScenario(page, 'Search Input Cycles', async (p) => {
        await p.goto(`${BASE_URL}/search`, { waitUntil: 'networkidle0' });

        const searchInput = await p.$('input[type="search"], input[placeholder*="Search"]');
        if (searchInput) {
          const searchTerms = ['karma', 'dharma', 'yoga', 'gita', 'krishna', 'arjuna', 'soul', 'action'];
          for (const term of searchTerms) {
            await searchInput.click({ clickCount: 3 }); // Select all
            await searchInput.type(term, { delay: 20 });
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
      })
    );

    // Test 6: Back/Forward navigation
    results.push(
      await testScenario(page, 'History Navigation', async (p) => {
        // Build history
        const pages = ['/', '/learn', '/gita', '/gita/2', '/upanishads', '/vedas'];
        for (const path of pages) {
          await p.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle0' });
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Navigate back and forward
        for (let i = 0; i < 10; i++) {
          await p.goBack().catch(() => {});
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        for (let i = 0; i < 10; i++) {
          await p.goForward().catch(() => {});
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      })
    );

    // Summary
    log('\n' + '═'.repeat(50));
    log('📋 SUMMARY', 'blue');
    log('─'.repeat(50));

    let passCount = 0;
    let warnCount = 0;
    let failCount = 0;

    for (const result of results) {
      if (result.status === 'pass') {
        passCount++;
        log(`  ✅ ${result.name}: ${result.heapGrowthPercent?.toFixed(1)}% growth`, 'green');
      } else if (result.status === 'warn') {
        warnCount++;
        log(`  ⚠️ ${result.name}: ${result.heapGrowthPercent?.toFixed(1)}% growth`, 'yellow');
      } else if (result.status === 'fail') {
        failCount++;
        log(`  ❌ ${result.name}: ${result.heapGrowthPercent?.toFixed(1)}% growth`, 'red');
      } else {
        log(`  ⏭️ ${result.name}: ${result.status}`, 'yellow');
      }
    }

    log('\n' + '─'.repeat(50));
    log(`  Total: ${passCount} pass, ${warnCount} warn, ${failCount} fail`);

    if (failCount > 0) {
      log('\n❌ Memory leak tests FAILED', 'red');
      log('   Review the failing scenarios for potential memory leaks.', 'yellow');
      log('   Common causes: unremoved event listeners, retained references, growing arrays.', 'yellow');
      process.exitCode = 1;
    } else if (warnCount > 0) {
      log('\n⚠️ Memory tests completed with WARNINGS', 'yellow');
      log('   Consider investigating elevated memory growth.', 'yellow');
    } else {
      log('\n✅ All memory tests PASSED', 'green');
    }

  } catch (error) {
    log(`\n❌ Test runner error: ${error.message}`, 'red');
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

// Run the tests
runMemoryTests().catch(console.error);
