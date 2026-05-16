---
title: Specs — map of content
type: moc
date: 2026-05-16
tags:
  - type/moc
---

# Test scenarios — index

Every test in this repo starts as a `*.spec.md` here. The matching `.spec.ts` lives under `tests/<same-path>/`. Run `/regen-spec <path>` to (re)generate the code from a spec.

## All scenarios

```dataview
TABLE WITHOUT ID
  file.link AS Scenario,
  status AS Status,
  source AS Source
FROM "specs"
WHERE type = "spec"
SORT file.mtime DESC
```

## Failing right now

```dataview
LIST
FROM "specs"
WHERE status = "failing"
```

## Implemented and passing

```dataview
LIST
FROM "specs"
WHERE status = "passing"
SORT file.mtime DESC
```

## Drafts (no .spec.ts yet)

```dataview
LIST
FROM "specs"
WHERE status = "draft"
```

## Manual authoring

To write a new scenario by hand, start from [[_templates/spec]]. See [[SPEC-FORMAT]] for the required structure.

## How the Dataview blocks work

Each `*.spec.md` declares its `status` and `type` in frontmatter. The Obsidian Dataview plugin (recommended by `.obsidian/community-plugins.json`) renders the queries above as live tables that update as your specs change. Without Dataview, the blocks just render as fenced code.
