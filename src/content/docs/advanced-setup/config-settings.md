---
title: Config Settings
description: LibreCoach configuration options for flow protection, beta features, and troubleshooting.
sidebar:
  order: 6
  label: Config Settings
draft: false
---

These settings are found in the LibreCoach **Configuration** tab in Home Assistant (**Settings → Apps → LibreCoach → Configuration**). Most users will never need to touch them, but they're here when you do.

## Prevent Flow Updates

By default, LibreCoach replaces the Node-RED flows every time it updates — this is how new features and bug fixes reach you. If you've made manual changes to the flows that you want to preserve, toggle **Prevent Flow Updates** on.

1. In Home Assistant, go to **Settings → Apps → LibreCoach**.
2. Click on the **Configuration** tab.
3. Toggle **Prevent Flow Updates** to **active** (green).
4. Click **Save**.

:::caution
When this is on, your flows will **not** receive bug fixes or new features from LibreCoach updates. Use it only if you've made intentional manual changes and understand the trade-off.
:::

## Allow Node-RED Overwrite

When you first install LibreCoach on a system that already has Node-RED running, LibreCoach will stop and wait for permission before touching your existing flows. **Allow Node-RED Overwrite** is the safety toggle that grants that permission.

Toggle this on only when performing the initial LibreCoach installation and you're ready for it to take over Node-RED. Once setup is complete, you can leave it off — it's not needed for subsequent updates.

:::danger
This setting will **delete your existing Node-RED flows**. Back them up first if you want to keep them.
:::

## Enable Beta Testing

Enables experimental features that are still in development. These may be incomplete, change without notice, or behave unexpectedly.

Toggle **Enable Beta Testing** on if you'd like to try upcoming features early and are comfortable with the occasional rough edge.

## Enable Debug Logging

Enables verbose output in the LibreCoach app log. Normally the log only shows important events. With this on, it adds detailed step-by-step output useful for diagnosing problems.

Toggle **Enable Debug Logging** on only when actively troubleshooting an issue — the extra volume makes it harder to spot real problems during normal operation.
