---
filename: remote-access
title: Remote Access
description: Compare options for accessing your LibreCoach system remotely when away from your RV.
sidebar:
  order: 2
draft: false
---

Remote access lets you check on your RV from anywhere—monitor battery levels while at dinner, verify the water pump is off from work, or preheat before heading back to camp.

## Options Compared

| Feature                     | Tailscale                         | Nabu Casa               |
| --------------------------- | --------------------------------- | ----------------------- |
| **Cost**                    | Free (personal use)               | $65/year                |
| **Setup Difficulty**        | Moderate                          | Very Easy               |
| **Voice Assistants**        | Requires manual setup             | Built-in Alexa & Google |
| **Phone App Required**      | Yes (Tailscale app + VPN enabled) | No                      |
| **Supports HA Development** | No                                | Yes                     |

## Our Recommendation

**If you're okay with a small subscription, Nabu Casa is the clear winner.** It's simpler to set up, more reliable, includes voice assistant integration, and directly supports Home Assistant development. You install it, log in, and it just works.

**Tailscale is for tinkerers** who want a free option or need to access other devices on their RV network beyond Home Assistant. It requires installing the Tailscale app on every device you want to connect from, enabling its VPN, and managing the connection yourself.

### Choose Nabu Casa If:

- You want the easiest, most reliable setup
- You prefer "set it and forget it"
- You're okay with $65/year or $6.50/month
- You want Alexa or Google Assistant integration

### Choose Tailscale If:

- You want a free solution
- You enjoy tinkering with technology
- You need to access other devices on your RV network
- You're comfortable managing VPN connections

## Setup Guides

Ready to set up remote access? Choose your option:

- **[Nabu Casa](/advanced-setup/nabu-casa/)** - Official cloud service, easiest setup (Recommended)
- **[Tailscale VPN](/advanced-setup/tailscale/)** - Free, requires more setup
