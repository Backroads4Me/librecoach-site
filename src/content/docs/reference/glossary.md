---
filename: glossary
title: Glossary
description: Key terms and definitions for RV-C, CAN bus, and Home Assistant.
sidebar:
  order: 3
draft: false
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

### DHCP (Dynamic Host Configuration Protocol)
A network management protocol used on IP networks where a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.

### DGN (Data Group Number)
The identifier in an RV-C message that tells devices *what* kind of data is being sent. 
*   Example: `1FFF7` is "DC Source Status".
*   LibreCoach uses the DGN to know how to decode the message (e.g. knowing that the first byte is voltage and the second is current).

### HACS (Home Assistant Community Store)
A third-party app store for Home Assistant. It allows you to easily install and update custom integrations, themes, and frontend cards that aren't included in the core Home Assistant installation.

### HAT (Hardware Attached on Top)
An add-on board for Raspberry Pi that sits on top of the GPIO pins. In LibreCoach, the CAN HAT provides the physical screw terminals to connect to the RV's wiring.

### Mosquitto
An open-source MQTT broker. It acts as the "post office" for LibreCoach.
*   The **CAN Bridge** sends messages to Mosquitto.
*   **Node-RED** picks them up from Mosquitto.
*   Without it, the different parts of the software couldn't talk to each other.

### NMEA 2000
A marine communication standard also based on CAN bus. You will often see NMEA 2000 cables recommended for LibreCoach because they are high-quality, shielded, and perfect for RV-C networks.

### NVMe (Non-Volatile Memory express)
A type of fast storage drive. We recommend using an NVMe SSD instead of a MicroSD card because it is much faster and far more reliable, preventing the dreaded "SD card corruption" that often kills Raspberry Pis.

### SPI (Serial Peripheral Interface)
The internal communication method the Raspberry Pi uses to talk to the CAN HAT. You don't need to know how it works, but you'll see it mentioned in config files.

### SSH (Secure Shell)
A way to log into the Raspberry Pi's command line remotely from another computer. Used for advanced troubleshooting.

### SSID (Service Set Identifier)
Technical term for "Wi-Fi Network Name". When you scan for Wi-Fi, the list of names you see are SSIDs.

### Static IP
A fixed address for a device on your network. 
*   Normally, routers assign random addresses (DHCP) that can change.
*   A Static IP ensures your Pi is always at the same address (e.g., `192.168.1.50`), making it easier to find.

### Tailscale
A "zero-config" VPN that lets you access your RV from anywhere in the world securely, without needing to open ports on your router or pay for a cloud subscription.

### Termination Resistor
A 120-ohm resistor placed at *each end* of the CAN bus trunk. Essential for preventing signal reflections. If your network is "flaking out", check termination.

### YAML
"YAML Ain't Markup Language". The easy-to-read text format used for Home Assistant configuration files. It relies on indentation (spaces) to organize data.
