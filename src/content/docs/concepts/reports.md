---
title: "Reports"
sidebar:
  label: "Reports"
  order: 30
---
Reports turn REV23 Desktop records into documents you can review, print, or export. Open **Reports** from the navigation bar, select a report, and click **Execute Report**. Double-clicking the report does the same thing.

Most reports ask for a date range or another filter before they run. A report reflects the data and filters used at that moment; it does not change the underlying records.

## Standard reports

Standard reports appear in the **Reports** list and are meant to be run directly.

### Commissions and Services

Use **Commissions** to review employee commissions, payouts, tips, and balances. It replaces the reports whose names begin with **[DO NOT USE - See Commissions Report]**.

Use **Services** for service activity and revenue. It replaces the legacy **Service Payout Detail** report.

### Payments

The **Payments** report can group its results by:

- **Payment Type:** Cash, credit card, check, or another configured payment type.
- **Data Type:** The kind of record that created the payment, such as a sale or deposit.
- **Computer Name:** The PC where the payment was recorded. Use this to reconcile separate registers or front-desk computers.

The report also identifies the REV23 Desktop user who recorded the payment when that information is available.

### Deposits & Credits

The **Deposits & Credits** report includes activity for new, used, forfeited, refunded, and expired deposits and credits. The expired section shows the balance that remained when the record expired, rather than treating it as a new payment or forfeiture.

Use **Deposits & Credits Snapshot** when you need the available balances as of the report date instead of activity over a period.

### Order List

The **Order List** report uses each inventory item's reorder settings and primary vendor. Its Vendor parameter accepts more than one vendor, so one run can produce a combined order list grouped by vendor.

## In-place reports

An in-place report belongs to a specific record and is usually generated during a workflow. Sale receipts, deposit/credit receipts, and consent forms are examples.

When a record supports it, **Show In Report** creates the report again for the selected record.

## Legacy reports

Older built-in reports and custom reports that have not been migrated appear under **Reports (Legacy)**. The navigation item stays hidden when no legacy reports exist.

## Report actions

**Execute Report:** Runs the selected report.

**Import Reports:** Adds a report file supplied by REV23 without waiting for a Desktop update.

**Show Report Designer:** Opens the selected report for editing. The designer can change calculations and data selection as well as layout. Clone or back up a report before making changes, and contact [REV23 Support](mailto:support@rev23.com) when the requested change affects report logic.
