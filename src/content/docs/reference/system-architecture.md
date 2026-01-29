---
filename: system-architecture
title: System Architecture
description: A deep dive into how LibreCoach bridges the physical world of RV-C with the digital world of Home Assistant.
sidebar:
  order: 1
draft: false
---

LibreCoach is not just a UI; it is a full-stack integration platform. This document outlines the technical architecture, explaining how data moves from a physical wire in your wall to a button on your phone.

## System Overview

At a high level, LibreCoach acts as a translator. It listens to the "industrial" language of your RV (CAN bus/RV-C) and translates it into the "consumer" language of Smart Homes (MQTT/Home Assistant).

### High-Level Block Diagram

![LibreCoach System Architecture](../../../assets/architecture-diagram.png)

## Hardware Layer

The foundation of LibreCoach is commodity hardware that is easy to source and replace.

### Raspberry Pi 5
We chose the Pi 5 (or Pi 4/CM4) for its ubiquitous support and GPIO capabilities. It runs the entire software stack. 
*   **Role**: Host computer.
*   **OS**: Home Assistant Operating System (HAOS).

### CAN HAT (Hardware Attached on Top)
The Raspberry Pi does not have a native CAN controller. We use a "HAT" (typically based on the MCP2515 or similar controller) to interface with the physical bus.
*   **Role**: Physical interface.
*   **Communication**: Talks to the Pi via SPI (Serial Peripheral Interface).
*   **Connection**: Screw terminals for CAN-H and CAN-L.

## Software Stack

The software is orchestrated as a set of Docker containers managed by the Home Assistant Supervisor.

### 1. The Operating System: Home Assistant OS
We use the full OS version of Home Assistant. This provides a "Supervisor" which manages updates, networking, and add-ons. It ensures the system is resilient and "app-like" rather than just a set of scripts.

### 2. The Message Bus: MQTT (Mosquitto)
MQTT is the central nervous system. Every state change (light turned on, tank level changed) is published as a message. 
*   **Why MQTT?** It is lightweight, fast, and allows multiple services to subscribe to the same data without tight coupling.

### 3. The Translator: CAN-to-MQTT Bridge
This simple service does one thing:
*   **Read CAN**: It reads raw frames from the CAN HAT (e.g., `19FFD044 01 00...`).
*   **Publish MQTT**: It wraps that raw frame in a JSON object and publishes it to `rv/can/rx`.
*   **Read MQTT**: It subscribes to `rv/can/tx` and writes those frames back to the wire.

### 4. The Brain: Node-RED
This is where the magic happens. The "LibreCoach App" is essentially a sophisticated set of Node-RED flows.
*   **Decoders**: It parses the raw HEX data into human-readable values (e.g., "Tank Level: 45%").
*   **Auto-Discovery**: It watches for new device signatures. When it sees a light module, it tells Home Assistant "Hey, I found a light, please create a switch entity for it."
*   **Logic**: It handles complex interactions that raw HA automations might find difficult.

### 5. The State Machine: Home Assistant Core
HA Core holds the "State" of the RV.
*   **Registry**: It knows `light.bedroom_main` is currently `on`.
*   **History**: It records that `sensor.fresh_water` dropped 10% yesterday.
*   **UI**: It serves the dashboard to your phone.

## Data Flow Examples

Understanding the data flow helps with troubleshooting.

### Scenario A: User Turns on a Light from the App
1.  **User** taps "Bedroom Light" in the Home Assistant App.
2.  **HA Core** sends a command to **Node-RED** (via entity update or service call).
3.  **Node-RED** constructs the specific RV-C command (PGN 127501 "Binary Status").
4.  **Node-RED** publishes the hex command to MQTT topic `rv/can/tx`.
5.  **Bridge** picks up the message and writes it to the CAN HAT.
6.  **CAN HAT** puts voltage on the physical wires.
7.  **Light Module** (on the bus) hears its address and turns on the bulb.
8.  **Light Module** broadcasts a confirmation message ("I am now ON").
9.  **Bridge** reads confirmation, publishes to `rv/can/rx`.
10. **Node-RED** decodes it and updates **HA Core** state to "On".

### Scenario B: User Presses a Physical Wall Switch in the RV
1.  **Switch** sends a command on the RV-C bus.
2.  **CAN HAT** reads the frame.
3.  **Bridge** publishes to `rv/can/rx`.
4.  **Node-RED** sees the message. Two things happen:
    *   It updates the state of the entity in HA (State feedback).
    *   (Optional) It triggers any automations linked to that switch.

## Extensibility

This architecture is designed to be hacked.

*   **Add Non-RV Devices**: Because Home Assistant is the core, you can add Zigbee sensors, WiFi plugs, or Bluetooth devices and have them interact with your RV-C hardware.
*   **Custom Flows**: You can open Node-RED and add your own logic. Want to flash the lights when the alarm goes off? Just draw a line.
*   **API Access**: Since everything is on MQTT, you can write your own scripts (Python, Go, etc.) to listen to the bus and perform actions without touching the core code.
