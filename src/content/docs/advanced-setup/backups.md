---
filename: backups
title: Backup Strategies
description: Protect your LibreCoach configuration with local and cloud backup solutions for Home Assistant.
sidebar:
  order: 3
draft: false
---

Your LibreCoach configuration represents hours of setup work—dashboards, automations, entity names, and customizations. A good backup strategy ensures you can recover quickly from hardware failures, failed updates, or accidental changes.

## Built-in Home Assistant Backups

Home Assistant includes a full backup system that captures everything.

### What's Included in a Backup

- Home Assistant configuration
- All add-on data (Node-RED flows, Mosquitto settings, etc.)
- Custom dashboards
- Automations and scripts
- Entity customizations
- SSL certificates
- Secrets and credentials

### Creating a Manual Backup

1. Go to **Settings** > **System** > **Backups**
2. Click **Create Backup**
3. Choose **Full backup** (recommended) or select specific items
4. Wait for the backup to complete
5. Download the backup file to your computer

:::tip Naming Convention
Use descriptive names like `librecoach-2024-01-15-before-update` so you can identify backups later.
:::

### Automatic Backups

Home Assistant can create backups automatically:

1. Go to **Settings** > **System** > **Backups**
2. Click the gear icon (settings)
3. Enable **Automatic backups**
4. Set the schedule (daily recommended)
5. Set retention (how many backups to keep)

## Cloud Backup Solutions

Storing backups only on your Pi is risky—if the hardware fails, you lose everything. Cloud backups provide off-site protection.

### Google Drive Backup (Recommended)

The **Google Drive Backup** add-on automatically uploads backups to your Google Drive.

**Installation:**

1. Go to **Settings** > **Add-ons** > **Add-on Store**
2. Search for "Google Drive Backup"
3. Click **Install**
4. Follow the authentication flow to connect your Google account
5. Configure backup schedule and retention

**Configuration Example:**

```yaml
max_backups_in_ha: 5
max_backups_in_google_drive: 10
days_between_backups: 1
backup_time_of_day: "03:00"
```

### Other Cloud Options

- **Dropbox** - Similar add-ons available
- **OneDrive** - Community add-ons exist
- **Nextcloud** - Self-hosted option
- **Samba/NFS** - Backup to a NAS on your network

## Backup Best Practices

### When to Create Backups

Create a backup before:

- Updating Home Assistant OS
- Updating add-ons
- Making major configuration changes
- Installing new integrations
- Traveling (you don't want to troubleshoot on the road)

### The 3-2-1 Rule

For critical data, follow the 3-2-1 backup rule:

- **3** copies of your data
- **2** different storage types (SD card + cloud)
- **1** copy off-site (cloud backup)

### Test Your Backups

A backup you've never tested isn't a backup—it's a hope. Periodically:

1. Download a backup
2. Note the file size (compare to previous backups)
3. Consider doing a test restore on spare hardware

## Restoring from Backup

### Full Restore (New Hardware)

If you're setting up a new Pi or replacing failed hardware:

1. Flash Home Assistant OS to your NVME
2. Boot and complete initial setup
3. Go to **Settings** > **System** > **Backups**
4. Click **Upload Backup** and select your backup file
5. Click on the uploaded backup
6. Click **Restore** > **Full backup**
7. Wait for the restore to complete (can take 10-30 minutes)
8. System will reboot with your configuration

### Partial Restore

To restore only specific components:

1. Go to **Settings** > **System** > **Backups**
2. Click on the backup
3. Click **Restore**
4. Uncheck items you don't want to restore
5. Click **Restore**

:::caution Add-on Versions
If you restore an old backup, add-on versions may be outdated. Update add-ons after restoring if needed.
:::

## Exporting Specific Configurations

Sometimes you want to save specific pieces without a full backup.

### Dashboard Export

1. Open your dashboard
2. Click **Edit** (pencil icon)
3. Click the three-dot menu > **Raw configuration editor**
4. Copy the YAML and save to a file

### Automation Export

1. Go to **Settings** > **Automations & Scenes**
2. Click on an automation
3. Click the three-dot menu > **Edit in YAML**
4. Copy the YAML

### Node-RED Flow Export

1. Open Node-RED
2. Click the menu (hamburger icon)
3. Select **Export** > **All flows**
4. Download or copy the JSON

## Troubleshooting

### Backup Fails to Complete

- Check available storage space
- Try a partial backup (exclude large add-ons)
- Check add-on logs for errors
- Restart Home Assistant and try again

### Restore Fails

- Ensure backup file isn't corrupted (re-download if from cloud)
- Check Home Assistant OS version compatibility
- Try restoring to a fresh installation
- Contact the forum for help with specific errors

### Cloud Backup Not Uploading

- Check internet connectivity
- Re-authenticate with the cloud service
- Check storage quota on cloud service
- Review add-on logs for errors

## What's Next?

With backups configured, consider:

- [Remote Access](/advanced-setup/tailscale/) - Access your backups and system from anywhere
