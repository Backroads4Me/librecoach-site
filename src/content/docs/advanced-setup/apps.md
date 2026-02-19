---
filename: apps
title: Apps
description: Recommended Home Assistant apps to extend your LibreCoach system with useful utilities.
sidebar:
  order: 3
draft: false
---

Apps (formerly known as add-ons) extend Home Assistant by installing additional applications that run alongside your system. They provide utilities for editing files, terminal access, debugging, and more.

Visit <a href="https://www.home-assistant.io/addons/" target="_blank" rel="noopener">Home Assistant Apps</a> for official documentation.

## General Installation

Most apps follow the same installation pattern:

1. Go to <a href="https://my.home-assistant.io/redirect/supervisor" class="my" target="_blank">Settings &gt; Apps</a>
   [![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)
2. Click **Install app** and search for the app name
3. Click **Install**
4. Configure settings on the **Configuration** tab
5. Start the app
6. Enable **Start on boot** if desired

## Recommended Apps

### File Editor

Edit Home Assistant configuration files directly from your browser without needing SSH or external tools.

[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)

**Why use it:**

- Edit `configuration.yaml` and other config files
- Modify automation YAML directly
- Quick fixes without needing a computer
- Syntax highlighting for YAML, JSON, and more

**Setup:**

1. Install the app
2. Start it
3. Enable **Show in sidebar** for easy access
4. Click **File editor** in the sidebar to browse and edit files

**Common files to edit:**

| File                 | Purpose                    |
| -------------------- | -------------------------- |
| `configuration.yaml` | Main Home Assistant config |
| `automations.yaml`   | Automation definitions     |
| `scripts.yaml`       | Script definitions         |
| `secrets.yaml`       | Passwords and API keys     |

:::tip
Always backup before editing critical files.
:::

---

### Tailscale

Secure remote access to your LibreCoach system from anywhere using VPN without port forwarding.

[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_tailscale)

**Why use it:**

- Secure end-to-end encrypted connections
- Free tier for personal use

See the full **[Remote Access guide](/advanced-setup/remote-access/#tailscale)** for detailed installation and configuration instructions.
