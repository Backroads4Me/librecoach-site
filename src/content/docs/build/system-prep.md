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

#### Linux Instructions

1. Open a terminal and list the attached disks:
   ```
   lsblk
   ```
2. Identify your NVMe drive and boot partition (typically sdb). The boot partition is usually the small 64MB partition on the newly attached disk.
   Example Output:
   ```
   NAME   SIZE TYPE
   sda    1.8T disk
   ├─sda1 ...
   └─sda2 ...
   sdb           8:16   0 238.5G  0 disk 
   ├─sdb1        8:17   0    64M  0 part    ← ← ← BOOT partition (this is the one we need)
   ├─sdb2        8:18   0    24M  0 part /media/username/disk
   ├─sdb3        8:19   0   256M  0 part /media/username/50f54421-6e3e-4f78-9d50-a2385e5e7635
   ├─sdb4        8:20   0    24M  0 part 
   ├─sdb5        8:21   0   256M  0 part 
   ├─sdb6        8:22   0     8M  0 part 
   ├─sdb7        8:23   0    96M  0 part /media/username/hassos-overlay
   └─sdb8        8:24   0   1.3G  0 part /media/username/hassos-data
   ```
3. Create a mount location:
   ```
   sudo mkdir -p /mnt/hass-boot
   ```
4. Mount the boot partition (replace `/dev/sdb1` with the partition you identified in Step 2):
   ```
   sudo mount /dev/sdb1 /mnt/hass-boot
   ```
5. Verify that `config.txt` exists:
   ```
   ls /mnt/hass-boot
   ```
   You should see:
   ```
   config.txt
   cmdline.txt
   ```
6. Open `config.txt`:
   ```
   sudo nano /mnt/hass-boot/config.txt
   ```
7. Add the following lines at the end of the file, below `[all]`:
   ```
    # --- LibreCoach: Enable Waveshare CAN HAT ---
    dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=25,spimaxfrequency=2000000
    ```
8. Save and exit nano:
   ```text
   Ctrl+S
   Enter
   Ctrl+X
   ```
9. Flush pending writes:
   ```
   sudo sync
   ```
10. Unmount the boot partition:
    ```
    sudo umount /mnt/hass-boot
    ```
11. Safely eject the NVMe drive from your computer
