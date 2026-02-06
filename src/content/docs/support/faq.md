---
filename: faq
title: FAQ
description: Common questions about LibreCoach.
sidebar:
  order: 2
draft: false
---

## About the Project

### Why "LibreCoach"?

The name combines two meaningful concepts:

- **Libre** (Spanish/French for “free”) — In open source, “libre” means “free as in freedom,” not just “free of cost.” It gives you the freedom to **inspect, modify, and tailor** your RV systems to your needs—no vendor lock-in, no cloud dependency, no subscription fees.
- **Coach** — A common term for motorhomes and RVs, especially Class A and luxury models. Your coach deserves software that's as capable as the vehicle itself.

**LibreCoach = Your rig. Your rules.**

We believe RV owners should have full control over their vehicles. When a manufacturer abandons their proprietary control system, you shouldn't be left with a $2,000 paperweight. LibreCoach ensures your smart RV stays smart—forever.

### Is LibreCoach really free?

Yes, in both senses:

- **Freedom** — The source code is open. You can inspect it, modify it, and share it.
- **Cost** — The software is free; you only pay for the hardware (~$250–300 if you build it yourself).

### Who is behind LibreCoach?

LibreCoach started as a personal project and is currently maintained by a single developer.

The goal is to grow a **community-driven open source project**, where contributors can help improve the software, add integrations, and support fellow RV owners.

### How can I support the project?

- <a href="https://github.com/sponsors/backroads4me" target="_blank" rel="noopener noreferrer">**GitHub Sponsors**</a> — Monthly support

- <a href="https://buymeacoffee.com/backroads4me" target="_blank" rel="noopener noreferrer">**Buy Me a Coffee**</a> — One-time donation

- **Contribute** — Code, documentation, testing, or helping others on <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">Discord</a>

## Compatibility

### Which RVs are compatible?

LibreCoach works with any RV that uses the **RV-C protocol** on a CAN bus network. This includes most modern motorhomes from:

- Tiffin
- Newmar
- Entegra
- Winnebago (diesel pushers)
- Thor (some models)
- And many others

If your RV uses a smart or multiplexed CAN bus system (rather than traditional mechanical switches), it likely supports RV-C.

### Will it work with my travel trailer or fifth wheel?

Most travel trailers and fifth wheels do **not** use RV-C, as they usually have simpler electrical systems. However, a few higher-end models do.

### What if my RV doesn't use RV-C?

LibreCoach is specifically designed for RV-C networks.

## Technical Questions

### Do I need internet access for LibreCoach to work?

**No.** LibreCoach runs entirely locally on your Raspberry Pi. You can control your RV even when completely off-grid with no internet connection.

### Can I use LibreCoach with my existing Home Assistant setup?

Yes! If you already run Home Assistant, you can add a CAN HAT, the CAN-to-MQTT Bridge and Node-RED flows to your existing installation. See the [Installation Guide](/build/software/).

### Is it safe? Can it damage my RV?

**LibreCoach is passive by default** — it monitors your RV-C network without sending commands unless you explicitly trigger them. The RV-C protocol has built-in safeguards, and your RV’s physical switches always work regardless of what LibreCoach is doing.

**Note:** As with any DIY project, proceed carefully and disconnect power when working on electrical systems.

### What happens if my Raspberry Pi fails?

Your RV continues to function normally using its original physical controls. LibreCoach is an addition to your RV's systems, not a replacement. If the Pi dies, you simply lose the smart features until you replace it.

## Getting Help

### Where can I get support?

The <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">**Discord server**</a> and <a href="https://www.facebook.com/groups/librecoach/" target="_blank" rel="noopener noreferrer">**Facebook Group**</a> are the best places to ask questions, share tips, and discuss LibreCoach with other RV owners.

### I found a bug. How do I report it?

1.  Check <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">Discord</a> to see if others have the same issue

2.  If it's a new bug, open an issue on <a href="https://github.com/Backroads4Me/ha-addons" target="_blank" rel="noopener noreferrer">GitHub</a> with:
    - Your RV make/model/year
    - Hardware details (Pi model, CAN HAT)
    - Steps to reproduce the issue
    - Relevant logs
