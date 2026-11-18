---
title: "Making data reconciliation observable: FastAPI monolith → Airflow + ECS"
short: "Reconciliation platform on Airflow + ECS"
company: "Philip Morris International"
order: 3
date: "2024-03"
before: "1 process"
after: "~50 tables"
resultLabel: "reconciled source ↔ Snowflake, one observable ECS task per step"
status: "shipped"
role: "Data Engineer"
scope: "~50 tables"
stack: ["Apache Airflow", "EcsRunTaskOperator", "DAG Factory", "AWS ECS", "SQL Server", "Snowflake", "Terraform"]
summary: "Split a do-everything FastAPI job into observable, retryable steps, so adding a new table is a config change."
---

## Context

The reconciliation platform checks **SQL Server source data against Snowflake** and emails the results to the team.

## Problem

Everything ran inside **one FastAPI process**, in sequence: extract from source, extract from Snowflake, reconcile, then email. When it failed, it was hard to tell which step broke, and you couldn't rerun only that step.

## Decision

<div class="flow"><span>extract source</span><i>→</i><span>extract Snowflake</span><i>→</i><span>reconcile</span><i>→</i><span>email report</span></div>

- **One ECS task per step**, orchestrated by Airflow's `EcsRunTaskOperator`. Each step has its own logs, status, and retries.
- **DAG Factory** generates the DAGs from config, so adding a table is a config change instead of new code.

## Alternatives considered

| Option | Why not |
|---|---|
| Keep the FastAPI process, add more logging | Still one unit of failure, so no per-step retries or status |

## Result

> Covers **~50 tables**. Failures point to a single step, and reruns only touch that step.

## Lessons

- Splitting a pipeline into observable steps is often worth more than making it faster.
- For large tables, hash-based chunk comparison scales much better than comparing every row.

<div class="todo">TODO (Ryan): add a before/after number if you have one, e.g. time to diagnose a failure or time to onboard a new table.</div>
