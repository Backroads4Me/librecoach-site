---
filename: gps
title: Automated Location Updates
description: Automatically update Home Assistant's core location, timezone, and elevation based on your GPS.
sidebar:
  order: 7
  label: GPS Updates
draft: false
---

Home Assistant’s core systems (sun, weather, timezone, elevation) rely on a fixed central location. For a typical smart home, you set this once. But because your RV moves, LibreCoach can automatically keep Home Assistant’s core location in sync with your RV’s GPS.

Using the **GPS Bridge**, LibreCoach monitors your GPS-enabled device trackers and updates Home Assistant’s core location, timezone, and elevation whenever your RV moves beyond a configured distance. This ensures that automations relying on sunset, weather, or location-based conditions always reflect your RV’s actual position on the road.

## Prerequisites

To use this feature, you must have a `device_tracker` entity that provides **GPS coordinates**.

Common GPS-enabled device trackers:

- **Home Assistant Companion App:** Installed on a phone or tablet left inside the RV.
- **Router Integrations:** Such as the Peplink integration, which pulls GPS data from the router's antennas.
- **USB GPS Dongles:** Connected directly to the Raspberry Pi running Home Assistant.

## Configuration

You can enable and configure Automated Location Updates directly from the LibreCoach Add-on Configuration tab in Home Assistant.

1. Navigate to **Settings → Add-ons → LibreCoach**.
2. Click the **Configuration** tab.
3. Toggle **Enable Automated Location Updates**.

### Primary GPS Tracker

The `entity_id` of the primary GPS-enabled device tracker LibreCoach should monitor (e.g., `device_tracker.pepwave_gps` or `device_tracker.iphone`).

## Finding Your GPS Entity ID

You can find it in one of two ways:

1. Go to **Settings → Devices & Services → Entities** and search for your tracker by name. Look for entities starting with `device_tracker.`
2. Go to **Settings → Developer Tools → States** and search for `gps` or `device_tracker`. Check that the entity has **latitude and longitude attributes**.

> **Note:** Developer Tools is only available to Home Assistant users with administrator access.

### Secondary GPS Tracker (Fallback)

_(Optional)_ The `entity_id` of a backup GPS tracker. If your Primary tracker goes offline, stops responding, or loses GPS lock, LibreCoach will automatically fall back to this secondary tracker if its location changes.

### Update Threshold (miles)

The minimum distance (in miles) the RV must move before LibreCoach updates Home Assistant’s core configuration.

Because updating Home Assistant’s core location triggers a system-wide restart of location-bound integrations (like Sun and Weather), you do not want updates for every small movement. Default: 10 miles
