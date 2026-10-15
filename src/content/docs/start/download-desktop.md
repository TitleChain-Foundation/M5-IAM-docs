---
title: Run it on your computer
description: The free IAM as a download that runs entirely on your own computer.
sidebar:
  order: 3
---

The same IAM is available as a download from TitleChain Foundation: the **M5 IAM Free research release v0.2.0** ([under review](https://github.com/TitleChain-Foundation/M5-AI-Sovereign-Commons/pull/33)).

## Requirements

Python 3.9 or later. Nothing else is installed.

## Steps

1. Download `m5-iam-free-v0.2.0.zip` and its `.sha256` file.
2. Check the download: `shasum -a 256 -c m5-iam-free-v0.2.0.zip.sha256`
3. Unzip it and check every file: `shasum -a 256 -c PACKAGE-CHECKSUMS.sha256`
4. Open `reference-implementation/m5-iam-free/` and double-click **Start M5 IAM.command** (macOS) or **Start M5 IAM.bat** (Windows).

The app opens in your browser at `http://127.0.0.1:8756/` and creates your pod in `~/M5POD-IAM`.

:::note
On macOS, the first time, right-click the launcher and choose **Open**. The download is not yet signed by Apple.
:::
