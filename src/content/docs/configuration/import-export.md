---
filename: import-export
title: Import & Export
description: Import and export LibreCoach configurations to share setups with other RV owners.
sidebar:
  order: 9
  label: Import & Export
draft: false
---

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
