---
title: "Add-on PCs"
sidebar:
  label: "Add-On PC"
  order: 1
---
An Add-on PC runs REV23 Desktop while using the database hosted by the Main PC. Use it for another workstation in the studio or for an approved remote connection.

The Add-on PC and Main PC must run the same REV23 Desktop version. Update both before trying to reconnect after an upgrade.

There is no separate trial installation for an Add-on PC.

## Windows and virtual machines

REV23 Desktop 26.1.1.1498 and later allow the Add-on PC installer to run in supported Windows environments such as Parallels and other virtual machines without the installer's former x64-only check.

Windows must still be able to run REV23 Desktop and reach the Main PC. A current Main PC remains 64-bit because it hosts SQL Server 2025.

## Connect to the Main PC

Configure [Enhanced Connections](/rev23-desktop-docs/connection-concepts/enhanced-connections/) on the Main PC and use the server name, user name, and password printed in those instructions.

Keep the Main PC awake and connected to the network. An Add-on PC cannot open the database when the Main PC, SQL Server, or network connection is unavailable.

## Change a saved connection

Use the connection manager after the database moves, the Main PC name changes, or you need another connection profile.

1. Close REV23 Desktop.
2. Hold **Shift** while opening REV23 Desktop.
3. Keep holding the key until the Connection dialog appears.
4. Update the server name, user name, or password, then save the connection.

If the shortcut does not open the dialog:

1. Close REV23 Desktop.
2. Open `C:\Program Files (x86)\REV23 Desktop` in File Explorer.
3. Run `ResetConnection.cmd`.
4. Open REV23 Desktop and enter the connection again.

Reprint the [Enhanced Connections](/rev23-desktop-docs/connection-concepts/enhanced-connections/) instructions when the connection details are no longer available.

The connection manager can also store separate profiles, such as an in-studio profile and a VPN profile. REV23 Desktop asks which profile to use when more than one is configured.

## Convert an old Main PC to an Add-on PC

Do this only after the database has been backed up, restored on the new Main PC, and tested from another workstation. See [Migrate data to a new PC](/rev23-desktop-docs/how-to/migrate-data-to-a-new-pc/) for that sequence.

After the migration is verified:

1. Uninstall REV23 Desktop from the old Main PC.
2. If the file remains, remove `C:\Program Files (x86)\REV23 Desktop\connectionStrings.config` so the old Main PC settings are not reused.
3. Install the Add-on PC package. If it is already installed, run the installer and choose **Repair**.
4. Enter the new Main PC's Enhanced Connection details.

Leave SQL Server installed until the migrated database and backups have been verified. It can be removed from the old PC later if no other application uses that SQL Server instance.
