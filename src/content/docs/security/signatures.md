---
title: Signatures
description: How releases are signed today and how account signatures are planned.
sidebar:
  order: 4
---

| What | Signed by | Status |
| --- | --- | --- |
| **Software releases** (the IAM download, the M5 app) | TitleChain Foundation, using **Sigstore**, an open-source signing service run under the OpenSSF, a Linux Foundation project. Each signature is recorded in Sigstore's public transparency log | Planned. Today, releases carry SHA-256 checksums and build reproducibly |
| **Developer contributions** | Each developer's own Sigstore signing identity, matched to a verified M5-CV payee before any payment is routed to them | Planned |
| **Your IAM attestation** | You, as holder, once you have a signing key; and the approving agency over its own claim, at verification | Placeholder reserved; not yet signed |
| **Registered account actions** | The person holding the role, with each event signed and receipted | Designed for registered accounts |

Release signatures are TitleChain Foundation's own. The Linux Foundation does not sign them.

Today, your IAM's integrity comes from its hash-chained ledger, which exposes any change. A signature adds who made the record; the ledger shows that nothing changed.
