---
title: "Data anomaly detection for Indonesia's largest bank"
short: "Anomaly detection for Indonesia's largest bank"
company: "PwC Indonesia"
order: 2
date: "2025-09"
before: "rules only"
after: "~15M / day"
resultLabel: "anomalous records flagged daily across ~20 use cases"
status: "shipped"
role: "Senior Associate, Risk Assurance (Data Engineer) · led 6 engineers"
scope: "~20 use cases"
stack: ["PySpark", "Python", "Forecasting models"]
summary: "A platform that grew from rule-based checks into AI forecasting and now flags ~15M anomalous records a day."
---

## Context

At PwC Risk Assurance, I worked on data platforms for banking clients. The flagship was a data anomaly detector for the **largest bank in Indonesia**.

<div class="flow"><span>bank data</span><i>→</i><span>Spark pipelines</span><i>→</i><span>rule-based checks</span><i>→</i><span>AI forecasting</span><i>→</i><span>flagged records</span></div>

## Decision

Build in two phases:

- **Phase 1: rule-based detection** for clear, explainable anomalies.
- **Phase 2: AI forecasting** to catch deviations that fixed rules miss.

The pipelines are built on a **metadata-driven orchestration framework**.

## Result

> **~20 use cases**, **~15M anomalous records flagged daily**, and **40% faster data retrieval** in the Spark pipelines.

## Team

I led a team of **6 engineers** while staying hands-on. When junior teammates were ready to work heavy overtime because they feared missing deadlines, I pushed back. I didn't want the team trading its health for a deadline.

<div class="todo">TODO (Ryan): add details you're comfortable sharing publicly: an example anomaly type, how the 40% retrieval gain was achieved, and how the metadata-driven framework works. Keep client details anonymised.</div>
