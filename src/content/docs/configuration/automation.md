---
filename: automation
title: Automation Examples
description: Practical Home Assistant automation examples for RVs including battery protection, travel checklists, climate control, and more.
sidebar:
  order: 4
  label: Automation
draft: false
---

One of the biggest benefits of LibreCoach is the ability to automate your rig. Instead of just pressing buttons on a screen, your RV can react to its environment, protect itself, and make your camping experience smoother.

Here are tested automation examples you can copy into your Home Assistant configuration.

## Beginner Automations

These simple automations introduce the core concepts of Triggers, Conditions, and Actions.

### 1. Bedtime Routine
**Goal**: One simultaneous action to secure the RV and get ready for sleep.
**Trigger**: A specific time (e.g., 10:30 PM) or a manual "Goodnight" button press.

```yaml
alias: "RV Bedtime Routine"
description: "Locks doors, dims lights, and closes shades for sleep."
trigger:
  - platform: time
    at: "22:30:00"
  - platform: state
    entity_id: input_button.goodnight_mode
    to: "on"
condition: []
action:
  - service: lock.lock
    target:
      entity_id: lock.entry_door
  - service: light.turn_off
    target:
      entity_id:
        - light.exterior_patio
        - light.living_room_main
  - service: light.turn_on
    target:
      entity_id: light.bedroom_accent
    data:
      brightness_pct: 20
  - service: cover.close_cover
    target:
      entity_id: cover.windshield_shade
mode: single
```

### 2. Low Water Tank Alert
**Goal**: Get notified before you run out of fresh water or overflow the grey tank.
**Trigger**: Numeric state of tank sensors.

```yaml
alias: "Alert: Water Tank Critical"
description: "Notify mobile devices when Fresh is low or Grey/Black are full."
trigger:
  - platform: numeric_state
    entity_id: sensor.fresh_water_level
    below: 10
  - platform: numeric_state
    entity_id: sensor.grey_water_level
    above: 90
  - platform: numeric_state
    entity_id: sensor.black_water_level
    above: 90
condition: []
action:
  - service: notify.mobile_app_teds_iphone
    data:
      title: "💧 Tank Alert!"
      message: >
        Attention: {{ trigger.to_state.attributes.friendly_name }} is at 
        {{ trigger.to_state.state }}%.
mode: queued
```

### 3. Battery Protection Mode
**Goal**: Prevent damaging your house batteries when not plugged in.
**Trigger**: Battery percentage drops below 50% while not on shore power.

```yaml
alias: "Protection: Low Battery Conservation"
description: "Turn off non-essential loads if battery is low and off-grid."
trigger:
  - platform: numeric_state
    entity_id: sensor.battery_state_of_charge
    below: 50
condition:
  - condition: state
    entity_id: binary_sensor.shore_power_connected
    state: "off"
action:
  - service: light.turn_off
    target:
      entity_id: all
  - service: switch.turn_off
    target:
      entity_id: switch.entertainment_center
  - service: notify.notify
    data:
      title: "🔋 Battery Low (Conservation Mode Active)"
      message: "Battery at {{ states('sensor.battery_state_of_charge') }}%. Shutting down non-essentials."
mode: single
```

## Intermediate Automations

These examples use more complex logic and multiple conditions.

### 4. Smart Climate Control (Pet Safety)
**Goal**: Ensure the RV stays safe for pets if it gets too hot.
**Trigger**: Tech cupboard or interior temperature rises.

```yaml
alias: "Climate: Pet Safety Cooling"
description: "Turn on fans and AC if temp rises too high."
trigger:
  - platform: numeric_state
    entity_id: sensor.interior_temperature
    above: 80
condition:
  - condition: state
    entity_id: input_boolean.pet_mode
    state: "on"
action:
  - service: cover.close_cover
    target:
      entity_id: cover.all_shades
  - service: fan.turn_on
    target:
      entity_id: fan.roof_vent_fan
  - service: climate.set_hvac_mode
    target:
      entity_id: climate.main_ac
    data:
      hvac_mode: "cool"
  - service: notify.notify
    data:
      message: "🐕 Pet Mode: Temperature high! AC and Fans activated."
mode: single
```

### 5. Arrival / Set Up Routine
**Goal**: Automate the setup process when you arrive at a campsite.
**Trigger**: GPS Geofence (entering a zone) or connection to a specific WiFi SSID.

```yaml
alias: "Camp: Arrival Setup"
description: "Unlock door and turn on lights when arriving at campsite."
trigger:
  - platform: zone
    entity_id: person.ted
    zone: zone.campsite_reservation
    event: enter
action:
  - service: lock.unlock
    target:
      entity_id: lock.entry_door
  - service: climate.set_temperature
    target:
      entity_id: climate.main_ac
    data:
      temperature: 72
  - condition: sun
    after: sunset
  - service: light.turn_on
    target:
      entity_id: light.step_light
mode: single
```

### 6. Generator Auto-Start (AGS)
**Goal**: Replicate proprietary AGS systems with more control.
**Trigger**: Low Battery + Quiet Hours condition.

```yaml
alias: "Power: Generator Auto-Start"
description: "Start gen if battery low, unless it's quiet hours."
trigger:
  - platform: numeric_state
    entity_id: sensor.battery_voltage
    below: 12.1
    for:
      minutes: 5
condition:
  - condition: time
    after: "08:00:00"
    before: "21:00:00"
  - condition: state
    entity_id: binary_sensor.shore_power
    state: "off"
action:
  - service: switch.turn_on
    target:
      entity_id: switch.generator_start
  - delay: "00:00:10" # Wait for crank
  - wait_for_trigger: # Confirm it started
      - platform: numeric_state
        entity_id: sensor.generator_voltage
        above: 110
    timeout: "00:01:00"
  - service: notify.notify
    data:
      message: "Generator started for charging."
mode: restart
```

## Advanced Automations

### 7. Travel Day "Ready to Flight" Check
**Goal**: A complex sequence to ensure the rig is road-ready.
**Trigger**: Manual "Prepare for Travel" button.

```yaml
alias: "Travel: Departure Sequence"
description: "Checklists, slide retraction, and validation."
trigger:
  - platform: state
    entity_id: input_button.prepare_for_travel
    to: "on"
action:
  # 1. Verification
  - if:
      - condition: state
        entity_id: binary_sensor.shore_power
        state: "on"
    then:
      - service: notify.notify
        data:
          message: "⚠️ Cannot start sequence: Shore power still connected!"
      - stop: "Shore power connected"
  
  # 2. Retract Jacks/Slides (Mock example)
  - service: cover.close_cover
    target:
      entity_id: cover.living_room_slide
  - wait_for_trigger:
      - platform: state
        entity_id: binary_sensor.slide_fully_retracted
        to: "on"
    timeout: "00:02:00"

  # 3. Final Notification
  - service: notify.mobile_app_teds_iphone
    data:
      title: "✅ Ready for Departure"
      message: "Slides in. Jacks up. Safe travels!"
```

## Sharing Your Automations

Have you created a clever automation? Share it on <a href="https://discord.gg/KKGNUHyaap" target="_blank" rel="noopener noreferrer">Discord</a> or the <a href="https://www.facebook.com/groups/880537571244339" target="_blank" rel="noopener noreferrer">Facebook Group</a>!
*   Post the YAML code (please remove any sensitive info/secrets).
*   Explain the "Why" - what problem did it solve?
*   Tell us which sensors/hardware you used.
