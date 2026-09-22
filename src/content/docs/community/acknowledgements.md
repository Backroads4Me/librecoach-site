---
filename: acknowledgements
title: Acknowledgements
description: The open-source projects and people LibreCoach builds on.
sidebar:
  order: 10
draft: false
---

LibreCoach stands on a lot of other people's work. These are the projects I rely on most, and the people whose work helped me along the way.

## Home Assistant

LibreCoach wouldn't exist without **Home Assistant**. It handles the parts I'd never want to build myself: the dashboards, history, automations, mobile apps, and thousands of integrations. Its contributors have made it possible for one person to build something like LibreCoach.

- <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>

## Supporting Services

Two more open-source projects do much of the work behind the scenes:

- **<a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">Mosquitto</a>:** The MQTT broker that carries messages between the RV-C network and Home Assistant.
- **<a href="https://nodered.org/" target="_blank" rel="noopener noreferrer">Node-RED</a>:** Where LibreCoach turns raw RV-C messages into lights, tanks, and thermostats Home Assistant can use.

## Community Integrations

Some device integrations started from other people's research into how those devices communicate.

The MicroAir EasyTouch Bluetooth integration draws on protocol work from:

- **k3vmcd**: <a href="https://github.com/k3vmcd/ha-micro-air-easytouch" target="_blank" rel="noopener noreferrer">ha-micro-air-easytouch</a>
- **mlefevre**: <a href="https://github.com/mlefevre/ha_EasyTouchRV_MicroAir_MZ" target="_blank" rel="noopener noreferrer">ha_EasyTouchRV_MicroAir_MZ</a>

The Hughes Power Watchdog Bluetooth integration draws on protocol work from:

- **john-k-mcdowell**: <a href="https://github.com/john-k-mcdowell/My-Hughes-Power-Watchdog" target="_blank" rel="noopener noreferrer">My-Hughes-Power-Watchdog</a>

## CoachProxy

CoachProxy was one of the first projects to connect RV systems to modern automation tools. Its open-source release showed what was possible and has been a useful reference for everyone working in this space.

- **linuxkidd**: <a href="https://github.com/linuxkidd/coachproxy-os" target="_blank" rel="noopener noreferrer">coachproxy-os</a>
