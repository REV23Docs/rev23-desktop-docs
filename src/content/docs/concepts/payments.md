---
title: "Payments"
sidebar:
  label: "Payments"
  order: 16
---
A payment records money entering or leaving the studio. Most payments are created while collecting a sale balance, taking a deposit, issuing a refund, or paying an employee.

The Payments list is the register for those transactions. Use it to review the amount, payment type, date, user, computer, reference, and the record that caused the payment.

## Take a payment

From a sale or deposit, click **Take Payment** and choose the payment type. REV23 Desktop creates the payment and links it to that sale or deposit.

You can also create a payment from the Payments list when you need a standalone register entry. Confirm the direction, amount, payment type, and memo before saving it.

For integrated card processing, see [Credit Cards](/rev23-desktop-docs/concepts/credit-cards/).

## Void a payment

Use **Void** to correct a payment without deleting its history. For an integrated CardPointe transaction, REV23 Desktop also sends the void request to CardPointe. A transaction that can no longer be voided must be handled through the appropriate refund workflow.

## Backdate a payment

The **Date/Time** field can be set while creating a payment. Changing it after the payment has been saved requires a role with **Can Backdate**. The built-in Administrator, Manager, and Accountant roles include that permission.

Backdating changes the date range and business-hours period that contains the payment. Verify the affected register and reports after making the correction.

## Payment actions

**Check Payout:** Opens a full employee payout.

**Cash Payout:** Opens a payout limited to eligible cash.

**Tip Payout:** Opens a payout limited to tips.

**No Sale:** Opens the cash drawer, when configured, and records a $0 no-sale entry.

**Void:** Voids the selected payment.

**Open Payment Origin:** Opens the sale, deposit, or payout that created the payment. The action appears only when an origin record exists.

## Related

- [Payouts](/rev23-desktop-docs/concepts/payouts/)
- [Reports](/rev23-desktop-docs/concepts/reports/#payments)
- [Roles](/rev23-desktop-docs/security-concepts/roles/#can-backdate)
