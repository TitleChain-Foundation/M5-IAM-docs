---
title: Security model
description: Sovereign identity, credential authority and security in M5.
sidebar:
  order: 1
---

**One human. One verified root identity. Multiple authorized roles. No inherited authority from stolen personal information.**

M5 is designed around the verified human principal, **M5HUM**, whose TitleChain identity (**TCID**) establishes the root of their sovereign digital identity and whose uniquely controlled **M5POD** holds their private records, credentials, permissions and supporting evidence.

The human may operate multiple accounts, businesses, wallets, devices and **M5AGT** agents, but these are not independent substitutes for the human's identity. They are separately authorized roles and relationships, each subject to the credentials, jurisdiction, purpose and limits established by the verified principal and applicable issuing authorities.

A Social Security number, telephone number, government identification number or other personal identifier does not, by itself, establish the right to act as that person.

Where an authorized issuer participates in M5, its verifiable credential binds a specific claim or eligibility to the appropriate TCID and issuer authority. The person's M5 environment can verify that credential without relying solely on possession of the underlying identifier. Neither a website operator nor an unauthorized agent should be able to rewrite the issuer's signed assertions or grant itself privileges.

This changes the security question from *"Does someone know enough about you to impersonate you?"* to ***"Can this verified principal or authorized agent prove the specific authority required for this action, at this time, under the applicable jurisdiction?"***

The same rule extends to property and value transfers. A request to transfer a protected asset must establish the originating owner's authority, the receiving party's eligibility, the applicable legal and registry requirements, and a verifiable record of approval. Where the transaction policy requires an M5 member recipient, both sides must satisfy that requirement before execution.

The result is a model designed to make unauthorized transfers more difficult, preserve evidence of who authorized an action, and provide investigators and authorized institutions with a clearer path to disputed transactions. It does not assume that identity theft, coercion or fraud disappear; it reduces reliance on the weak identifiers and disconnected databases that have made those abuses difficult to detect.

:::tip[The governing principle]
**Identity** establishes the principal. **Credentials** establish qualified authority. **Policy** determines the permitted action. A verifiable **transaction receipt** preserves the evidence.
:::

## Where the free IAM fits

The free IAM is the human root before verification. It is self-attested, so it **grants no M5HUM authority**: it cannot authorize a payment, signature, title transfer or agent action. Protected M5 functions require approved proofing, an issuer-verifiable credential bound to the TCID, and appropriate authorization.

See [Threats and safeguards](/M5-IAM-docs/security/threats/) and the [NIST mapping](/M5-IAM-docs/security/nist/).
