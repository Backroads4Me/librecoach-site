---
filename: victron-mqtt
title: Victron GX Integration
description: Enable MQTT on your Victron Cerbo GX or other GX device so LibreCoach can monitor your electrical system.
sidebar:
  order: 7
  label: Victron GX (Optional)
draft: false
---

If your RV has a **Victron Cerbo GX** (or another Victron GX device), you can connect it to LibreCoach through MQTT. This lets you monitor battery voltage, current, solar production, inverter status, and more — all from your Home Assistant dashboard.

## What You'll Need

- A Victron GX device (Cerbo GX, Ekrano GX, Venus GX, etc.)
- The GX device connected to the same network as your LibreCoach system (Wi-Fi or Ethernet)
- Access to the GX device's touchscreen or Remote Console

## Step 1: Set the Network Security Profile

The GX device has a security setting that controls how other devices connect to it. For the simplest setup, you'll set this to allow local connections without encryption.

**On the GX device, navigate to:**

> **Settings → General → Access & Security → Local network security profile**

Set it to **Unsecured**.

## Step 2: Enable MQTT

Now tell the GX device to share its data over MQTT.

**On the GX device, navigate to:**

> **Settings → Integrations → MQTT Access**

Toggle it to **Enabled**.

That's it — your Victron GX device is now broadcasting data that LibreCoach can pick up.

## Step 3: Restart Node-RED

After enabling MQTT on the GX device, restart Node-RED so LibreCoach picks up the new connection.

1. In Home Assistant, go to **Settings → Apps**
2. Find **Node-RED** and click on it
3. Click **Restart**

Within a few moments, Victron data should begin appearing in Home Assistant.
