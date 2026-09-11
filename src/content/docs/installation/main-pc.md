---
title: "Main (Server) Installer"
sidebar:
  label: "Main PC"
  order: 0
---
The main (server) installer is the main setup package for REV23 Desktop. This setup package is required to be on exactly one PC. Not zero, not two. One. You need to designate one PC in your studio (or outside of your studio) that will host the server installation. If you only have one computer, that choice is easy. If you have multiple PCs in your studio, we recommend choosing the one with the best performance. Once you have selected this PC as your REV23 Desktop server, you will need to continue using this setup package on that PC for all future updates.

In addition to REV23 Desktop, the current Main PC installer installs 64-bit Microsoft SQL Server 2025 Express, the database engine required by REV23 Desktop. SQL Server 2025 Express supports a database up to 50 GB. The first installation may take 20 minutes or more while SQL Server is downloaded and configured. Future REV23 Desktop updates do not reinstall SQL Server unless a database-engine update is required.

An existing Main PC that already has SQL Server 2014 is not automatically moved to SQL Server 2025 by a normal REV23 Desktop update. SQL Server 2014 must first be updated to SP3 and then upgraded in place. See [Upgrade SQL Server 2014 to SQL Server 2025 Express](/rev23-desktop-docs/installation/sql-server-2014-to-2025-upgrade/).

The package also installs the REV23 Desktop Control Panel and the background services that power the Virtual Receptionist, third-party integrations, and automatic database backups.
