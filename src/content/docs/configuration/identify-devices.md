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

### Open the Overview Dashboard

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

### Multiple switches turn on at once

- RV-C zone lighting: Multiple lights are grouped into a single zone
- This is normal RV-C behavior
- You can rename the entity to reflect the zone (e.g., "Living Area Lights")

## Step 3: Rename Your Entities

Once you've identified a switch:

1. In Home Assistant, click on the switch name, not the toggle, and it will open
2. Click the gear icon (⚙️) in the top right
3. Change the **Name** to something meaningful like `Kitchen Light`
4. You can also disable switches that you want to hide on this same screen.

## Sharing Your Configuration

Once you've identified all your switches, consider sharing your configuration with the community!

### Why Share?

- **Help others**: Someone with your RV model can use your mapping
- **Build community**: Contribute to the collective knowledge
- **Get feedback**: Others might catch mistakes or suggest improvements

### How to Share

1. Export your dashboard YAML (see [Creating Dashboards](/configuration/dashboards/))
2. Share on <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">Discord</a> or the <a href="https://www.facebook.com/groups/librecoach/" target="_blank" rel="noopener noreferrer">Facebook Group</a>
3. Include:
   - Your RV make, model, and year
   - Screenshots of your dashboard
   - The YAML configuration
   - Any notes or tips

### Finding Existing Configurations

Before starting from scratch, check if someone with your RV model has already shared their configuration:

1. Check <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">Discord</a> or the <a href="https://www.facebook.com/groups/librecoach/" target="_blank" rel="noopener noreferrer">Facebook Group</a>
2. Search for your model and year
3. Download the YAML and import it into Home Assistant
