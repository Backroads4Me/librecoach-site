---
filename: apps
title: Apps
description: Recommended Home Assistant apps to extend your LibreCoach system with useful utilities.
sidebar:
  order: 6
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

| File | Purpose |
|------|---------|
| `configuration.yaml` | Main Home Assistant config |
| `automations.yaml` | Automation definitions |
| `scripts.yaml` | Script definitions |
| `secrets.yaml` | Passwords and API keys |

:::tip
Always backup before editing critical files. YAML is whitespace-sensitive—use spaces, not tabs.
:::

---

### Advanced SSH & Web Terminal

Command-line access to your Home Assistant system for advanced troubleshooting, maintenance, and configuration tasks.

[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_ssh)

**Why use it:**

- Run diagnostic commands
- Access container logs
- Manage apps from command line
- Execute scripts and maintenance tasks

**Setup:**

1. Install the app
2. Go to **Configuration** tab
3. Set a password or add your SSH public key
4. Start the app
5. Enable **Show in sidebar** for web terminal access

**Configuration example:**

```yaml
# Password authentication
authorized_keys: []
password: "your_secure_password"
```

**Useful commands:**

```bash
# Check HA status
ha core info

# Restart Home Assistant
ha core restart

# View logs
ha core logs

# Check network
ha network info
```

:::caution Security
Use SSH keys instead of passwords when possible. Consider disabling the app when not in use.
:::

---

### MQTT Explorer

Debug and monitor MQTT traffic to troubleshoot LibreCoach communication issues at the message level.

[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=9cf1ea8f_mqtt_explorer)

**Why use it:**

- **Debugging** - See raw messages from your RV's CAN bus
- **Troubleshooting** - Identify why a device isn't responding
- **Learning** - Understand how LibreCoach communicates
- **Cleanup** - Remove stale retained messages

**Alternatives:**

The <a href="http://mqtt-explorer.com/" target="_blank" rel="noopener noreferrer">MQTT Explorer desktop application</a> is also available for Windows, Mac, and Linux if you prefer a standalone tool with more features.

---

### Tailscale

Secure remote access to your LibreCoach system from anywhere using VPN without port forwarding.

[![Open in Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_tailscale)

**Why use it:**

- No port forwarding required—works on restrictive RV park networks
- Secure end-to-end encrypted connections
- Free tier for personal use

See the full **[Tailscale setup guide](/advanced-setup/tailscale/)** for detailed installation and configuration instructions.
