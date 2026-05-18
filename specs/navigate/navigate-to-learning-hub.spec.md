---
title: Navigate to Learning Hub
testName: navigate-to-learning-hub
type: spec
status: draft
source: custom:Navigate to Learning Hub
generated: 2026-05-18T20:18:54.023Z
runId: 28b157f6-3674-4763-911b-98c7069b4508
tags:
  - status/draft
  - source/custom
related: []
---

# Navigate to Learning Hub

## Goal

Verify that after running the steps below, the following are observable:

- Click the link **Learning**.
- Wait for text  to be visible.
- URL should match /learning.

## Source

- **Type**: custom
- **Reference**: Navigate to Learning Hub
- **App**: http://localhost:5173/
- **Generated**: 2026-05-18T20:18:54.023Z
- **Run**: 28b157f6-3674-4763-911b-98c7069b4508

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Click the link Learning
   _(now at `http://localhost:5173/learning`)_
2. Wait for 'Learning Hub' text to be visible
3. Wait for 'Learning Hub' text to be visible
4. Wait for 'Learning Hub' text to be visible
5. Wait for 'Learning Hub' text to be visible
6. Wait for 'Learning Hub' text to be visible

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| link "Learning" | `getByTestId('sidebar-nav-learning')` | high |

## Notes for the generator

- Use `navigate-to-learning-hub` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
