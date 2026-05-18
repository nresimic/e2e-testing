---
title: Search Resources
testName: search-resources
type: spec
status: draft
source: custom:Search Resources
generated: 2026-05-18T20:28:39.469Z
runId: 18743d7c-722f-457f-b81f-8f9350cee4df
tags:
  - status/draft
  - source/custom
related: []
---

# Search Resources

## Goal

Verify that after running the steps below, the following are observable:

- Fill the textbox with AI.
- Press Enter.
- the textbox should contain text AI.

## Source

- **Type**: custom
- **Reference**: Search Resources
- **App**: http://localhost:5173/
- **Generated**: 2026-05-18T20:28:39.469Z
- **Run**: 18743d7c-722f-457f-b81f-8f9350cee4df

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Click on Learning link
   _(now at `http://localhost:5173/learning`)_
2. Fill the textbox with AI _(textbox "Search resources...")_
3. Press Enter to search for AI

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| link "Learning" | `getByTestId('sidebar-nav-learning')` | high |
| textbox "Search resources..." | `getByRole('textbox', { name: 'Search resources...' })` | medium |

## data-testid suggestions

- Add `data-testid="field-search-resources"` to textbox "Search resources..." (currently relying on `getByRole('textbox', { name: 'Search resources...' })`).

## Notes for the generator

- Use `search-resources` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
