---
filename: digital-inputs
title: Digital Inputs
description: Switch and sensor inputs your coach's control module reports, and how to name them for what they actually do.
sidebar:
  order: 7
  label: Digital Inputs
draft: false
---

Many coaches have a control module that operates house systems — the water pump, the fresh water autofill, generator start — and it watches a set of on/off inputs to do it. If yours reports those inputs on the network, LibreCoach publishes each one as a sensor.

Whether you get any depends on your coach. Some modules report their inputs and some don't, and a module that only carries chassis signals — parking brake, check engine, washer fluid — is left alone, because those are not coach systems LibreCoach covers.

## They arrive numbered, not named

An input appears as **Input 1** through **Input 12** on a device named for the module, like `TM102A`.

The numbers match the module's wiring connector, so Input 8 is the eighth input on the harness. What LibreCoach cannot know is what your coach builder connected to it. That wiring differs between manufacturers, floor plans and model years, so the same input number means something different in the next coach.

Naming them is yours to do, and it only takes a few minutes.

:::note[Rename them for what they do]
Find the entity under **Settings → Devices & Services → Entities** — filter by the module's device name to see them together. Open one, click the gear icon, and set a name.
:::

## Working out which is which

Two ways, and the first is easier if you have it:

**Check your coach's wiring diagram.** If you have documentation for the module, its input list tells you directly.

**Watch them change.** Open the entities list, then operate something — switch the water pump on, press the generator start, turn on the fresh water fill. The input that flips is the one you just used.

Inputs commonly carry things like:

- Generator start/stop and generator run signal
- Water pump switch and pump bypass detection
- Fresh water fill switch
- Water pressure detection

## When the module stops reporting

An input reads **Unavailable** when its module stops answering — the coach is powered down, the module lost power, or it has been removed. That is the honest answer: an input that kept showing its last reading would look current when nothing is behind it.

They come back on their own once the module reports again. Nothing to reset.

## Not every input is connected

Modules report every channel they have, whether or not anything is wired to it. An input that never changes is most likely an unused channel.

Leaving them alone does no harm. If they clutter your entity list, open the entity's settings and disable it.

## Some entities are hidden on purpose

Separately, LibreCoach marks a few entities as **diagnostic** — signal strength, internal fault states, and similar technical detail. Home Assistant keeps those in a separate section at the bottom of a device page rather than with the main controls.

They still work everywhere else. You can put them on dashboards, use them in automations, and see their history like any other entity. They're just not what you want filling a device page.
