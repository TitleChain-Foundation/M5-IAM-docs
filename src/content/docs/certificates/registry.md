---
title: TitleChain Registry entry
description: What would go on the registry, and what never will.
sidebar:
  order: 2
---

Your IAM includes a **simulated** registry entry, marked `SIMULATED_NOT_ANCHORED`:

| Field | Meaning |
| --- | --- |
| Registry ref | `TCR-IAM-` and the first 12 characters of the commitment |
| Commitment hash | SHA-256 over your three-part attestation |
| Block | A sample number, derived from the commitment |

**Only the commitment hash would ever be anchored. Your name, contact and statement never leave your device.** The commitment includes a random 122-bit identifier, so it cannot be matched by guessing a name.
