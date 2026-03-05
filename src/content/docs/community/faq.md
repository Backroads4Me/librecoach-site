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

LibreCoach works with any RV that uses the **RV-C protocol** on a CAN bus network. This includes most modern motorhomes.

If your RV uses a smart or multiplexed CAN bus system (rather than traditional mechanical switches), it likely supports RV-C.

### Will it work with my travel trailer or fifth wheel?

Most travel trailers and fifth wheels do **not** use RV-C, as they usually have simpler electrical systems. However, a few higher-end models do.

### What if my RV doesn't use RV-C?

LibreCoach is specifically designed for RV-C networks.

## Technical Questions

### Do I need internet access for LibreCoach to work?

**No.** LibreCoach runs entirely locally on your Raspberry Pi. You can control your RV even when completely off-grid with no internet connection.

### Can I use LibreCoach with my existing Home Assistant setup?

Yes! If you already run Home Assistant, you can add a CAN HAT and install LibreCoach (which includes Node-RED and all required bridges). See the [Installation Guide](/build/software/).

### Is it safe? Can it damage my RV?

**LibreCoach is passive by default** — it monitors your RV-C network without sending commands unless you explicitly trigger them. The RV-C protocol has built-in safeguards, and your RV’s physical switches always work regardless of what LibreCoach is doing.

**Note:** As with any DIY project, proceed carefully and disconnect power when working on electrical systems.

### What happens if my Raspberry Pi fails?

Your RV continues to function normally using its original physical controls. LibreCoach is an addition to your RV's systems, not a replacement. If the Pi dies, you simply lose the smart features until you replace it.
