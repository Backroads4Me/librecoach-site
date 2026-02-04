---
filename: tailscale
title: Tailscale
description: Secure remote access to your LibreCoach system from anywhere using Tailscale VPN without port forwarding.
sidebar:
  order: 4
draft: false
---

Tailscale creates a secure private network between your devices, allowing you to access your LibreCoach system from anywhere—without exposing it to the public internet or configuring port forwarding.

## Why Tailscale?

- **No port forwarding** - Works even on restrictive RV park networks
- **Secure** - All traffic is encrypted end-to-end
- **Easy setup** - No complex VPN configuration
- **Free tier** - Generous free plan for personal use
- **Works everywhere** - Your phone, laptop, tablet can all connect

## Prerequisites

- A <a href="https://tailscale.com/" target="_blank" rel="noopener noreferrer">Tailscale account</a> (free)
- Tailscale app installed on your phone/computer
- LibreCoach running with network access

## Installation

### Install the App

1. Go to **Settings** > **Apps**, click **Install app**
2. Search for "Tailscale"
3. Click **Install**
4. Wait for installation to complete

### Configure the App

1. Go to the **Configuration** tab
2. Add your Tailscale auth key:

```yaml
authkey: "tskey-auth-xxxxx-xxxxxxxxxxxxxxxxx"
```

To get an auth key:

1. Log into <a href="https://login.tailscale.com/admin/settings/keys" target="_blank" rel="noopener noreferrer">Tailscale Admin Console</a>
2. Click **Generate auth key**
3. Enable **Reusable** and **Ephemeral** (optional)
4. Copy the key

5. Click **Save**
6. Go to **Info** tab and click **Start**
7. Enable **Start on boot**

### Verify Connection

1. Check the app logs for successful connection
2. In the <a href="https://login.tailscale.com/admin/machines" target="_blank" rel="noopener noreferrer">Tailscale Admin Console</a>, you should see your Home Assistant device

## Connecting Your Devices

### Phone/Tablet

1. Install the Tailscale app from your app store
2. Sign in with the same account
3. Enable the VPN connection
4. Access Home Assistant at the Tailscale IP (shown in admin console)

### Computer

1. Download Tailscale from <a href="https://tailscale.com/download" target="_blank" rel="noopener noreferrer">tailscale.com/download</a>
2. Install and sign in
3. Access Home Assistant at the Tailscale IP

### Home Assistant Companion App

Update the app to use your Tailscale IP:

1. Open the HA Companion app
2. Go to **Settings** > **Companion App** > **Server**
3. Add your Tailscale URL as an **External URL**: `http://100.x.x.x:8123`

## Using MagicDNS

Tailscale's MagicDNS gives your devices friendly names:

1. In Tailscale Admin Console, go to **DNS**
2. Enable **MagicDNS**
3. Access Home Assistant at `http://homeassistant.your-tailnet-name.ts.net:8123`

## Subnet Routing (Advanced)

To access other devices on your RV network (not just Home Assistant):

1. In app configuration, enable subnet routing:

```yaml
advertise_routes:
  - "192.168.1.0/24"
```

2. In Tailscale Admin Console, approve the subnet route
3. Now you can access any device on your RV network through Tailscale

## Troubleshooting

### App Won't Connect

- Verify auth key is correct and not expired
- Check internet connectivity
- Review app logs for specific errors
- Try generating a new auth key

### Can't Access Home Assistant

- Verify Tailscale is connected on both devices
- Check the Tailscale IP address is correct
- Ensure Home Assistant isn't blocking the Tailscale subnet
- Try accessing by IP instead of hostname

### Slow Connection

- Tailscale uses direct connections when possible
- Check if connection is being relayed (shows in admin console)
- RV park networks may have restrictions causing relay

## Security Considerations

- Tailscale is very secure, but you're still exposing Home Assistant remotely
- Use strong passwords on your Home Assistant account
- Consider enabling two-factor authentication
- Review who has access to your Tailscale network
