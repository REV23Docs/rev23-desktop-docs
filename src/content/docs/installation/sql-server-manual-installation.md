---
title: "SQL Server Manual Installation"
sidebar:
  label: "Advanced: SQL Server Manual Installation"
  order: 2
---
Microsoft SQL Server is the database engine required by REV23 Desktop. The Main PC installer normally downloads and configures SQL Server automatically. Use these manual steps only when setup specifically directs you to do so, when REV23 Support asks you to, or when you are installing a licensed SQL Server edition instead of Express.

Do not use this procedure to install a second instance over an existing SQL Server 2014 installation. Follow the staged [SQL Server 2014 to SQL Server 2025 Express upgrade](/rev23-desktop-docs/installation/sql-server-2014-to-2025-upgrade/) instead.

:::caution
The instance name and security settings must be exact. An incorrectly configured instance will not be recognized by REV23 Desktop. If you are unsure, contact [REV23 Support](mailto:support@rev23.com) before continuing.
:::

## Downloading SQL Server

Current Main PC installations use 64-bit Microsoft SQL Server 2025. Download **SQL Server 2025 Express** from the [official Microsoft SQL Server downloads page](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).

If you own a paid SQL Server 2025 edition, use the installation media supplied for that edition and follow the same instance configuration below.

SQL Server 2025 is 64-bit. If the Main PC cannot run the 64-bit installer, it cannot host a current REV23 Desktop server installation. The [Add-on PC installer](/rev23-desktop-docs/installation/add-on-pc/) does not install SQL Server.

Run the downloaded installer and choose the option that lets you customize the installation or download the Express installation media. Open the SQL Server Installation Center from that media.

## Installing SQL Server for REV23 Desktop

1. Click **New SQL Server stand-alone installation or add features to an existing installation**.

2. Accept the license terms and continue through the setup and update checks.

3. On **Feature Selection**, select **Database Engine Services**. Other features are not required by REV23 Desktop.

4. On **Instance Configuration**, select **Named instance** and enter `TATTOOSTUDIO` in uppercase with no spaces.

5. On **Server Configuration**, configure the SQL Server Database Engine service as follows:

   - Account name: `NT AUTHORITY\SYSTEM`
   - Startup type: **Automatic**

6. On **Database Engine Configuration**, select **Mixed Mode (SQL Server authentication and Windows authentication)** and enter a strong `sa` password. Keep it secure while setup is being completed.

7. In **Specify SQL Server administrators**, add:

   - The current Windows administrator
   - The local **Administrators** group
   - `NT AUTHORITY\SYSTEM`

8. While still on **Database Engine Configuration**, open the **FILESTREAM** tab and check **Enable FILESTREAM for Transact-SQL access**.

9. Continue through the remaining pages and install SQL Server.

10. When setup completes without errors, close SQL Server Setup and run the REV23 Desktop Main PC installer again.

If SQL Server setup fails, open the setup summary log and send it to [REV23 Support](mailto:support@rev23.com) with the error shown by the REV23 Desktop installer.
