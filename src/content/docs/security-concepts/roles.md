---
title: "Roles"
sidebar:
  label: "Roles"
  order: 1
---
Roles control what a user can see and do in REV23 Desktop. A user needs at least one role in the studio before they can log in there.

A role can grant access to an area, allow records to be read or changed, and enable broader abilities such as printing, exporting, or backdating. The same role definitions are shared by connected studios, but a user can have different role assignments in each studio.

## Use built-in roles when they fit

REV23 Desktop includes roles for common jobs, including Manager, Cashier, Service Provider, Inventory Manager, Accountant, and Report Viewer. Assign the narrowest role that covers the person's work.

Built-in roles are maintained by REV23 Desktop. An update can replace changes made directly to them, and they cannot be renamed or deleted.

If a built-in role is close but not exact, contact [REV23 Support](mailto:support@rev23.com) before cloning it. A custom role does not automatically receive permissions for record types introduced by future updates.

## Additive roles

An additive role begins with a plus sign and adds one focused ability to the user's main role.

- **+ Discounts** allows discount actions.
- **+ Payouts** allows check, cash, tip, and individual payout actions.

For example, a Cashier who also needs to run payouts can keep the Cashier role and receive **+ Payouts**. An additive role is not a complete login role by itself.

## Combining roles

Permissions are evaluated together, and a denial can override an allowance from another role. Avoid stacking several full roles to build a job one permission at a time. Start with one full role, then add an additive role when needed.

## Can Backdate

The **Can Backdate** setting allows a user to change the **Date/Time** of a saved payment, sale/invoice, or deposit/credit. It does not unlock the rest of a saved record.

The built-in Administrator, Manager, and Accountant roles include this permission. Backdating changes the business period and date-based reports that contain the record, so grant it only to people responsible for correcting financial dates.

See the [Role reference](/rev23-desktop-docs/reference/roles/) for individual fields.
