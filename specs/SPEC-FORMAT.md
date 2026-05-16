---
title: TestSmart spec.md format
type: convention
status: active
date: 2026-05-16
tags:
  - status/active
  - area/conventions
  - area/test-codegen
---

# Spec.md format

Every test scenario in this repo is a markdown file under `specs/`. TestSmart writes them after exploring the app; you may hand-author them too (start from `_templates/spec.md`).

A spec.md is the **source of truth** for a test. The matching `.spec.ts` under `tests/` is a derived view — regeneratable via `/regen-spec`.

## Required sections (in this order)

### 1. Title — H1

```markdown
# Login as new user
```

Becomes the `test.describe(...)` block in the generated `.spec.ts`.

### 2. `## Source`

Where this scenario came from. Bulleted:

- **Type**: `jira` / `custom` / `exploration` / `prd` / `confluence`
- **Reference**: ticket id, scenario name, URL, etc.
- **App**: the target `baseUrl`
- **Generated**: ISO date + TestSmart run id

### 3. `## Preconditions`

What must be true before the test runs.

- Login required? credentials reference?
- Starting URL
- Data seeded? (link to seed script or fixture)

### 4. `## Steps`

Numbered list. Each step is **one** user-observable action or assertion. Don't combine multiple actions into one bullet.

```markdown
1. Navigate to /login
2. Fill "Email" with `{{TEST_USER}}`
3. Fill "Password" with `{{TEST_PASSWORD}}`
4. Click "Sign in"
5. Expect URL matches /dashboard
6. Expect "Welcome back" to be visible
```

Use `{{TEST_USER}}` / `{{TEST_PASSWORD}}` / `http://localhost:5173/` as placeholders for env-bound values.

### 5. `## Selectors used`

Table of the locators TestSmart verified live during exploration:

| Element | Locator | Confidence |
|---|---|---|
| Email field | `getByRole('textbox', { name: 'Email' })` | high |
| Password field | `getByRole('textbox', { name: 'Password' })` | high |
| Sign in button | `getByRole('button', { name: 'Sign in' })` | high |

Codegen must reuse these locators verbatim. **Don't substitute** unless the spec explicitly asks you to.

`Confidence`: `high` (role-based, unambiguous) / `medium` (text or label) / `low` (testid or CSS — flag for hardening).

### 6. `## data-testid suggestions` *(optional)*

When a locator's confidence is `low`, list the desired stable attribute. Surfaces as a hint comment in the `.spec.ts` and feeds the reverse-loop "add data-testid here" PR against the app repo.

```markdown
- Submit button currently selected by name — consider `data-testid="login-submit"`.
```

## Optional sections

- `## Notes` — anything the codegen agent should know but isn't a step.
- `## Test data` — references to fixtures or factories.
- `## Cleanup` — explicit teardown if `afterEach` isn't enough.

## Naming and location

- File: `specs/<feature>/<scenario>.spec.md` — kebab-case slug from the title.
- Example: `specs/auth/login-as-new-user.spec.md`
- Generated counterpart: `tests/<feature>/<scenario>.spec.ts` (mirror the path).

## Frontmatter (optional, but recommended)

```yaml
---
title: Login as new user
type: spec
status: draft | implemented | passing | failing
source: jira:NEUR-42
tags:
  - feature/auth
  - status/implemented
related:
  - "[[../auth/logout]]"
---
```

Status flows:
- `draft` → spec written, no `.spec.ts` yet
- `implemented` → `.spec.ts` exists, ran at least once
- `passing` → last run green
- `failing` → last run red (CI or local)

The Obsidian Dataview index at `specs/INDEX.md` reads this frontmatter to auto-list.
