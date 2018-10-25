# How to: Restore a database backup

There are several reasons you may need to restore a backup of your REV23 Desktop database. For example, if you're moving your main REV23 Desktop to a new PC, have re-installed Microsoft Windows or you need to roll back to previous database state.

> WARNING: Restoring a database backup overwrites the current database on the PC. If you have changes to the current database that have not been backed up before you restore, those will be lost.

1. Open the [REV23 Desktop Control Panel](../server-concepts/control-panel.md).
2. Click the **Backup/Restore Database** tile.
3. Click the **Restore Database** button.
4. Select the database backup file. This can be either a zip or bak file.
5. You will be prompted to confirm that you want to restore the selected database. Once you're sure, click **Yes**.

The database backup will restore. Depending on the size of your database, this may take up to several hours.

Once the restore is completed, if necessary, the database will be updated to the current installed version of your REV23 Desktop software.