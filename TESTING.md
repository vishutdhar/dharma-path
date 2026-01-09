# Dharma Path - Testing Checklist

Use this checklist before releases to catch bugs early.

---

## Automated Tests

Run these commands before pushing:

```bash
npm run lint         # ESLint - 0 errors expected
npm run test:run     # Vitest unit tests - 62 tests
npm run test:e2e     # Playwright E2E tests
npm run build        # Production build - must pass
```

### Visual Regression Tests (Screenshot Tests)

We have 29 visual regression tests that automatically catch unintended UI changes:
- **15 light mode tests** - all major pages
- **14 dark mode tests** - all major pages

These run automatically on every push/PR via GitHub Actions.

**Run locally:**
```bash
npx playwright test visual --project=chromium
```

**Update baselines after intentional UI changes:**
```bash
# Option 1: Update locally (may differ from CI due to OS rendering)
npx playwright test visual --project=chromium --update-snapshots

# Option 2: Update via CI (recommended - ensures Linux-compatible baselines)
# Add [update-snapshots] to your commit message:
git commit -m "Update button styles [update-snapshots]"
git push
# CI will regenerate baselines and auto-commit them
```

**View test report:**
```bash
npx playwright show-report
```

---

## Quick Smoke Test (5 min)

Run these after every significant change:

- [ ] App loads without console errors
- [ ] Home page shows correct "Continue Learning" lesson
- [ ] Can complete a lesson and see progress update
- [ ] Navigation works (all 4 tabs)
- [ ] Dark mode toggle works

---

## Progress Tracking Tests

### Lesson Completion
- [ ] Complete lesson 1 → Home shows lesson 2
- [ ] Complete all lessons in module → Next module lesson appears
- [ ] Complete all lessons in level → Next level lesson appears
- [ ] Stats update correctly (Lessons Done, % Complete)
- [ ] Streak increments on consecutive days

### Bookmarks
- [ ] Can bookmark a verse
- [ ] Bookmark persists after page refresh
- [ ] Can remove bookmark
- [ ] Bookmarks show in profile

### Reset Progress
- [ ] Reset clears all completed lessons
- [ ] Reset clears bookmarks
- [ ] Home shows lesson 1-1-1 after reset

---

## Multi-User Tests (Critical!)

Test with 2 different accounts on the SAME browser:

### User Isolation
1. Sign in as User A
2. Complete some lessons
3. Sign out
4. Sign in as User B (new account)
5. **Verify:** User B sees fresh progress (not User A's)
6. Complete different lessons as User B
7. Sign out
8. Sign in as User A
9. **Verify:** User A sees their original progress (not mixed with B)

### Cloud Sync
- [ ] Progress syncs to cloud on sign in
- [ ] Progress loads from cloud on new device/browser
- [ ] Offline progress syncs when back online

---

## Authentication Tests

### Sign Up
- [ ] Can create account with email/password
- [ ] Validation shows for weak password
- [ ] Confirmation email sent (if enabled)
- [ ] Auto-subscribed to daily emails

### Sign In
- [ ] Can sign in with existing account
- [ ] Error shows for wrong password
- [ ] Progress loads after sign in

### Sign Out
- [ ] Sign out clears session
- [ ] Can still use app without account (local storage)

---

## Email Subscription Tests

### Profile Page
- [ ] Shows subscription status (subscribed/unsubscribed)
- [ ] Shows current day (Day X of 128)
- [ ] Toggle works to unsubscribe
- [ ] "Restart from Day 1" works

### Unsubscribe Link
- [ ] `/api/unsubscribe?email=xxx` unsubscribes user
- [ ] Redirects to success page
- [ ] Invalid email shows error page

---

## Gita Reader Tests

- [ ] All 18 chapters load
- [ ] Verses display Sanskrit + translation
- [ ] Bookmark verse works
- [ ] Share verse works
- [ ] Navigation between verses works

---

## Upanishads Reader Tests

- [ ] All 13 Upanishads load
- [ ] Section navigation works
- [ ] Verses display Sanskrit + translation
- [ ] Famous verse indicators show
- [ ] Mahavakya (Great Sayings) marked correctly
- [ ] Navigation between verses works

---

## Vedic Hymns Reader Tests

- [ ] All 6 hymns load (Gayatri, Nasadiya, Purusha, Agni, Sri, Shanti)
- [ ] Verses display Sanskrit + translation
- [ ] Navigation between verses works
- [ ] "Used In" section shows ritual contexts

---

## Festival Guide Tests

- [ ] All 14 festivals display
- [ ] Month/timing information correct
- [ ] Celebration tips show
- [ ] Related scriptures link correctly

---

## Search Tests

- [ ] Can search for terms (e.g., "karma")
- [ ] Results include lessons, Gita verses, Upanishad verses, Vedic verses, glossary terms, festivals
- [ ] Result type tabs work (All, Lessons, Verses, etc.)
- [ ] Clicking result navigates to correct page
- [ ] Search with Sanskrit terms works

---

## PWA / Offline Tests

- [ ] App installs as PWA
- [ ] App works offline (cached pages)
- [ ] Offline indicator shows when disconnected

---

## Responsive Design

Test on:
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1280px+ width)

---

## Browser Compatibility

Test on:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Chrome (Android)

---

## GitHub Actions CI

Visual regression tests run automatically on every push/PR to main.

**Workflow:** `.github/workflows/playwright.yml`

**What it does:**
- Builds the app
- Runs 29 visual tests against Linux-rendered baselines
- Uploads test report as artifact
- On failure, uploads screenshot diffs for debugging

**If tests fail:**
1. Check the GitHub Actions tab for the failed run
2. Download the `screenshot-diffs` artifact to see what changed
3. If the change was intentional, push with `[update-snapshots]` in commit message

---

## Bug Report Template

When you find a bug, document it like this:

```
**Bug:** [Short description]
**Steps to reproduce:**
1.
2.
3.
**Expected:** [What should happen]
**Actual:** [What actually happened]
**Browser/Device:** [e.g., Chrome on macOS]
**Screenshot:** [If applicable]
```

---

## Test Log

| Date | Tester | Tests Run | Bugs Found |
|------|--------|-----------|------------|
| YYYY-MM-DD | Name | Smoke test | None |

