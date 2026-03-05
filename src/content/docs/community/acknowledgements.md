---
filename: acknowledgements
title: Acknowledgements
description: Recognizing the pioneers and open-source projects that made LibreCoach possible.
sidebar:
  order: 10
draft: false
---

LibreCoach was built from scratch, but it stands on the foundation laid by pioneers in RV-C integration and open-source automation. This page recognizes the ideas that inspired the project and the tools that make it possible.

## The Pioneer: CoachProxy

LibreCoach was developed independently but was informed by the ideas behind Michael J. Kidd's CoachProxy project.

**Michael J. Kidd** (known as linuxkidd on GitHub) created **CoachProxy**, a commercial hardware solution that was ahead of its time. His later decision to open-source the project gave the RV and open-source communities valuable insight into bridging industrial RV-C networks with consumer automation systems.

- <a href="https://coachproxy.com/" target="_blank" rel="noopener noreferrer">CoachProxy Website (Archive)</a>
- <a href="https://github.com/linuxkidd/coachproxy-os" target="_blank" rel="noopener noreferrer">GitHub: coachproxy-os</a>

## The Foundation: Home Assistant

LibreCoach is built on **Home Assistant**, providing a reliable and flexible foundation for RV automation. Beyond RV-C, it supports thousands of integrations and apps, enabling extensive customization across a wide range of devices and workflows.

Home Assistant's global community of contributors has built something remarkable, and LibreCoach wouldn't exist without it.

- <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>

## Core Tools

LibreCoach relies on several open-source projects:

- **<a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">Mosquitto</a>:** A lightweight MQTT broker that serves as the messaging backbone between the RV-C bus and Home Assistant.
- **<a href="https://nodered.org/" target="_blank" rel="noopener noreferrer">Node-RED</a>:** A visual programming environment used to translate industrial CAN messages into structured automation entities.

## Community Integrations

Certain device integrations were developed with reference to existing open-source work.

The Micro-Air EasyTouch Bluetooth integration was implemented using BLE protocol references from:

- **k3vmcd** &mdash; <a href="https://github.com/k3vmcd/ha-micro-air-easytouch" target="_blank" rel="noopener noreferrer">ha-micro-air-easytouch</a>
- **mlefevre** &mdash; <a href="https://github.com/mlefevre/ha_EasyTouchRV_MicroAir_MZ" target="_blank" rel="noopener noreferrer">ha_EasyTouchRV_MicroAir_MZ</a>

