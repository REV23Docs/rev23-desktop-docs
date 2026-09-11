---
title: "Payouts"
sidebar:
  label: "Payouts"
  order: 25
---
Payouts record money owed to an employee as paid. REV23 Desktop supports a full check payout, a cash-only payout, a tip-only payout, and a payout for one service.

Payout actions are available from the **Payments** list. The user must have access through a management role or the additive **+ Payouts** role.

## Date ranges follow business hours

The start and end dates in check, cash, and tip payouts use the studio's opening and closing times. If a studio is open from noon until 2:00 AM, an end date includes activity through 2:00 AM the following calendar day.

Review the hours in **Configuration > My Studio** before using a date range. Incorrect hours can leave otherwise eligible work outside the payout.

## Check payout

Use **Check Payout** to clear an employee's outstanding commission and tip balances for a period.

1. Open **Payments** and click **Check Payout**.
2. Select the employee.
3. Enter a start date, end date, or both. Leave both blank to include every outstanding balance through the current date.
4. Select the payment type used for the payout and enter a reference, such as a check number.
5. Review the services, tips, deposits, invoice items, special orders, and refunds included in the window.
6. Confirm the payout.

The subtotal includes eligible unpaid commissions and tips. **Payback Amount** is deducted before REV23 Desktop calculates the final payout.

## Cash payout

Use **Cash Payout** when you pay an employee from cash collected at the studio. It includes eligible service cash and tips paid in cash for the selected employee and period.

REV23 Desktop does not assume the entire commission is available in the drawer. It separates tax and retail amounts, then assigns the cash available to services according to their share of the sale. The result is capped by the employee's remaining commission and rounded down so the payout does not require coins. Any unpaid commission remains available for a later payout.

For example, a $200 service at 50% commission has a $100 total commission. If $125 was covered by a deposit and only $75 entered the drawer as cash, the cash payout cannot simply remove the full $100 commission from that drawer.

The **Default Service Cash Payout Mode** under [My Studio payout settings](/rev23-desktop-docs/configuration/my-studio/#payouts) controls whether REV23 Desktop pays as much eligible cash as possible or keeps the cash payout proportional to the employee's commission.

## Tip payout

Use **Tip Payout** when you only want to clear tip balances.

After selecting an employee and date range, you can limit the payout to tips paid in cash or to payments recorded on the current computer. Review the listed tips before confirming the payout.

Tips assigned through [Tip Sharing](/rev23-desktop-docs/concepts/tip-sharing/) belong to the receiving employee's tip balance and are included here.

## Pay out one service

Open the service and click **Payout Employee** to clear that service's remaining employee payout without running a broader payout. Use this when a single service needs to be settled separately.

## Paybacks

A payback is money the employee owes back to the studio. It can be created when a paid commission is reversed by a return or refund, or when an advance must be recovered. Check payouts subtract outstanding paybacks from the employee's payout total.

## Payouts are not payroll

REV23 Desktop calculates commissions, tips, paybacks, and hourly information. It does not calculate payroll taxes or produce payroll checks. Use the [Commissions report](/rev23-desktop-docs/concepts/reports/#commissions-and-services) as input for your payroll or accounting process.

## Related

- [Troubleshoot missing commissions](/rev23-desktop-docs/troubleshooting/commissions/)
- [Payments](/rev23-desktop-docs/concepts/payments/)
- [Roles](/rev23-desktop-docs/security-concepts/roles/)
