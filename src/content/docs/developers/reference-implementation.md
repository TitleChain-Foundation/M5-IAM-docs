---
title: Reference implementation
description: The Python reference, the browser implementation, tests and the reproducible demonstration.
sidebar:
  order: 2
---

The reference implementation is the **M5 IAM Free research release v0.2.0** in the TitleChain Foundation Commons repository ([pull request #33](https://github.com/TitleChain-Foundation/M5-AI-Sovereign-Commons/pull/33), under review).

| Part | Language | Notes |
| --- | --- | --- |
| `m5_iam.py` | Python, standard library only | Creates, verifies and exports pods; no network calls |
| `m5_iam_app.py` + `app.html` | Python and HTML | The local app on 127.0.0.1 |
| Browser implementation on dagny.m5bank.app | JavaScript | Produces the same files; its pods pass the Python `verify` |

## Reproduce it

```bash
python3 -m pytest tests/test_m5_iam_free.py -q                  # automated tests
python3 reference-implementation/m5-iam-free/demo/reproduce.py   # same digests on any machine
python3 tools/build_iam_package.py --output-dir dist             # byte-identical ZIP
```

The release includes its architecture, threat model, pre-publication privacy check, evidence record and citation file.
