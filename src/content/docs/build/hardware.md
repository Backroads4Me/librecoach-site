---
filename: hardware
title: Hardware
description: Bill of Materials, vendor options, and hardware upgrades for LibreCoach.
sidebar:
  order: 2
  label: Hardware
draft: false
---

## Bill of Materials

This guide assumes the following components.

- Raspberry Pi 5 (4GB)
- Waveshare Isolated RS485 CAN HAT B
- Waveshare PCIe TO M.2 Board (E)
- NVMe SSD
- Case
- CAN cable and 3M connector

## Detailed Vendor Options

This page serves as your shopping list. We provide a **Recommended Path** (usually Amazon for speed/returns) and **Detailed Options** for those who want to shop around.

### Recommended Path (Fastest)

If you just want to get building:

1.  **Raspberry Pi 5 (4GB)**: [Amazon Link](https://a.co/d/bVJhbcP)
2.  **Waveshare Isolated RS485 CAN HAT (B)**: [Amazon Link](https://a.co/d/2XbOnAL)
3.  **Waveshare PCIe to M.2 Adapter (E)**: [Amazon Link](https://a.co/d/0w0WuaM)
4.  **NVMe SSD (256GB)**: [Amazon Link](https://a.co/d/c9OCTZB)
5.  **Case**: [Amazon Link](https://a.co/d/ix35YAY)
6.  **CAN Cable**: [Amazon Link](https://a.co/d/9ryHfpw)

_Pricing fluctuates, but this path typically costs $200-$250._

---

### Mix and Match

Mix and match to fit your budget and timeline.

#### Raspberry Pi 5 (4GB)

The brain of your system. 4GB is plenty for Home Assistant.

| Vendor        | Approx Price | Link                                                     | Notes                       |
| :------------ | :----------- | :------------------------------------------------------- | :-------------------------- |
| **Amazon**    | ~$77         | [Buy Here](https://a.co/d/bVJhbcP)                       | Fast shipping, easy returns |
| **Waveshare** | ~$83         | [Buy Here](https://www.waveshare.com/raspberry-pi-5.htm) | Direct from manufacturer    |

#### Isolated CAN HAT (Type B)

**Critical Component**: Must be the "Isolated RS485 CAN HAT (B)".

| Vendor        | Approx Price | Link                                                      | Notes                       |
| :------------ | :----------- | :-------------------------------------------------------- | :-------------------------- |
| **Amazon**    | ~$26         | [Buy Here](https://a.co/d/2XbOnAL)                        | -                           |
| **Waveshare** | ~$22         | [Buy Here](https://www.waveshare.com/rs485-can-hat-b.htm) | Cheaper but slower shipping |

#### PCIe to M.2 Adapter

Connects the fast NVMe drive to the Pi.

| Vendor        | Approx Price | Link                                                          | Notes |
| :------------ | :----------- | :------------------------------------------------------------ | :---- |
| **Amazon**    | ~$22         | [Buy Here](https://a.co/d/0w0WuaM)                            | -     |
| **Waveshare** | ~$13         | [Buy Here](https://www.waveshare.com/pcie-to-m.2-board-e.htm) | -     |

#### NVMe SSD

Much faster and more reliable than SD cards.

| Vendor        | Approx Price | Link                                                                          | Notes                |
| :------------ | :----------- | :---------------------------------------------------------------------------- | :------------------- |
| **Amazon**    | ~$32         | [Buy Here](https://a.co/d/c9OCTZB)                                            | Generic good quality |
| **Waveshare** | ~$39         | [Buy Here](https://www.waveshare.com/sk-nvme-2242-128g-ssd-m.2.htm?sku=27379) | -                    |

#### Case

Protect your build.

| Vendor     | Approx Price | Link                                                                                                  | Notes               |
| :--------- | :----------- | :---------------------------------------------------------------------------------------------------- | :------------------ |
| **Amazon** | ~$18         | [Buy Here](https://a.co/d/iQtNZHq)                                                                    | Basic acrylic case  |
| **KKSB**   | ~$17         | [Buy Here](https://kksb-cases.com/collections/raspberry-pi/products/kksb-hat-case-for-raspberry-pi-5) | Metal, premium feel |

---

## Options and Upgrades

The Raspberry Pi ecosystem is highly flexible, and LibreCoach hardware can be built in many different ways.

You could reduce cost by using an older-generation Pi, a different CAN HAT, or an SD card instead of NVMe. It’s even possible to run without a case or use basic, off-the-shelf cabling. On the other end of the spectrum, you could opt for more RAM and storage, alternate cases, or additional hardware for more complex builds.

That said, the components recommended here were chosen deliberately: they’re high-quality, easy to assemble, readily available, and—most importantly—personally tested. This configuration aims to provide a reliable, repeatable build with minimal friction for first-time users.

### Optional Upgrades

Items that aren't strictly required but nice to have.

| Component                | Price | Link                                                                             | Why                                 |
| :----------------------- | :---- | :------------------------------------------------------------------------------- | :---------------------------------- |
| **Raspberry Pi 5 (8GB)** | ~$90  | [Amazon](https://a.co/d/h6j9GHp)                                                 | Future proofing (overkill for most) |
| **Active Cooler**        | ~$6   | [Waveshare](https://www.waveshare.com/raspberry-pi-5-official-active-cooler.htm) | Keep temps down if enclosure is hot |
| **Power Supply**         | ~$12  | [Amazon](https://a.co/d/icjIhay)                                                 | Official 27W supply recommended     |
