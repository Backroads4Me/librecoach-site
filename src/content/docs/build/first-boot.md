---
filename: first-boot
title: First Boot
description: Initial setup, network configuration, and installing the LibreCoach add-on.
sidebar:
  order: 5
  label: First Boot
draft: false
---

## First Boot

:::note[Ethernet Required]
The initial startup requires a **wired ethernet** connection for initial access to Home Assistant. You'll configure WiFi through the Home Assistant interface, then you can disconnect ethernet. The hardware does not yet need to be connected to your RV.
:::

1. Connect the Pi to your router via ethernet cable
2. Connect a USB-C power supply to the Pi
3. The Pi will likely startup when plugged in, if not, power on the Raspberry Pi using the button on the case.
4. Wait ~5 minutes for the initial boot and setup to complete

## Access Home Assistant

5. Open a web browser on a device connected to the same network
6. Navigate to: <a href="http://homeassistant.local:8123" target="_blank" rel="noopener">http://homeassistant.local:8123</a>
   - If that doesn't work, find the Pi's IP address in your router's admin page and use `http://<IP_ADDRESS>:8123`
7. Follow the Home Assistant onboarding wizard
8. Create your user account

## Configure WiFi (optional)

_Note: A hardwired ethernet connection is more reliable if you're able._

If you want to use WiFi instead of ethernet:

1. Go to **Settings** → **System** → **Network**
2. Click **wlan0** under **Configure network interfaces**
3. Select your WiFi network and enter the password
4. Once connected, you can disconnect the ethernet cable

## Install LibreCoach Add-on

The LibreCoach add-on automatically installs and configures the following rrequired apps:

- Node-RED with LibreCoach flows pre-imported
- CAN-to-MQTT Bridge
- Mosquitto MQTT broker

### Add the Repository

Click the button below to add the LibreCoach add-on repository:

[![Open your Home Assistant instance and show the add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FBackroads4Me%2Fha-addons)

Or manually:

1. Go to **Settings** → **Add-ons** → **Add-on Store**
2. Click the three dots (⋮) in the top right → **Repositories**
3. Add: `https://github.com/Backroads4Me/ha-addons`
4. Click **Add** → **Close**

### Install the Add-on

1. In the Add-on Store, find **LibreCoach** in the repository list
2. Click **Install**
3. After installation, go to the **Configuration** tab and verify settings
4. Go to the **Info** tab and click **Start**
5. Enable **Start on boot** and **Watchdog**

The add-on will automatically:

- Install and configure Mosquitto broker
- Install and configure CAN-to-MQTT Bridge
- Install and configure Node-RED
- Import the LibreCoach flows into Node-RED

## Verify Installation

1. In Home Assistant, go to **Settings** → **Add-ons**
2. You should see:
   - **Mosquitto broker** (running)
   - **CAN-to-MQTT Bridge** (running)
   - **Node-RED** (running)
   - **LibreCoach** (will show stopped after initial setup - this is normal)

## Shutdown the Pi and connnect to RV

3. Go to **Settings** → **Devices & Services** → **MQTT**
4. Connect the CAN cable to your RV's RV-C network
5. You should start seeing auto-discovered devices appearing as you use switches in your RV

## What's Next?

- [Connect to your RV's CAN bus](/build/installation/) - Physical wiring guide
- [Identify your devices](/configuration/identify-devices/) by toggling switches in your RV
- [Create custom dashboards](/user-guide/dashboards/) tailored to your needs
- [Join the community](https://forum.LibreCoach.com) to share your configuration

## Troubleshooting

If you run into issues, check our [Troubleshooting Guide](/troubleshooting/common-issues/) or ask for help on the [forum](https://forum.LibreCoach.com).

### Common Issues

**Can't access Home Assistant**

- Make sure you're on the same network
- Try `http://homeassistant.local:8123` or find the Pi's IP address in your router
- Wait at least 5-10 minutes for initial boot

**CAN interface not working**

- Verify you edited `config.txt` before first boot
- Check that the CAN HAT is properly seated on the GPIO header
- Verify jumper settings on CAN HAT

**No devices discovered**

- Verify CAN cable is connected to your RV's RV-C network
- Check CAN-to-MQTT Bridge logs in Add-ons
- Ensure Node-RED flows are deployed

**WiFi not connecting**

- Use ethernet for initial setup
- Configure WiFi through Settings → System → Network
