---
title: View Trending Items in Saved Content
testName: view-trending-items-in-saved-content
type: spec
status: draft
source: custom:View Trending Items in Saved Content
generated: 2026-05-18T01:10:33.253Z
runId: 72152e8e-9472-4ff8-bdaf-0efccf028078
tags:
  - status/draft
  - source/custom
related: []
---

# View Trending Items in Saved Content

## Goal

Verify that after running the steps below, the following are observable:

- Navigate to /saved.
- Click the link **5 TRENDING**.
- the link **5 TRENDING** should be visible.

## Source

- **Type**: custom
- **Reference**: View Trending Items in Saved Content
- **App**: http://localhost:5173/
- **Generated**: 2026-05-18T01:10:33.253Z
- **Run**: 72152e8e-9472-4ff8-bdaf-0efccf028078

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Navigate to /saved by clicking 'Saved' link

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| link "Saved" | `getByTestId('sidebar-nav-saved')` | high |

## Notes for the generator

- Use `view-trending-items-in-saved-content` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
