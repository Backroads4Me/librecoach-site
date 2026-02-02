---
filename: rvc
title: About RV-C
description: Overview of RV-C networks, messages, and compatible devices.
sidebar:
  order: 2
draft: false
---

RV-C (Recreational Vehicle Controller Area Network) is the communication protocol used in modern RVs to connect and control multiple systems over a single network.

## What is RV-C?

RV-C is based on the **Controller Area Network (CAN)** protocol, a proven network technology originally developed for automotive systems. It operates as a peer‑to‑peer bus where all nodes send and receive messages over two shared wires.

### Why RV-C?

RV-C offers several advantages over traditional hard‑wired control systems:

- **Simpler wiring:** A two‑wire bus replaces complex point‑to‑point wiring.
- **Two‑way communication:** Devices can both report status and receive control commands.
- **Interoperability:** Standardized messages allow devices from different manufacturers to work together.
- **Scalability:** Devices can be added to the bus without major rewiring.

## RV-C Network Topology

RV-C uses a **linear bus topology** with a twisted pair of wires: CAN‑H and CAN‑L. All devices connect along this main trunk, and the bus is terminated at each end to prevent electrical reflections.

```
                       CAN Bus (Two Wires: CAN-H and CAN-L)
   ┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
[Controller] [Lights] [Thermostat] [Tank Sensor] [Battery Monitor] [More...]

```

_Note:_ Messages are broadcast on the bus, and devices act only on those addressed to them.

## How RV-C Messages Work

### Message Structure

Each RV-C message contains:

1. **Source Address**: Which device sent the message
2. **Destination Address**: Which device should receive it (or broadcast to all)
3. **Data Group Number (DGN)**: What type of data is being sent
4. **Data**: The actual information (e.g., "Switch 5 is ON")

### Example Message

```
From: Wall Switch Panel (Address: 42)
To: Light Controller (Address: 18)
DGN: DC_DIMMER_COMMAND_2
Data: Instance=5, Status=ON, Brightness=100%
```

## Device Types

The RV-C protocol is designed to standardize communication across nearly every electronic system found in a modern coach. The following categories are supported by the RV-C specification:

- **💡 Lighting & Electrical**: Controls for dimmer modules, RGB lighting, and binary (on/off) relay circuits.
- **🌡️ Climate Control**: Communication between thermostats, multi-stage furnaces, heat pumps, AC units, and variable-speed fans.
- **⚡ Power Management**: Real-time data from battery monitors, inverters, converters, and solar controllers, as well as command protocols for auto-generator start (AGS) modules.
- **💧 Water & Sanitation**: Monitoring for fresh, gray, and black water tank levels, along with control for water pumps and sophisticated hydronic heating systems.
- **🚐 Motorized Systems**: Operation and status reporting for slide-outs, power awnings, leveling jacks, and motorized window shades.
- **🔒 Chassis & Security**: Integration with door locks, window sensors, and chassis-specific data such as odometer readings or engine temperatures.

---

## Learn More

- <a href="https://www.rvia.org/rv-c/rv-c-specification-document" target="_blank" rel="noopener noreferrer">RV-C Official Specification</a> (technical, for advanced users)
- [System Architecture](/reference/system-architecture/) - How LibreCoach processes RV-C messages
- <a href="https://forum.librecoach.com" target="_blank" rel="noopener noreferrer">Forum</a> - Ask questions and share experiences
