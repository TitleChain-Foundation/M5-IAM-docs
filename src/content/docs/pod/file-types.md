---
title: What goes in each folder
description: The ten vaults, their privacy levels and the file types they hold.
sidebar:
  order: 2
---

Each account has the same ten vaults. Personal and business accounts add their own sub-folders.

| Vault | Holds | Privacy | Typical files |
| --- | --- | --- | --- |
| `identity/` | Identity records and verification documents | Private | PDF, JPG or PNG scans; JSON credentials |
| `financial/` | Accounts, income, costs, portfolio and taxes | Private | CSV, OFX or QFX statements; PDF; XLSX |
| `contracts/` | Signed agreements, each as a three-part Ricardian record | Private | PDF; the words (.md), the data (.json) and the code |
| `credentials/` | Education, work history, licences and software titles | Authenticated read | PDF certificates; JSON verifiable credentials |
| `agents/` | The agents you allow, their permissions and workflows | Private | JSON, YAML or Markdown |
| `personal/` | Home, life, family, dreams, creations, community, spiritual life | Private | Any: documents, photos, audio, video, notes |
| `health/` | Health records, wellness and advance directives | Encrypted private | PDF; FHIR JSON |
| `legal/` | Residence, jurisdiction, guardianship and legal papers | Encrypted private | PDF |
| `governance/` | Votes, delegations, resolutions and audit records | Private | PDF; JSON |
| `comms/` | How you are reached, brand and publishing, message archives | Private | EML or MBOX; JSON contact cards; media |

Entity accounts also have `authority/`: who holds which role and who may sign.

:::note
"Encrypted private" marks folders that belong in an encrypted container. Your device's disk encryption protects everything else.
:::
