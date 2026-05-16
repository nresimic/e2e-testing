---
name: testsmart-spec-md-handling
description: How to read TestSmart-emitted `specs/*.spec.md` files and generate the corresponding Playwright `.spec.ts`. Loaded automatically when a spec.md is opened or referenced.
user-invocable: false
---

# Handling TestSmart spec.md files

TestSmart writes test plans as markdown under `specs/<scenario>.spec.md`. They follow a specific shape (defined in `specs/SPEC-FORMAT.md`). This skill teaches you to read them correctly and emit a Playwright `.spec.ts` that matches.

## The contract

Every `spec.md` TestSmart emits has these sections (in order):

1. **`# {Scenario title}`** — the heading. Become the `test.describe(...)` block label.
2. **`## Source`** — provenance. JIRA ticket, custom scenario, or live exploration. Goes into a `@source` JSDoc tag on the test.
3. **`## Preconditions`** — required state before the test starts. Map to fixtures or `beforeEach`.
4. **`## Steps`** — numbered list. Each step becomes one or more Playwright actions/assertions.
5. **`## Selectors used`** — table of `Element → Locator → Confidence`. **Reuse these locators verbatim**. They were verified live against the running app; don't second-guess.
6. **`## data-testid suggestions`** — optional. Surface these to the user via a JSDoc note; don't hand-edit the app.

## Generation rules

- Always `import { test, expect } from '@playwright/test'`.
- Wrap the scenario in `test.describe(title)`. Multiple `test()` blocks inside are fine when they share setup.
- Map "Preconditions" → `test.beforeEach` (or fixtures for shared state across files).
- Map each "Step" → one Playwright statement. Combine adjacent assertions when they target the same element.
- Use the locators from "Selectors used" verbatim. Don't substitute.
- For environment-bound values (`{{TEST_USER}}`, `http://localhost:5173/`) → read `process.env.*` with sensible fallbacks.
- Add `@source <reference>` JSDoc above the describe.

## When the spec.md is ambiguous

Stop. Don't guess. Ask the user. The spec.md is the source of truth — if a step is unclear, the spec is what to fix, not the generated code.

## When generation succeeds

Write the `.spec.ts` to `tests/<same-path-as-spec>/<scenario>.spec.ts`. Run `npm test -- tests/.../<scenario>.spec.ts` once locally and commit only if it passes (or the user explicitly accepts a known failure).

## When generation fails

Capture the error, the failing locator, and the offending spec step. Surface them to the user with a clear "the spec needs to change because …" rather than silently dropping the test.

## Related

- `.claude/agents/generator.md` — the Playwright agent that invokes this skill.
- `specs/SPEC-FORMAT.md` — the full spec.md format reference.
- `.claude/skills/test-writing-locators.md` — locator priority rules.
