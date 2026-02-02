---
filename: supported-devices
title: Supported Devices
description: RV manufacturers and device types tested and supported by LibreCoach.
sidebar:
  order: 4
draft: true
---

LibreCoach supports RVs that use the **RV-C (CAN bus) protocol**. This page documents tested manufacturers, device types, and known compatibility information.

## Supported RV Manufacturers

The following manufacturers commonly use RV-C in their coaches:

| Manufacturer | Models | Status |
|--------------|--------|--------|
| **Newmar** | Most diesel pushers | Tested |
| **Tiffin** | Most diesel pushers | Tested |
| **Entegra** | Diesel pushers | Community reported |
| **Winnebago** | Diesel pushers | Community reported |
| **Thor** | Some models | Varies by model |
| **Forest River** | Select luxury models | Community reported |

:::note Community Testing
If you've tested LibreCoach with your RV, please share your experience on the <a href="https://forum.LibreCoach.com" target="_blank" rel="noopener noreferrer">forum</a> to help expand this list.
:::

## Supported Device Types

### Fully Supported (Read + Control)

| Device Type | RV-C DGN | Status |
|-------------|----------|--------|
| **DC Dimmers/Lights** | 1FEDA (DC_DIMMER_STATUS_3) | Full control |
| **Water Pump** | 1FFB3 (WATER_PUMP_STATUS) | Full control |
| **Window Shades** | 1FEDE (WINDOW_SHADE_CONTROL_STATUS) | Full control |
| **Locks** | 1FEE5 (LOCK_STATUS) | Full control |
| **Autofill** | 1FFB1 (AUTOFILL_STATUS) | Full control |

### Read-Only (Monitoring)

| Device Type | RV-C DGN | Status |
|-------------|----------|--------|
| **Tank Levels** | 1FFB7 (TANK_STATUS) | Monitoring |
| **DC Source/Battery** | 1FFFD/1FFFC/1FFFB | Monitoring |
| **Thermostat** | 1FFE2 (THERMOSTAT_STATUS_1) | Monitoring |
| **Furnace** | 1FFE4 (FURNACE_STATUS) | Monitoring |
| **Generator** | 1FFDC (GENERATOR_STATUS) | Monitoring |
| **Inverter** | 1FFD4 (INVERTER_STATUS) | Monitoring |
| **Charger** | 1FFC7 (CHARGER_STATUS) | Monitoring |
| **AC Load** | 1FFBF (AC_LOAD_STATUS) | Monitoring |
| **ATS** | 1FFAA (ATS_STATUS) | Monitoring |
| **Floor Heat** | 1FEFC (FLOOR_HEAT_STATUS) | Monitoring |

### Planned Support

| Device Type | Status |
|-------------|--------|
| **Slides** | Planned |
| **Awnings** | Planned |
| **Leveling Jacks** | Planned |
| **HVAC Control** | Planned |

## How to Check Compatibility

### Does My RV Have RV-C?

Signs your RV likely uses RV-C:
- Has a "multiplex" or "smart" control system
- Uses a touchscreen control panel (SilverLeaf, Firefly, Spyder, etc.)
- Built after 2010 (most common in 2015+)
- Is a diesel pusher or Class A motorhome

Signs your RV probably doesn't use RV-C:
- All switches are simple toggle/rocker switches
- No central control panel or touchscreen
- Travel trailer or fifth wheel (though some high-end models do use RV-C)

### Checking for RV-C Wiring

Look for a CAN bus network:
1. Check behind your main control panel
2. Look for green and yellow twisted-pair wiring
3. Look for RJ-45 style connectors or screw terminals labeled CAN-H/CAN-L

## Manufacturer-Specific Notes

### Newmar

- Most Newmar diesel pushers from 2015+ use RV-C
- SilverLeaf multiplex system is common
- Generally excellent compatibility

### Tiffin

- Most Tiffin diesel pushers use RV-C
- Spyder controls integration
- Generally excellent compatibility

### Entegra

- Part of Thor family, many use RV-C
- Verify specific model compatibility

### Winnebago

- Diesel pushers typically use RV-C
- Gas models may use simpler systems
- Check specific model

## Contributing Compatibility Data

Help us expand this list:

1. Test LibreCoach with your RV
2. Document which devices work
3. Note your RV year, make, and model
4. Share on the <a href="https://forum.LibreCoach.com" target="_blank" rel="noopener noreferrer">forum</a>

Include:
- RV manufacturer, model, and year
- Control system type (SilverLeaf, Firefly, Spyder, etc.)
- Which devices were discovered
- Which devices responded to commands
- Any devices that didn't work

## Unsupported Systems

LibreCoach does **not** support:
- Proprietary protocols (non-RV-C)
- J1939 without RV-C extensions
- Simple analog/relay systems
- Most travel trailers and fifth wheels
