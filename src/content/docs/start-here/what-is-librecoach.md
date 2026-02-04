---
filename: what-is-librecoach
title: What is LibreCoach?
description: LibreCoach brings Home Assistant to your RV, enabling management of lights, climate, tanks, and power systems.
sidebar:
  order: 1
draft: false
---

LibreCoach turns your RV into a truly smart vehicle — one that you control and can evolve over time. It connects your RV’s **RV-C (CAN bus)** network (Firefly, Spyder, etc.) to **Home Assistant**, bringing lighting, climate, tanks, slides, and power systems into a modern, open, and extensible platform.

_Note:_ Older or fully analog RVs may not be compatible. LibreCoach does **not** replace your factory systems. It listens first, integrates safely, and only sends commands when you choose to.

---

## The RV Tech Problem

If you own a modern RV, you’ve probably met the so-called “smart coach” — and discovered how quickly it stops being smart.

1. **Fragmentation**  
   Lights, tanks, inverter, and climate all live on separate panels or apps that barely talk to each other.

2. **Abandonment**  
   RV manufacturers routinely drop support for proprietary systems. When the touchscreen fails or the company disappears, updates stop forever.

3. **Expensive Failures**  
   A failed 5-year-old control panel can mean a $1,800 dealer quote — often replaced with a downgraded, non-smart panel because the original part no longer exists.

4. **No Context or Automation**  
   Your RV doesn’t know the weather, your location, battery prices, or your routines. It reacts only when you press a button.

Your RV becomes a digital island — isolated, fragile, and expensive to maintain.

---

## The LibreCoach Solution

LibreCoach breaks this cycle by replacing proprietary black boxes with **open standards** and **software you control**.

- **Auto-Discovery**  
  Plug it in and power up. LibreCoach listens to the RV-C network and automatically discovers lights, switches, tanks, and controllers — no manual templates required.

- **Standards-First Compatibility**  
  LibreCoach speaks native RV-C, the industry-standard CAN protocol. It works across decades of RVs — from a 2015 Winnebago to a 2023 Tiffin.

- **Modern Interface Everywhere**  
  Control your rig from an iPhone, iPad, Android device, wall tablet, or any modern web browser.

- **Radically Cost Effective**  
  A complete DIY LibreCoach system typically costs **under $300**, compared to thousands for proprietary replacements that still lock you in.

---

## Built on a Proven Foundation

LibreCoach is built on **Home Assistant**, the world’s most popular open-source home automation platform.

- **Massive Ecosystem**  
  Over 2,500 integrations: weather services, Starlink, voice assistants (Alexa / Google), energy, GPS-based automations, and more.

- **Future-Proof by Design**  
  Home Assistant has millions of users and an active development community. Even if LibreCoach development stopped tomorrow, your system would continue receiving updates and security patches.

- **Your System, Not a Vendor’s**  
  Your automation logic lives in Home Assistant, not a vendor-locked touchscreen. You can upgrade hardware, migrate systems, export configs, and truly own your setup.

---

## How It Works

![LibreCoach System Architecture](../../../assets/architecture-diagram.png)

1. **Hardware Bridge**  
   A Raspberry Pi with a CAN HAT physically connects to your RV’s CAN bus wiring.

2. **CAN-to-MQTT Translation**  
   Raw RV-C messages are converted into MQTT events.

3. **LibreCoach Core**  
   Intelligent flows decode those messages and automatically create entities inside Home Assistant.

_By default, LibreCoach listens passively. You can explore and identify devices before enabling any control._

---

## What Can You Control?

If it speaks RV-C, LibreCoach can usually see it — and often control it:

- **Lighting**: Interior, exterior and patio lights
- **Climate**: Thermostats, heat pumps, roof fans, floor heat
- **Plumbing**: Water pumps, fresh/grey/black tanks, LPG
- **Power**: Inverters, chargers, generators

_Some manufacturers expose fewer command channels than others. Visibility is almost universal; control depends on how the RV was implemented._

---

## Auto-Discovery in Action

When LibreCoach first boots, it starts as a blank slate. As it listens and learns your RV-C network, devices appear in real time.

Your workflow is intentionally simple:

1. A device like `switch_3` is created
2. You identify it as the kitchen light
3. You rename it **Kitchen Light**
4. Done — it’s now a fully integrated smart entity

No dealer tools. No reprogramming. No vendor dependencies.

---

## Two Ways to Get Started

### 1. DIY Build (Recommended)

Build the hardware yourself using standard parts from Amazon or AliExpress. This is the fastest and most affordable way to get started.

- **Cost**: ~$250 - $300
- **Time**: 2-3 hours
- **Difficulty**: Medium (requires basic assembly and software flashing)

[View the Bill of Materials & Assembly Guide →](/build/overview/)

### 2. Pre-Assembled Kit (Interest Check)

We are gauging interest in a small batch of pre-assembled, "plug-and-play" units. These would be hand-built, tested, and pre-flashed with the latest software.

**Interested?**
I am currently collecting names to see if there is enough demand to build a batch.

**[Email me at hello@librecoach.com](mailto:hello@librecoach.com?subject=Libre%20Coach%20Interest)**

_Note: This is not a commitment to buy, just an interest check._

---

## Consulting & Custom Installs

For owners seeking a turnkey LibreCoach system or integrating non-standard devices, I take on a limited number of custom projects.

- **Remote Commissioning** – Set up your dashboard and system remotely.
- **Custom Integration** – Add devices like Victron, and other non-standard systems.

[Contact me](mailto:hello@librecoach.com?subject=LibreCoach%20Consulting) to discuss your project.

---

## Need Help?

- Join us on <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">Discord</a> or the <a href="https://www.facebook.com/groups/880537571244339" target="_blank" rel="noopener noreferrer">Facebook Group</a>
- Check the [Troubleshooting Guide](/support/troubleshooting/)
- Report issues or contribute on <a href="https://github.com/backroads4me/ha-addons/tree/main/librecoach" target="_blank" rel="noopener noreferrer">GitHub</a>
