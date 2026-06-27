---
filename: import-export
title: Import & Export
description: Import and export LibreCoach configurations to share setups with other RV owners.
sidebar:
  order: 9
  label: Import & Export
draft: false
---

LibreCoach has two types of exports: **Configuration Export** (entity names for sharing with other owners) and **AI Prompt Export** (a structured prompt for AI-assisted dashboard creation).

---

## AI Prompt Export

LibreCoach can generate a structured prompt that you give to an AI assistant (ChatGPT, Claude, etc.) to have it write a Home Assistant dashboard for your specific RV. The prompt includes your LibreCoach entity IDs, names, areas, units, and device types.

There are two variants:

- **Mushroom Cards**: uses HACS custom cards for a polished visual style. Requires the [HACS cards](/advanced-setup/hacs/) to be installed.
- **Standard Cards**: uses only native Home Assistant cards. Works out of the box with no additional installs.

### How to Export an AI Prompt

1. Open your **LibreCoach Dashboard**.
2. Navigate to the **Menu**.
3. Click **Export AI Dashboard Prompt (Mushroom Cards)** or **Export AI Dashboard Prompt (Standard Cards)**.
4. Open the Home Assistant notification and download the generated `.txt` file.
5. Attach the file to a new AI chat and ask the assistant to follow its instructions.
6. Review the resulting YAML.
7. In Home Assistant, go to **Settings → Dashboards → + Add Dashboard → New dashboard from scratch**, give it a name, and click **Create**.
8. Open the new dashboard, click **✏️ Edit**, then **⋮ → Raw configuration editor**, paste the YAML, and click **Save**.

---

## Configuration Export

LibreCoach lets you export your RV-specific configuration and share it with other owners of the same motorhome or trailer. If you've fully set up a **2024 Tiffin Allegro Bus** with all the correct entity names, another owner of the same coach can import your configuration and instantly get a matching setup.

### Exporting a Configuration

1.  Open your **LibreCoach Dashboard**.
2.  Navigate to the **Menu**.
3.  Click **Export LibreCoach Configuration**.
4.  A file named `[Manufacturer]_[Model]_[Year].json` (e.g., `Tiffin_Allegro-Bus_2024.json`) will be downloaded to your device.

The exported file contains only the entity names you've customized. Devices that haven't been renamed from their defaults are skipped.

### Importing a Configuration

:::caution
Importing a configuration will overwrite your current LibreCoach entity names.
:::

1.  Open your **LibreCoach Dashboard**.
2.  Navigate to the **Menu**.
3.  Click **Import LibreCoach Configuration**.
4.  Select a previously exported `.json` file.
5.  Click **Import**.
6.  LibreCoach will apply the entity names and send a summary notification to Home Assistant when complete. No restart is needed.
