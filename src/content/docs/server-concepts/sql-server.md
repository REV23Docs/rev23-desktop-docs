---
title: "SQL Server"
sidebar:
  label: "SQL Server"
  order: 6
---
Microsoft SQL Server is the database engine on which REV23 Desktop stores and accesses data. It is installed automatically by REV23 Desktop and other than ensuring it is always running (via the Database Service, discussed later), there isn't much you need to do with it.

Current Main PC installations use SQL Server 2025 Express. Microsoft limits that edition to a 50 GB database. Existing Main PCs may retain an earlier SQL Server version, for which Express editions through SQL Server 2022 have a 10 GB limit. The Database Service in the REV23 Desktop Control Panel displays the detected SQL Server version and measures database usage against the appropriate limit.

If the Control Panel reports SQL Server 2014, use the staged [SQL Server 2014 to SQL Server 2025 Express upgrade](/rev23-desktop-docs/installation/sql-server-2014-to-2025-upgrade/). SQL Server 2014 must be upgraded to SP3 before SQL Server 2025 Setup can upgrade the instance.

The following topics discuss advanced techniques for Microsoft SQL Server. Unless you've been directed here by support, there probably isn't much to do in this topic.
