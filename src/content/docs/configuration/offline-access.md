---
filename: offline-access
title: Access Without Internet
description: Access Home Assistant locally without internet or Wi-Fi fighting your phone
sidebar:
  order: 6
  label: Offline Access
draft: false
---
# Offline-Local Wi-Fi Network for Home Assistant

**Goal:** Access Home Assistant reliably from your phone **without** needing working internet and **without** your phone fighting the Wi-Fi connection.

* * *

## Why use a local-only Wi-Fi network?

Phones aggressively try to keep you online. When a normal home Wi-Fi loses internet, phones often:

*   Mark the network as **No Internet**
    
*   Automatically switch back to cellular
    
*   Refuse to route traffic over Wi-Fi
    

This is great for web browsing — terrible for **local services** like Home Assistant.

A **local-only Wi-Fi network** fixes this by telling your phone:

> “This network is intentionally local. Don’t expect internet here.”

### Benefits

*   ✅ Home Assistant remains accessible at all times
    
*   ✅ Works during ISP outages
    
*   ✅ No cloud dependency
    

This is the same networking model used by:

*   Car infotainment systems
    
*   Camera setup networks
    
*   Industrial control panels
    

* * *

## How it works

### What phones check when joining Wi-Fi

When a phone connects to Wi-Fi, it evaluates:

1.  **DHCP IP address** — “Do I belong on this network?”
    
2.  **Default gateway** — “Can I reach the internet?”
    
3.  **Connectivity check** — “Does the internet respond?”
    

### The key insight

If a Wi-Fi network:

*   ✔️ Provides an IP address
    
*   ❌ **Does NOT provide a default gateway**
    

Then the phone concludes:

> “This is a local network only.”

As a result:

*   Wi-Fi is used for **local traffic** (Home Assistant)
    
*   Cellular remains active for **internet traffic**
    
*   The phone does **not** try to escape the Wi-Fi
    

### Traffic flow

Local traffic: Phone ──Wi-Fi──► Home Assistant

Internet traffic: Phone ──Cellular──► Internet

* * *

## The recommended way to accomplish it is a dedicated local router

:::tip Best balance of simplicity, cost, and reliability. :::

**Difficulty:** Easy  
**Cost:** $30–$50  
**Reliability:** Excellent

### What you need

*   Small router or travel router (GL.iNet, TP-Link, old consumer router)
    
*   Ethernet cable
    

### Setup steps

1.  Power on the router
    
2.  **Do NOT connect a WAN cable to a modem**
    
3.  Configure Wi-Fi SSID (example: `HA-Local`)
    
4.  Enable DHCP
    
5.  Disable or clear:
    
    *   Default gateway
        
    *   WAN / Internet detection
        
    *   DNS forwarding (optional)
        

### Connect devices

*   Home Assistant → Ethernet → router
    
*   Phone → Wi-Fi `HA-Local`
    

* * *

## For best results

### Assign Home Assistant a static IP then use IP addresses, not hostnames

Instead of: [http://homeassistant.local:8123](http://homeassistant.local:8123)

Use: http://:192.168.1.1234:8123