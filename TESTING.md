# Dharma Path - Testing Checklist

Use this checklist before releases to catch bugs early.

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
- [ ] Shows current day (Day X of 77)
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

## Search Tests

- [ ] Can search for terms (e.g., "karma")
- [ ] Results show relevant verses
- [ ] Clicking result navigates to verse

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

