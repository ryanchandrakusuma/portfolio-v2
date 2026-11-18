---
title: "Halving a 150GB nightly ELT pipeline at the same cost"
short: "Halving a 150GB nightly ELT pipeline"
company: "Philip Morris International"
order: 1
date: "2024-03"
before: "7h"
after: "~3.5h"
resultLabel: "per nightly run, 150GB MySQL → Snowflake, at the same cost"
status: "shipped"
role: "Data Engineer"
scope: "~150GB per run"
stack: ["AWS Glue", "Apache Airflow", "MySQL", "Snowflake", "Python", "Terraform"]
summary: "The nightly extraction ran every table one after another. I redesigned it to run concurrently and safely, without adding cost."
---

## Context

PMI's regional data platform is **ELT**. Data is extracted from MySQL, loaded into Snowflake, then transformed through three layers using stored procedures. The ~12-person team was split between a SQL team that owned transformations and a data engineering team that owned the pipeline.

<div class="flow"><span>MySQL</span><i>→</i><span>AWS Glue</span><i>→</i><span>Snowflake staging</span><i>→</i><span>presentation</span><i>→</i><span>data product</span></div>

## Problem

The legacy extraction processed tables **with no concurrency**. A full run took about **7 hours**, which delayed everything downstream and left little room to recover when a run failed.

## Decision

Fan out one extraction job per table, with a cap on how many run at once, and make every load safe to retry.

- **Glue dispatcher.** A dispatcher starts one AWS Glue job per table.
- **Bounded concurrency.** At most **10 extractions** run at once, so the shared source database isn't overloaded.
- **Completion markers.** Each table writes a schema JSON when its extraction finishes, and **Airflow sensors** wait for these markers before loading.
- **Transactional upserts.** PK-keyed upserts run in one transaction, so a partial failure never leaves half-loaded data.
- **Retries.** Up to 3 retries, each with a fresh connection, for intermittent stale or stuck MySQL connections.

## Alternatives considered

| Option | Why not |
|---|---|
| AWS Lambda per table | 15-minute execution limit, too short for the biggest tables |
| Keep sequential, just tune queries | Doesn't address the main problem: everything waiting in one queue |

## Trade-offs

Ten workers don't give a 10× speedup. The result was about **2×**, and knowing why matters for the next round:

- **Long tail.** Table sizes are very uneven, so a few huge tables set the total runtime. The fix is to start the biggest tables first.
- **Shared source I/O.** Concurrent reads compete for the same database. The fix is to read from a replica.
- **Glue startup overhead** adds a fixed cost to every job.
- **Huge tables** can be split further with Spark JDBC partitioned reads.

Incremental loads use `updated_at`, and soft deletes use `deleted_at`. A window from "yesterday 00:00 to now" can miss rows stamped just before midnight that commit after the run starts. You either widen the window or accept the gap as a documented trade-off. The long-term fix upstream is `ON UPDATE CURRENT_TIMESTAMP`, with hash-based chunk reconciliation to catch drift.

## Result

> **7 hours → ~3.5 hours per run, at the same cost.**

## What I'd do today

- Move the sensors to the extraction side.
- Replace the custom dispatcher with a **Step Functions Map state** using `MaxConcurrency`, or Glue's built-in max concurrent runs.
- Schedule the largest tables first to shorten the long tail.
