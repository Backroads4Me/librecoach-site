---
filename: overview
title: Build Overview
description: A high-level roadmap for building and installing LibreCoach hardware.
sidebar:
  order: 1
  label: Overview
draft: false
---

The build uses standard, off-the-shelf parts, but it does involve hardware assembly, storage preparation, Home Assistant setup, and a physical connection to your RV's RV-C network.

## What You Are Building

A LibreCoach system has three main pieces:

- **Raspberry Pi hardware**
- **Home Assistant Operating System**
- **The LibreCoach app**

Once connected, LibreCoach listens to the RV-C network and creates Home Assistant entities for your coach systems, letting you monitor and control them from Home Assistant.

## Skill Level

If you can follow step-by-step instructions and are comfortable with basic technology, you can build LibreCoach. You do not need advanced electronics or networking experience. The guide walks you through every step with photos.

It helps to be comfortable handling small parts and following along carefully. The steps are approachable, but they do require careful attention. If you'd rather not make the final connection to your RV's wiring yourself, any RV technician can help with that one step.

## Build Path

Complete these steps in order. Each links to its full guide:

1. [Choose and Order Hardware](/build/hardware/)
2. [Prepare Home Assistant OS](/build/system-prep/)
3. [Assemble the Hardware](/build/assembly/)
4. [Build the CAN Cable](/build/can-cable/)
5. [Install LibreCoach](/build/software/)
6. [Connect to the RV-C Network](/build/connection/)
7. [Identify Your Devices](/configuration/identify-devices/)

## Estimated Time

Most first-time builders should plan for:

- **Prepare Home Assistant OS:** ~1 hour
- **Hardware assembly:** ~45 minutes
- **CAN cable assembly:** ~20 minutes
- **Software installation:** ~30 minutes
- **RV connection and device identification:** ~1 hour, depending on coach complexity

The process is not difficult, but it rewards careful work.
