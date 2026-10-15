---
title: Check, export or delete
description: Confirm nothing changed, keep a copy, or remove your pod.
sidebar:
  order: 4
---

## Check that nothing changed

Your IAM keeps a hash-chained ledger of every file it wrote. The check recomputes the chain and every file's fingerprint, and reports any difference.

- **On the website:** the result page shows **Record check: Unchanged**.
- **On your computer:** `python3 m5_iam.py verify --pod <your M5POD folder>`

The check detects changes. It is not a signature and does not prove who you are.

## Export

Your M5POD is already a folder of plain files. Copy it, back it up, or zip it.

## Delete

Delete the folder. On the website, use **Remove my IAM from this browser**.
