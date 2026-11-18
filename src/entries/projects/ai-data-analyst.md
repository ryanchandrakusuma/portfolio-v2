---
title: "AI data analyst"
summary: "Natural language → SQL over BigQuery, with guardrails and a measured eval set."
type: "personal"
status: "planned"
order: 0.5
stack: ["Gemini", "Vertex AI", "BigQuery", "dbt", "Evals"]
---

An AI analyst that answers questions about the data from my CDC platform.

## Planned design

- **Natural language to SQL** over BigQuery, with **dbt model descriptions** as context.
- **Guardrails:** read-only access, query cost limits, and SQL validation.
- **Evaluation:** a set of **30–50 questions**, with accuracy reported openly.
- **Model:** Gemini via Vertex AI. Local models run too slowly on CPU for demos.

<div class="todo">TODO (Ryan): update status, repo link and accuracy numbers when built.</div>
