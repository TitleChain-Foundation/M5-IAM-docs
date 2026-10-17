---
title: Certificate of Title
description: The sample certificates your IAM shows.
sidebar:
  order: 1
---

After you activate, your IAM shows sample Certificates of Title, each stamped **SAMPLE · NOT ISSUED · NOT ANCHORED**.

| Certificate | What it certifies |
| --- | --- |
| **IAM origin** | That your IAM origin was attested, by a human being, on a device you control. Saved in your pod. |
| **Software licence** | That a free tool is held under its published licence. The licence comes from the people who make it; the certificate records it. |
| **Licensed service** | That a paid service is licensed from its provider. Existing customers show proof; new customers pay the provider directly through M5-OpenAPI. |


## How a Certificate of Title is issued

1. **You attest and accept.** You make your three-part human attestation and accept the CYRUS Protocol on your own device.
2. **A commitment is made.** The SHA-256 of your attestation's three parts becomes the commitment. Only this hash would go to the registry; your name, contact and statement stay with you.
3. **The registry records it.** The TitleChain Registry records the commitment as an `IAM_ORIGIN` entry and gives it a title number (`TCR-IAM-…`).
4. **The certificate is issued** against that entry and saved in your pod (`registry/certificate-iam-origin.json`).

Until launch, steps 3 and 4 are **simulated**: the entry is `SIMULATED_NOT_ANCHORED`, and the certificate is `SAMPLE_NOT_ISSUED` with no issuer.

## What your IAM certificate states

| Section | What it says |
| --- | --- |
| **Holder** | Your name, account `M5IAM-000`, your state chain (your own choice, not verified) and when you attested |
| **Identity** | Human attested, not verified |
| **CYRUS Protocol** | Accepted, with the date |
| **Right to refuse consent** | Selected · not activated, or not selected. Your current choice is in `consent/consent.json` |
| **Registry** | Title number and commitment hash |
| **Public commons** | Published by TitleChain Foundation in the [M5-AI-Sovereign-Commons](https://github.com/TitleChain-Foundation/M5-AI-Sovereign-Commons) |
| **Licences** | The IAM software is `Apache-2.0`; the standard and documentation are `CC-BY-4.0`. The licences cover the software and the standard, **never your records, which stay yours** |
| **Usage** | Free for life. Personal: one human, acting for themselves. Not transferable: a new holder makes their own attestation. Authorizes nothing |
| **What it gives you** | Use the free IAM for life; use free and open tools on your own devices; export or delete your records at any time; apply for a registered account when they open |

The certificate follows the shape of an ISO/IEC 19770-3 entitlement record, with licences given as SPDX identifiers.
