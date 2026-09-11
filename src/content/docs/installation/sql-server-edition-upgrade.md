---
title: "SQL Server Edition Upgrade"
sidebar:
  label: "Advanced: SQL Server Edition Upgrade"
  order: 4
---
REV23 Desktop ships with Microsoft SQL Server Express, the free edition of Microsoft's SQL Server database engine. SQL Server 2025 Express has a 50 GB database limit; SQL Server 2022 Express and earlier have a 10 GB limit. The Database Service module of the REV23 Desktop Control Panel displays the installed SQL Server version and measures usage against the corresponding limit.

This page describes changing an existing SQL Server installation from Express to a paid edition. It does not describe upgrading the database-engine version. To replace SQL Server 2014 Express with SQL Server 2025 Express, follow [Upgrade SQL Server 2014 to SQL Server 2025 Express](/rev23-desktop-docs/installation/sql-server-2014-to-2025-upgrade/).

After you hit this limit (or probably soon before ideally), you will need to upgrade your edition of SQL Server from Express to a version without this limit. We invite you to email us at support@rev23.com for suggestions on this.

We should emphasize that this situation is actually pretty rare. Unless you store a lot of photos (File Attachments do not count against this limit), or are extremely high volume, you're unlikely to experience the need to upgrade SQL Server, but, it's still good to know how just in case.

If you've previously upgraded your edition of SQL Server but are moving your REV23 Desktop to a new PC or having to re-install REV23 Desktop on your current PC you can either follow the directions in the SQL Server Self Installation before installing REV23 Desktop, or you can let REV23 Desktop install SQL Server Express for you, then follow these directions. Either way works, it's up to you.

After purchasing your new SQL Server Edition, you will run the downloaded installation file.

1. In the SQL Server Installation Center, click the Maintenance section on the left and click Edition Upgrade.

2. Enter the product key provided by Microsoft.

3. When asked to specify the instance of SQL Server to upgrade, select TATTOOSTUDIO.

4. Proceed through the rest of the prompts and your SQL Server Edition Upgrade will be complete.
