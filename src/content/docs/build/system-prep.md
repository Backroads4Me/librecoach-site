---
filename: system-prep
title: System Prep
description: Flashing Home Assistant OS and configuring the CAN HAT drivers.
sidebar:
  order: 3
  label: System Prep
draft: false
---

### Step 1: Install Home Assistant OS

1. Install NVMe Drive in the USB NVMe Enclosure
   _(No need to screw it down for a permanent install.)_
2. Connect the USB enclosure to your PC
3. Download <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noopener">Raspberry Pi Imager</a>
4. Open Raspberry Pi Imager
5. Click **Choose Device** → Select **Raspberry Pi 5**
6. Click **Choose OS** → **Other specific-purpose OS** → **Home Automation** → **Home Assistant** → **Home Assistant OS (RPi 5)**
7. Click **Choose Storage** → Select your NVMe drive (double-check it's the correct drive!)
8. Click **Next**
9. Click **Write**
10. Click to confirm you understand and wait for completion

### Step 2: Enable CAN interface and drivers

You must edit the `config.txt` file **before** the first boot to enable the CAN HAT. This is done while the NVMe drive is still connected to your computer.
After Step 1 completes, the disk will be automatically disconnected from the PC. You need to unplug the USB cable, then reconnect it again for this step.

#### Windows Instructions

1. Open **Command Prompt** as **Administrator** then type the following commands.
2. Open `diskpart`:
   ```
   diskpart
   ```
3. List disks and identify your NVMe drive (note the size and it's almost never Disk 0):
   ```
   list disk
   ```
4. Select the correct disk (the examples below use 1):
   ```
   select disk 1
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
8. Exit `diskpart`:
   ```
   exit
   ```
9. Open config.txt (the Notepad application should open):
   ```
   notepad z:\config.txt
   ```
10. Add the following lines at the end of the file, below `[all]`:
    ```
    # --- LibreCoach: Enable Waveshare CAN HAT ---
    dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=25,spimaxfrequency=2000000
    ```
11. Save and close the file
12. Back in the command prompt, open `diskpart`:
    ```
    diskpart
    ```
13. Select the correct disk (replace X with your disk number):
    ```
    select disk 1
    ```
14. Select the partition 1 (system):
    ```
    select partition 1
    ```
15. Remove the drive letter:
    ```
    remove letter=Z
    ```
16. Exit diskpart:
    ```
    exit
    ```
17. Exit command prompt:
    ```
    exit
    ```
18. Safely eject the NVMe drive from your computer

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
