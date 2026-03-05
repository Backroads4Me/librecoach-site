---
filename: identify-devices
title: Identifying Your Devices
description: Identify and map auto-discovered devices to their physical controls.
sidebar:
  order: 1
  label: Identify Devices
---

After installing LibreCoach, your RV-C switches will be auto-discovered and appear in Home Assistant as generic entities like `switch_1`, `switch_2`, etc. This guide helps you identify what each switch controls.

## The Challenge

LibreCoach can detect that switches exist on your RV-C network, but it has no way of knowing what those switches control. Is `switch_5` the patio light or the bedroom fan? Only you can determine that by testing.

## The Process

### Step 1: Open the Overview Dashboard

1. In Home Assistant, go to **Settings** → **Dashboards**
2. Find the **Overview** dashboard (this is where all auto-discovered switches appear)
3. Open the dashboard on your phone or tablet

### Step 2: Walk Your RV

Now comes the fun part:

1. **Take your phone/tablet with you** as you walk around your RV
2. **Physically toggle each switch** in your RV (wall switches, control panels, etc.)
3. **Watch your Home Assistant dashboard** on your phone
4. **When you see a switch turn on/off**, you've identified it!
5. **Take notes** on what each switch controls

### Example Walkthrough

```
Physical Switch          →  Home Assistant Entity  →  What It Controls
┌─────────────────────┐
│ Entry Light (ON)   │  →  switch_12 turns ON   →  "Entry Light"
└─────────────────────┘

┌─────────────────────┐
│ Bedroom Light (ON)    │  →  switch_7 turns ON    →  "Bedroom Light"
└─────────────────────┘
```

- **Go methodically**: Start at the front of your RV and work toward the back
- **Toggle twice**: Be absolutely sure of your naming
- **Unidentified Switches**: You will likely have unidentified switches. This is normal. DO NOT switch them on and off without knowing what they are. It could be master power, dump valve, ejection seat.

## Step 3: Rename Your Entities

Once you've identified a switch:

1. In Home Assistant, click on the switch name, not the toggle, and it will open
2. Click the gear icon (⚙️) in the top right
3. Change the **Name** to something meaningful like `Kitchen Light`
4. Optional, but recomended, disable "Use device area" and enter a name (e.g., “Bedroom”)
5. You can also disable unused switches that you want to hide on this same screen.

_📌 Before renaming everything by hand, check if someone has already shared a LibreCoach configuration for your RV model in the [Configuration Library](/configuration/config-library/)._

### Teach LibreCoach Which Lights Can Dim

Some of your switches may control lights that support dimming. LibreCoach can learn this automatically — you just need to show it.

Once you've identified a switch that controls a dimmable light:

1. Use the physical wall switch or dimmer in your RV to dim that light (not the Home Assistant toggle)
2. LibreCoach will see the dimming command and automatically "learn" that this light supports dimming
3. The entity in Home Assistant will update from a simple on/off switch to one capable of dimming.
4. You may need to enable the brightness controls on the buttons in your dashboard.

### Multiple switches turn on at once

- Some physical switches control more than one entity in Home Assistant. This is common with paired lights — for example, living room sconces on the driver's side and passenger's side. The wall switch turns both on simultaneously, but they are separate entities.
- You can control them individually or create a light group to manage them together.
- Settings → Devices & Services → Helpers → + Create Helper → Group → Light group, then add both entities to the group.
