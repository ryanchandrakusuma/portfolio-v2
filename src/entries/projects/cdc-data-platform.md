---
title: "Real-time CDC data platform"
summary: "Postgres → Debezium → Kafka → BigQuery + dbt, with a live Redis metrics dashboard."
type: "personal"
status: "in progress"
order: 0
stack: ["Postgres", "Debezium", "Kafka", "BigQuery", "dbt", "Redis", "FastAPI"]
---

An end-to-end change data capture platform I'm building to go deeper than my day job allowed.

<div class="flow"><span>Postgres (simulated shop)</span><i>→</i><span>Debezium</span><i>→</i><span>Kafka</span><i>→</i><span>GCS Parquet</span><i>→</i><span>BigQuery + dbt</span></div>

## Planned design

- **Source:** a simulated shop on Postgres with inserts, updates and soft deletes.
- **Warehouse:** dbt `MERGE` upserts and **SCD Type 2** history in BigQuery.
- **Real time:** a Kafka consumer → Redis live metrics → FastAPI SSE dashboard.
- **Orchestration and quality:** Airflow or Dagster, dbt tests, and hash-based Postgres vs BigQuery reconciliation.
- **Infra:** heavy services run locally, and the cloud is used for storage and the warehouse. Terraform handles teardown, with a budget alert from day one.

## Things I want to prove

- correct delete handling, idempotent loads, and replay/backfill via Kafka offsets
- schema evolution, plus a kill-and-restart failure demo
- a Debezium vs GCP Datastream comparison

<div class="todo">TODO (Ryan): link the repo and add an architecture diagram, numbers (events/sec, latency, monthly cost) and a demo video when ready.</div>
