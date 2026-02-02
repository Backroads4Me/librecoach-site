---
filename: glossary
title: Glossary
description: Key terms and definitions for RV-C, CAN bus, and Home Assistant as used in LibreCoach.
sidebar:
  order: 3
draft: false
---

### RV-C & CAN Bus

- **RV-C (Recreational Vehicle-CAN)**: The industry-standard "language" used by modern RVs. It defines what the messages actually mean.
- **CAN (Controller Area Network)**: The underlying vehicle wiring and signaling protocol. It defines how messages are transmitted.
- **Trunk**: The main "backbone" cable running the length of your RV.
- **Drop**: A short cable connecting an individual device or node to the main trunk.
- **DGN (Data Group Number)**: The primary identifier for a message type (e.g., `1FFD1` identifies a Tank Level message).
- **Instance**: A number used to distinguish between identical devices. If you have two fresh water tanks, they share a DGN but use Instance `0` and `1`.
- **Data Payload**: The actual values within a message (e.g., "75% full"), typically organized into 8 bytes of data.

### Home Assistant

- **Home Assistant (HA)**: The open-source smart home platform that provides the user interface and automation engine for LibreCoach.
- **HAOS (Home Assistant Operating System)**: A purpose-built, "turnkey" operating system designed to make Home Assistant feel like a dedicated appliance rather than a complex computer project. It handles the difficult parts of system ownership—like security patches, driver updates, and database backups—automatically through a simple interface. For RVers, this provides a "set it and forget it" reliability that ensures your lights and sensors stay functional without needing to use a command line or manage individual Docker containers.
- **Add-on**: A containerized service managed by Home Assistant (via Docker) used to extend functionality, such as LibreCoach, CAN to MQTT Bridge and Node-RED.
- **Entity**: A single point of data or control in Home Assistant, such as `light.bedroom` or `sensor.fresh_water`.
- **MQTT (Mosquitto)**: The lightweight messaging protocol LibreCoach uses to pass data between the CAN bridge, Node-RED, and Home Assistant.
- **Dashboard / Lovelace**: The visual interface you use on your phone or tablet to control your RV.
- **YAML**: The human-readable configuration language used to define settings within Home Assistant.
- **Dashboard**: The "Display." This is the specific arrangement of buttons, gauges, and switches you interact with on your screen. You might have one "Dashboard" for your phone and a different, more detailed one for a wall-mounted tablet, both powered by Lovelace.
- **Lovelace**: The "Framework." This is the underlying engine within Home Assistant that defines how data is rendered. It handles the logic of cards, themes, and views.
- **Supervisor**: The "manager" inside HAOS that handles the heavy lifting—orchestrating updates, monitoring system health, and managing your Docker-based Add-ons.

### Hardware

- **Raspberry Pi**: The small, high-performance computer that hosts LibreCoach and runs all software components.
- **CAN HAT**: "Hardware Attached on Top." A specialized board for the Raspberry Pi that provides the physical connection to the RV-C bus.
- **NVMe**: A fast, reliable SSD storage type recommended for use with the Raspberry Pi 5 to ensure system longevity over standard MicroSD cards.
- **GPIO (General Purpose Input/Output)**: The physical pins on the Raspberry Pi used to interface with the CAN HAT and other sensors.
- **SPI (Serial Peripheral Interface)**: The high-speed communication protocol the Pi uses to "talk" to the CAN HAT.
