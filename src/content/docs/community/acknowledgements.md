---
filename: acknowledgements
title: Acknowledgements
description: Recognizing the pioneers and open-source projects that made LibreCoach possible.
sidebar:
  order: 10
draft: false
---

LibreCoach was built from scratch, but it builds on the work of those who first tackled RV-C integration and the open-source tools it runs on. This page recognizes the projects that inspired it and the tools that make it possible.

## CoachProxy

LibreCoach was developed independently, but it was informed by the ideas behind Michael J. Kidd's CoachProxy project.

**Michael J. Kidd** (linuxkidd on GitHub) created **CoachProxy**, a commercial hardware solution that was ahead of its time. Open-sourcing it later gave the RV and open-source communities valuable insight into bridging industrial RV-C networks with consumer automation systems.

- <a href="https://coachproxy.com/" target="_blank" rel="noopener noreferrer">CoachProxy Website (Archive)</a>
- <a href="https://github.com/linuxkidd/coachproxy-os" target="_blank" rel="noopener noreferrer">GitHub: coachproxy-os</a>

## Home Assistant

LibreCoach is built on **Home Assistant**, a reliable and flexible platform for RV automation. Beyond RV-C, it supports thousands of integrations and apps, so you can customize your setup across a wide range of devices and workflows.

Its global community of contributors has built something remarkable, and LibreCoach wouldn't exist without it.

- <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>

## Core Tools

LibreCoach relies on several open-source projects:

- **<a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">Mosquitto</a>:** A lightweight MQTT broker that serves as the messaging backbone between the RV-C bus and Home Assistant.
- **<a href="https://nodered.org/" target="_blank" rel="noopener noreferrer">Node-RED</a>:** A visual programming environment used to translate industrial CAN messages into structured automation entities.

## Community Integrations

Some device integrations were developed with reference to existing open-source work.

The MicroAir EasyTouch Bluetooth integration draws on BLE protocol references from:

- **k3vmcd**: <a href="https://github.com/k3vmcd/ha-micro-air-easytouch" target="_blank" rel="noopener noreferrer">ha-micro-air-easytouch</a>
- **mlefevre**: <a href="https://github.com/mlefevre/ha_EasyTouchRV_MicroAir_MZ" target="_blank" rel="noopener noreferrer">ha_EasyTouchRV_MicroAir_MZ</a>

The Hughes Power Watchdog Bluetooth integration draws on protocol references from:

- **john-k-mcdowell**: <a href="https://github.com/john-k-mcdowell/My-Hughes-Power-Watchdog" target="_blank" rel="noopener noreferrer">My-Hughes-Power-Watchdog</a>
