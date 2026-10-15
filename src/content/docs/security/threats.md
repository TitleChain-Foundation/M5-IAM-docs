---
title: Threats and safeguards
description: How M5 is designed to resist each threat, and what the free IAM release does today.
sidebar:
  order: 2
---

The **M5 security design** column describes the model for registered accounts. The **free IAM today** column states what the released free IAM (v0.2.0) actually does.

| Threat | M5 security design | Free IAM today |
| --- | --- | --- |
| Another website attempts to access the local application | The local interface binds to 127.0.0.1, rejects unauthorized origins and requires authenticated authorization for protected operations. | **In place.** Loopback only; foreign hosts and origins are refused. The IAM has no protected operations: its only action is creating your own pod. |
| Another user or application attempts to read the M5POD | Owner-controlled file permissions, device encryption and independently managed access controls restrict access. | **In place** on macOS and Linux (owner-only files). Device encryption is the member's setting. |
| Someone alters records | Signed events, cryptographic integrity checks and verifiable evidence references are designed to expose unauthorized changes or inconsistent histories. | **Integrity check in place:** a hash-chained ledger exposes any change. Signed events come with registered accounts. |
| Someone creates multiple identities to impersonate another human | Unverified identity claims grant no M5HUM authority. Protected M5 functions require approved proofing, an issuer-verifiable credential bound to the TCID, and appropriate authorization. Multiple accounts and roles do not create additional verified human principals. | **Enforced by design:** an IAM is self-attested and grants no authority. |
| Someone obtains a Social Security number, telephone number or other personal identifier | Knowledge of an identifier is insufficient to establish M5 credential authority. Issuer verification, credential status, proof of control and transaction-specific permissions are evaluated separately. | The IAM never asks for or stores government identifiers. |
| An agent attempts to act beyond its authorized role | M5AGT privileges must be derived from a verified M5HUM or other legally authorized principal, scoped to a defined action and evaluated against current policy and credentials. | No agent can act on an IAM-only pod. |
| Someone attempts an unauthorized asset transfer | The transfer workflow checks ownership authority, recipient eligibility, restrictions, jurisdiction and required approvals before accepting the transfer. | No transfers are possible from an IAM. |
| A credential is revoked or the holder loses eligibility | The system must check authoritative credential status at the required decision point. A previously valid credential cannot confer continuing authority after effective revocation. | The IAM holds no credentials. |
| Someone substitutes an altered software download | Published checksums, authenticated release signatures and reproducible builds provide independent integrity checks. | **Checksums and reproducible builds in place.** Release signatures (Sigstore) are planned. |
| Private information leaks through a public registry | Public records contain only the necessary references and appropriately blinded cryptographic commitments. Private identity information and underlying evidence remain subject to M5POD access controls. | **In place:** only a commitment hash, blinded by a random 122-bit identifier, would ever be anchored. Nothing is anchored yet. |
