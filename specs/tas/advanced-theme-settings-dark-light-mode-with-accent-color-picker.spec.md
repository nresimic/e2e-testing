---
title: Advanced theme settings — dark/light mode with accent color picker
testName: advanced-theme-settings-dark-light-mode-with-accent-color-picker
type: spec
status: draft
source: jira:TAS-121
generated: 2026-05-19T08:49:53.079Z
runId: 805550b2-c13d-4e3e-b26d-88effa4724e7
tags:
  - status/draft
  - source/jira
related: []
---

# Advanced theme settings — dark/light mode with accent color picker

## Goal

Verify that after running the steps below, the following are observable:

- Dark/light mode toggle that switches all CSS variables
- Light mode CSS variables defined for all backgrounds, surfaces, borders, text colors* Accent color picker with preset palette (emerald, blue, purple, amber, rose, cyan)* Selected theme and accent color persist in localStorage* Theme applies immediately without page reload* All existing components render correctly in both modes* Gradients, glows, and shadows adapt to selected accent color* Remove Notifications placeholder card from settings grid
- Technical Notes
- Define :root[data-theme="light"] CSS variable overrides in global.css
- Create useTheme hook with localStorage persistence and data-theme attribute on - Generate accent color variants (glow, gradient, hover states) dynamically from base color- Update SettingsPage.tsx — replace placeholder cards grid with functional Theme section- Affected CSS variables: --background, --foreground, --card, --surface, --elevated, --border, --text-secondary, --text-tertiary, --primary, --gradient-main, --shadow-glow

## Source

- **Type**: jira
- **Reference**: TAS-121
- **App**: http://localhost:5173/
- **Generated**: 2026-05-19T08:49:53.079Z
- **Run**: 805550b2-c13d-4e3e-b26d-88effa4724e7

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Open settings to check for theme settings panel
   _(now at `http://localhost:5173/settings`)_
2. Click Dark mode button to verify theme toggle functionality
3. Select emerald accent color to verify accent color picker functionality
4. Click Light mode button to verify theme toggle functionality
5. Select emerald accent color to verify accent color picker functionality

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| link "Settings" | `getByRole('link', { name: 'Settings' })` | medium |
| button "Dark" | `getByTestId('theme-mode-dark')` | high |
| button "Select emerald accent color" | `getByTestId('accent-color-emerald')` | high |
| button "Light" | `getByTestId('theme-mode-light')` | high |

## data-testid suggestions

- Add `data-testid="link-settings"` to link "Settings" (currently relying on `getByRole('link', { name: 'Settings' })`).

## Notes for the generator

- Use `advanced-theme-settings-dark-light-mode-with-accent-color-picker` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
