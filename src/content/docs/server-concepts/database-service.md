---
title: "Database Service"
sidebar:
  label: "Database Service"
  order: 2
---
The Database Service is the Microsoft SQL Server service which must be running for REV23 Desktop to establish a connection to the database. You should rarely need to do anything with the service itself. This section of the Control Panel displays the installed SQL Server version, configures Enhanced Connections, and shows a database usage meter.

## Database usage meter

The database usage meter shows the approximate size of your REV23 Desktop database relative to the limit of the installed SQL Server Express version:

- SQL Server 2025 Express: 50 GB
- SQL Server 2022 Express and earlier: 10 GB

If the meter approaches 100%, contact REV23 Support and plan an edition upgrade before the database reaches its limit. Microsoft, not REV23, sets the Express-edition limits.

## Database Service Options

**Enable Enhanced Connections:** Enables Enhanced Connections. See [Enhanced Connections](/rev23-desktop-docs/connection-concepts/enhanced-connections/).

**Allow Enhanced Connections through Windows Firewall**: A firewall is like locking the front door to your house—it helps keep intruders (in this case, hackers and malicious software) from getting in. Windows Firewall is on by default on your Windows PC, so you don't need to set it up. To allow REV23 Desktop to connect from other PCs inside your network (PCs in your shop) and outside of your network (your PC at home) you will need to configure the Windows Firewall to allow this connection. Click this link to automatically configure the Windows Firewall. If you have another firewall, such as Norton or McAfee, it will need to be configured independently. See the Enhanced Connections topic for more information.

**Test Enhanced Connections from outside of this network**: If you've configuration your network for Remote Connections, you can use this link to test if they're working from outside of your own studio.

**Reprint Enhanced Connection Instructions:** If you've enabled Enhanced Connections but have lost or misplaced your Enhanced Connection Instructions with your username and password, you can reprint them using this link.
