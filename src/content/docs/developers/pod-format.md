---
title: Pod format
description: The files an IAM pod contains and how its ledger is computed.
sidebar:
  order: 1
---

## IAM files

| File | Contents |
| --- | --- |
| `M0-M5IAM-000/iam.json` | The IAM record: status `IAM ONLY`, identity `SELF_ATTESTED_NOT_VERIFIED` |
| `attestation/human-terms.md` | The human words |
| `attestation/human-attestation.json` | The machine record, with the digests of the words and the check |
| `attestation/executable-check.json` | The executable layer |
| `identifiers/identifiers.json` | The local identifier; TCID and the others empty |
| `registry/registry-receipt.json` | The simulated registry entry |
| `registry/certificate-iam-origin.json` | The sample certificate |
| `ledger/events.jsonl` | One JSON event per line |

JSON files are written with two-space indentation and a final newline.

## Ledger events

Each event has `seq`, `at`, `type`, `path`, `sha256` (of the file at `path`) and `prev` (the previous event's `hash`; 64 zeros for the first). Its `hash` is the SHA-256 of those six fields as compact JSON with sorted keys:

```json
{"at":"2026-10-13T00:00:00Z","path":null,"prev":"000…000","seq":1,"sha256":null,"type":"POD_CREATED"}
```

Verification recomputes every `hash`, checks every `prev` link, and compares each recorded file's current SHA-256 with the last recorded value. Any difference fails the check.
