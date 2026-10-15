---
title: Three-part records
description: Every attestation and agreement is kept as words, data and code.
sidebar:
  order: 2
---

Following M5-RICARDIAN-TRIPLE-LAYER-001, every attestation, agreement and M5Pay transaction is kept in three matching parts:

| Part | For | IAM example |
| --- | --- | --- |
| **The words** | People | `attestation/human-terms.md` |
| **The data** | Software | `attestation/human-attestation.json` |
| **The check** | Machines | `attestation/executable-check.json` |

All three share one contract identifier and record each other's fingerprints. The human words control; the code may never create authority the words do not give. The IAM's check declares `authority_effect: NONE`, `network_write: false` and `financial_movement: false`.
