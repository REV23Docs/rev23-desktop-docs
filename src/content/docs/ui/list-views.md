---
title: "List Views"
sidebar:
  label: "List Views"
  order: 5
---
A list view shows a collection of records in rows and columns. Customers, appointments, services, payments, and inventory items all use list views, with columns and actions suited to that record type.

## Open or create a record

Double-click a row, or select it and press **Enter**, to open its detail view.

Click **New** to create a record of the type shown in the list. The arrow under **New** can create another common record type without leaving the current view.

## Select rows

Click a row to make it current. Hold **Ctrl** while clicking to select separate rows, or hold **Shift** to select a range.

Actions use the current selection. Before deleting, exporting, merging, or running another multi-record action, confirm that only the intended rows are selected.

## Sort and group

Click a column heading to sort by that column. Click it again to reverse the order.

Drag a column heading into the grouping area above the list to group matching values. You can group by more than one column and expand or collapse each group. Drag the heading back to the column row to remove that grouping.

Sorting and grouping change the view, not the stored records.

## Filter and search

Use the filter row, column filter button, or filter controls supplied by the current view to narrow the list. A date-range selector can add another filter to lists such as appointments, services, and payments.

A filter remains active until you clear it or leave the view, depending on the control. When a record appears to be missing, check the date range, current studio, column filters, and any user-specific visibility rules before assuming it was deleted.

## Change columns

Drag a heading to reorder its column. Drag the edge between two headings to resize a column.

Use the column chooser from the heading menu when you need to show an available column or hide one you do not use. REV23 Desktop saves many list-view choices for the current employee.

Click **Reset View Settings** to restore the current view's default columns, sorting, grouping, and layout. It does not change the data.

## Totals

Some lists show counts, sums, or other summaries in the footer. A summary follows the visible rows, so filtering the list also changes the displayed total.

## Refresh, print, and export

**Refresh** reloads the list from the database. Use it when another PC has changed data while the view remained open.

Printing and exporting use the visible list and its current filter, column, sorting, and grouping choices. Review the row count before producing the file or printout. These actions also require the corresponding role permission.

## Nested and lookup lists

A nested list appears inside a detail view and shows records related to the open record, such as a customer's services. Its actions apply to that relationship and can differ from the full list.

A lookup list appears when choosing a related record, such as the customer on an appointment. Selecting a row returns that record to the field instead of opening the full list workflow.

## Related

- [Detail Views](/rev23-desktop-docs/ui/detail-views/)
- [Common Actions](/rev23-desktop-docs/ui/common-actions/)
- [Reset all user-interface defaults](/rev23-desktop-docs/how-to/reset-user-interface-defaults/)
