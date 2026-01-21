---
title: "What is Libre Coach?"
description: "Libre Coach bridges your RV's CAN bus to Home Assistant, enabling control and monitoring of lights, climate, tanks, and power systems."
filename: what-is-libre-coach
sidebar:
  order: 1
---

Libre Coach is an open-source platform that transforms your RV into a modern, intelligent vehicle. It bridges the gap between your RV's industrial "RV-C" network and the consumer-friendly world of Home Assistant.

## The RV Tech Problem

If you own a modern RV, you've likely encountered the "Smart Home" that isn't smart at all.

1.  **Fragmentation**: You have a panel for lights, a different panel for the inverter, a separate display for tanks, and maybe a clunky app that only works when you are inside the coach.
2.  **Abandonment**: RV manufacturers are notorious for abandoning proprietary tech. When the company that made your touchscreen goes out of business, you are left with a system that can never be updated or replaced.
3.  **Expensive Failures**: We have heard horror stories of a 5-year-old touch panel failing, with the dealer quoting $1,800 to replace it—often with a "dumb" switch panel because the original part no longer exists.
4.  **No Integration**: Your RV doesn't know about the weather, your location, or your voice assistant. It is a digital island.

## The Libre Coach Solution

Libre Coach breaks this cycle by replacing proprietary "black boxes" with open standards.

*   **Auto-Discovery**: Plug it in, and it scans your network. It finds your switches, lights, and tanks automatically. No manual programming required.
*   **Universal Compatibility**: It speaks fluent "RV-C"—the industry standard protocol. It doesn't need a specific template for your 2022 Tiffin Allegro; it just reads the standard language.
*   **Modern Interface**: Ditch the laggy resistive touchscreens. Control your rig from an iPhone, iPad, Android device, or a modern web browser.
*   **Cost Effective**: A complete Libre Coach system costs less than $200 to build yourself, compared to thousands for proprietary replacements.

## Built on a Proven Foundation

We didn't reinvent the wheel. Libre Coach is built on **Home Assistant**, the world's most popular open-source home automation software.

*   **Massive Ecosystem**: Home Assistant defines "smart". It supports over 2,500 integrations—Starlink, weather services, voice assistants (Alexa/Google), localized energy pricing, and more.
*   **Future Proof**: Home Assistant has millions of users and significantly more momentum than any RV manufacturer's software team. Even if Libre Coach development stopped tomorrow, your foundation (Home Assistant) faces monthly updates and security patches for years to come.
*   **The Manufacturer Trap, Broken**: By moving your automation logic into Home Assistant, you own it. You can upgrade the hardware, change the software, and export your configuration. You are no longer held hostage by a closed ecosystem.

## How It Works

![Libre Coach System Architecture](../../../assets/architecture-diagram.png)

1.  **Hardware Bridge**: A Raspberry Pi with a CAN HAT physically connects to your RV's CAN bus wiring.
2.  **CAN-to-MQTT Bridge**: A service reads the raw industrial data and converts it to a modern message format (MQTT).
3.  **The Core**: Libre Coach's intelligent flows decode these messages and create "Entities" in Home Assistant.

## What Can You Control?

If it speaks RV-C, Libre Coach can control it:

*   **Lighting**: Zones, Dimmers, Patio lights.
*   **Climate**: Thermostats, Heat Pumps, Roof Fans, Floor Heat.
*   **Dynamics**: Slides, Awnings, Jacks, Entry Steps.
*   **Plumbing**: Water Pumps, Tank Levels (Fresh/Grey/Black/LPG).
*   **Power**: Inverters, Chargers, Solar Controllers, Generators, Battery Management Systems (BMS).

## Auto-Discovery in Action

When you first boot Libre Coach, it is a blank slate. As it listens to your RV's network, you will see devices pop up in real-time.

> "I plugged it in, walked to the fridge to get a drink, and by the time I came back, it had found 47 devices."

Your job is simply to "claim" them.
1.  You see `switch_module_1_channel_3` turn ON in the dashboard.
2.  You realize "Hey, I just turned on the Kitchen Light."
3.  You rename it to "Kitchen Light".
4.  Done. You now have a smart kitchen light.

## Three Ways to Get Started

Choose the path that fits your comfort level and goals:

### 1. DIY Build + Pre-Configured Image
Build your own hardware following our detailed assembly guide, then flash our custom Home Assistant OS image. Best balance of hands-on experience and convenience.

[DIY Build Guide →](/installation/build/)

### 2. Full Manual Installation
Build the hardware and manually install each Home Assistant add-on. Complete control for tinkerers who want to understand every component or install on existing hardware.

[Manual Installation Guide →](/installation/manual-install/)

### 3. Pre-Assembled Kit (Waitlist)
We are gauging interest in a batch of pre-built units. Join the waitlist if you prefer a plug-and-play solution.

[Learn More →](/start-here/choose-your-path/#path-3-pre-assembled-kit-waitlist)

[Compare All Options →](/start-here/choose-your-path/)

## Need Help?

- Visit our [Community Forum](https://forum.LibreCoach.com) for support
- Check the [Troubleshooting Guide](/troubleshooting/common-issues/)
- Report bugs on [GitHub](https://github.com/Backroads4Me)
