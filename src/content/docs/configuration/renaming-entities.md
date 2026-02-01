---
filename: renaming-entities
title: Renaming Entities
description: Best practices for naming Home Assistant entities so dashboards, voice control, and automations work correctly.
sidebar:
  order: 2
  label: Renaming Entities
---

After [identifying your devices](/configuration/identify-devices/), renaming them with meaningful names makes your system much easier to use. Good entity names improve dashboard usability, voice control accuracy, and automation readability.

## Why Naming Matters

### Voice Control

With proper naming, you can say:
- "Turn on the patio light" instead of "Turn on switch 47"
- "Close the bedroom shade" instead of "Close cover 12"
- "What's the fresh water level?" instead of "What's sensor 3?"

### Dashboard Clarity

Good names appear in:
- Entity cards and buttons
- History graphs
- Logbook entries
- Notification messages

### Automation Readability

Compare these automation triggers:
```yaml
# Hard to understand
trigger:
  - entity_id: switch.switch_module_1_instance_47

# Easy to understand
trigger:
  - entity_id: light.patio_light
```

## Naming Conventions

### Recommended Format

Use this pattern: `{location}_{device_type}`

| Device Type | Example Name | Entity ID |
|-------------|--------------|-----------|
| Light | Galley Overhead | `light.galley_overhead` |
| Light | Bedroom Reading | `light.bedroom_reading` |
| Shade | Living Room Window | `cover.living_room_window` |
| Lock | Entry Door | `lock.entry_door` |
| Tank | Fresh Water | `sensor.fresh_water_tank` |

### Location Prefixes

Consistent location prefixes help organize entities:

| Location | Prefix | Examples |
|----------|--------|----------|
| Galley/Kitchen | `galley_` | `galley_overhead`, `galley_accent` |
| Living Room | `living_` | `living_ceiling`, `living_shade` |
| Bedroom | `bedroom_` | `bedroom_main`, `bedroom_reading` |
| Bathroom | `bath_` | `bath_vanity`, `bath_exhaust` |
| Exterior | `exterior_` | `exterior_patio`, `exterior_awning` |
| Cockpit | `cockpit_` | `cockpit_dash`, `cockpit_overhead` |

### Device Type Suffixes

For clarity, add descriptive suffixes:

| Type | Suffix Examples |
|------|-----------------|
| Lights | `_overhead`, `_accent`, `_reading`, `_task` |
| Shades | `_shade`, `_blind` |
| Vents | `_vent`, `_fan` |
| Tanks | `_tank` |

## How to Rename Entities

### Method 1: Entity Settings (Recommended)

1. Go to **Settings** > **Devices & Services**
2. Click on **Entities** tab
3. Find the entity you want to rename
4. Click on it to open the entity settings
5. Edit the **Name** field
6. Optionally edit the **Entity ID** (advanced)
7. Click **Update**

:::caution Changing Entity IDs
Changing the Entity ID (not just the name) will break any existing automations or dashboard cards that reference it. Only change Entity IDs before you've built automations.
:::

### Method 2: From the Dashboard

1. Click on any entity card
2. Click the gear icon (settings) in the popup
3. Edit the **Name** field
4. Click **Update**

### Method 3: Bulk Renaming via YAML

For many entities, you can use `customize.yaml`:

```yaml title="customize.yaml"
light.switch_module_1_instance_5:
  friendly_name: "Galley Overhead"

light.switch_module_1_instance_12:
  friendly_name: "Bedroom Main"

cover.shade_module_1_instance_3:
  friendly_name: "Living Room Shade"
```

Then add to `configuration.yaml`:
```yaml title="configuration.yaml"
homeassistant:
  customize: !include customize.yaml
```

Restart Home Assistant to apply changes.

## Organizing with Areas

Areas group entities by physical location, making them easier to find and control.

### Creating Areas

1. Go to **Settings** > **Areas & Zones**
2. Click **+ Create Area**
3. Enter a name (e.g., "Bedroom", "Galley", "Cockpit")
4. Optionally add a picture

### Assigning Entities to Areas

1. Go to **Settings** > **Devices & Services** > **Entities**
2. Click on an entity
3. Under **Area**, select the appropriate area
4. Click **Update**

### Benefits of Areas

- **Dashboard organization**: Group controls by room
- **Voice control**: "Turn off the bedroom" affects all bedroom entities
- **Scenes**: Create per-area lighting scenes
- **Energy monitoring**: Track power usage by area

## Naming for Voice Assistants

If you use Alexa or Google Assistant, follow these tips:

### Do's

- Use simple, pronounceable names
- Avoid abbreviations ("bath" is fine, "bth" is not)
- Use common words ("patio" not "exterior deck area")
- Be specific ("front porch light" vs just "porch light")

### Don'ts

- Avoid numbers in names ("Light 1")
- Avoid special characters
- Avoid very long names
- Avoid similar-sounding names ("reading light" vs "greeting light")

### Voice-Friendly Examples

| Bad Name | Better Name |
|----------|-------------|
| SW_MOD_1_47 | Patio Light |
| Bdrm Rdng Lt | Bedroom Reading Light |
| Ext. Awning LED Strip Zone 2 | Awning Light |

## Creating a Naming Spreadsheet

Before renaming, create a mapping document:

| Physical Control | Original Entity ID | New Name | Area |
|------------------|-------------------|----------|------|
| Panel switch #3 | `light.switch_5` | Galley Overhead | Galley |
| Panel switch #7 | `light.switch_12` | Bedroom Main | Bedroom |
| Shade by couch | `cover.shade_3` | Living Shade | Living Room |

This helps you:
- Track what you've renamed
- Maintain consistency
- Share your configuration with others
- Restore settings if needed

## Troubleshooting

### Entity Name Won't Change

- Ensure you clicked **Update** after editing
- Check if the entity is provided by an integration that manages names
- Try clearing your browser cache

### Voice Assistant Doesn't Recognize New Name

- Re-sync devices in your voice assistant app
- Check that the name doesn't conflict with built-in commands
- Try slightly different phrasing

### Dashboard Shows Old Name

- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Check if the card is using a hardcoded name override

## What's Next?

With your entities properly named, continue to:

- [Create custom dashboards](/user-guide/dashboards/) - Build your control interface
- [Set up automations](/user-guide/automation/) - Create smart behaviors
