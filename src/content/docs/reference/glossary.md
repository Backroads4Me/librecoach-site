---
title: Glossary
description: "Key terms and definitions for RV-C, CAN bus, and Home Assistant."
filename: glossary
sidebar:
  order: 3
---

### CAN Bus (Controller Area Network)
The physical wires (Twisted Pair: Yellow/Green) that carry data throughout your RV. 
*   **Trunk**: The main long cable running front-to-back.
*   **Drop**: A shorter cable branching off the trunk to a specific device.

### CAN HAT
"Hardware Attached on Top". A circuit board that sits on the Raspberry Pi pins to give it CAN bus capabilities.

### Entity
A specific device or sensor in Home Assistant.
*   `light.bedroom` is an entity.
*   `sensor.fresh_water` is an entity.

### GPIO (General Purpose Input/Output)
The physical pins on the Raspberry Pi.

### Instance (or Source Address)
The unique ID of a device. 
*   If you have two water pumps, they use the same PGN (Status), but different Instances (Pump 1 vs Pump 2).

### Integration
A piece of code that connects Home Assistant to a service or device. LibreCoach provides the integration between HA and your RV-C network.

### Lovelace / Dashboard
The User Interface of Home Assistant. Cards, buttons, and gauges live here.

### MQTT (Message Queuing Telemetry Transport)
The messaging protocol LibreCoach uses internally. 
*   **Bridge**: Reads CAN bus -> Publishes MQTT.
*   **Node-RED**: Listens to MQTT -> Updates Home Assistant.

### PGN (Parameter Group Number)
In RV-C, a PGN represents a specific message "Topic". 
*   Example: `127501` is "Binary Status" (used for lights/switches).
*   Example: `127505` is "Fluid Level" (used for tanks).

### Raspberry Pi
The credits-card sized computer that runs the whole system.

### RV-C (Recreational Vehicle-CAN)
The industry standard protocol used by modern RVs. It defines the "language" devices speak. Think of it as USB for your RV. It sits on top of the generic CAN bus hardware layer.

### SPN (Suspect Parameter Number)
Specific data fields within a PGN.
*   If PGN is "Fluid Level", SPN might be "Level Percentage" or "Tank Capacity".

### Termination Resistor
A 120-ohm resistor placed at *each end* of the CAN bus trunk. Essential for preventing signal reflections. If your network is "flaking out", check termination.
