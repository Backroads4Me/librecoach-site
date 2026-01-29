---
filename: terminal-ssh
title: Terminal & SSH
description: Command-line access to Home Assistant OS for advanced troubleshooting and configuration.
sidebar:
  order: 8
draft: false
---

The Terminal & SSH add-on provides command-line access to your Home Assistant system for advanced troubleshooting, maintenance, and configuration tasks.

## Why Use Terminal/SSH?

- Run diagnostic commands
- Access container logs
- Manage add-ons from command line
- Advanced troubleshooting
- Execute scripts and automations

## Installation

1. Go to **Settings** > **Add-ons** > **Add-on Store**
2. Search for "Terminal & SSH"
3. Click **Install**
4. Configure a password or SSH key
5. Start the add-on
6. Enable **Show in sidebar** for terminal access

## Configuration

### Password Authentication

```yaml
authorized_keys: []
password: "your_secure_password"
```

### SSH Key Authentication (More Secure)

```yaml
authorized_keys:
  - "ssh-rsa AAAAB3Nza...your-public-key..."
password: ""
```

## Useful Commands

### Home Assistant CLI

```bash
# Check HA status
ha core info

# Restart Home Assistant
ha core restart

# Check add-on status
ha addons info

# View logs
ha core logs
```

### Network Diagnostics

```bash
# Check network interfaces
ha network info

# Test connectivity
ping 8.8.8.8

# Check DNS
nslookup homeassistant.local
```

### CAN Bus Diagnostics

```bash
# Check if CAN interface exists
ip link show can0

# View CAN traffic (if candump available)
candump can0
```

## Security Considerations

- Use SSH keys instead of passwords when possible
- Don't enable SSH if you don't need it
- Consider disabling the add-on when not in use
- Never share your SSH credentials

## What's Next?

- [File Editor](/advanced-setup/file-editor/) - Edit configuration files from the browser
