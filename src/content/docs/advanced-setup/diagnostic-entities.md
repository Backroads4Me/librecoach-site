---
filename: diagnostic-entities
title: Diagnostic Entities
description: Why some LibreCoach entities are hidden by default, and how to name the ones your coach uses.
sidebar:
  order: 7
  label: Diagnostic Entities
draft: false
---

Some LibreCoach entities are published as **diagnostic** entities. Home Assistant treats these as technical detail rather than dashboard material, so they behave a little differently from the rest of your system.

## They're hidden, not missing

Diagnostic entities don't appear in the main controls area of a device page. Home Assistant collects them in a separate **Diagnostic** section further down, and they're easy to scroll past.

They are fully available everywhere else. You can add them to dashboards, use them in automations and templates, and view their history exactly like any other entity.

To find them, go to **Settings → Devices & Services → Entities** and search. Nothing is filtered out of that list.

## Digital inputs are named by number

Digital inputs are the clearest example. Your coach's control module reports them as numbered channels, so LibreCoach publishes them that way — `Digital Input 66`, not `Generator Running`.

This is deliberate. Which physical wire lands on which input is a decision your coach's builder made, and it differs between manufacturers, floor plans, and model years. The same input number that means one thing in your coach means something else in the next one, so LibreCoach reports the number the module actually sends rather than guessing at a label.

:::note[Naming them is yours to do]
Watch what an input does — start the generator, open a bay door, turn on the ignition — then rename the entity in Home Assistant to match. That name is specific to your coach, so it belongs in your configuration rather than in LibreCoach.
:::

To rename one, open the entity, click the gear icon, and set a new name. Consider setting the entity ID to match, so automations read clearly.

## Not every input means something

Control modules typically report every channel they have, whether or not anything is wired to it. An input that never changes state is most likely an unused channel.

There's no harm in leaving these alone. If they clutter your entity list, you can disable them individually from the entity's settings.
