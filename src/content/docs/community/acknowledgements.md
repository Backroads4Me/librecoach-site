---
filename: acknowledgements
title: Acknowledgements
description: Recognizing the pioneers and open-source projects that made LibreCoach possible.
sidebar:
  order: 10
draft: false
---

LibreCoach was built from the ground up, designed entirely in-house, yet it stands on the foundation laid by pioneers in RV-C integration and open-source automation. We’re proud of our work and grateful to those who made it possible. This page recognizes the ideas and projects that inspired LibreCoach, and the open-source tools that make it possible.

## The Pioneer: CoachProxy

LibreCoach was developed independently but draws inspiration from the ideas behind Michael J. Kidd’s CoachProxy project.

**Michael J. Kidd** (known as `linuxkidd` on GitHub) created **CoachProxy**, a commercial hardware product years ahead of its time. His later open-sourcing of the project provided the RV and open-source communities with invaluable insight into bridging industrial RV-C networks to consumer devices.

We are grateful for his trailblazing work in decoding the protocol and proving that this kind of integration was possible.

- <a href="https://coachproxy.com/" target="_blank" rel="noopener noreferrer">CoachProxy Website (Archive)</a>
- <a href="https://github.com/linuxkidd/rvc-proxy" target="_blank" rel="noopener noreferrer">GitHub: rvc-proxy</a>
- <a href="https://github.com/linuxkidd/rvc-monitor-py" target="_blank" rel="noopener noreferrer">GitHub: rvc-monitor-py</a>

## The Foundation: Home Assistant

LibreCoach is built on **Home Assistant** to leverage its local-first, privacy-focused architecture, making RV automation reliable and extensible.

We chose this foundation because it aligns perfectly with the needs of RVers:

- **Local First:** It works without the internet, keeping your data inside your rig.
- **Massive Community:** It supports thousands of integrations beyond just RV-C.

We are indebted to the thousands of contributors who have made Home Assistant the gold standard for open-source automation.

- <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>

## Essential Apps

LibreCoach integrates several open-source Home Assistant apps to create a seamless RV automation experience. We recommend and rely on these excellent tools:

- **<a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">Mosquitto</a>:** The lightweight MQTT broker that acts as the "nervous system," passing messages between the RV-C bus and Home Assistant.
- **<a href="https://nodered.org/" target="_blank" rel="noopener noreferrer">Node-RED</a>:** The visual programming tool that handles the complex logic of translating raw industrial CAN messages into smart home entities.


## Community Integrations

We believe in giving credit where credit is due. The following projects provided the foundation for specific device integrations within LibreCoach:

### Micro-Air EasyTouch

The Micro-Air EasyTouch Bluetooth integration was built with BLE protocol reference from the work of:

- **k3vmcd** — <a href="https://github.com/k3vmcd/ha-micro-air-easytouch" target="_blank" rel="noopener noreferrer">ha-micro-air-easytouch</a>
- **mlefevre** — <a href="https://github.com/mlefevre/ha_EasyTouchRV_MicroAir_MZ" target="_blank" rel="noopener noreferrer">ha_EasyTouchRV_MicroAir_MZ</a>

---

To all the developers, contributors, and visionaries who have made this journey possible:

_“If I have seen further, it is by standing on the shoulders of giants.” — Isaac Newton_
