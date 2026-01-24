---
filename: faq
title: Frequently Asked Questions
description: Common questions about LibreCoach, including the name,
  compatibility, and project goals.
sidebar:
  order: 3
draft: false
---
## About the Project

### Why "LibreCoach"?

The name combines two meaningful concepts:

*   **Libre** (Spanish/French for "free") — In open source, "libre" specifically means "free as in freedom," not just "free of cost." It emphasizes that this project gives you control over your own RV systems—no vendor lock-in, no cloud dependency, no subscription fees.
    
*   **Coach** — A common term for motorhomes and RVs, especially Class A and luxury models. Your coach deserves software that's as capable as the vehicle itself.
    

**LibreCoach = Freedom for your coach.**

We believe RV owners should have full control over their own vehicles. When a manufacturer abandons their proprietary control system, you shouldn't be left with a $2,000 paperweight. LibreCoach ensures your smart RV stays smart—forever.

### Is LibreCoach really free?

Yes, in both senses:

*   **Free as in freedom**: The source code is open. You can inspect it, modify it, and share it.
    
*   **Free as in cost**: The software costs nothing. You only pay for the hardware (~$150-200 if you build it yourself).
    

### Who is behind LibreCoach?

LibreCoach is a community-driven open source project. It started as a personal project to solve the "abandoned RV tech" problem and grew from there.

### How can I support the project?

*   [**GitHub Sponsors**](https://github.com/sponsors/Backroads4me) — Monthly support
    
*   [**Buy Me a Coffee**](https://buymeacoffee.com/Backroads4me) — One-time donation
    
*   **Contribute** — Code, documentation, testing, or helping others on the [forum](https://forum.LibreCoach.com)
    

## Compatibility

### Which RVs are compatible?

LibreCoach works with any RV that uses the **RV-C protocol** on a CAN bus network. This includes most modern motorhomes from:

*   Tiffin
    
*   Newmar
    
*   Entegra
    
*   Winnebago (diesel pushers)
    
*   Thor (some models)
    
*   And many others
    

If your RV has a "multiplex" or "smart" system with a touchscreen control panel, it likely uses RV-C.

### Will it work with my travel trailer or fifth wheel?

Most travel trailers and fifth wheels do **not** use RV-C—they typically have simpler electrical systems. However, some high-end models from manufacturers like Grand Design or Keystone may have RV-C networks.

### What if my RV doesn't use RV-C?

LibreCoach is specifically designed for RV-C networks. If your RV uses a proprietary protocol (like some older Winnebago systems), it won't work directly. However, you can still use Home Assistant with other integrations for non-RV-C devices.

## Technical Questions

### Do I need internet access for LibreCoach to work?

**No.** LibreCoach runs entirely locally on your Raspberry Pi. You can control your RV even when completely off-grid with no internet connection.

### Can I use LibreCoach with my existing Home Assistant setup?

Yes! If you already run Home Assistant (on a NUC, Yellow, or other hardware), you can add the CAN-to-MQTT Bridge and Node-RED flows to your existing installation. See the [Manual Installation Guide](/installation/manual-install/).

### Is it safe? Can it damage my RV?

LibreCoach is a **passive listener** by default—it reads data from your RV-C network but doesn't send commands unless you explicitly trigger them. The RV-C protocol has built-in safeguards, and the physical switches in your RV always work regardless of what LibreCoach is doing.

That said, as with any DIY project, proceed carefully and disconnect power when working on electrical systems.

### What happens if my Raspberry Pi fails?

Your RV continues to function normally using its original physical controls. LibreCoach is an addition to your RV's systems, not a replacement. If the Pi dies, you simply lose the smart features until you replace it.

## Getting Help

### Where can I get support?

*   [**Community Forum**](https://forum.LibreCoach.com) — Best place for questions and discussion
    
*   [**GitHub Issues**](https://github.com/Backroads4Me) — For bug reports and feature requests
    
*   [**Troubleshooting Guide**](/troubleshooting/common-issues/) — Solutions to common problems
    

### I found a bug. How do I report it?

1.  Check the [forum](https://forum.LibreCoach.com) to see if others have the same issue
    
2.  If it's a new bug, open an issue on [GitHub](https://github.com/Backroads4Me) with:
    
    *   Your RV make/model/year
        
    *   Hardware details (Pi model, CAN HAT)
        
    *   Steps to reproduce the issue
        
    *   Relevant logs