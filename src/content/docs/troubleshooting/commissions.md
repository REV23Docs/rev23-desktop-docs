---
title: "Troubleshooting: Missing commissions"
sidebar:
  label: "Commissions"
  order: 1
---
Use this page when a service is missing from the Commissions report or from an employee payout.

## Check the service commission

Open the service as an Administrator and review its payout values. A service with no employee commission does not have a payout balance to report.

If the commission is zero, open the employee and check the Employee Service Type for that service type. Correct the employee's commission setup before creating more services.

Changing an Employee Service Type does not recalculate older services. To refresh an affected service, change its Employee or Service Type, then set it back to the correct value and save. Review the recalculated commission before running the report again.

## Check business hours and the date range

When **Use business hours when running reports** is enabled under **Configuration > My Studio**, REV23 Desktop uses the studio's exact opening and closing time for each selected date.

For example, if Friday's hours are noon to 10:00 PM, a service starting at 10:01 PM falls outside Friday's reporting window. This can also happen when the stored hours are wrong or a late-night service belongs to the next business period.

Correct the studio hours or the service time when either is inaccurate. Disable the setting only when the studio intends to report by calendar day instead.

Check, cash, and tip payout date ranges always use studio hours. Confirm those hours even when you are troubleshooting the payout window rather than a report.

## Check whether it was already paid

The Commissions report can show payout activity and remaining balances, but a payout window only includes amounts that are still eligible. Open the service and review its payout records when the commission exists but no balance remains.

See [Payouts](/rev23-desktop-docs/concepts/payouts/) for the records included by each payout type.
