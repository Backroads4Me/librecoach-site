---
filename: acknowledgements
title: Acknowledgements
description: Recognizing the open-source projects that help make LibreCoach possible.
sidebar:
  order: 10
draft: false
---

LibreCoach is built on the open-source projects created and maintained by generous communities. This page recognizes the foundational work that makes LibreCoach possible.

## Home Assistant

LibreCoach is built on **Home Assistant**, a reliable and flexible platform for RV automation. It supports thousands of integrations and apps, so you can customize your setup across a wide range of devices and workflows.

Its global community of contributors has built something remarkable, and LibreCoach wouldn't exist without it.

- <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>

## Supporting Services

LibreCoach relies on several open-source supporting services:

- **<a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">Mosquitto</a>:** A lightweight MQTT broker that serves as the messaging backbone between the RV-C bus and Home Assistant.
- **<a href="https://nodered.org/" target="_blank" rel="noopener noreferrer">Node-RED</a>:** A visual programming environment used to translate RV-C messages into structured automation entities.

## Community Integrations

Some device integrations were developed with reference to existing open-source work.

The MicroAir EasyTouch Bluetooth integration draws on Bluetooth protocol references from:

- **k3vmcd**: <a href="https://github.com/k3vmcd/ha-micro-air-easytouch" target="_blank" rel="noopener noreferrer">ha-micro-air-easytouch</a>
- **mlefevre**: <a href="https://github.com/mlefevre/ha_EasyTouchRV_MicroAir_MZ" target="_blank" rel="noopener noreferrer">ha_EasyTouchRV_MicroAir_MZ</a>

The Hughes Power Watchdog Bluetooth integration draws on protocol references from:

- **john-k-mcdowell**: <a href="https://github.com/john-k-mcdowell/My-Hughes-Power-Watchdog" target="_blank" rel="noopener noreferrer">My-Hughes-Power-Watchdog</a>

## CoachProxy

CoachProxy was an early example of connecting RV systems with modern automation tools, and its open-source release has been a useful reference for the broader community.

- **linuxkidd**: <a href="https://github.com/linuxkidd/coachproxy-os" target="_blank" rel="noopener noreferrer">coachproxy-os</a>
