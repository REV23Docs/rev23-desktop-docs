# How to: Migrate data to another PC

It's not an uncommon for a user to get a new PC or need to temporarily install REV23 Desktop on a different PC while having your primary PC repaired. This topic will go over the necessary steps move your data to another PC.

Please note, this is for moving your main PC only. This process is pretty straight forward provided you follow these directions in order.

**Start on the old PC**

1. Completely close REV23 Desktop.
2. Open the REV23 Desktop Control Panel.
3. Take a backup of your REV23 Desktop database. Save this backup to a USB drive.

**Come to the new PC**

1. Install REV23 Desktop. If it opens after the installation, close the software at this time.
2. Open the REV23 Desktop Control Panel.
3. Restore the backup file that you just created.
    > Some PCs may encounter an error when trying to restore that BatchParser.dll is missing. In this case, please download and install [Visual C++ Redistributable Packages for Visual Studio 2013](https://www.microsoft.com/en-us/download/details.aspx?id=40784). You will need to install the *vcredist_x86.exe* package.
4. Log onto your account on www.rev23.com and unlock your license from your old PC. You will need this available to activate your license on the new PC.
5. Open REV23 Desktop and activate when prompted.
6. Verify that you are able to log on and all of your data is as expected.

**Finish by returning to the old PC**

1. After verifying your data on the new PC, return to the REV23 Desktop Control Panel on the old PC.
2. Go to the Database Service.
3. Turn Off the Database Service.
4. Uninstall REV23 Desktop from the Windows Control Panel.

You have successfully moved your database to another PC.

## Add-on PCs

If you have add-on PCs you'll notice that they no longer work. You will again need to enable enhanced connections on the new PC. Once complete you will need to reset the connection on your add-on PCs to use the new connection information. See [Add-on PCs](../installation/add-on-pc.md) for instructions on resetting this connection.

If Remote Connections were enabled, you will need to make the adjustments to your router to point to your new main PC's local IP address.

## Additional Considerations

Here are some additional considerations to complete this process:

+ Don't forget to reconfigure your automatic database backups in the [Backup Service](../server-concepts/backup-service.md).
+ Install and configure necessary hardware.
