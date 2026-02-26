---
filename: mobile
title: Mobile Device Setup
description: Setting up the Home Assistant Companion App for remote control and sensors.
sidebar:
  order: 4
  label: Mobile App
draft: false
---

The **Home Assistant Companion App** is the best way to control your RV from your phone or tablet. It not only gives you a native interface for your dashboard but also allows your device to become a sensor itself—reporting battery level, location, and connection status back to LibreCoach.

## 1. Install the App

Download the official app for your device:

- **iOS / iPadOS**: <a href="https://apps.apple.com/us/app/home-assistant/id1099568401" target="_blank" rel="noopener">Download on the App Store</a>
- **Android**: <a href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android" target="_blank" rel="noopener">Download on Google Play</a>

## 2. Connect to LibreCoach

Ensure your mobile device is connected to the same Wi-Fi network as your LibreCoach (Raspberry Pi).

1.  Open the Home Assistant app.
2.  Tap **Continue**. The app will scan your network for a Home Assistant instance.
    - **Found it?** Tap your instance (e.g., `librecoach` or `homeassistant`).
    - **Not found?** Tap **Enter Address Manually**.
3.  Enter your address:
    - **Standard URL**: `http://homeassistant.local:8123`
    - **Alternate (IP Address)**: If the name doesn't work, use your Pi's IP address, e.g., `http://192.168.1.100:8123`.
4.  Log in with the username and password you created during [initial setup](/build/software/).
5.  Follow the prompts to grant permissions (Local Network, Notifications, Location).

## 3. Enable Sensors

The app can send data about your phone to Home Assistant. This is useful for automations (e.g., "Turn off lights when I leave the RV").

**To configure sensors:**

1.  Open the App.
2.  Go to **Settings** (Sidebar) -> **Companion App**.
3.  Tap **Manage Sensors**.
4.  Enable sensors relevant to your RV life:
    - **Battery State**: Monitor your phone battery.
    - **Location**: Use your phone's GPS to track your RV's location (if the phone is with the RV) or your distance from it.
    - **Single User Widget**: Create home screen widgets for quick toggles (e.g., "Toggle Patio Light").

## 4. Troubleshooting

### "Unable to connect"

- **Check Wi-Fi**: Are you on the same network? Mobile data (LTE/5G) will **not** work unless you have set up remote access (like Nabu Casa or a VPN).
- **Try IP Address**: DNS names like `homeassistant.local` sometimes fail on certain routers. Find your Pi's IP address (check your router's admin page) and use that instead.

### "404 Not Found"

- Check that you included the port number `:8123` at the end of the URL.
