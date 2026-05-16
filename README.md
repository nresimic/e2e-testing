# Neuroboard — End-to-end tests

This repository contains Playwright end-to-end tests for **Neuroboard**, scaffolded and maintained by [TestSmart](https://github.com/levi9/think-test).

## Running tests locally

```bash
npm install
npx playwright install chromium     # one-time, only if not already cached
npm test                            # runs all specs headlessly
npm run test:headed                 # see the browser
npm run test:ui                     # interactive Playwright UI
npm run report                      # open the last HTML report
```

The `BASE_URL` environment variable controls where tests run:

```bash
BASE_URL=https://staging.example.com npm test
```

## How tests get here

TestSmart writes generated specs into `tests/` and opens a pull request for each new test or fix. Reviewing the PR is the same as reviewing any other code change — approve, request changes, or close. Direct edits in this repo are welcome too.

## Keeping the app testable

Tests stay reliable when the app exposes stable hooks. The agent prefers, in order:

1. `getByRole(...)` — accessible roles + names
2. `getByLabel(...)` — form fields
3. `getByText(...)` — visible copy
4. `data-testid="..."` — last-resort stable handle

When the agent can't find a stable selector, it surfaces a `data-testid` suggestion back to your app repo as a hint PR.

## Configuration

- `playwright.config.ts` — projects, retries, reporters
- `tests/` — generated and hand-written specs

Edit anything you like — TestSmart picks up your conventions on the next run.
