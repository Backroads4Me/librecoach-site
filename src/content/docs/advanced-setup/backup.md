---
filename: backup
title: Backup
description: Protect your LibreCoach configuration with local and cloud backup solutions for Home Assistant.
sidebar:
  order: 5
draft: false
---

Your LibreCoach configuration represents hours of setup work — dashboards, automations, entity names, and customizations. A good backup strategy has two layers: **local backups** (built into Home Assistant) and **cloud backups** (off-site protection if the Pi dies or gets lost). Both matter in an RV.

## Cloud Options Compared

| Feature                         | Nabu Casa                 | Cloudflare R2 |
| ------------------------------- | ------------------------- | ------------- |
| **Cost**                        | $65/year (or $6.50/month) | Free          |
| **Setup Difficulty**            | Very Easy                 | Moderate      |
| **Automatic Backups**           | Yes                       | Yes           |
| **Encrypted**                   | Yes                       | Yes           |
| **Also Includes Remote Access** | Yes                       | No            |
| **Supports HA Development**     | Yes                       | No            |

## Our Recommendation

**If you're okay with a small subscription, Nabu Casa is the clear winner.** Encrypted cloud backups are included — just check a box and you're done. You also get remote access and voice assistant support in the same subscription. No buckets, no API keys, no configuration.

**Cloudflare R2 is for those who want free cloud storage** and are comfortable with a bit more setup. It's an excellent option if you already have a Cloudflare account or prefer not to pay for Nabu Casa.

### Choose Nabu Casa If:

- You want the easiest possible setup
- You also want remote access from anywhere
- You're okay with $65/year
- You want to support Home Assistant development

### Choose Cloudflare R2 If:

- You want free off-site storage
- You already use Cloudflare
- You're comfortable with API keys and cloud consoles

---

## Built-in Home Assistant Backups

Home Assistant's built-in backup system is your first line of defense. It captures everything — Node-RED flows, Mosquitto settings, dashboards, automations, and entity customizations — and stores it on the Pi.

:::caution
Local backups are lost if your Pi hard drive fails. Always pair them with a cloud solution.
:::

### Creating a Manual Backup

1. Go to **Settings** → **System** → **Backups**
2. Click **Create Backup**
3. Choose **Full backup** (recommended)
4. Wait for the backup to complete
5. Download the `.tar` file to your computer for safekeeping

### Automatic Backups

1. Go to **Settings** → **System** → **Backups**
2. Click the gear icon
3. Enable **Automatic backups**
4. Set the schedule (daily recommended)
5. Set retention (3–7 backups is a reasonable range)

---

## Nabu Casa

If you subscribe to **Home Assistant Cloud** (Nabu Casa), encrypted cloud backups are included with no additional setup. Your backups are stored on Nabu Casa's servers, encrypted with a key only you hold.

### Enable Cloud Backups

1. Subscribe at <a href="https://www.nabucasa.com/" target="_blank" rel="noopener noreferrer">nabucasa.com</a> if you haven't already
2. In Home Assistant, go to **Settings** → **Home Assistant Cloud**
3. Sign in with your Nabu Casa account
4. Under **Backups**, enable **Automatic backup to cloud**

That's it. Backups run automatically and are retrievable from the Nabu Casa dashboard or directly in Home Assistant.

_See the [Remote Access](/advanced-setup/remote-access/) page for the full list of Nabu Casa features._

---

## Cloudflare R2

The <a href="https://www.home-assistant.io/integrations/cloudflare_r2" target="_blank" rel="noopener noreferrer">Cloudflare R2 integration</a> stores your backups in Cloudflare's S3-compatible object storage. R2's free tier (10 GB) is more than enough for Home Assistant backups, and there are no egress fees — useful when restoring from an unfamiliar location.

### 1. Create an R2 Bucket

1. Log in to the <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare dashboard</a>
2. Go to **R2 Object Storage** → **Create bucket**
3. Name it something like `ha-backups` and choose a region close to you
4. Click **Create bucket**

### 2. Create API Credentials

1. In the R2 section, click **Manage R2 API tokens**
2. Click **Create API token**
3. Set permissions to **Object Read & Write** for your bucket
4. Copy the **Access Key ID** and **Secret Access Key** — you'll need these in the next step

### 3. Add the Integration in Home Assistant

1. Go to **Settings** → **Devices & Services** → **Add Integration**
2. Search for **Cloudflare R2** and select it
3. Enter your **Account ID** (found on the R2 overview page), **Access Key ID**, **Secret Access Key**, and **bucket name**
4. Click **Submit**

### 4. Enable Automatic Backups to R2

1. Go to **Settings** → **System** → **Backups**
2. Click the gear icon
3. Under backup location, select your R2 bucket
4. Enable **Automatic backups** and set your schedule
