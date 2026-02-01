---
filename: installation
title: Installation
description: Guide to physically connecting LibreCoach hardware to your RV's CAN bus network including safety precautions, locating ports, and verification.
sidebar:
  order: 6
draft: false
---

# Create wire connection

:::caution[Safety First]
**Before you begin:**

1.  **Disconnect Shore Power**: Unplug your RV from any external power source.
2.  **Turn Off Inverter**: Ensure your inverter is powered down.
3.  **Battery Disconnect**: If possible, use the battery disconnect switch to cut 12V power.

Working with your RV's electrical system carries risks. While the RV-C network is low voltage (12V), accidental shorts can damage sensitive electronics or blow fuses. If you are uncomfortable working with wiring, consult a qualified RV technician.
:::

## Locating Your RV-C Network

The first step is finding where to plug in. Your RV-C network (often called the "CAN bus") runs throughout your coach, but you need to find an accessible "tap" or open port.

### Common Locations by Manufacturer

- **Tiffin**: Often found behind the panel above the driver's seat or in the main electrical bay in the basement. Look for the "Spyder" controls.
- **Newmar**: Typically located in the main electrical cabinet (often in the bathroom or bedroom) or near the cord reel bay.
- **Entegra**: Frequently found behind the panel above the entry door or in the basement near the precision circuit board.
- **Other Brands**: Check your owner's manual for "Network" or "Multiplex" system locations. Common spots include behind the main control panel keypad or in the electrical bay.

### What to Look For

You are looking for a **Block Terminal** or a **Diagnostic Port**.

- **Diagnostic Ports**: often rectangular (like an ethernet port but slightly different wiring) or circular.
- **Tap Points**: Connectors with Green (CAN-L) and Yellow (CAN-H) wires.
- **Twisted Pair Wiring**: RV-C uses a twisted pair of wires (usually white/blue or green/yellow) for communication.

:::tip[Community Help]
Can't find your port? Take a photo of your electrical bay and post it in the [Device locations](https://forum.LibreCoach.com) section of our forum. The community has documented locations for many makes/models.
:::

## Connection Methods

Choose the method that matches your hardware and comfort level.

### Method 1: Direct RV-C Port (Recommended)

This is the easiest and safest method if you have an open port available.

**What you need:**

- A cable that matches your RV's port type (often DB9 to RJ12/Molex).
- Your LibreCoach device (Raspberry Pi + CAN HAT).

**Steps:**

1.  Verify the pinout of your RV's port (check manual or use a multimeter to find CAN-H/CAN-L).
2.  Connect the cable from the RV-C port to the CAN HAT on your Raspberry Pi.
3.  Secure the Raspberry Pi in a safe location near the port.

### Method 2: Tap Into Existing Wiring (Advanced)

If you don't have an open port, you can splice into an existing drop cable. Note that RV-C drop cables should ideally be less than 6 meters (20 feet) long.

**What you need:**

- 3M Scotchlok connectors or Wago lever nuts.
- 18-22 AWG wire.

**Steps:**

1.  Identify a "Drop" cable (a network branch connected to a device like a switch panel). **Do not** cut the main thick "Trunk" cable.
2.  Identify the wires:
    - **CAN-H (High)**: Usually Yellow (or White).
    - **CAN-L (Low)**: Usually Green (or Blue).
    - **Ground**: usually Black.
    - **Power (12V)**: usually Red.
3.  Splice your wires to the Drop wires: High to High, Low to Low.
4.  Connect your spliced wires to the screw terminals on your CAN HAT.

:::important[Termination]
The RV-C network requires "termination resistors" (120Ω) at the two ends of the main trunk.

- **If adding a node in the middle:** Disable the termination resistor on your CAN HAT.
- **If replacing an end device:** You _might_ need to enable termination, but this is rare for a tap.
- **Default Rule:** Start with termination **OFF** (jumper removed on Waveshare HAT).
  :::

### Method 3: OBD-II Adapter

Some newer RVs expose RV-C data via an onboard diagnostic port similar to a car.

**Steps:**

1.  Locate the OBD-II style port (often near the steering column).
2.  Use an OBD-II to DB9 adapter cable.
3.  Connect to your CAN HAT.

## Verification

Once connected, it's time to test communication.

1.  **Power On**: Turn on your RV battery disconnect and shore power.
2.  **Boot LibreCoach**: Power up your Raspberry Pi.
3.  **Check Logs**:
    - Open Home Assistant.
    - Go to **Settings > Add-ons > LibreCoach > Logs**.
    - Look for a message saying "CAN Interface Up" or "candump" output showing data flowing.

**Successful Output Example:**

```text
(162345.123456) can0 19FFD044 [8] 01 00 00 00 00 00 00 00
(162345.123567) can0 18EAFF00 [3] EE FF 00
```

If you see streaming numbers like above, congratulations! You are connected to the nervous system of your RV.

### Troubleshooting

- **No Data**: Check your wiring. Did you swap High and Low? Is the port powered?
- **Errors**: Check 120Ω termination settings.
- See our [Troubleshooting Guide](../troubleshooting/common-issues/) for more help.
