---
title: "Audit Trail"
sidebar:
  label: "Audit Trail"
  order: 35
---
The Audit Trail, shown in REV23 Desktop as **Change History**, records who created or changed a record, when the change happened, and the values involved.

Each person must use their own employee account for the user name in Change History to be useful. A shared front-desk login records the shared account, not the person at the keyboard.

## Review change history

1. Select or open the record.
2. Click **Show Change History**.
3. Review the timestamp, user, operation, property, old value, and new value.

Operations can include `ObjectCreated`, `ObjectModified`, and `InitialValueAssigned`. Not every internal or calculated value is presented in the same way, so use the record itself and its related history when reconstructing a workflow.

## Auditing mode

Current installations use **Lightweight** object auditing by default. The application configuration also accepts **Full** and **CreationOnly** modes through `AuditTrailObjectAuditingMode`.

This is an advanced support setting, not a normal studio option. Changing it alters the amount and shape of future audit data and can increase database growth. Change it only when REV23 Support gives you a specific reason and value.

## Erase old change history

Audit data grows with the database. An Administrator can use **Erase Change History** under **Tools** to permanently remove entries older than a selected date.

The cutoff must be at least one year before the current date. The operation can take a long time on a large database and cannot restore the deleted history.

Run a verified [database backup](/rev23-desktop-docs/server-concepts/backup-service/) first, then perform the cleanup when the studio is not using REV23 Desktop.
