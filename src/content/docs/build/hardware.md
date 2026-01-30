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
- CAN cable/wire
- 3M connector

## Detailed Vendor Options

This page serves as your shopping list. We provide a **Recommended Path** (usually Amazon for speed/returns) and options for those who want to shop around.

### Recommended Path (Fastest)

If you just want to get building:

1.  **Raspberry Pi 5 (4GB)**: <a href="https://a.co/d/bVJhbcP" target="_blank" rel="noopener noreferrer">Amazon</a>
2.  **Waveshare Isolated RS485 CAN HAT (B)**: <a href="https://a.co/d/2XbOnAL" target="_blank" rel="noopener noreferrer">Amazon</a>
3.  **Waveshare PCIe to M.2 Adapter (E)**: <a href="https://a.co/d/0w0WuaM" target="_blank" rel="noopener noreferrer">Amazon</a>
4.  **NVMe SSD (256GB)**: <a href="https://a.co/d/5OO0U6x" target="_blank" rel="noopener noreferrer">Amazon</a>
5.  **Case**: <a href="https://a.co/d/j9nWGdK" target="_blank" rel="noopener noreferrer">Amazon</a>
6.  **CAN Cable**: <a href="https://a.co/d/9ryHfpw" target="_blank" rel="noopener noreferrer">Amazon</a>
7.  **3M connector**: <a href="https://www.digikey.com/en/products/detail/3m/37104-A206-00E-MB/1855698?s=N4IgTCBcDaIMwHYCMAGALAWgIJhQNgxRQFEACAWQCEQBdAXyA" target="_blank" rel="noopener noreferrer">DigiKey</a> or <a href="https://www.mouser.com/ProductDetail/3M-Electronic-Solutions-Division/37104-A206-00E-MB?qs=yiCaORDwWV5aTpMGZw1tMA%3D%3D&mgh=1" target="_blank" rel="noopener noreferrer">Mouser</a>

_Pricing fluctuates, but this path typically costs $200-$250._

---

### Mix and Match

Mix and match to fit your budget and timeline.

#### Raspberry Pi 5 (4GB)

The brain of your system. 4GB is plenty for Home Assistant.

| Vendor        | Approx Price | Link                                                                                                          | Notes                       |
| :------------ | :----------- | :------------------------------------------------------------------------------------------------------------ | :-------------------------- |
| **Amazon**    | ~$77         | <a href="https://a.co/d/bVJhbcP" target="_blank" rel="noopener noreferrer">Buy Here</a>                       | Fast shipping, easy returns |
| **Waveshare** | ~$83         | <a href="https://www.waveshare.com/raspberry-pi-5.htm" target="_blank" rel="noopener noreferrer">Buy Here</a> | Direct from manufacturer    |

#### Isolated CAN HAT (Type B)

**Critical Component**: Must be the "Isolated RS485 CAN HAT (B)".

| Vendor        | Approx Price | Link                                                                                                           | Notes                       |
| :------------ | :----------- | :------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| **Amazon**    | ~$26         | <a href="https://a.co/d/2XbOnAL" target="_blank" rel="noopener noreferrer">Buy Here</a>                        | -                           |
| **Waveshare** | ~$22         | <a href="https://www.waveshare.com/rs485-can-hat-b.htm" target="_blank" rel="noopener noreferrer">Buy Here</a> | Cheaper but slower shipping |

#### PCIe to M.2 Adapter

Connects the fast NVMe drive to the Pi.

| Vendor        | Approx Price | Link                                                                                                               | Notes |
| :------------ | :----------- | :----------------------------------------------------------------------------------------------------------------- | :---- |
| **Amazon**    | ~$22         | <a href="https://a.co/d/0w0WuaM" target="_blank" rel="noopener noreferrer">Buy Here</a>                            | -     |
| **Waveshare** | ~$13         | <a href="https://www.waveshare.com/pcie-to-m.2-board-e.htm" target="_blank" rel="noopener noreferrer">Buy Here</a> | -     |

#### NVMe SSD

Much faster and more reliable than SD cards.

| Vendor        | Approx Price | Link                                                                                                                               | Notes                |
| :------------ | :----------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| **Amazon**    | ~$32         | <a href="https://a.co/d/c9OCTZB" target="_blank" rel="noopener noreferrer">Buy Here</a>                                            | Generic good quality |
| **Waveshare** | ~$39         | <a href="https://www.waveshare.com/sk-nvme-2242-128g-ssd-m.2.htm?sku=27379" target="_blank" rel="noopener noreferrer">Buy Here</a> | -                    |

#### Case

Protect your build.

| Vendor     | Approx Price | Link                                                                                                                                                       | Notes               |
| :--------- | :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| **Amazon** | ~$18         | <a href="https://a.co/d/iQtNZHq" target="_blank" rel="noopener noreferrer">Buy Here</a>                                                                    | Basic acrylic case  |
| **KKSB**   | ~$17         | <a href="https://kksb-cases.com/collections/raspberry-pi/products/kksb-hat-case-for-raspberry-pi-5" target="_blank" rel="noopener noreferrer">Buy Here</a> | Metal, premium feel |

---

## Options and Upgrades

The Raspberry Pi ecosystem is highly flexible, and LibreCoach hardware can be built in many different ways.

You could reduce cost by using an older-generation Pi, a different CAN HAT, or an SD card instead of NVMe. It’s even possible to run without a case or use basic, off-the-shelf cabling. On the other end of the spectrum, you could opt for more RAM and storage, alternate cases, or additional hardware for more complex builds.

That said, the components recommended here were chosen deliberately: they’re high-quality, easy to assemble, readily available, and—most importantly—personally tested. This configuration aims to provide a reliable, repeatable build with minimal friction for first-time users.

### Optional Upgrades

Items that aren't strictly required but nice to have.

| Component                | Price | Link                                                                                                                                  | Why                                 |
| :----------------------- | :---- | :------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------- |
| **Raspberry Pi 5 (8GB)** | ~$90  | <a href="https://a.co/d/h6j9GHp" target="_blank" rel="noopener noreferrer">Amazon</a>                                                 | Future proofing (overkill for most) |
| **Active Cooler**        | ~$6   | <a href="https://www.waveshare.com/raspberry-pi-5-official-active-cooler.htm" target="_blank" rel="noopener noreferrer">Waveshare</a> | Keep temps down if enclosure is hot |
| **Power Supply**         | ~$12  | <a href="https://a.co/d/icjIhay" target="_blank" rel="noopener noreferrer">Amazon</a>                                                 | Official 27W supply recommended     |
