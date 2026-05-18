---
title: Display all feed results — hidden articles due to quality filter
testName: display-all-feed-results-hidden-articles-due-to-quality-filter
type: spec
status: draft
source: jira:TAS-119
generated: 2026-05-18T15:40:36.981Z
runId: cbda9bc1-1114-4847-be76-6a539ce77096
tags:
  - status/draft
  - source/jira
related: []
---

# Display all feed results — hidden articles due to quality filter

## Goal

Verify that after running the steps below, the following are observable:

- All fetched articles are accessible in the feed (not silently hidden)
- Low-score or unscored items are shown in a separate section or behind a toggle (e.g., "Show all items")* Total count in the feed header reflects actual items available based on current filter* Infinite scroll continues to work correctly with expanded item set* No regression in feed performance with larger result sets
- Technical Notes
- apps/backend/src/services/feed.service.ts — triageScore >= 60 filter at line ~44, language filter (English only)- apps/frontend/src/hooks/useFeed.ts — PAGE_SIZE = 20, manages pagination state- apps/backend/src/routes/feed.ts — max limit capped at 100- Consider adding a query parameter (e.g., showAll=true) to bypass quality filter- May need a UI toggle or "Show hidden items" section at the bottom of the feed

## Source

- **Type**: jira
- **Reference**: TAS-119
- **App**: http://localhost:5173/
- **Generated**: 2026-05-18T15:40:36.981Z
- **Run**: cbda9bc1-1114-4847-be76-6a539ce77096

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Click 'View all' to display all feed results
   _(now at `http://localhost:5173/feed?sort=hot`)_
2. Click 'Show all' to display all feed results
   _(now at `http://localhost:5173/feed?sort=hot&showAll=true`)_
3. Click 'Show all' to display all feed results
   _(now at `http://localhost:5173/feed?sort=hot`)_
4. Click 'Show all' to display all feed results
   _(now at `http://localhost:5173/feed?sort=hot&showAll=true`)_
5. Click 'Show all' to display all feed results

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| button "View all" | `getByRole('button', { name: 'View all' })` | medium |
| button "Show all" | `getByTestId('show-all-filter')` | high |

## data-testid suggestions

- Add `data-testid="button-view-all"` to button "View all" (currently relying on `getByRole('button', { name: 'View all' })`).

## Notes for the generator

- Use `display-all-feed-results-hidden-articles-due-to-quality-filter` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
