---
title: NIST mapping
description: M5 safeguards mapped to NIST SP 800-53 Revision 5 control families.
sidebar:
  order: 3
---

The proposed technical safeguards are mapped to relevant control families in **NIST SP 800-53 Revision 5**, including identification and authentication, access control, audit and accountability, system and information integrity, and protection of personally identifiable information.

| Control family | Example controls | M5 safeguard | Free IAM today |
| --- | --- | --- | --- |
| Identification and Authentication (IA) | IA-2, IA-5, IA-8, IA-12 | Approved proofing; issuer-verifiable credentials bound to the TCID; proof of control | Self-attested only; grants no authority |
| Access Control (AC) | AC-3, AC-6 | Owner-controlled permissions; least-privilege roles derived from a verified principal | Owner-only files; loopback-only local app |
| Audit and Accountability (AU) | AU-2, AU-9, AU-10 | Verifiable transaction receipts; protected, attributable event records | Hash-chained ledger of every file written |
| System and Information Integrity (SI) | SI-7 | Cryptographic integrity checks; signed events | Integrity check over every recorded file |
| System and Communications Protection (SC) | SC-7, SC-28 | Boundary protection; protection of records at rest | Loopback boundary; no network calls; disk encryption recommended |
| PII Processing and Transparency (PT) | PT-2, PT-3 | Purpose-bound processing; only blinded commitments in public records | No identifiers collected; nothing transmitted |
| Supply Chain Risk Management (SR) and Configuration Management (CM) | SR-4, CM-14 | Provenance of releases; signed components | Checksums and reproducible builds; signatures planned |

The release's [threat model](https://github.com/TitleChain-Foundation/M5-AI-Sovereign-Commons/pull/33) maps each threat to individual controls.

:::caution[What this mapping is]
This mapping describes intended security controls and their implementation requirements. It does not constitute a NIST certification, independently verified compliance assessment or guarantee against identity theft, fraud or coercion.
:::
