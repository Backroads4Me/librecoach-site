---
filename: hughes
title: Hughes Power Watchdog
description: Monitor your Hughes Power Watchdog surge protector with LibreCoach over Bluetooth.
sidebar:
  order: 6.5
  label: Hughes Power Watchdog
draft: false
---

LibreCoach integrates with the **Hughes Power Watchdog** surge protector over **Bluetooth**, bringing your shore-power readings directly into Home Assistant. You can monitor line voltage, current, power, energy use, and frequency, and get alerted to faults like low voltage, surges, or open neutral — without opening the Hughes app.

This integration is local-only. It talks to the Watchdog directly over Bluetooth, with no Wi-Fi or cloud account required.

## Requirements

1.  A supported **Hughes Power Watchdog** surge protector with Bluetooth.
2.  A **Bluetooth adapter** on your Home Assistant host.
    - **Raspberry Pi:** The built-in Bluetooth usually works if the Watchdog is within range.
    - **Mini PC / NUC:** You may need a USB Bluetooth dongle or external antenna if the case blocks the signal.
3.  **Proximity:** The host must stay within Bluetooth range of the Watchdog (typically within 15–30 feet, depending on walls and obstructions).

## Setup

### 1. Enable in LibreCoach

The Hughes integration is disabled by default.

1.  In Home Assistant, go to **Settings → Apps → LibreCoach**.
2.  Click on the **Configuration** tab.
3.  Toggle **Enable Hughes Power Watchdog Integration** to **active**.
4.  Click **Save**.
5.  Go to the **Info** tab and click **Restart** to apply the changes.

:::tip
During first-time pairing, keep only your Watchdog powered on and nearby. If several Bluetooth devices are in range, isolating the Watchdog makes it easier for LibreCoach to find and connect to the right unit.
:::

### 2. Confirm Entities Appear

Once connected, LibreCoach exposes the Watchdog's readings as Home Assistant entities. Depending on your model you'll see:

- **Voltage** — per line (L1 / L2)
- **Current** — per line (L1 / L2)
- **Power** — per line and combined
- **Energy** — cumulative kWh
- **Frequency** — line frequency in Hz
- **Fault / error status** — a human-readable description of any active faults

If entities don't appear after a few minutes, confirm the Watchdog is powered, within range, and not actively connected in the Hughes mobile app — an active app connection can prevent LibreCoach from connecting.
