---
filename: what-is-librecoach
title: What is LibreCoach?
description: LibreCoach brings Home Assistant to your RV to monitor and control lights, climate, tanks, and power systems.
sidebar:
  order: 1
draft: false
---

LibreCoach connects your RV’s **control network** (RV-C systems like Firefly, Spyder, etc.) to **Home Assistant**, so lights, climate, tanks, slides, and power systems can be monitored and controlled from hardware you own.

_📌 Older or fully analog RVs may not be compatible. LibreCoach does **not** replace your factory systems; it integrates with them._

---

## The RV Tech Problem

If you own a modern RV, you’ve probably met the so-called “smart coach.” You may have also discovered how quickly it stops being smart.

- **Abandonment**: RV manufacturers routinely drop support for proprietary systems. When the touchscreen fails or the company disappears, updates stop forever.

- **Expensive Failures**: A failed 5-year-old control panel can mean a $1,800 dealer quote, often replaced with a downgraded, non-smart panel because the original part no longer exists.

- **Limited Customization**: Adding new components, dashboards, alerts, or integrations usually means working around the factory system instead of building on it.

- **Fragmentation**: Lights, tanks, inverter, and climate often live on separate panels or apps that barely talk to each other.

- **No Context or Automation**: Your RV doesn’t know the weather, your location, or your routines. It reacts only when you press a button.

The result is a system that's disconnected, hard to repair, and costly to keep running.

---

## The LibreCoach Solution

LibreCoach breaks this cycle by replacing proprietary black boxes with **open standards** and **software you control**.

- **Auto-Discovery**  
  Plug it in and power up. LibreCoach listens to the RV-C network and automatically discovers lights, switches, tanks, and controllers. No manual templates required.

- **RV-C Compatibility**  
  LibreCoach speaks native RV-C, the industry-standard CAN protocol used by many Firefly, Spyder, and other coach control systems.

- **Control From Any Screen**  
  Control your rig from an iPhone, iPad, Android device, wall tablet, or any modern web browser.

- **Standard Parts, Lower Replacement Cost**  
  A complete DIY LibreCoach system typically costs **under $350**, compared to thousands for proprietary replacements that still lock you in.

---

## Built on a Proven Foundation

LibreCoach is built on **Home Assistant**, a widely used open-source home automation platform.

- **Home Assistant Integrations**  
  Over 2,500 integrations: weather services, Starlink, voice assistants (Alexa / Google), energy, GPS-based automations, and more.

- **Actively Maintained**  
  Home Assistant has millions of users and an active development community. Even if LibreCoach development stopped tomorrow, your system would continue receiving updates and security patches.

- **Your System, Not a Vendor’s**  
  Your automation logic lives in Home Assistant, not a vendor-locked touchscreen. You can upgrade hardware, migrate systems, and export your configuration.

---

## How It Works

![LibreCoach System Architecture](../../../assets/architecture-diagram.webp)

1. **Hardware Bridge**  
   A Raspberry Pi with a CAN HAT physically connects to your RV’s CAN bus wiring.

2. **CAN-to-MQTT Translation**  
   Raw RV-C messages are converted into MQTT events.

3. **LibreCoach Core**  
   Node-RED flows decode those messages and automatically create entities inside Home Assistant.

---

## What Can You Control?

If it speaks RV-C, LibreCoach can usually see it, and often control it:

- **Lighting**: Interior, exterior and patio lights
- **Climate**: Thermostats, heat pumps, roof fans, floor heat
- **Plumbing**: Water pumps, fresh/grey/black tanks, LPG
- **Power**: Inverters, chargers, generators, supported solar controllers

![LibreCoach dashboard](../../../assets/dashboards/dash_light.webp)
![LibreCoach dashboard](../../../assets/dashboards/dash_dark.webp)

---

## Auto-Discovery in Action

When LibreCoach first boots, it starts as a blank slate. As it listens and learns your RV-C network, devices appear in real time.

Your workflow is intentionally simple:

1. A device like `switch_3` is created
2. You identify it as the kitchen light
3. You rename it **Kitchen Light**
4. Done. It’s now a fully integrated smart entity

No dealer tools. No reprogramming. No vendor dependencies.

---

## Two Ways to Get Started

You can build the hardware yourself from standard parts (~$350, 2–3 hours, basic assembly and software flashing), or join the interest list for a possible pre-assembled kit.

[View the Hardware & Assembly Guide](/build/hardware/)

[Pre-Assembled Kit Interest List](/start-here/kit-interest/)

---

## Need Help?

- Join the <a href="https://discord.gg/VZCAESHn2h" target="_blank" rel="noopener noreferrer">Discord</a> or <a href="https://www.facebook.com/groups/librecoach/" target="_blank" rel="noopener noreferrer">Facebook Group</a>
- Report issues or contribute on <a href="https://github.com/backroads4me/ha-addons/tree/main/librecoach" target="_blank" rel="noopener noreferrer">GitHub</a>
