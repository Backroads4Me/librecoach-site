---
filename: offline-access
title: Access Without Internet
description: Access Home Assistant locally without internet or Wi-Fi fighting your phone
sidebar:
  order: 10
  label: Offline Access
draft: false
---

When your RV has no internet connection, phones often refuse to stay on the local WiFi — they mark it “No Internet” and switch back to cellular. This means you can’t reach Home Assistant even though the Pi is right there on the same network.

The fix is a **dedicated local WiFi network** that doesn’t advertise a default gateway. When a phone sees WiFi with an IP address but no gateway, it treats it as an intentionally local network. WiFi handles local traffic (Home Assistant), cellular handles internet, and the phone stops fighting you.

## Setup

You need a small router or travel router (GL.iNet, TP-Link, or any old consumer router) and an ethernet cable.

1. Power on the router — **do not** connect a WAN/modem cable
2. Configure a WiFi SSID (e.g., `HA-Local`)
3. Enable DHCP
4. Disable or clear the default gateway, WAN detection, and DNS forwarding

Connect your Pi to the router via ethernet. Connect your phone to the `HA-Local` WiFi.

## Tips

- **Use IP addresses, not hostnames** — `http://192.168.1.123:8123` is more reliable than `http://homeassistant.local:8123` on a local-only network
- **Assign a static IP** to Home Assistant so the address doesn’t change
