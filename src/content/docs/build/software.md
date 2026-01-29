---
filename: software
title: Software Installation
description: Installing Home Assistant OS and configuring the CAN HAT.
sidebar:
  order: 3
  label: Software
draft: false
---

## Software Installation

### Step 1: Download Home Assistant OS

Download the official Home Assistant OS image for Raspberry Pi 5:

1. Open [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
2. Click **Choose Device** → Select **Raspberry Pi 5**
3. Click **Choose OS** → **Other specific-purpose OS** → **Home Automation** → **Home Assistant** → **Home Assistant OS (RPi 5)**
4. Click **Choose Storage** → Select your NVME drive (double-check it's the correct drive!)
5. Click **Next**
6. Click **Write**
7. Click to confirm you understand and wait for completion

### Step 2: Configure CAN HAT

You must edit `config.txt` **before** the first boot to enable the CAN HAT. This is done while the NVME drive is still connected to your computer.
After flashing completes, the disk will be automatically disconnected from the PC. You need to unplug the USB cable, then reconnect it again for this step.

#### Windows Instructions

1. Open **Command Prompt** as **Administrator** then type the following commands.
2. Open `diskpart`:
   ```
   diskpart
   ```
3. List disks and identify your NVME drive (note the size and it's almost never Disk 0):
   ```
   list disk
   ```
4. Select the correct disk (replace X with your disk number):
   ```
   select disk X
   ```
5. List partitions:
   ```
   list partition
   ```
6. Select the partition 1 (system):
   ```
   select partition 1
   ```
7. Assign a drive letter (any letter if you're using Z):
   ```
   assign letter=Z
   ```
8. Open config.txt (the Notepad application should open):
   ```
   notepad z:\config.txt
   ```
9. Add the following lines at the end of the file, below `[all]`:
   ```
   # --- LibreCoach: Enable Waveshare CAN HAT ---
   dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=25,spimaxfrequency=2000000
   ```
10. Save and close the file
11. Back in the command prompt, open `diskpart`:
    ```
    diskpart
    ```
12. Select the correct disk (replace X with your disk number):
    ```
    select disk X
    ```
13. Select the partition 1 (system):
    ```
    select partition 1
    ```
14. Remove the drive letter:
    ```
    remove letter=Z
    ```
15. Exit diskpart:
    ```
    exit
    ```
16. Exit command prompt:
    ```
    exit
    ```
17. Safely eject the NVME drive from your computer

#### Mac/Linux Instructions

> **Note:** These instructions are untested (author uses Windows). Mac/Linux users: please confirm or suggest corrections.

1. The boot partition (system) should auto-mount after flashing
2. Open a terminal and navigate to the mounted partition
3. Edit `config.txt` with any text editor:
   ```bash
   sudo nano /Volumes/hassos-boot/config.txt
   ```
   (adjust the path based on your mount point)
4. Add the following lines at the end of the file, below `[all]`:
   ```
   # --- LibreCoach: Enable Waveshare CAN HAT ---
   dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=25,spimaxfrequency=2000000
   ```
5. Save and exit (Ctrl+X, Y, Enter in nano)
6. Unmount/eject the drive safely
