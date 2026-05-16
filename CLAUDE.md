# Neuroboard — TestSmart-managed end-to-end tests

This repository contains Playwright tests for **Neuroboard**. It is configured for [TestSmart](https://github.com/levi9/think-test) and the [Playwright Test Agents](https://playwright.dev/docs/test-agents) (planner, generator, healer).

If you are an AI agent reading this file: load the related skills first, then proceed with the user's task. Never reach beyond this repository.

## What this repo does

- **`specs/`** — markdown test plans. TestSmart writes them after exploring **Neuroboard**. You can hand-author specs too — start from `_templates/spec.md`.
- **`tests/`** — Playwright `.spec.ts` files. Generated from `specs/*.md` by the [`@generator`](.claude/agents/generator.md) agent.
- **`.claude/agents/`** — Playwright's planner, generator, healer agents (installed by `npx playwright init-agents`).
- **`.claude/skills/`** — Conventions: locator priority, page-object-model, assertion style, API testing patterns, spec.md format ([testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill)), plus TestSmart-specific helpers.
- **`.claude/commands/`** — Slash commands: `/regen-spec`, `/run-tests`.

## How tests get written

1. **TestSmart side**: A JIRA ticket or custom scenario is run through TestSmart's AI orchestrator. On a successful exploration, TestSmart emits `specs/<scenario>.spec.md` and opens a PR against `main`.
2. **You side**: Pull the PR. Run `/regen-spec specs/<scenario>.spec.md` (or invoke `@generator` directly) to produce `tests/<scenario>.spec.ts`. Run `/run-tests` to validate.
3. **Failures**: invoke `@healer` to re-explore and patch. Commit the patched test.

## Conventions you must follow

- **Locator priority**: `getByRole` > `getByLabel` > `getByPlaceholder` > `getByText` > `getByTestId` > CSS / XPath (last resort). See `.claude/skills/test-writing-locators.md`.
- **No hardcoded waits.** Use `expect(...).toBeVisible()`, `waitForResponse`, etc. Never `page.waitForTimeout(<n>)`.
- **One scenario per `.spec.ts`.** Multiple `test()` calls per file are fine when they share setup, but keep the file focused.
- **Test data**: factories or fixtures. Don't hardcode user credentials — read from `process.env.TEST_USER` etc.
- **API vs UI**: when a step has both an API and a UI path, prefer API for setup/teardown, UI for the assertion. See `.claude/skills/test-writing-api-vs-ui.md`.
- **`data-testid` suggestions**: if you couldn't find a stable role/label locator, add a comment in the `.spec.md` describing the desired attribute. TestSmart picks these up for downstream PRs against the app repo.

## Running tests

```bash
npm install
npx playwright install chromium     # one-time per machine
npm test                            # all specs, headless
npm run test:headed                 # see the browser
npm run test:ui                     # interactive Playwright UI
npm run report                      # open last HTML report
```

The `BASE_URL` env var controls the target environment:

```bash
BASE_URL=https://staging.example.com npm test
```

## Obsidian vault

This repo doubles as an Obsidian vault. Open the folder in [Obsidian](https://obsidian.md) for the graph view of how specs relate. `specs/INDEX.md` is a Map of Content with a Dataview query auto-listing every `.spec.md`.

Recommended plugin: **Dataview**. The manifest is at `.obsidian/community-plugins.json`.

## What NOT to do

- Don't bypass the locator priority — `page.locator('div > div > button')` is forbidden unless the previous five strategies were tried and documented.
- Don't add `page.waitForTimeout(...)`.
- Don't hand-edit a `.spec.ts` without updating its `.spec.md` to match. Source of truth is the `.md`.
- Don't commit secrets. Test credentials belong in `.env.local` (gitignored).
