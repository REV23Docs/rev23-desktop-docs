# How to: Recover from PC crashes

Uh-oh. It's the big one. Your PC crashed. This can either be a pretty smooth process, or a very painful and unfortunate lesson in data backup policies.

You do have a database backup? Right? We constantly stress the importance of database backups to our users. There is no cloud backup of your REV23 Desktop database. All data is stored on your main PC, hence the name 'main'.

If you have followed our advice, you have an external hard drive plugged into your main PC where the Backup Service takes a backup on a regular interval. In this case, life is easy. Install the REV23 Desktop main PC on your new or cleaned PC and restore the database backup.

What's that? You don't have a database backup? Well, things get a little hairy here and you're potentially dealing with full data loss depending on the nature of the computer crash. It is advised you take your PC to a repair place and ensure they read these instructions carefully to attempt to recover your data.

## Get Hard Drive Access

If you're able to boot into Windows, even in safe-mode, this would be great. From safe-mode, you should be able to take a backup of your database using the REV23 Desktop Control Panel. In a situation where the PC is not booting at all you will need to access the hard drive contents from a PC that is working. If the hard drive is corrupted and not spinning up at all, and you have no external backup then unfortunately, there is nothing you can do to recover your data other than attempt to pay for an expensive data recovery process that may or may not even work.

## Local Backup Location

If you were not backing your data up to an external hard drive there is still a good chance there are some database backups on your local hard drive where REV23 Desktop is installed. This is of course a dangerous backup strategy because if your hard drive is corrupted, your data and backups could also be corrupted. This is why the use of an external hard drive is so important. However, there are instances where your data is backed up there automatically and you can attempt to recover these backups.

We automatically take a backup to this path when:

The Backup Service has not been configured.
Every time you update to a new version of REV23 Desktop.
When the software is closed and a backup has not been taken for 7 days.

If you're able to access the contents of the hard drive look to the default backup location.

| OS Version| Location |
| --- | --- |
| Windows 64-bit | C:\Program Files (x86)\REV23 Desktop\Backup |
| Windows 32-bit | C:\Program Files\REV23 Desktop\Backup |

In this directory you're looking for .bak files that begin with "TattooStudio" and then a time stamp containing the year, month and date the backup was taken. Recover as many of these as you can just in case, but you'll obviously want to attempt to restore the most recent backup copy.

> If you previously used Tattoo Management Studio and upgraded to REV23 Desktop, you may also check the Program Files directory for the Tattoo Management Studio sub-folder which may also contain backups, though likely much older. 

## Data File Location

You may also attempt to access the SQL Server data files. These contain your database as it existed before the crash occurs, however re-attaching these files is not always guaranteed to work and a backup is generally the safest bet.

You can attempt to locate these files in the Microsoft SQL Server installation directory.

C:\Program Files\Microsoft SQL Server\MSSQLXX.TATTOOSTUDIO\MSSQL\DATA (where XX is the version of SQL Server).

In this directory you'll need to grab three things.

1) TattooStudio.ExpressApp.mdf (the main database file)
2) TattooStudio.ExpressApp.ldf (the log file)
3) The TattooStudio.ExpressApp.Attachments folder (attachments, including signed release forms)

If you're wanting to attempt to restore the data files you will need to contact REV23 Support at support@rev23.com, as this process will be quite a bit more involved and again, may not have a great chance of success.