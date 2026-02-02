---
filename: markdown
title: Starlight Feature Reference
description: A comprehensive guide to all Markdown and Starlight features for LibreCoach documentation.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
lastUpdated: 2025-01-19
sidebar:
  label: Feature Reference
  order: 100
  hidden: true
  badge:
    text: Complete
    variant: success
prev:
  link: /build/overview/
  label: Getting Started
next:
  link: /advanced/
  label: Advanced Topics
banner:
  content: This page demonstrates all available Starlight features!
draft: false
---

This page serves as a live reference for all the styling and features available in **LibreCoach** documentation when using pure Markdown (`.md`) files.

> **Important:** Components like `<Tabs>`, `<Card>`, `<Steps>`, and `<FileTree>` require **MDX** (`.mdx`) files because they use JSX syntax. This guide covers everything available in standard Markdown.

---

## Typography

### Basic Text Formatting

Standard Markdown text formatting works as expected:

- **Bold text** for strong emphasis
- *Italic text* for secondary emphasis
- ***Bold and italic*** combined
- ~~Strikethrough~~ for deleted content
- `Inline code` for variables like `CAN_BUS_ID` or `rvc2hass`

### Links

External links: <a href="https://github.com/backroads4me" target="_blank" rel="noopener noreferrer">LibreCoach GitHub</a>

Internal links: [See the Getting Started guide](/start-here/what-is-librecoach/)

Links with titles: <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer" title="The open-source home automation platform">Home Assistant</a>

Autolinked URLs: https://librecoach.io

Email links: <hello@librecoach.com>

### Anchor Links

You can link directly to any heading on the page using its auto-generated ID:

- [Jump to Code Blocks](#code-blocks)
- [Jump to Tables](#tables)
- [Jump to Footnotes](#footnotes)

---

## Headings

Starlight automatically uses your page title as an H1, so start your content with H2 (`##`) headings. H2 and H3 headings appear in the table of contents by default.

### Level 3 Heading

Content under an H3 heading.

#### Level 4 Heading

Content under an H4 heading (not in ToC by default, but we enabled it in frontmatter).

##### Level 5 Heading

Content under an H5 heading.

###### Level 6 Heading

Content under an H6 heading.

---

## Asides (Callouts)

Starlight supports a custom "triple colon" syntax for callouts/admonitions. These work natively in Markdown without any imports.

### Note

Use for general information that's helpful but not critical.

:::note
This is a standard informational aside. Use it for supplementary information that enhances the main content.
:::

### Tip

Use for helpful suggestions and best practices.

:::tip
Pro tip: Use the RV-C decoder ring to identify unknown DGN values. This can save hours of debugging time!
:::

### Custom Tip Title

:::tip[Home Assistant Integration Tip]
When configuring MQTT autodiscovery, make sure your `discovery_prefix` matches what Home Assistant expects (default is `homeassistant`).
:::

### Caution

Use for warnings about things that might cause minor issues.

:::caution
Modifying CAN bus termination resistors incorrectly can cause communication issues across your entire RV network.
:::

:::caution[Voltage Warning]
Always verify your shore power voltage before connecting. Improper voltage can damage sensitive electronics.
:::

### Danger

Use for critical warnings about safety hazards or data loss.

:::danger
**HIGH VOLTAGE HAZARD**: Never work on electrical systems while connected to shore power. Disconnect and verify zero voltage before proceeding.
:::

:::danger[Critical Safety Warning]
The Victron MultiPlus can produce lethal voltages. Always follow proper lockout/tagout procedures and use appropriate PPE.
:::

### Nesting Content in Asides

Asides can contain any Markdown content:

:::note[Complex Example]
You can include:

- Bullet points
- **Bold** and *italic* text
- `inline code`
- [Links](/start-here/what-is-librecoach/)

And even code blocks:

```yaml
mqtt:
  discovery: true
  discovery_prefix: homeassistant
```
:::

---

## Lists

### Unordered Lists

- First level item
- Another first level item
  - Second level item
  - Another second level item
    - Third level item
- Back to first level

### Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task Lists

- [x] Install Raspberry Pi OS
- [x] Configure CAN interface
- [ ] Install LibreCoach software
- [ ] Configure Home Assistant integration
- [ ] Test RV-C communication

### Definition Lists

Starlight supports HTML definition lists:

<dl>
  <dt>RV-C</dt>
  <dd>Recreation Vehicle-Controller Area Network - a communication protocol for RV systems</dd>
  
  <dt>DGN</dt>
  <dd>Data Group Number - identifies the type of data in an RV-C message</dd>
  
  <dt>CAN Bus</dt>
  <dd>Controller Area Network - the physical layer used by RV-C</dd>
</dl>

---

## Code Blocks

Starlight uses Expressive Code for enhanced code block rendering with automatic copy buttons, syntax highlighting, and more.

### Basic Syntax Highlighting

```javascript
// JavaScript example
const bridge = new RVCBridge({
  canInterface: 'can0',
  mqttBroker: 'mqtt://localhost'
});

bridge.on('message', (dgn, data) => {
  console.log(`Received DGN: ${dgn}`);
});
```

### File Titles

Add a title to show the filename:

```yaml title="docker-compose.yml"
services:
  libre-coach:
    image: librecoach/bridge:latest
    container_name: rv-bridge
    restart: unless-stopped
    privileged: true
    network_mode: host
    volumes:
      - ./config:/app/config
```

### Line Highlighting

Highlight specific lines using curly braces:

```python {2,5-7} title="rvc_decoder.py"
import can

def decode_dgn(message):
    """Decode an RV-C message DGN."""
    dgn = (message.arbitration_id >> 8) & 0x1FFFF
    source = message.arbitration_id & 0xFF
    priority = (message.arbitration_id >> 26) & 0x7
    return dgn, source, priority
```

### Text Markers - Insertions and Deletions

Show added and removed code:

```diff
- old_value = config.get('legacy_setting')
+ new_value = config.get('updated_setting', default='auto')
```

Or use Expressive Code's `ins` and `del` markers:

```js ins={3} del={2}
function getValue() {
  return oldValue;
  return newValue;
}
```

### Word/Phrase Highlighting

Highlight specific words or phrases:

```bash "can0" "250000"
sudo ip link set can0 type can bitrate 250000
sudo ip link set can0 up
```

### Terminal Output

Use `bash` or `sh` for terminal commands, and show output:

```bash title="Terminal"
$ candump can0
  can0  19FFDC44   [8]  01 02 FF FF 00 00 FF FF
  can0  19FED944   [8]  C8 00 FF FF FF FF FF FF
```

### Multiple Languages

JSON configuration:

```json title="config.json"
{
  "mqtt": {
    "host": "localhost",
    "port": 1883,
    "discovery_prefix": "homeassistant"
  },
  "can": {
    "interface": "can0",
    "bitrate": 250000
  }
}
```

YAML configuration:

```yaml title="configuration.yaml"
# Home Assistant configuration
mqtt:
  sensor:
    - name: "RV House Battery Voltage"
      state_topic: "librecoach/battery/house/voltage"
      unit_of_measurement: "V"
      device_class: voltage
```

Python script:

```python title="example.py"
#!/usr/bin/env python3
"""Example RV-C message handler."""

import asyncio
from librecoach import RVCBridge

async def main():
    bridge = RVCBridge()
    await bridge.connect()
    
    async for message in bridge.messages():
        print(f"DGN: {message.dgn}, Data: {message.data.hex()}")

if __name__ == "__main__":
    asyncio.run(main())
```

Shell script:

```bash title="install.sh"
#!/bin/bash
set -e

echo "Installing LibreCoach..."
pip install librecoach --break-system-packages
sudo cp config/can0.conf /etc/network/interfaces.d/
echo "Installation complete!"
```

### Line Numbers

Expressive Code can show line numbers (configured globally in `astro.config.mjs`):

```python showLineNumbers title="numbered_example.py"
def calculate_battery_soc(voltage, min_v=10.5, max_v=14.4):
    """Calculate battery state of charge from voltage."""
    if voltage <= min_v:
        return 0
    if voltage >= max_v:
        return 100
    return int((voltage - min_v) / (max_v - min_v) * 100)
```

### Collapsible Sections

Wrap long code in a collapsible section (if enabled):

<details>
<summary>Click to expand full configuration example</summary>

```yaml title="full-config.yaml"
# Complete LibreCoach configuration
librecoach:
  can:
    interface: can0
    bitrate: 250000
    filters:
      - dgn: 0x1FFDC  # DC Source Status 1
      - dgn: 0x1FED9  # Battery Status
      
  mqtt:
    host: localhost
    port: 1883
    username: librecoach
    password: secret
    discovery_prefix: homeassistant
    
  entities:
    - type: sensor
      name: House Battery
      dgn: 0x1FED9
      instance: 1
      value_template: "{{ value.voltage }}"
      
  logging:
    level: INFO
    file: /var/log/librecoach.log
```

</details>

---

## Tables

### Basic Table

| DGN | Name | Description |
|-----|------|-------------|
| 0x1FFDC | DC Source Status 1 | Battery voltage and current |
| 0x1FED9 | Battery Status | SOC, temperature, capacity |
| 0x1FEDB | Charger Status | Charging state and current |
| 0x1FEF7 | Generator Status | Generator running state |

### Aligned Table

| Setting | Type | Default | Description |
|:--------|:----:|--------:|:------------|
| `bitrate` | int | 250000 | CAN bus bitrate |
| `interface` | string | `can0` | CAN interface name |
| `discovery` | bool | true | Enable MQTT discovery |
| `retry_count` | int | 3 | Connection retry attempts |

### Complex Table

| Component | Voltage Range | Protocol | Notes |
|-----------|--------------|----------|-------|
| House Battery | 10.5V - 14.4V | RV-C | Primary DC source |
| Chassis Battery | 10.5V - 14.4V | RV-C | Engine starting |
| Inverter/Charger | 120V AC / 12V DC | Victron VE.Bus | MultiPlus II 3000 |
| Solar Controller | 12V - 150V DC | Victron VE.Direct | MPPT 100/30 |

---

## Images

### Basic Image

![LibreCoach Architecture](../../../assets/architecture-diagram.png)

### Image with Alt Text

![RV-C network diagram showing CAN bus connections between various RV systems](../../../../public/icons/favicon-64.png)

### Linked Image

[![Home Assistant Logo](../../../../public/icons/favicon-64.png)
](https://www.home-assistant.io/)

### Image from URL

![Raspberry Pi](https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png)

---

## Blockquotes

### Simple Quote

> The best documentation is the documentation that gets read.

### Multi-line Quote

> RV-C is a communication protocol specifically designed for recreational vehicles.
> It enables different systems from different manufacturers to communicate seamlessly.
>
> — RV-C Specification Overview

### Nested Quotes

> Main point about RV automation:
>
> > "The future of RV living is intelligent, connected systems that work together."
>
> This philosophy drives LibreCoach development.

---

## Horizontal Rules

Use three or more dashes, asterisks, or underscores:

---

Content after a horizontal rule.

***

Another section break.

___

Yet another way to create a rule.

---

## Footnotes

LibreCoach supports the RV-C protocol[^1] for communication between RV systems. The protocol uses CAN bus[^2] as its physical layer.

For Home Assistant integration, we use MQTT[^3] with auto-discovery enabled.

[^1]: RV-C (Recreation Vehicle-Controller Area Network) is a protocol defined by the RVIA for standardized communication between RV components.

[^2]: CAN bus (Controller Area Network) is a robust vehicle bus standard designed for microcontrollers to communicate without a host computer.

[^3]: MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol ideal for IoT applications.

---

## HTML Elements

Starlight supports inline HTML for advanced formatting needs.

### Abbreviations

The <abbr title="Recreation Vehicle-Controller Area Network">RV-C</abbr> protocol uses <abbr title="Controller Area Network">CAN</abbr> bus for communication.

### Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, or <kbd>Cmd</kbd> + <kbd>V</kbd> on macOS.

### Superscript and Subscript

Water is H<sub>2</sub>O. The area is 100 m<sup>2</sup>.

### Marks and Highlights

The <mark>highlighted text</mark> shows the important part.

### Details/Summary (Collapsible Sections)

<details>
<summary>Click to see troubleshooting steps</summary>

1. Check CAN bus connections
2. Verify termination resistors
3. Test with `candump can0`
4. Check system logs with `journalctl -u librecoach`

</details>

<details>
<summary>Advanced configuration options</summary>

These options are for advanced users only:

| Option | Description |
|--------|-------------|
| `raw_mode` | Disable message parsing |
| `debug_can` | Log all CAN frames |
| `custom_dgn` | Add custom DGN handlers |

</details>

### Centered Content

<div align="center">

**LibreCoach**

*Open-source RV automation*

<a href="https://github.com/backroads4me" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://librecoach.io" target="_blank" rel="noopener noreferrer">Documentation</a>

</div>

---

## Special Characters

### Escaping Markdown

Use backslashes to escape Markdown characters:

\*This is not italic\*

\`This is not code\`

\[This is not a link\](https://example.com)

### Unicode Characters

Common symbols: © ® ™ € £ ¥ ± ° × ÷ → ← ↑ ↓ ✓ ✗

Arrows: ← → ↑ ↓ ↔ ↕ ⇐ ⇒ ⇑ ⇓

Math: ∞ ∑ √ ∫ ≈ ≠ ≤ ≥ ² ³

---

## Emoji

Starlight supports emoji shortcodes (if configured) and Unicode emoji:

Unicode emoji: 🚐 ⚡ 🔋 🌡️ 💡 🔌 📡 ⚙️

Common uses:
- ✅ Task complete
- ❌ Error or failure
- ⚠️ Warning
- ℹ️ Information
- 🔧 Configuration
- 📝 Documentation

---

## Math (if configured)

If you've configured math support with remark-math and rehype-katex:

Inline math: $E = mc^2$

Block math:

$$
V_{battery} = V_{cell} \times n_{series}
$$

$$
P = V \times I = I^2 \times R = \frac{V^2}{R}
$$

---

## Comments

HTML comments are not rendered but remain in the source:

<!-- This is a comment that won't appear in the rendered output -->

<!-- 
  Multi-line comment
  for documentation purposes
-->

---

## Best Practices Summary

1. **Use semantic headings** - Start with H2, maintain hierarchy
2. **Choose appropriate asides** - Match the callout type to the content urgency
3. **Add code titles** - Help readers understand the context
4. **Highlight key lines** - Draw attention to important code
5. **Use tables wisely** - Keep them readable and not too wide
6. **Include alt text** - Make images accessible
7. **Link thoughtfully** - Use descriptive link text, not "click here"

---

## Need Components?

For advanced features like:

- **Tabs** for switching between content
- **Cards** for navigation
- **Steps** for numbered procedures
- **FileTree** for directory visualization
- **Badges** inline in content
- **Icons** throughout your content