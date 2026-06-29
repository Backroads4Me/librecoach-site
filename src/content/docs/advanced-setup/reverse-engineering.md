---
filename: reverse-engineering
title: Reverse-Engineering
description: Capture and analyze RV-C messages to reverse-engineer commands and expand your system's capabilities.
sidebar:
  order: 6
  label: Reverse-Engineering
draft: false
---

LibreCoach supports many common RV devices out of the box. Most users won't need anything beyond the built-in integrations, but the recording tool can help you investigate unique components that do not appear automatically.

LibreCoach lets you explore your RV's RV-C bus directly. With the built-in recording tool, you can capture unknown or undocumented messages, decode them, and understand exactly how your RV behaves.

## The "Sandwich" Method

The **Sandwich Method** makes RV-C recordings easier to analyze. Because the RV-C bus is very active, the goal is to bracket an unknown action with known actions you can recognize later.

Perform a **Known Action** (such as toggling a light from Home Assistant), then perform the **Unknown Action** you want to capture, then repeat the known action. This creates clear landmarks in the log so the message you care about is easier to isolate.

### Step-by-Step Recording

1. **Start recording:** Navigate to your LibreCoach dashboard and toggle **ON** the **Record Unknown Commands** switch.
2. **Perform a known action:** Perform an action you know works (e.g., turn a light **ON** from Home Assistant).
3. **Perform the unknown action:** Press the physical button or trigger the device you want to capture.
4. **Perform a known action:** Perform another known action (e.g., turn that same light **OFF** from Home Assistant).
5. **Repeat as desired:** If you have more buttons to map, repeat the same known/unknown/known pattern:
   - _Known_ → _Fan High_ → _Known_
   - _Known_ → _Fan Low_ → _Known_
6. **Stop recording:** Toggle **OFF** the **Record Unknown Commands** switch.
7. **Save the log:** Press the **Save Recorded Log** button.
8. **Download the file:** Check your Home Assistant **Notifications** (bottom left sidebar) and click the link to download your `.json` log file.

### Important Notes

- **Always Running Baseline:** LibreCoach continuously tracks the steady state of your RV. The recording tool only logs changes, filtering out background noise.
- **Auto-Stop:** Recording automatically stops after **10 minutes** or **1000 messages** to protect your system. If you hit the limit, simply save the log and start a new session.

---

## Analyzing the Output

Open the `.json` file in any text editor. Each message is timestamped and structured like this:

```json
{
  "recording_start": "2026-02-26T14:31:32",
  "recording_end": "2026-02-26T14:31:41",
  "messages": [
    {
      "timestamp": "2026-02-26T14:31:34",
      "dgn": "1FEDB",
      "dgn_name": "UNKNOWN",
      "instance": 6,
      "data": "06 FF FA 05 FF 00 FF FF",
      "raw_can": "19FEDA83#097EC8FCFF0514FF"
    }
  ]
}
```
