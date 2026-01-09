#!/bin/bash

# =============================================================================
# Dharma Path - Comprehensive Stress Test Runner
# =============================================================================
#
# This script orchestrates all stress testing for the application:
# - k6 load tests (load, stress, spike testing)
# - Lighthouse CI (performance budgets)
# - Playwright stress tests (UI stress, memory stability)
# - Memory leak detection (heap analysis)
#
# Usage:
#   ./stress-tests/run-stress-tests.sh [options]
#
# Options:
#   --all         Run all stress tests (default)
#   --k6          Run only k6 load tests
#   --lighthouse  Run only Lighthouse CI
#   --playwright  Run only Playwright stress tests
#   --memory      Run only memory leak tests
#   --quick       Run quick smoke tests only
#   --prod        Run against production (https://mydharmapath.com)
#   --local       Run against local dev server (default)
#   --help        Show this help message
#
# Environment variables:
#   BASE_URL      Override the base URL (e.g., BASE_URL=http://localhost:3001)
#   ROUNDS        Number of rounds for memory tests (default: 5)
#   VERBOSE       Enable verbose output (VERBOSE=true)
# =============================================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOCAL_URL="http://localhost:3000"
PROD_URL="https://mydharmapath.com"
BASE_URL="${BASE_URL:-$LOCAL_URL}"

# Flags
RUN_K6=false
RUN_LIGHTHOUSE=false
RUN_PLAYWRIGHT=false
RUN_MEMORY=false
QUICK_MODE=false
SHOW_HELP=false

# Parse arguments
if [ $# -eq 0 ]; then
  RUN_K6=true
  RUN_LIGHTHOUSE=true
  RUN_PLAYWRIGHT=true
  RUN_MEMORY=true
fi

while [[ $# -gt 0 ]]; do
  case $1 in
    --all)
      RUN_K6=true
      RUN_LIGHTHOUSE=true
      RUN_PLAYWRIGHT=true
      RUN_MEMORY=true
      shift
      ;;
    --k6)
      RUN_K6=true
      shift
      ;;
    --lighthouse)
      RUN_LIGHTHOUSE=true
      shift
      ;;
    --playwright)
      RUN_PLAYWRIGHT=true
      shift
      ;;
    --memory)
      RUN_MEMORY=true
      shift
      ;;
    --quick)
      QUICK_MODE=true
      shift
      ;;
    --prod)
      BASE_URL="$PROD_URL"
      shift
      ;;
    --local)
      BASE_URL="$LOCAL_URL"
      shift
      ;;
    --help|-h)
      SHOW_HELP=true
      shift
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      SHOW_HELP=true
      shift
      ;;
  esac
done

# Show help
if [ "$SHOW_HELP" = true ]; then
  head -30 "$0" | tail -28
  exit 0
fi

# Functions
print_header() {
  echo ""
  echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
  echo -e "${CYAN}  $1${NC}"
  echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
  echo ""
}

print_section() {
  echo ""
  echo -e "${YELLOW}▸ $1${NC}"
  echo -e "${YELLOW}────────────────────────────────────────${NC}"
}

check_dependency() {
  if ! command -v "$1" &> /dev/null; then
    echo -e "${RED}✗ $1 is not installed${NC}"
    echo -e "  Install with: $2"
    return 1
  else
    echo -e "${GREEN}✓ $1 is installed${NC}"
    return 0
  fi
}

check_server() {
  local url=$1
  echo -e "Checking if server is running at ${CYAN}$url${NC}..."

  if curl -s --max-time 5 "$url" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Server is running${NC}"
    return 0
  else
    echo -e "${YELLOW}⚠ Server not responding at $url${NC}"
    return 1
  fi
}

start_dev_server() {
  echo -e "${YELLOW}Starting development server...${NC}"
  cd "$PROJECT_ROOT"
  npm run dev &
  DEV_SERVER_PID=$!

  # Wait for server to be ready
  local attempts=0
  local max_attempts=30
  while ! curl -s --max-time 2 "$LOCAL_URL" > /dev/null 2>&1; do
    if [ $attempts -ge $max_attempts ]; then
      echo -e "${RED}✗ Dev server failed to start${NC}"
      kill $DEV_SERVER_PID 2>/dev/null || true
      exit 1
    fi
    sleep 2
    ((attempts++))
    echo -e "  Waiting for server... ($attempts/$max_attempts)"
  done

  echo -e "${GREEN}✓ Development server started (PID: $DEV_SERVER_PID)${NC}"
}

cleanup() {
  if [ -n "$DEV_SERVER_PID" ]; then
    echo -e "\n${YELLOW}Stopping development server...${NC}"
    kill $DEV_SERVER_PID 2>/dev/null || true
    wait $DEV_SERVER_PID 2>/dev/null || true
  fi
}

trap cleanup EXIT

# Main execution
print_header "Dharma Path Stress Test Suite"

echo -e "Target URL: ${CYAN}$BASE_URL${NC}"
echo -e "Quick mode: ${CYAN}$QUICK_MODE${NC}"
echo ""

# Check dependencies
print_section "Checking Dependencies"

DEPS_OK=true

if [ "$RUN_K6" = true ]; then
  check_dependency "k6" "brew install k6 (macOS) or https://k6.io/docs/get-started/installation/" || DEPS_OK=false
fi

if [ "$RUN_LIGHTHOUSE" = true ]; then
  if [ ! -f "$PROJECT_ROOT/node_modules/.bin/lhci" ]; then
    echo -e "${YELLOW}⚠ @lhci/cli not installed. Installing...${NC}"
    cd "$PROJECT_ROOT" && npm install --save-dev @lhci/cli
  fi
  echo -e "${GREEN}✓ Lighthouse CI is available${NC}"
fi

if [ "$RUN_PLAYWRIGHT" = true ]; then
  check_dependency "npx" "npm install -g npx" || DEPS_OK=false
fi

if [ "$RUN_MEMORY" = true ]; then
  if [ ! -d "$PROJECT_ROOT/node_modules/puppeteer" ]; then
    echo -e "${YELLOW}⚠ puppeteer not installed. Installing...${NC}"
    cd "$PROJECT_ROOT" && npm install --save-dev puppeteer
  fi
  echo -e "${GREEN}✓ Puppeteer is available${NC}"
fi

# Check server status for local tests
if [[ "$BASE_URL" == "$LOCAL_URL"* ]]; then
  print_section "Server Status"
  if ! check_server "$BASE_URL"; then
    start_dev_server
  fi
fi

# Results tracking
RESULTS=()
FAILED=0

# Run k6 load tests
if [ "$RUN_K6" = true ]; then
  print_header "k6 Load Tests"

  K6_SCRIPT="$SCRIPT_DIR/k6/load-test.js"

  if [ -f "$K6_SCRIPT" ]; then
    if [ "$QUICK_MODE" = true ]; then
      echo "Running smoke test only..."
      if k6 run -e BASE_URL="$BASE_URL" --duration 30s --vus 1 "$K6_SCRIPT" 2>&1; then
        RESULTS+=("k6 Load Tests: ${GREEN}PASSED${NC}")
      else
        RESULTS+=("k6 Load Tests: ${RED}FAILED${NC}")
        ((FAILED++))
      fi
    else
      echo "Running full load test suite..."
      if k6 run -e BASE_URL="$BASE_URL" "$K6_SCRIPT" 2>&1; then
        RESULTS+=("k6 Load Tests: ${GREEN}PASSED${NC}")
      else
        RESULTS+=("k6 Load Tests: ${RED}FAILED${NC}")
        ((FAILED++))
      fi
    fi
  else
    echo -e "${RED}k6 script not found at $K6_SCRIPT${NC}"
    RESULTS+=("k6 Load Tests: ${YELLOW}SKIPPED${NC}")
  fi
fi

# Run Lighthouse CI
if [ "$RUN_LIGHTHOUSE" = true ]; then
  print_header "Lighthouse CI Performance Tests"

  cd "$PROJECT_ROOT"

  if [ "$QUICK_MODE" = true ]; then
    echo "Running Lighthouse on homepage only..."
    if npx lhci collect --url="$BASE_URL/" --numberOfRuns=1 && npx lhci assert 2>&1; then
      RESULTS+=("Lighthouse CI: ${GREEN}PASSED${NC}")
    else
      RESULTS+=("Lighthouse CI: ${YELLOW}WARNINGS${NC}")
    fi
  else
    echo "Running full Lighthouse CI audit..."
    if npx lhci autorun 2>&1; then
      RESULTS+=("Lighthouse CI: ${GREEN}PASSED${NC}")
    else
      RESULTS+=("Lighthouse CI: ${YELLOW}WARNINGS${NC}")
    fi
  fi
fi

# Run Playwright stress tests
if [ "$RUN_PLAYWRIGHT" = true ]; then
  print_header "Playwright UI Stress Tests"

  cd "$PROJECT_ROOT"

  if [ "$QUICK_MODE" = true ]; then
    echo "Running rapid page navigation test only..."
    if npx playwright test e2e/stress.spec.ts --grep "rapid page navigation" --project=chromium 2>&1; then
      RESULTS+=("Playwright Stress: ${GREEN}PASSED${NC}")
    else
      RESULTS+=("Playwright Stress: ${RED}FAILED${NC}")
      ((FAILED++))
    fi
  else
    echo "Running full stress test suite..."
    if npx playwright test e2e/stress.spec.ts --project=chromium 2>&1; then
      RESULTS+=("Playwright Stress: ${GREEN}PASSED${NC}")
    else
      RESULTS+=("Playwright Stress: ${RED}FAILED${NC}")
      ((FAILED++))
    fi
  fi
fi

# Run Memory leak tests
if [ "$RUN_MEMORY" = true ]; then
  print_header "Memory Leak Detection"

  MEMORY_SCRIPT="$SCRIPT_DIR/memory/memory-leak-detector.js"

  if [ -f "$MEMORY_SCRIPT" ]; then
    cd "$PROJECT_ROOT"

    if [ "$QUICK_MODE" = true ]; then
      echo "Running quick memory check (2 rounds)..."
      if ROUNDS=2 BASE_URL="$BASE_URL" node "$MEMORY_SCRIPT" 2>&1; then
        RESULTS+=("Memory Leak Tests: ${GREEN}PASSED${NC}")
      else
        RESULTS+=("Memory Leak Tests: ${RED}FAILED${NC}")
        ((FAILED++))
      fi
    else
      echo "Running full memory analysis (5 rounds)..."
      if BASE_URL="$BASE_URL" VERBOSE=true node "$MEMORY_SCRIPT" 2>&1; then
        RESULTS+=("Memory Leak Tests: ${GREEN}PASSED${NC}")
      else
        RESULTS+=("Memory Leak Tests: ${RED}FAILED${NC}")
        ((FAILED++))
      fi
    fi
  else
    echo -e "${RED}Memory test script not found at $MEMORY_SCRIPT${NC}"
    RESULTS+=("Memory Leak Tests: ${YELLOW}SKIPPED${NC}")
  fi
fi

# Summary
print_header "Test Results Summary"

for result in "${RESULTS[@]}"; do
  echo -e "  • $result"
done

echo ""
if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
  echo -e "${GREEN}  ✅ All stress tests completed successfully!${NC}"
  echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
  exit 0
else
  echo -e "${RED}════════════════════════════════════════════════════════════${NC}"
  echo -e "${RED}  ❌ $FAILED test suite(s) failed${NC}"
  echo -e "${RED}════════════════════════════════════════════════════════════${NC}"
  exit 1
fi
