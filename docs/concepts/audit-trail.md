# Audit Trail

The Audit Trail (Change History) are records written to the database behind the scenes each time an object is created or modified. The Audit Trail records information about when, who and how an object changed.

> Because the Audit Trail records which user created or modified, if you want an accurate representation of who made what changes, it is important that each user log into their own account for daily activities. Having a generic user that all staff logs on to defeats the purpose of the Audit Trail.

## Analyze the Audit Trail

1. Select the object you wish to analyze.
2. Click the **Show Change History** action.

In the dialog that appears, you will see records with a time stamp, as well as an operation type, such as `ObjectCreated`, `ObjectModified` and `InitialValueAssigned`. If the object was changed you will also see values for `Old Value` and `New Value`, meaning what the value was, and what it was changed to.

## Erase Audit Trail

Because the Audit Trail can get quite large and inflate your database size, it's a good idea to purge it every once in a while.

The Administrator user can use the **Erase Change History** action in the Tools tab, and select a date to delete objects before that time. This process can take many hours to complete, so it is recommended you do it during off hours only.  You should also take a backup of your database before you perform this action.