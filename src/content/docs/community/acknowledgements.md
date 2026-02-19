---
filename: acknowledgements
title: Acknowledgements
description: Recognizing the pioneers and open-source projects that made LibreCoach possible.
sidebar:
  order: 10
draft: false
---

LibreCoach was designed and developed in-house, but it builds on the foundation laid by pioneers in RV-C integration and open-source automation. This page recognizes the ideas that inspired LibreCoach and the projects that make it possible.

## The Pioneer: CoachProxy

LibreCoach was developed independently but was informed by the ideas behind Michael J. Kidd's CoachProxy project.

**Michael J. Kidd** (known as linuxkidd on GitHub) created **CoachProxy**, a commercial hardware solution that was ahead of its time. His later decision to open-source the project gave the RV and open-source communities valuable insight into bridging industrial RV-C networks with consumer automation systems.

- <a href="https://coachproxy.com/" target="_blank" rel="noopener noreferrer">CoachProxy Website (Archive)</a>
- <a href="https://github.com/linuxkidd/coachproxy-os" target="_blank" rel="noopener noreferrer">GitHub: coachproxy-os</a>

## The Foundation: Home Assistant

LibreCoach is built on **Home Assistant**, providing a reliable and flexible foundation for RV automation. Beyond RV-C, it supports thousands of integrations and apps, enabling extensive customization across a wide range of devices and workflows.

We are grateful to the global community of contributors who have made Home Assistant a leading open-source automation platform.

- <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>

## Essential Applications

LibreCoach relies on several core open-source tools:

- **<a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">Mosquitto</a>:** A lightweight MQTT broker that serves as the messaging backbone between the RV-C bus and Home Assistant.
- **<a href="https://nodered.org/" target="_blank" rel="noopener noreferrer">Node-RED</a>:** A visual programming environment used to translate industrial CAN messages into structured automation entities.

## Community Integrations

Certain device integrations were developed with reference to existing open-source work.

### Micro-Air EasyTouch

The Micro-Air EasyTouch Bluetooth integration was implemented using BLE protocol references from:

- **k3vmcd** &mdash; <a href="https://github.com/k3vmcd/ha-micro-air-easytouch" target="_blank" rel="noopener noreferrer">ha-micro-air-easytouch</a>
- **mlefevre** &mdash; <a href="https://github.com/mlefevre/ha_EasyTouchRV_MicroAir_MZ" target="_blank" rel="noopener noreferrer">ha_EasyTouchRV_MicroAir_MZ</a>

---

To all the developers, contributors, and visionaries who have made this journey possible:

_"If I have seen further, it is by standing on the shoulders of giants." — Isaac Newton_

LibreCoach is our contribution back to this ecosystem — we look forward to seeing what others build upon it.
