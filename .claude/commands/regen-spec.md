---
description: Regenerate a Playwright .spec.ts from a TestSmart-emitted .spec.md
user-invocable: true
---

# /regen-spec

Generate or regenerate the Playwright `.spec.ts` corresponding to a `specs/<scenario>.spec.md` file.

## Usage

```
/regen-spec specs/<path>/<scenario>.spec.md
```

If no path is given, list every `.spec.md` in `specs/` that has no matching `.spec.ts` and ask the user to pick one.

## Steps

1. **Validate input.** The argument must end in `.spec.md` and exist under `specs/`. Otherwise stop and explain.
2. **Load conventions.** Read `.claude/skills/test-writing-locators.md`, `.claude/skills/test-writing-assertions.md`, `.claude/skills/test-writing-api-vs-ui.md`, `.claude/skills/testsmart-spec-md-handling.md`.
3. **Read the spec.** Parse the `.spec.md` according to the format documented in `specs/SPEC-FORMAT.md`.
4. **Invoke `@generator`** with the parsed spec + the conventions. Trust the locators in the spec verbatim.
5. **Write the output** to `tests/<same-path>/<scenario>.spec.ts`.
6. **Run it.** `npm test -- tests/<same-path>/<scenario>.spec.ts`. If it passes, ask the user if they want to commit. If it fails, surface the failure and the relevant spec section.

## Don't

- Don't re-derive locators from screenshots when the spec already lists them.
- Don't add `page.waitForTimeout(...)` to make a failing test pass — fix the assertion or update the spec.
- Don't silently rename the spec or move the file.
