---
title: Role profile its there and can be selected
type: spec
status: draft
source: custom:Role profile its there and can be selected
generated: 2026-05-16T17:41:03.246Z
runId: 41e67a4a-c03b-4b7f-8805-3c745b25586c
tags:
  - status/draft
  - source/custom
related: []
---

# Role profile its there and can be selected

## Source

- **Type**: custom
- **Reference**: Role profile its there and can be selected
- **App**: http://localhost:5173/
- **Generated**: 2026-05-16T17:41:03.246Z
- **Run**: 41e67a4a-c03b-4b7f-8805-3c745b25586c

## Preconditions

- Login required: no
- Acceptance: Role profile its there and can be selected
- Starting URL: `/`

## Steps

1. Click the 'Settings' link to navigate to the settings page. (link "Settings")
2. Select the 'Developer' role under Role Profile. (button "💻 Developer Code, tools, frameworks, best practices")

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| link "Settings" | `getByRole('link', { name: 'Settings' })` | medium |
| button "💻 Developer Code, tools, frameworks, best practices" | `getByTestId('role-card-developer')` | high |

## data-testid suggestions

- Add `data-testid="link-settings"` to link "Settings" (currently relying on `getByRole('link', { name: 'Settings' })`).
