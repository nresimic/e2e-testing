---
description: Run Playwright tests with sensible defaults; supports filtering, headed mode, and the UI runner
user-invocable: true
---

# /run-tests

Run Playwright tests in this repo.

## Usage

```
/run-tests              # all tests, headless, default browser (chromium)
/run-tests <pattern>    # only tests matching the pattern (passed as -g to Playwright)
/run-tests --headed     # see the browser
/run-tests --ui         # interactive UI mode
/run-tests --report     # open the last HTML report
```

## Steps

1. **Resolve the command.**
   - `--ui` → `npm run test:ui`
   - `--headed` → `npm run test:headed -- <pattern>` (pattern optional)
   - `--report` → `npm run report`
   - default → `npm test -- -g "<pattern>"` (or just `npm test`)
2. **Stream output.** Report the pass/fail counts and the failing test names if any.
3. **On failure**, propose either:
   - Invoking `@healer` to patch the test (if the failure looks like locator drift).
   - Updating the corresponding `specs/<scenario>.spec.md` (if the failure reveals a wrong assertion in the plan).
   - Asking the user (if the cause is genuinely unclear).

## Don't

- Don't run the same test in a loop hoping it passes — fix the root cause.
- Don't suppress assertion errors by relaxing matchers without explicit user direction.
