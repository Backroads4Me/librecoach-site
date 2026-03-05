---
filename: rvc
title: About RV-C
description: Overview of RV-C networks, messages, and compatible devices.
sidebar:
  order: 2
draft: false
---

RV-C (Recreational Vehicle Controller Area Network) is the standard communication protocol used in modern RVs. It's based on CAN 2.0B — the same bus technology used in cars and trucks — running at 250 kbit/s over a twisted pair of wires (CAN-H and CAN-L).

It's a peer-to-peer network with no master device. All nodes broadcast messages on the bus, and devices act only on the ones addressed to them. A single bus supports up to 172 nodes across 265 meters of wiring.

```
                       CAN Bus (Two Wires: CAN-H and CAN-L)
   ┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
[Controller] [Lights] [Thermostat] [Tank Sensor] [Battery Monitor] [More...]
```

## Message Structure

Every RV-C message uses a 29-bit extended CAN frame with 8 bytes of data. The frame identifier breaks down into three parts:

| Field          | Bits | Purpose                                         |
| -------------- | ---- | ----------------------------------------------- |
| Priority       | 3    | Urgency level (0–7, typically 6 for status)     |
| DGN            | 17   | Data Group Number — identifies the message type |
| Source Address | 8    | Which device sent the message (0–253)           |

The first data byte is usually the **instance** number, which distinguishes multiple devices of the same type. For example, a single lighting controller might manage 8 dimmable circuits — instances 1 through 8.

### Example

```
From: Wall Switch Panel (Address: 42)
DGN: DC_DIMMER_COMMAND_2
Data: Instance=5, Status=ON, Brightness=100%
```

### Reserved Values

RV-C uses special byte values to indicate missing or unchanged data:

| Value  | Meaning                                                   |
| ------ | --------------------------------------------------------- |
| `0xFF` | Data not available (in commands: don't change this field) |
| `0xFE` | Error or out of range                                     |

## Learn More

- <a href="https://www.rvia.org/rv-c/rv-c-specification-document" target="_blank" rel="noopener noreferrer">RV-C Official Specification</a> — the full standard (technical)
- [System Architecture](/reference/system-architecture/) — how LibreCoach processes RV-C messages
