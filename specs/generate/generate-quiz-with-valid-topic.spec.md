---
title: Generate Quiz with Valid Topic
testName: generate-quiz-with-valid-topic
type: spec
status: draft
source: custom:Generate Quiz with Valid Topic
generated: 2026-05-19T09:53:10.586Z
runId: bd879361-d0e9-4423-ad24-3b6e643664bc
tags:
  - status/draft
  - source/custom
related: []
---

# Generate Quiz with Valid Topic

## Goal

Verify that after running the steps below, the following are observable:

- Fill the textbox with Claude Code.
- Click the button **Generate**.
- the heading **Quiz Arena** should be visible.

## Source

- **Type**: custom
- **Reference**: Generate Quiz with Valid Topic
- **App**: http://localhost:5173/
- **Generated**: 2026-05-19T09:53:10.586Z
- **Run**: bd879361-d0e9-4423-ad24-3b6e643664bc

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Click Quiz Arena link
   _(now at `http://localhost:5173/quiz`)_
2. Fill the textbox with Claude Code _(textbox "Enter a topic (e.g., Claude Code, RAG, LLM Agents)")_
3. Click the Generate button
4. Verify the heading 'Quiz Arena' is visible

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| button "Quiz Arena" | `getByRole('button', { name: 'Quiz Arena' })` | medium |
| textbox "Enter a topic (e.g., Claude Code, RAG, LLM Agents)" | `getByTestId('quiz-topic-input')` | high |
| button "Generate" | `getByTestId('quiz-generate-btn')` | high |

## data-testid suggestions

- Add `data-testid="button-quiz-arena"` to button "Quiz Arena" (currently relying on `getByRole('button', { name: 'Quiz Arena' })`).

## Notes for the generator

- Use `generate-quiz-with-valid-topic` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
