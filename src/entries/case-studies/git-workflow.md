---
title: "Fixing the release workflow for a 12-person data team"
short: "Release workflow for a 12-person team"
company: "Philip Morris International"
order: 4
date: "2024-03"
before: "~400 stale branches"
after: "ticket-based"
resultLabel: "traceable branches, and releases no longer blocked by one failing feature"
status: "proposed & adopted"
role: "Data Engineer"
scope: "~12 people (SQL + data engineering)"
stack: ["Git", "Jira", "Atlassian"]
summary: "Ticket-based branches, delete-on-merge, and cherry-pick releases so QA-passed work ships on time."
---

## Context

The team had about **12 people**, split into a SQL team (transformation layer) and a data engineering team (ELT pipeline).

## Problem

<div class="flow"><span>personal branch off dev</span><i>→</i><span>QA (dummy data, data types)</span><i>→</i><span>prod (lead approval)</span></div>

- Branches were named after people rather than work, and were never cleaned up. There were about **400 stale branches** when I joined.
- Releases were all-or-nothing. If one feature failed QA, everything that passed waited with it.

## Decision

- **Branches created from Jira tickets**, so every branch traces back to a piece of work.
- **Delete-on-merge**, so the branch list shows only work in progress.
- **Cherry-pick releases**, so features that passed QA ship even when others fail.
- A clear **hotfix path**: branch from production, revert or fix, and ship after review.

## Result

> A traceable, clean repo, and releases no longer blocked by a single failing feature.

<div class="todo">TODO (Ryan): add a number if you have one, e.g. release frequency or rollbacks before vs. after.</div>
