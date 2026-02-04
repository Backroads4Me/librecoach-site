---
filename: backup
title: Backup
description: Protect your LibreCoach configuration with local and cloud backup solutions for Home Assistant.
sidebar:
  order: 5
draft: false
---

Your LibreCoach configuration represents hours of setup work—dashboards, automations, entity names, and customizations. A good backup strategy ensures you can recover quickly from hardware failures, failed updates, or accidental changes.

## Built-in Home Assistant Backups

Home Assistant includes a full backup system that captures everything.

### What's Included in a Backup

- Home Assistant configuration
- All app data (Node-RED flows, Mosquitto settings, etc.)
- Custom dashboards
- Automations and scripts
- Entity customizations

### Creating a Manual Backup

1. Go to **Settings** > **System** > **Backups**
2. Click **Create Backup**
3. Choose **Full backup** (recommended) or select specific items
4. Wait for the backup to complete
5. Download the backup file to your computer

### Automatic Backups

Home Assistant can create backups automatically:

1. Go to **Settings** > **System** > **Backups**
2. Click the gear icon (settings)
3. Enable **Automatic backups**
4. Set the schedule (daily recommended)
5. Set retention (how many backups to keep)

## Cloud Backup Solutions

Storing backups only on your Pi is risky—if the hardware fails, you lose everything. Cloud backups provide off-site protection.

### Cloudflare R2 (Recommended)

The <a href="https://www.home-assistant.io/integrations/cloudflare_r2" target="_blank" rel="noopener noreferrer">Cloudflare R2 integration</a> stores your backups in Cloudflare's S3-compatible object storage. R2 offers generous free tier storage with no egress fees—ideal for RVers who may need to restore from various locations.
