---
title: Filter feed by clicking sources in sidebar
testName: filter-feed-by-clicking-sources-in-sidebar
type: spec
status: draft
source: jira:TAS-120
generated: 2026-05-16T19:38:52.534Z
runId: 5eada834-dd11-44d5-a261-bd37b408be27
tags:
  - status/draft
  - source/jira
related: []
---

# Filter feed by clicking sources in sidebar

## Goal

Verify that after running the steps below, the following are observable:

- Sidebar dynamically lists all active sources (not hardcoded)
- Each source shows an item count badge* Clicking a source filters the feed to show only items from that source* Active source filter is visually highlighted in the sidebar* "All Sources" option available to clear the filter* SourceBadge on feed items is clickable and applies the same source filter* Source filter state persists in URL query params* Mobile responsive — source filter accessible on smaller screens
- Technical Notes
- apps/frontend/src/components/AppSidebar.tsx — hardcoded sources list at line ~91, replace with dynamic fetch- apps/frontend/src/hooks/useFeed.ts — already has changeSource() function that can be leveraged- Backend already supports sourceType and sourceId filtering in feed.service.ts- Need a new API endpoint or extend existing one to return source list with item counts- Consider using the existing Source model relation on FeedItem for accurate counts

## Source

- **Type**: jira
- **Reference**: TAS-120
- **App**: http://localhost:5173/
- **Generated**: 2026-05-16T19:38:52.534Z
- **Run**: 5eada834-dd11-44d5-a261-bd37b408be27

## Preconditions

- Login required: no
- Starting URL: `http://localhost:5173/`

## Steps

1. Click 'All Sources' to filter feed by all sources _(link "All Sources 681")_
   _(now at `http://localhost:5173/feed`)_
2. Click 'All Sources' to filter feed by all sources _(link "All Sources 681")_
3. Click 'All Sources' to filter feed by all sources _(link "All Sources 681")_
4. Click 'All Sources' to filter feed by all sources _(link "All Sources 681")_
5. Click 'All Sources 681' to filter feed by this source
6. Click 'dev.to AI 229' to filter feed by this source
   _(now at `http://localhost:5173/feed?sourceId=cmnrakmti0007zlyqnfybs6ub`)_
7. Click 'Hacker News Top 127' to filter feed by this source
   _(now at `http://localhost:5173/feed?sourceId=cmnrakmtu000gzlyqhj04shzi`)_
8. Click 'r/LocalLLaMA 125' to filter feed by this source
   _(now at `http://localhost:5173/feed?sourceId=cmnrakmtl0009zlyqdvgnng5g`)_
9. Click 'r/PromptEngineering 101' to filter feed by this source
   _(now at `http://localhost:5173/feed?sourceId=cmnrakmtw000hzlyq2rwgf188`)_
10. Click 'r/ClaudeAI 99' to filter feed by this source
   _(now at `http://localhost:5173/feed?sourceId=cmnrakmtm000azlyq3eggg5ni`)_
11. Click 'All Sources 681' to filter feed by this source
   _(now at `http://localhost:5173/feed`)_
12. Click 'All Sources 681' to filter feed by this source

## Selectors used

| Element | Locator | Confidence |
|---|---|---|
| link "All Sources 681" | `getByTestId('sidebar-all-sources')` | high |
| link "dev.to AI 229" | `getByTestId('sidebar-source-cmnrakmti0007zlyqnfybs6ub')` | high |
| link "Hacker News Top 127" | `getByTestId('sidebar-source-cmnrakmtu000gzlyqhj04shzi')` | high |
| link "r/LocalLLaMA 125" | `getByTestId('sidebar-source-cmnrakmtl0009zlyqdvgnng5g')` | high |
| link "r/PromptEngineering 101" | `getByTestId('sidebar-source-cmnrakmtw000hzlyq2rwgf188')` | high |
| link "r/ClaudeAI 99" | `getByTestId('sidebar-source-cmnrakmtm000azlyq3eggg5ni')` | high |

## Notes for the generator

- Use `filter-feed-by-clicking-sources-in-sidebar` as the `test(...)` name (also in the frontmatter as `testName`).
- Use the locators from the **Selectors used** table verbatim. Do not re-derive.
- For environment-bound values, read from `process.env` with sensible fallbacks (e.g. `process.env.TEST_USER ?? ''`).
- After each navigation step, add `await expect(page).toHaveURL(...)` against the page URL noted in the step.
- Add a final `expect(...).toBeVisible()` assertion that proves the **Goal** above. Pick the locator that best evidences each acceptance line.
- Wrap the scenario in `test.describe(<scenario>)` with a single `test(...)` block unless multiple assertions naturally split into separate tests.
- No hardcoded waits — rely on Playwright auto-waiting and `expect(...).toBeVisible()`.
