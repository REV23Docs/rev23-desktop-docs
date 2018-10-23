# External Hard Drives

One of the most important pieces of your REV23 Desktop Server (Main PC), is the external hard drive where the Backup Service should be configured to automatically take database backups on a regular interval. We recommend at least a 1TB external hard drive.

## File System

By default, some external hard drives are pre-configured for the FAT file system. The problem with this is that FAT does not support file sizes greater than 2 GB. As your REV23 Desktop database begins to grow in size, so will your backup. Soon, you will exceed the 2GB file size limit of the FAT file system and backups will begin to fail. 

To prevent this, your external hard drive should be formatted with the NTFS file system, which supports much larger file sizes.

To format the drive as NTFS:

> CAUTION: When you format the drive, all data will be erased. If you wish to keep files that are already on the drive, you should temporarily move them to another location, format the drive, then move them back.

1. Open **File Explorer** in Windows.
2. Locate your external hard drive in the list of Devices & Drives.
3. Right click your drive, and select **Format** from the menu. 
4. Ensure that NTFS is selected as the **File System**
    - If the drive is already NTFS, there is nothing left to do.
    - If anything other than NTFS is selected, ensure that anything you want to keep from the hard drive is backed up to a different location, set the **File System**, then click the **Format** button.

If you had previously configured the Backup Service to point to a folder on this drive, you will need to either recreate the folder or reconfigure the Backup Service as this folder will no longer exist after you've formatted the drive.