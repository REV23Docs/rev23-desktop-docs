# Backup Service

The Backup Service is a background process that runs on your main REV23 PC and takes a backup of your database at regular intervals and saves it to a specified path, such as an external USB hard drive.

You can configure the Backup Service in the [REV23 Desktop Control Panel](control-panel.md).

> Don't have an external hard drive? Buy one from REV23 [here](https://www.rev23.com/products/hardware/western-digital-wd-my-book-3-tb-external-hard-drive/
) today.

## Backup Service Options

**Take a backup every:** How often to take a new backup.

**Clean backups after:** The period of time to retain backups. Backups older than this period will automatically be deleted.

> This setting only affects backups that were taken with the Backup Service. Other backups, such as manual backups, or backups that were taken as the result of a version upgrade are not cleaned.

**Keep at least:** The minimum number of backups to retain if auto cleaning.

**Only take backups between:** The time of day when it is acceptable to take a backup. Ideally this should be about an hour after your close time. Larger databases take longer to backup and will consume more PC resources so its best to avoid having them run in the middle of the day.

**Backup file path:** The folder where you want automatic backups to be saved. This should be an external hard drive.

## Healthy Backup Practices

Having your REV23 Desktop database backup to an external hard drive is the absolute minimum you should do. In this case, if your system crashes, or your primary hard drive fails, you will not lose your data. However, this is only part of the picture. Imagine your studio catches fire or floods. Will your external hard drive also survive? Not likely.

Weekly off-site backups are highly recommended. They're easy to do! At the end of the week, simply plug in a USB thumb drive and copy the most recent backup from your automatic backups,or take a new one and save it to this drive. Unplug the thumb drive and take it home with you. Using this method, if your studio is the victim of theft or a natural disaster, you would at most lose a weeks worth of data.