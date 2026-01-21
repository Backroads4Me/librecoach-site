---
title: Offline-Local Wi-Fi Network for Home Assistant
description: Access Home Assistant locally without internet or Wi-Fi fighting your phone
sidebar:
  order: 20
---

# Offline-Local Wi-Fi Network for Home Assistant

> **Goal:** Access Home Assistant reliably from your phone **without** needing working internet and **without** your phone fighting the Wi-Fi connection.

---

## Why use a local-only Wi-Fi network?

Phones aggressively try to keep you online. When a normal home Wi-Fi loses internet, phones often:

- Mark the network as **No Internet**
- Automatically switch back to cellular
- Refuse to route traffic over Wi-Fi

This is great for web browsing — terrible for **local services** like Home Assistant.

A **local-only Wi-Fi network** fixes this by telling your phone:

> “This network is intentionally local. Don’t expect internet here.”

### Benefits

- ✅ Works during ISP outages
- ✅ Works during captive portal failures
- ✅ No cloud dependency
- ✅ No phone OS tricks or hacks
- ✅ Home Assistant remains accessible at all times

This is the same networking model used by:

- Car infotainment systems
- Camera setup networks
- Industrial control panels

---

## How it works

### What phones check when joining Wi-Fi

When a phone connects to Wi-Fi, it evaluates:

1. **DHCP IP address** — “Do I belong on this network?”
2. **Default gateway** — “Can I reach the internet?”
3. **Connectivity check** — “Does the internet respond?”

### The key insight

If a Wi-Fi network:

- ✔️ Provides an IP address
- ❌ **Does NOT provide a default gateway**

Then the phone concludes:

> “This is a local network only.”

As a result:

- Wi-Fi is used for **local traffic** (Home Assistant)
- Cellular remains active for **internet traffic**
- The phone does **not** try to escape the Wi-Fi

### Traffic flow

```
Local traffic:
Phone ──Wi-Fi──► Home Assistant

Internet traffic:
Phone ──Cellular──► Internet
```

---

## What breaks this setup

:::caution
**A default gateway breaks everything.**
:::

If DHCP hands out a gateway (for example `192.168.1.1`), the phone will:

- Expect internet
- Perform connectivity tests
- Mark the Wi-Fi as broken
- Switch back to LTE / 5G

**Rule of thumb:**

> DHCP = yes  \
> Gateway = **no**

---

## How to accomplish it

There are three reliable ways to build a local-only Home Assistant network.

---

## Dedicated local router (recommended)

:::tip
Best balance of simplicity, cost, and reliability.
:::

**Difficulty:** Easy  \
**Cost:** $30–$50  \
**Reliability:** Excellent

### What you need

- Small router or travel router (GL.iNet, TP-Link, old consumer router)
- Ethernet cable

### Setup steps

1. Power on the router
2. **Do NOT connect a WAN cable**
3. Configure Wi-Fi SSID (example: `HA-Local`)
4. Enable DHCP
5. Disable or clear:
   - Default gateway
   - WAN / Internet detection
   - DNS forwarding (optional)

### Connect devices

- Home Assistant → Ethernet → router
- Phone → Wi-Fi `HA-Local`

---

---

## Option A — Dedicated local router (recommended)

:::tip
This is the simplest, most reliable, and most portable way to build a local-only network.
:::

**Difficulty:** Easy  \
**Cost:** $30–$50  \
**Reliability:** Excellent

### What you need

- A small router or travel router (GL.iNet, TP-Link, or an old consumer router)
- One Ethernet cable

### Setup steps

1. Power on the router
2. **Do NOT connect a WAN cable**
3. Configure a Wi-Fi SSID (example: `HA-Local`)
4. Enable DHCP
5. Disable or clear the following:
   - Default gateway
   - WAN / Internet detection
   - DNS forwarding (optional)

:::caution
If the router hands out a **default gateway**, phones will expect internet and may abandon the Wi-Fi.
:::

### Connect devices

- Home Assistant → Ethernet → router
- Phone → Wi-Fi `HA-Local`

### What this gives you

- Phone stays connected to Wi-Fi
- Cellular data remains active for internet
- Home Assistant is reachable instantly via local IP
- Works during ISP outages and captive portal failures

---

## Best practices

### Use IP addresses, not hostnames

Instead of:

```
http://homeassistant.local:8123
```

Use:

```
http://<HA-IP>:8123
```

Offline networks and mDNS are unreliable.

---

### Assign Home Assistant a static IP

Prevents:

- DHCP changes
- Lost endpoints

---

### Put critical gear on a UPS

- Router
- Home Assistant

This ensures local control during **power and internet outages**.

---

## TL;DR

- Use a small router with **no WAN connection**
- Enable DHCP but **do not provide a default gateway**
- Phones treat the Wi-Fi as local-only
- Cellular handles internet, Wi-Fi handles Home Assistant
- Simple, reliable, and offline-proof

