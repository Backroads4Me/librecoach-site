---
filename: dashboards
title: Custom Dashboards
description: Build a Home Assistant dashboard for your RV by hand or with AI.
sidebar:
  order: 3
  label: Dashboards
draft: false
---

Once you've [identified your devices](/configuration/identify-devices/), it's time to build a dashboard tailored to your RV.

![LibreCoach dashboard](../../../assets/dashboards/librecoach_dashboard_light.webp)
![LibreCoach dashboard](../../../assets/dashboards/librecoach_dashboard_dark.webp)

:::note[Want to see what's possible?]
The dashboard above uses custom cards from [HACS](/advanced-setup/hacs/) that go well beyond the built-in cards. Browse the **<a href="https://github.com/Backroads4Me/librecoach-dashboard" target="_blank" rel="noopener noreferrer">LibreCoach example dashboard</a>** for inspiration. Don't worry if your first dashboard doesn't look like this. Start simple and add custom cards when you're ready.
:::

There are two ways to build a dashboard. Most people start with one and mix in the other over time:

- **[Build it by hand](#build-it-by-hand)**: drag-and-drop in the visual editor. Best for learning.
- **[Generate it with AI](#generate-it-with-ai)**: let an assistant build a full dashboard from your devices. Fastest way to a complete layout.

## Plan Your Layout

Whichever method you use, it helps to sketch out what you want first:

- **By Function**: Lights, Climate, Water, Power
- **By Location**: Bedroom, Living Area, Galley, Exterior
- **By Use Case**: Daily Controls, Monitoring, System Status

Most RV owners find a hybrid approach works best: primary tabs by function, with location-based sections within each tab.

A few things that hold up well over time:

1. **Keep it simple:** Don't overwhelm a view with too many cards.
2. **Use icons:** They're faster to recognize than text.
3. **Test on mobile:** Most RV owners use a tablet or phone.
4. **Iterate:** Your first dashboard won't be perfect; refine it as you go.

## Build It by Hand

The **visual editor** is a drag-and-drop interface built into Home Assistant. No code required. It's the best way to learn how dashboards fit together.

### 1. Create the dashboard

1. Go to **Settings** → **Dashboards**.
2. Click **+ Add Dashboard** in the bottom right.
3. Select **New dashboard from scratch**.
4. Give it a name (e.g., "My RV") and click **Create**.

### 2. Add views (tabs)

1. Open your new dashboard and click the **✏️ Edit** button.
2. Click **+ Add View**.
3. Create a view for each area, for example: Lighting, Climate, Water & Tanks, Power & Batteries.

### 3. Add cards

In each view, click **+ Add Card** and pick cards to display and control your devices. Start with the built-in cards; they're basic but functional. When you want more polish, add custom cards from [HACS](/advanced-setup/hacs/).

## Generate It with AI

LibreCoach can generate a structured prompt that you hand to an AI assistant (ChatGPT, Claude, etc.) to build a complete dashboard tailored to your RV. The prompt includes your LibreCoach entity IDs, names, areas, units, and device types.

Two variants are available:

- **Mushroom Cards**: polished card styles; requires [HACS cards](/advanced-setup/hacs/).
- **Standard Cards**: native Home Assistant cards only; no extra installs needed.

To generate a dashboard:

1. Open the **LibreCoach Dashboard** and go to the **Menu**.
2. Click **Export AI Dashboard Prompt (Mushroom Cards)** or **Export AI Dashboard Prompt (Standard Cards)**.
3. Open the Home Assistant notification and download the generated `.txt` file.
4. Attach the file to a new AI chat and ask the assistant to follow its instructions.
5. Review the YAML the assistant produces.
6. Add it to Home Assistant using the **[Raw configuration editor](#add-a-dashboard-from-yaml)** below.

See [Import & Export](/configuration/import-export/) for full details.

## Add a Dashboard from YAML

A dashboard is just YAML under the hood. When the AI assistant gives you a dashboard's YAML, you paste it in through the **Raw configuration editor**. You won't usually write this YAML yourself; it's just how a finished dashboard gets in.

1. Go to **Settings** → **Dashboards** → **+ Add Dashboard**.
2. Select **New dashboard from scratch**, give it a name, and click **Create**.
3. Open the dashboard and click **✏️ Edit**.
4. Click the **⋮** menu (top right) → **Raw configuration editor**.
5. Paste the YAML, then click **Save**.

_📌 You'll usually need to update the entity IDs in the pasted YAML to match your system._
