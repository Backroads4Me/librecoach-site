---
filename: system-architecture
title: System Architecture
description: A deep dive into how LibreCoach bridges the physical world of RV-C with the digital world of Home Assistant.
sidebar:
  order: 1
draft: false
---

LibreCoach is a full-stack integration platform. This document outlines how data moves from the physical RV-C bus to your phone, and how the system components interact to make it all work seamlessly.

## System Overview

LibreCoach acts as a translator between your RV's systems and Home Assistant, converting signals from the vehicle into meaningful smart home events. It handles two parallel communication paths: the **RV-C CAN bus** for most RV systems, and **Bluetooth Low Energy** for devices like the MicroAir EasyTouch thermostat.

### High-Level Block Diagram

![LibreCoach System Architecture](../../../assets/architecture-diagram.webp)

---

## Hardware Layer

The foundation of LibreCoach is commodity hardware that is easy to source, replace, and upgrade.

### Raspberry Pi 5

The Raspberry Pi 5 serves as the host computer. It offers the high-performance processing and NVMe storage support needed to run a responsive dashboard while handling the constant stream of data from the RV-C bus.

- **Role**: Host computer.
- **OS**: Home Assistant Operating System (HAOS).

### CAN HAT (Hardware Attached on Top)

Since the Raspberry Pi does not have a native CAN controller, we use a "HAT" to interface with the physical wires of the RV.

- **Role**: Physical interface.
- **Communication**: Talks to the RV. The HAT converts digital data back into the RV-C language.

## Software Stack

The software is orchestrated as a set of **Home Assistant Apps**. While these are technically Docker containers, they are managed entirely by the Home Assistant Supervisor for a seamless experience.

### 1. Home Assistant OS (The Foundation)

We use the full OS version of Home Assistant. This provides a "Supervisor" which manages updates, networking, and apps. It ensures the system is resilient and appliance-like rather than just a set of scripts.

### 2. MQTT Broker (The Central Nervous System)

MQTT is the messaging protocol that connects the hardware to the software.

- **Decoupling**: By using MQTT, the "bridge" (Vehicle Bridge) doesn't need to know anything about the "logic" (Node-RED). They simply share messages on a common bus.

### 3. Vehicle Bridge (Built Into LibreCoach)

The Vehicle Bridge runs as a background service inside the LibreCoach app and handles all hardware communication. It bridges two different physical transports into MQTT:

**CAN Bus (RV-C):**

- **Read CAN**: Listens to raw frames on the physical wire (e.g., `19FFD044 01 00...`).
- **Publish MQTT**: Wraps those frames in JSON and publishes them to `can/raw`.
- **Write CAN**: Watches `can/send` and pushes any hex commands back onto the RV-C bus.

**Bluetooth Low Energy (BLE):**

- **BLE Scanning**: Automatically discovers supported Bluetooth devices (currently MicroAir EasyTouch thermostats).
- **Persistent Connection**: Maintains a stable, long-lived connection rather than connecting and disconnecting on each update.
- **State Publishing**: Reads device state and publishes it to MQTT in the same format as CAN-sourced devices.
- **Commands**: Receives commands from Node-RED via MQTT and translates them to Bluetooth writes.

### 4. Node-RED (The Brain)

This is where the complex RV-C logic lives. It runs the code covering RV-C decoding, HA entity management, command encoding, configuration, and Victron energy integration.

- **Decoders**: Parses raw HEX data into human-readable values (e.g., "Fresh Water: 75%").
- **Auto-Discovery**: When LibreCoach sees a new device on the bus, Node-RED sends a "Discovery" message to Home Assistant to automatically create the correct switches and sensors.
- **Logic**: Handles complex interactions, such as "Load Shedding" logic or custom lighting scenes.
- **Victron Integration**: Subscribes to your Victron GX device's MQTT feed and publishes battery, solar, and inverter data to Home Assistant.

### 5. Home Assistant Core (The Interface)

HA Core maintains the "State" of your RV and provides the user interface. It records history, manages the registry of devices, and serves the dashboard to your mobile devices.

---

## Data Flow Examples

### Turning on a Light (RV-C CAN Path)

1.  **User Action**: You tap "Bedroom Light" in the Home Assistant app.
2.  **Command**: HA Core sends a request to the **Node-RED app**.
3.  **Encoding**: Node-RED constructs the specific RV-C message for that light.
4.  **Transport**: Node-RED publishes the RV-C command to MQTT.
5.  **Bridge**: The **LibreCoach vehicle bridge** picks up the MQTT message and relays it to the **CAN HAT**.
6.  **Physical Wire**: The HAT puts the signal on the physical RV-C wires.
7.  **Execution**: The RV's lighting module hears the command and turns on the bulb.
8.  **Feedback**: The module broadcasts a status update; the bridge reads it, updates MQTT, and Home Assistant confirms the light is "On" in your UI.

### Changing the Thermostat (Bluetooth Path)

1.  **User Action**: You change the mode to "Cool" in the Home Assistant climate card.
2.  **Command**: HA Core publishes the command to MQTT.
3.  **Node-RED**: Receives the command and forwards it to the **Vehicle Bridge** via MQTT.
4.  **Vehicle Bridge**: Translates the command and sends the mode change to the MicroAir thermostat over Bluetooth.
5.  **Feedback**: The Vehicle Bridge reads the thermostat's updated state and publishes it to MQTT, which Home Assistant reflects immediately.

---

## Extensibility

This architecture is designed to be modified:

- **Custom Dashboards**: Tailor the Home Assistant UI to your preferences—rearrange cards, create custom views, or highlight the sensors and controls most important to you.
- **Hybrid Systems**: Combine RV-C hardware with Zigbee, Bluetooth, or WiFi devices within the same Home Assistant dashboard.
- **Automations**: Send a notification if fresh or waste water levels reach a set threshold, or trigger a "sleep mode" routine at a set time to dim the lights.
