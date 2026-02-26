---
title: Configuration Templates
description: Learn how to share your LibreCoach configuration templates.
sidebar:
  order: 9
  label: Templates
---

## Configuration Sharing (Templates)

This feature is designed to let you share your **RV-specific configuration** (effectively a "template") with other owners of the same motorhome or trailer.

For example, if you have fully set up a **2024 Tiffin Allegro Bus** with all the correct device names and dashboard layout, you can export that configuration. Another owner of the same coach can then import it to instantly get a setup that matches their rig.

### Exporting a Template

1.  Open your **LibreCoach Dashboard**.
2.  Navigate to the **Menu** (or Settings area, depending on your layout).
3.  Click **Export Configuration**.
4.  A file named `[Manufacturer]_[Model]_[Year].json` (e.g., `Tiffin_Allegro-Bus_2024.json`) will be downloaded to your device.

This file contains the entity names you've customized. Only entities you've renamed from their LibreCoach defaults are included — devices that haven't been renamed yet are skipped.

### Importing a Template

**Warning:** Importing a template will overwrite your current LibreCoach settings.

1.  Open your **LibreCoach Dashboard**.
2.  Navigate to the **Menu** → **Import Configuration**.
3.  Select a previously exported `.json` file.
4.  Click **Import**.
5.  LibreCoach will apply the entity names from the template and send a summary notification to Home Assistant when complete. No restart is needed.

---

Looking for flow protection or beta settings? See [Configuration Settings](/advanced-setup/config-settings/).
