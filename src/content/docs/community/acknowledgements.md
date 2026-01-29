---
filename: acknowledgements
title: Acknowledgements & History
description: Recognizing the pioneers and open-source projects that made LibreCoach possible.
sidebar:
  order: 10
draft: false
---

LibreCoach was built from the ground up, designed entirely in-house, but it stands on the foundation laid by pioneers in RV-C integration and open-source automation. We’re proud of our work, and grateful to those who made it possible.

## The Pioneer: CoachProxy

While LibreCoach does not reuse CoachProxy code, it draws inspiration from Michael J. Kidd’s vision of a headless RV-C bridge.

**Michael J. Kidd** (known as `linuxkidd` in the community) created **CoachProxy**, a commercial hardware product years ahead of its time. His later open-sourcing of the project provided the RV and open-source communities with invaluable insight into bridging industrial RV-C networks to consumer devices.

We are grateful for his trailblazing work in decoding the protocol and proving that this kind of integration was possible.

- [CoachProxy Website (Archive)](https://coachproxy.com/)
- [GitHub: rvc-proxy](https://github.com/linuxkidd/rvc-proxy)
- [GitHub: rvc-monitor-py](https://github.com/linuxkidd/rvc-monitor-py)

## The Foundation: Home Assistant

LibreCoach is built on **Home Assistant** to leverage its local-first, privacy-focused architecture, making RV automation reliable and extensible.

We chose this foundation because it aligns perfectly with the needs of RVers:

- **Local First:** It works without the internet, keeping your data inside your rig.
- **Massive Community:** It supports thousands of integrations beyond just RV-C.

We are indebted to the thousands of contributors who have made Home Assistant the gold standard for open-source automation.

- [Home Assistant](https://www.home-assistant.io/)

## Essential Tools

LibreCoach integrates several open-source projects to create a seamless RV automation experience. We recommend and rely on these excellent tools:

### Required Core

- **[Mosquitto](https://mosquitto.org/):** The lightweight MQTT broker that acts as the "nervous system," passing messages between the RV-C bus and Home Assistant.
- **[Node-RED](https://nodered.org/):** The visual programming tool that handles the complex logic of translating raw industrial CAN messages into smart home entities.

### Recommended Add-ons

While not strictly required for the core bridge, we recommend a suite of other excellent Home Assistant add-ons to enhance the LibreCoach experience:

- **[Tailscale](/advanced-setup/tailscale/)** - Secure remote access without port forwarding
- **[File Editor](/advanced-setup/file-editor/)** - Edit configuration files from your browser
- **[Terminal & SSH](/advanced-setup/terminal-ssh/)** - Command-line access for advanced users
- **[Google Drive Backup](/advanced-setup/backups/)** - Automatic cloud backups

See our [Advanced Setup](/advanced-setup/) section for detailed guides on these and other recommended add-ons.

---

To all the developers, contributors, and visionaries who have made this journey possible:

_“If I have seen further, it is by standing on the shoulders of giants.” — Isaac Newton_
