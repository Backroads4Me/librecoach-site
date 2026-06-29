---
filename: faq
title: FAQ
description: Common questions about LibreCoach.
sidebar:
  order: 4
draft: false
---

## Compatibility

### Which RVs are compatible?

LibreCoach is designed for RVs with **RV-C based CAN networks**, including many motorhomes with Firefly, Spyder, and similar multiplexed control systems.

If your RV uses a smart or multiplexed CAN bus system (rather than traditional mechanical switches), it likely supports RV-C.

### Will it work with my travel trailer or fifth wheel?

Most travel trailers and fifth wheels do **not** use RV-C, as they usually have simpler electrical systems. However, a few higher-end models do.

### What if my RV doesn't use RV-C?

Then LibreCoach won't work for your rig. It depends on the RV-C network to discover and communicate with your devices, so RVs with traditional relay or mechanical-switch wiring aren't supported. There is no workaround that adds RV-C to a coach that wasn't built with it.

## Technical Questions

### Do I need internet access for LibreCoach to work?

**No.** LibreCoach runs entirely locally on your Raspberry Pi. You can control your RV even when completely off-grid with no internet connection.

### Can I use LibreCoach with my existing Home Assistant setup?

Yes! If you already run Home Assistant, you can add a CAN HAT and install LibreCoach, including its Node-RED and Mosquitto supporting services. See the [Installation Guide](/build/software/).

### Is it safe to use?

LibreCoach is designed for monitoring and convenience control, not safety-critical operation. It listens to the RV-C network by default and only sends commands when you explicitly trigger an action through Home Assistant.

Physical switches and factory panels should remain available as your primary fallback. As with any DIY project involving RV wiring, proceed carefully, verify connections before powering on, and disconnect power when working on electrical systems.

### What happens if my Raspberry Pi fails?

LibreCoach is an addition to your RV's systems, not a replacement for the original controls. If the Pi fails, the expected result is that you lose LibreCoach monitoring and smart-control features until the hardware is repaired or replaced. Your original physical controls should remain your fallback.
