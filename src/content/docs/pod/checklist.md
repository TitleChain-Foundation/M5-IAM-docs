---
title: M5 Master Checklist
description: One list of every certificate you hold, what needs attention, and where each one lives.
sidebar:
  order: 4
---

The **M5 Master Checklist** is the first page of your dashboard. It lists every certificate across all your accounts: software you use, services you pay for, credentials you hold, and the works you create yourself.

## What each item shows

| Shown | Meaning |
| --- | --- |
| **Status** | Up to date, Update available (a newer version exists), Renew soon (ends within 30 days) or Expired |
| **What it is** | Software licence title, licensed service, credential, your own creation, agreement, agent permission, or your IAM certificate |
| **Issuer and licence** | Who granted it, and its licence or provenance |
| **Lives in** | The folder in your M5POD where its certificate belongs |

## Where each certificate lives

| Certificate | Bank of Me | Entity accounts |
| --- | --- | --- |
| IAM origin | `M0-M5IAM-000/registry/` | — |
| Software licence title | `credentials/software-titles/` | `credentials/software-titles/` |
| Licensed service | `contracts/` | `contracts/licenses/` |
| Credential | `credentials/` | `credentials/` |
| Your own creation | `personal/creative-ip/` | `legal/ip/` |
| Agreement | `contracts/` | `contracts/` |
| Agent permission | `agents/` | `agents/` |

A new M5POD's checklist starts with one item: your IAM origin certificate. Items are added as you activate software, services and accounts.

:::note
Until launch, certificates are samples and are marked as such.
:::
