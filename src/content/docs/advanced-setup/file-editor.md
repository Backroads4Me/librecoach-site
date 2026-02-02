---
filename: file-editor
title: File Editor
description: Edit Home Assistant configuration files directly from your browser with the File Editor add-on.
sidebar:
  order: 7
draft: true
---

The File Editor add-on provides a web-based code editor for modifying Home Assistant configuration files without needing SSH or external tools.

## Why Use File Editor?

- Edit `configuration.yaml` and other config files
- Modify Node-RED settings
- View and edit automation YAML
- Quick fixes without needing a computer
- Syntax highlighting for YAML, JSON, and more

## Installation

1. Go to **Settings** > **Add-ons** > **Add-on Store**
2. Search for "File editor"
3. Click **Install**
4. Start the add-on
5. Enable **Show in sidebar** for easy access

## Basic Usage

1. Click **File editor** in the sidebar
2. Navigate to `/config/` for Home Assistant files
3. Click a file to open it
4. Make your changes
5. Click the save icon (or Ctrl+S)

## Common Files to Edit

| File | Purpose |
|------|---------|
| `configuration.yaml` | Main Home Assistant config |
| `automations.yaml` | Automation definitions |
| `scripts.yaml` | Script definitions |
| `customize.yaml` | Entity customizations |
| `secrets.yaml` | Passwords and API keys |

## Tips

- Always backup before editing critical files
- YAML is whitespace-sensitive—use spaces, not tabs
- Use the built-in YAML validator before saving
- Restart Home Assistant after editing `configuration.yaml`

## What's Next?

- [Terminal & SSH](/advanced-setup/terminal-ssh/) - Command-line access for advanced operations
