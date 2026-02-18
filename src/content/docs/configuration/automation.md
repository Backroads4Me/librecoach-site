---
filename: automation
title: Automation Examples
description: Learn how to create simple automations in Home Assistant, with a library of RV-specific examples.
sidebar:
  order: 4
  label: Automation
draft: false
---

One of the biggest benefits of LibreCoach is the ability to automate your rig. Instead of just pressing buttons on a screen, your RV can react to its environment—notifying you when tanks are full, protecting your batteries, or locking up at night.

## Creating Your First Automation

Modern Home Assistant makes this incredibly easy with natural language triggers. You don't need to write code; just tell it what you want to happen.

**Example: Notify me when the Black Tank is full.**

1. Go to **Settings** → **Automations & Scenes**.
2. Click **Create Automation** (bottom right) → **Create new automation**.
3. Fill in the sections as shown below:

### 1. When (Triggers)

_Click **Add Trigger** and search for "Numeric state"_

- **Entity**: `sensor.tank_black` (Black Tank Level)
- **Above**: `75`

### 2. Then do (Actions)

**Action 1 — Send the notification:**

_Click **Add Action** and search for "Notifications"_

- **Action**: `Send a notification` (or `notify.default_notifications`)
- **Message**: `Black tank at 75%!`

**Action 2 — Wait before it can fire again:**

_Click **Add Action** and search for "Wait for trigger"_

- **Entity**: `sensor.tank_black`
- **Below**: `10`
- **Timeout**: `24:00:00`

_(This "Wait" action prevents the automation from firing repeatedly. It waits until you've dumped the tank before it can fire again.)_

### Paste the YAML instead

If you prefer to copy-paste the complete automation instead of filling in the form:

1. Go to **Settings** → **Automations & Scenes** → **Create Automation** → **Create new automation**.
2. Click the **three-dot menu** (⋮) in the top right corner of the editor.
3. Select **Edit in YAML**.
4. Select all the existing text and replace it with the code below.
5. Click **Save** and give the automation a name.

```yaml
alias: Black tank level
description: Notifies once at 75% and waits for empty before resetting
triggers:
  - trigger: numeric_state
    entity_id:
      - sensor.tank_black
    above: 75
conditions: []
actions:
  - action: notify.default_notifications
    data:
      message: Black tank at 75%
  - wait_for_trigger:
      - trigger: numeric_state
        entity_id: sensor.tank_black
        below: 10
    timeout: "24:00:00"
mode: single
```
