---
title: Security
description: How the IAM protects your records, and what it does not do.
sidebar:
  order: 3
---

| Threat | Protection |
| --- | --- |
| Another website tries to use the local app | It listens on 127.0.0.1 only, and accepts the form only from its own page |
| Other users on your computer read your pod | Files are owner-only on macOS and Linux; use disk encryption |
| Someone edits your records | The ledger detects any change |
| Someone creates many identities | **Not prevented.** Self-attestation gives no Sybil resistance; that needs separate verification |
| The download is altered | Published SHA-256 checksums and a reproducible build |
| Your data leaks through the registry | Only a commitment hash, which cannot be matched by guessing, would ever be anchored |

Controls are mapped to NIST SP 800-53 Rev. 5 in the release's threat model. This is not a certification or a statement of compliance.
