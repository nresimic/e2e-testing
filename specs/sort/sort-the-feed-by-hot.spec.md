---
title: Sort the feed by 'Hot'
testName: sort-the-feed-by-hot
type: spec
status: draft
source: custom:Sort the feed by 'Hot'
generated: 2026-05-18T10:07:14.588Z
runId: 8962c65c-0f8f-4118-948e-67b0d9342252
tags:
  - status/draft
  - source/custom
related: []
---

# Sort the feed by 'Hot'

## Goal

Verify that after running the steps below, the following are observable:

- Navigate to /feed?sort=hot.
- URL should match /feed?sort=hot.

## Source

- **Type**: custom
- **Reference**: Sort the feed by 'Hot'
- **App**: http://localhost:5173/
- **Generated**: 2026-05-18T10:07:14.588Z
- **Run**: 8962c65c-0f8f-4118-948e-67b0d9342252

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Navigate to /feed?sort=hot to sort the feed by 'Hot'

## Selectors used

_No locators recorded. Codegen will need to derive selectors from the app live._

## Notes for the generator

- Use `sort-the-feed-by-hot` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
