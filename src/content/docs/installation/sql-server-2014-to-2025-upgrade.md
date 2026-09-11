---
title: "Upgrade SQL Server 2014 to SQL Server 2025 Express"
sidebar:
  label: "Advanced: Upgrade SQL 2014 to 2025"
  order: 3
---
Older REV23 Desktop Main PCs may still use SQL Server 2014 Express. Updating REV23 Desktop does not automatically replace that existing database engine. Upgrading it to SQL Server 2025 Express is a two-stage process:

1. Upgrade the existing `TATTOOSTUDIO` instance to **SQL Server 2014 Service Pack 3 (SP3)**.
2. Upgrade that same instance from SQL Server 2014 SP3 to **SQL Server 2025 Express**.

Microsoft supports an in-place upgrade from SQL Server 2014 to SQL Server 2025 only when SQL Server 2014 is already at SP3 or later. SQL Server 2014 RTM, SP1, and SP2 cannot be upgraded directly to SQL Server 2025.

:::caution
This procedure changes the database engine in place and requires downtime. An in-place SQL Server upgrade cannot be rolled back by uninstalling SQL Server 2025. Do not begin without a current REV23 database backup copied off the Main PC.
:::

## Before you begin

This procedure applies only when all of the following are true:

- The current instance is **SQL Server 2014 Express**.
- The instance name is `TATTOOSTUDIO`.
- The Main PC and its SQL Server installation are 64-bit.
- The PC meets the [SQL Server 2025 hardware and software requirements](https://learn.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server-2025?view=sql-server-ver17).
- The REV23 database is smaller than the 50 GB SQL Server 2025 Express limit.

Stop and contact [REV23 Support](mailto:support@rev23.com) if the existing SQL Server installation is 32-bit, is older than SQL Server 2014, or is a paid Standard or Enterprise edition. SQL Server Setup cannot perform a 32-bit-to-64-bit in-place upgrade, and a paid edition cannot be downgraded to Express by this procedure.

In Windows, open **Settings > System > About** and check **System type**. It must report a 64-bit operating system. If SQL Server was installed manually or migrated from another PC and you are unsure whether the instance itself is 64-bit, contact REV23 Support before continuing.

Allow several hours for the maintenance window. The actual duration depends on the PC, database size, download speed, and whether Windows or SQL Server Setup requires additional restarts.

### Record and protect the current installation

1. Update REV23 Desktop to the current release on the Main PC and every Add-on PC.
2. Open the **REV23 Desktop Control Panel** and click **Database Service**. Record the SQL Server version, edition, and service-pack level shown on the tile.
3. Use **Backup/Restore Database** to [take a manual database backup](/rev23-desktop-docs/how-to/backup-your-database-manually/).
4. Copy the completed backup to an external drive or another PC. Do not keep the only pre-upgrade backup on the Main PC.
5. Close REV23 Desktop on the Main PC and every Add-on PC. Make sure no automatic or manual backup is running.
6. Install pending Windows updates, then restart the Main PC. Do not continue while Windows reports that a restart is pending.

## Stage 1: Upgrade SQL Server 2014 to SP3

Skip to [Stage 2](#stage-2-upgrade-sql-server-2014-sp3-to-2025-express) only if the Database Service tile already identifies the instance as **SQL Server 2014 Express SP3**.

1. Download [Microsoft SQL Server 2014 Service Pack 3](https://www.microsoft.com/en-us/download/details.aspx?id=57474).
2. Select `SQLServer2014SP3-KB4022619-x64-ENU.exe`. Do not select the x86 package.
3. Sign in to Windows with an administrator account, right-click the downloaded file, and select **Run as administrator**.
4. Accept the license terms and continue through the update checks.
5. When prompted to select an instance or features, select the existing `TATTOOSTUDIO` instance and its Database Engine components.
6. Start the update and wait until setup reports success for every selected component.
7. Restart the Main PC, even if setup does not request it.
8. Open the REV23 Desktop Control Panel and confirm that **Database Service** now reports **SQL Server 2014 Express SP3**. Microsoft identifies the base SP3 Database Engine build as `12.0.6024.0`.
9. Start REV23 Desktop and confirm that you can log in and open an existing customer or appointment. Then close REV23 Desktop again on every PC.
10. Take a second manual backup and copy it off the Main PC. This is the preferred rollback backup for the SQL Server 2025 stage.

Do not continue if the service-pack update failed or the Control Panel still reports RTM, SP1, or SP2. Save the SQL Server Setup summary log and contact REV23 Support.

## Stage 2: Upgrade SQL Server 2014 SP3 to 2025 Express

1. Download **SQL Server 2025 Express** from the [official Microsoft SQL Server downloads page](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
2. Run the downloader as an administrator and choose **Download Media**. Download the Express installation media, then open it and run `setup.exe`.
3. In **SQL Server Installation Center**, select **Installation**.
4. Click **Upgrade from a previous version of SQL Server**. Do not create a new instance. Microsoft describes this workflow in [Upgrade SQL Server using the Installation Wizard](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/upgrade-sql-server-using-the-installation-wizard-setup?view=sql-server-ver17).
5. Select the **Express** edition, accept the license terms, and allow setup to run its update and upgrade-rule checks.
6. On **Select Instance**, choose `TATTOOSTUDIO`. Confirm that setup identifies the existing instance as SQL Server 2014 SP3.
7. Keep the existing Database Engine features selected. SQL Server Setup does not add new features during an in-place version upgrade.
8. Review the upgrade summary carefully. It must show the existing `TATTOOSTUDIO` instance as the upgrade target.
9. Start the upgrade and leave the Main PC powered on until every selected feature reports success.
10. Restart the Main PC.

If an upgrade rule fails, stop at that screen and correct the reported issue. Do not work around a failed architecture, edition, operating-system, instance, or restart check. Microsoft documents the supported source versions and limitations in [Supported version and edition upgrades for SQL Server 2025](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/supported-version-and-edition-upgrades-2025?view=sql-server-ver17).

## Verify the completed upgrade

1. Open the REV23 Desktop Control Panel.
2. Confirm that **Database Service** is running and reports **SQL Server 2025 Express** with a 50 GB capacity meter.
3. Start REV23 Desktop on the Main PC and log in.
4. Open several existing records and confirm that recent appointments, customers, services, payments, attachments, and configuration are present.
5. Start each Add-on PC and confirm that it can connect to the Main PC.
6. Run a new manual database backup. Keep this post-upgrade backup in addition to the pre-upgrade backup until the installation has operated normally for several days.

If REV23 Desktop cannot connect after the upgrade, do not uninstall SQL Server or create another `TATTOOSTUDIO` instance. Record the error, preserve the setup logs and both backups, and contact REV23 Support.

## Rollback considerations

A backup created by SQL Server 2025 cannot be restored to SQL Server 2014. Returning to SQL Server 2014 requires removing the failed SQL Server 2025 installation, reinstalling and patching SQL Server 2014 to SP3, and restoring the backup taken before Stage 2. Because that recovery is destructive and configuration-sensitive, it should be performed with REV23 Support.

## Related

- [SQL Server Manual Installation](/rev23-desktop-docs/installation/sql-server-manual-installation/)
- [SQL Server Edition Upgrade](/rev23-desktop-docs/installation/sql-server-edition-upgrade/)
- [Database Service](/rev23-desktop-docs/server-concepts/database-service/)
- [Backup your database manually](/rev23-desktop-docs/how-to/backup-your-database-manually/)
