---
filename: diagnostic-entities
title: Diagnostic Entities
description: Why some LibreCoach entities are hidden by default, and how to find and name the ones your coach reports.
sidebar:
  order: 7
  label: Diagnostic Entities
draft: false
---

LibreCoach publishes some entities as **diagnostic** entities. Home Assistant treats these as technical detail rather than dashboard material, so they behave a little differently from the rest of your system.

Which ones you get — if any — depends on what your coach puts on the network. Diagnostic entities appear only when a device on your bus actually reports them, so two coaches can end up with very different lists.

## They're hidden, not missing

Diagnostic entities don't appear in the main controls area of a device page. Home Assistant collects them in a separate **Diagnostic** section further down, which is easy to scroll past.

They are fully available everywhere else. You can add them to dashboards, use them in automations and templates, and view their history exactly like any other entity.

## Finding them

Go to **Settings → Devices & Services → Entities**. The full list is long, so filter by device rather than scrolling — that's the quickest way to see what a given module reports.

LibreCoach groups diagnostic entities onto the device they describe, so the device name tells you where a reading came from:

| Device | What it holds |
| --- | --- |
| `Digital Inputs <node>` | Discrete on/off inputs from one control module |
| `Panels` | Signal strength and quality for each panel |

Other integrations, such as Victron and Hughes, place their diagnostics on the device they belong to rather than in a separate group.

If your coach has more than one module reporting inputs, you'll see a `Digital Inputs` device for each one, named for the module that sent them.

## Digital inputs arrive numbered, not named

If your coach reports digital inputs, they arrive as numbered channels — `Digital Input 66`, not `Generator Running`.

This is deliberate. Which physical wire lands on which input is a decision your coach's builder made, and it differs between manufacturers, floor plans, and model years. The same input number that means one thing in your coach means something else in the next one, so LibreCoach reports the number the module actually sends rather than guessing at a label.

:::note[Naming them is yours to do]
Watch what an input does — start the generator, open a bay door, turn on the ignition — then rename the entity in Home Assistant to match. That name is specific to your coach, so it belongs in your configuration rather than in LibreCoach.
:::

To rename one, open the entity, click the gear icon, and set a new name. Consider setting the entity ID to match, so automations read clearly.

## Not every input means something

Control modules typically report every channel they have, whether or not anything is wired to it. An input that never changes state is most likely an unused channel.

There's no harm in leaving these alone. If they clutter your entity list, you can disable them individually from the entity's settings.
