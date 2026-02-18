---
title: MicroAir EasyTouch RV
description: Integrate your MicroAir EasyTouch RV thermostat with LibreCoach via Bluetooth.
sidebar:
  order: 7
  label: MicroAir EasyTouch
---

LibreCoach supports the **MicroAir EasyTouch RV** thermostat, allowing you to control your RV's climate directly from Home Assistant. This integration uses **Bluetooth** to communicate with the thermostat, enabling local control without relying on Wi-Fi or cloud services.

## Requirements

1.  **MicroAir EasyTouch RV Thermostat** (Model 350 or similar with Bluetooth support).
2.  **Bluetooth Adapter** on your Home Assistant host device.
    *   **Raspberry Pi:** The built-in Bluetooth usually works well if the thermostat is within range.
    *   **Mini PC / NUC:** You may need a USB Bluetooth dongle or an external antenna if the case blocks the signal.
3.  **Proximity:** The Home Assistant host must be close enough to the thermostat to maintain a stable Bluetooth connection (typically within 15-30 feet, depending on walls/obstructions).

## Setup

### 1. Enable in LibreCoach

The MicroAir integration is disabled by default to save resources for users who don't need it.

1.  In Home Assistant, go to **Settings → Apps → LibreCoach**.
2.  Click on the **Configuration** tab.
3.  Toggle **Enable Micro-Air EasyTouch Thermostat Integration** to **active** (green).
4.  Click **Save**.
5.  Go to the **Info** tab and click **Restart** to apply the changes.

### 1b. Account Credentials (if required)

Some MicroAir EasyTouch units require a password to allow Bluetooth access. If your thermostat has a password set:

1.  Enter your **Micro-Air Account Password** in the Configuration tab.
2.  Your **Micro-Air Account Email** is associated with the password on your account.
3.  Click **Save** and **Restart**.

Leave both fields blank if your unit has no password — most installations do not require them.

### 2. Verify Connection

Once LibreCoach restarts, it will automatically scan for Bluetooth Low Energy (BLE) devices matching the MicroAir signature.

1.  Go to **Settings → Devices & Services → MQTT**.
2.  Look for a new device named **LibreCoach: MicroAir [MAC Address]**.
3.  You should see entities for:
    *   **Climate:** Control mode (Cool/Heat/Auto/Off), target temperature, and fan speed.
    *   **Sensors:** Inside temperature, outside temperature (if equipped).

## Usage

The thermostat behaves like a standard Home Assistant climate entity. You can:

*   Change **Modes**: Cool, Heat, Auto, Fan Only, Dry, Off.
*   Set **Target Temperature**: Adjust the setpoint for the active mode.
*   Adjust **Fan Speed**: Low, High, or Auto (depending on your AC unit's capabilities).

## Troubleshooting

### "Unavailable" or Intermittent Connection

Bluetooth signals can be easily blocked by metal RV walls or appliance casings.

*   **Normal brief dropouts:** LibreCoach uses a 3-attempt rule before marking the thermostat "Unavailable", so short Bluetooth interruptions (such as when the thermostat is in a low-power state) won't immediately flip the status. If the entity shows Unavailable for an extended period, there's likely a persistent connection issue.
*   **Move Closer:** Try temporarily moving your Home Assistant host closer to the thermostat to rule out range issues.
*   **External Antenna:** If using a Pi in a metal case, consider an external USB Bluetooth adapter with an antenna extension.
*   **Interference:** Other 2.4GHz devices (Wi-Fi routers, microwaves) can interfere with Bluetooth. Try to keep the host away from these sources.

### Thermostat Not Found

*   Ensure the thermostat screen is **on** and not in a deep sleep mode (though normally it advertises BLE constantly).
*   Check the **LibreCoach Add-on Logs** for any Bluetooth-related errors (e.g., "Bluetooth adapter not found").
