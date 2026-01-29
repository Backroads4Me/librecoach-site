---
filename: initial-setup
title: Initial Setup
description: First-time setup and configuration for LibreCoach after installation, including network connection and accessing Home Assistant.
sidebar:
  order: 1
draft: false
---

After your LibreCoach hardware is installed and connected to your RV's CAN bus, you need to complete the initial setup to get everything running.

## First Boot

### What Happens Automatically

When you power on LibreCoach for the first time:

1. **Home Assistant OS boots** (takes 2-3 minutes)
2. **Add-ons start automatically**:
   - Mosquitto MQTT broker
   - CAN-to-MQTT Bridge
   - Node-RED with LibreCoach flows
3. **Device discovery begins** as soon as CAN messages are detected

### Initial Power-Up Checklist

Before proceeding, verify:

- [ ] Raspberry Pi has power (solid red LED)
- [ ] Activity LED is blinking (system is booting)
- [ ] Ethernet cable is connected (recommended for initial setup)
- [ ] CAN cable is connected to your RV's RV-C network

## Connecting to Your Network

### Option 1: Ethernet (Recommended)

The simplest approach for initial setup:

1. Connect an Ethernet cable from LibreCoach to your router
2. Wait 2-3 minutes for the system to boot
3. Open a web browser and navigate to `http://homeassistant.local:8123`

:::tip Finding the IP Address
If `homeassistant.local` doesn't work:
- Check your router's admin page for connected devices
- Look for a device named "homeassistant"
- Use a network scanner app on your phone
:::

### Option 2: WiFi Configuration

If you need WiFi-only connectivity:

1. Connect via Ethernet first (temporary)
2. In Home Assistant, go to **Settings** > **System** > **Network**
3. Click **Configure** next to the WiFi adapter
4. Select your WiFi network and enter the password
5. Once connected, you can disconnect Ethernet

:::caution RV Park WiFi
RV park WiFi networks often use captive portals that LibreCoach cannot authenticate with. Use your phone's hotspot or a travel router instead.
:::

## Accessing Home Assistant

### First-Time Setup

1. Open `http://homeassistant.local:8123` in your browser
2. You'll see the Home Assistant onboarding wizard
3. Create your user account:
   - Choose a name
   - Create a username
   - Set a strong password
4. Set your location (used for weather and time zone)
5. Choose which analytics to share (optional)

### Mobile App Setup

For the best experience, install the Home Assistant Companion app:

**iOS:**
1. Download "Home Assistant" from the App Store
2. Open the app and tap "Continue"
3. Enter your Home Assistant URL: `http://homeassistant.local:8123`
4. Log in with your credentials
5. Grant notification permissions

**Android:**
1. Download "Home Assistant" from Google Play
2. Open the app and tap "Continue"
3. The app may auto-discover your instance, or enter the URL manually
4. Log in with your credentials
5. Grant notification and location permissions

## Verifying LibreCoach is Running

### Check Add-ons Status

1. Go to **Settings** > **Add-ons**
2. Verify these add-ons are running (green status):
   - **Mosquitto broker** - MQTT message routing
   - **CAN-to-MQTT Bridge** - CAN bus communication
   - **Node-RED** - LibreCoach automation logic

### Check for Discovered Devices

1. Go to **Settings** > **Devices & Services**
2. Click on **MQTT**
3. You should see devices appearing as you interact with switches in your RV

:::note No Devices Yet?
If no devices appear:
- Verify the CAN connection is secure
- Try toggling a physical switch in your RV
- Check the CAN-to-MQTT Bridge add-on logs for errors
:::

## Network Configuration Tips

### Static IP Address (Optional but Recommended)

Assigning a static IP prevents your LibreCoach address from changing:

1. Go to **Settings** > **System** > **Network**
2. Click **Configure** on your active connection
3. Under IPv4, change from DHCP to Static
4. Enter:
   - IP Address: `192.168.1.100` (or similar, within your network range)
   - Subnet Mask: `255.255.255.0`
   - Gateway: Your router's IP (usually `192.168.1.1`)
   - DNS: `8.8.8.8` (or your router's IP)

### Hostname

The default hostname is `homeassistant`. To change it:

1. Go to **Settings** > **System** > **Network**
2. Scroll down to **Host**
3. Enter a new hostname (e.g., `librecoach`)
4. Reboot for changes to take effect

## Troubleshooting Initial Setup

### Can't Access Home Assistant

| Symptom | Solution |
|---------|----------|
| Browser shows "site can't be reached" | Wait longer (initial boot takes 2-3 min) |
| `homeassistant.local` doesn't resolve | Try the IP address directly |
| Connection times out | Check Ethernet cable, verify same network |

### Add-ons Won't Start

1. Go to **Settings** > **Add-ons**
2. Click on the problem add-on
3. Check the **Log** tab for errors
4. Try clicking **Restart**

### WiFi Won't Connect

- Verify password is correct (case-sensitive)
- Check if your router uses 2.4GHz (5GHz may have issues)
- Ensure the RV is within WiFi range

## What's Next?

Your LibreCoach system is now running! Continue to:

- [Identify your devices](/configuration/identify-devices/) - Map switch IDs to physical controls
- [Create dashboards](/user-guide/dashboards/) - Build your custom control interface
