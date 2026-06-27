---
filename: config-settings
title: Config Settings
description: LibreCoach configuration options for flow protection, network time sync, and troubleshooting.
sidebar:
  order: 8
  label: Config Settings
draft: false
---

These settings are found in the LibreCoach **Configuration** tab in Home Assistant (**Settings → Apps → LibreCoach → Configuration**). Most users will never need to touch them, but they're here when you do.

## Integration Toggles

Each optional integration is **disabled by default**. Enable the ones your RV uses on the **Configuration** tab, click **Save**, then restart from the **Info** tab. Each has a dedicated page with full setup steps.

- **Enable Victron Energy Integration**: Monitors a Victron GX device's electrical system over MQTT. See [Victron](/configuration/victron/).
- **Enable Hughes Power Watchdog Integration**: Monitors a Hughes Power Watchdog surge protector over Bluetooth. See [Hughes Power Watchdog](/configuration/hughes/).
- **Enable Micro-Air EasyTouch Thermostat Integration**: Controls a MicroAir EasyTouch thermostat over Bluetooth. See [MicroAir EasyTouch](/configuration/microair/).
- **Enable Automated Location Updates**: Updates Home Assistant's location, timezone, and elevation from a device tracker. See [GPS](/configuration/gps/).

## RV-C Network Time Sync

Periodically broadcasts the current system time to the RV-C network. Some RV-C devices use this to keep their internal clocks synchronized.

This is **disabled by default**. Enable it only if your devices have clock drift issues or if your RV manufacturer recommends time sync on the CAN bus.

## Allow Node-RED Overwrite

When you first install LibreCoach on a system that already has Node-RED running, LibreCoach will stop and wait for permission before touching your existing flows. **Allow Node-RED Overwrite** is the safety toggle that grants that permission.

Toggle this on only when performing the initial LibreCoach installation and you're ready for it to take over Node-RED. Once setup is complete, you can leave it off. It's not needed for subsequent updates.

:::danger
This setting will **delete your existing Node-RED flows**. Back them up first if you want to keep them.
:::

## Preserve Node-RED Flow Customizations

By default, LibreCoach replaces the Node-RED flows every time it updates. This is how new features and bug fixes reach you. If you've made manual changes to the flows that you want to preserve, toggle **Prevent Flow Updates** on.

1. In Home Assistant, go to **Settings → Apps → LibreCoach**.
2. Click on the **Configuration** tab.
3. Toggle **Prevent Flow Updates** to **active** (green).
4. Click **Save**.

:::caution
When this is on, your flows will **not** receive bug fixes or new features from LibreCoach updates. Use it only if you've made intentional manual changes and understand the trade-off.
:::

## Enable Debug Logging

Enables verbose output in the LibreCoach app log. Normally the log only shows important events. With this on, it adds detailed step-by-step output useful for diagnosing problems.

Toggle **Enable Debug Logging** on only when actively troubleshooting an issue. The extra volume makes it harder to spot real problems during normal operation.

## Advanced Settings

These options appear at the bottom of the Configuration tab and normally should **not** be changed. They exist for non-standard setups and edge-case troubleshooting.

:::caution
Changing these without a specific reason will likely break communication between LibreCoach and your RV. Leave them at their defaults unless you know exactly what you're adjusting.
:::

- **MQTT User / MQTT Password**: The credentials LibreCoach uses to connect to the MQTT broker. The defaults work for standard installs; only change these if you've intentionally customized your broker.
- **CAN Interface**: The network interface name for the RV-C CAN bus (default `can0`). Change it only if your hardware presents the bus under a different interface.
