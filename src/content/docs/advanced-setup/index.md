---
filename: index
title: Advanced Setup
description: Add-ons, integrations, and enhancements to extend your LibreCoach system beyond the basics.
sidebar:
  order: 1
  label: Overview
draft: false
---

## What's in This Section

One of the primary beneifts of LibreCoach is that the system is fully extensible and customizable. Once your LibreCoach system is running smoothly, you can extend it with additional add-ons and integrations. This section covers just a few of the more common enhancements that complement the core LibreCoach functionality.

### Remote Access

Access your RV from anywhere in the world:

- **[Remote Access Overview](/advanced-setup/remote-access/)** - Compare options for accessing your RV remotely
- **[Nabu Casa](/advanced-setup/nabu-casa/)** - Official HA cloud service for remote access, backups, and voice assistants (paid)
- **[Tailscale VPN](/advanced-setup/tailscale/)** - Secure, remote access via VPN (free)

### Backup & Recovery

- **[Backup Strategies](/advanced-setup/backups/)** - Local and cloud backup solutions

## Add-ons

- **Add-ons** extend the functionality of LibreCoach by installing additional applications.
- Visit <a href="https://www.home-assistant.io/addons/" target="_blank" rel="noopener">Add-ons</a> for official documentation.

## Before You Begin

:::note[Start Slow]
Get comfortable with the core LibreCoach system before adding enhancements. Each add-on increases complexity and potential points of failure.
:::

### General Add-on Installation

Most add-ons follow the same installation pattern:

1. Go to <a href="https://my.home-assistant.io/redirect/supervisor" class="my" target="_blank">Settings &gt; Add-ons</a>
   [![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

2. Search for the add-on name
3. Click **Install**
4. Configure settings on the **Configuration** tab
5. Start the add-on
6. Enable **Start on boot** if desired

### Utilities

**Advanced SSH & Web Terminal** - Command-line access for advanced users
[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_ssh)

**File Editor** - Edit configuration files from the browser
[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)

**MQTT Explorer** - Debug and monitor MQTT traffic
[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=9cf1ea8f_mqtt_explorer)


[![HACS](https://img.shields.io/badge/HACS-Visit%20HACS-blue)](https://hacs.xyz/)


## Community Recommendations

Have an add-on that works great with LibreCoach? Share it on the <a href="https://forum.librecoach.com" target="_blank" rel="noopener noreferrer">forum</a>!
