---
title: "Tip Sharing"
sidebar:
  label: "Tip Sharing"
  order: 24.5
---
Tip Sharing automatically sets aside part of a customer's tip and divides it among eligible employees who are clocked in at the current studio. It is available in REV23 Desktop 23.1.1 and later.

## How Tip Sharing works

Set **Tip Share Percent** in [Configuration > My Studio](/rev23-desktop-docs/configuration/my-studio/#sales--payments-options). For example, with a 10% tip-share setting, $10 of a $100 tip is reserved for Tip Sharing.

REV23 Desktop divides that amount evenly among the eligible employees who are clocked in at the current studio. The employee receiving the original tip is excluded from their own tip-share distribution. The rest of the tip remains assigned to its original recipient.

If a payment divides a tip among multiple service providers, Tip Sharing is calculated separately for each provider's portion. A distribution smaller than one cent per eligible employee is not created.

## Make an employee eligible

Tip Sharing uses the Time Clock to determine who is working when the payment is taken.

1. Navigate to **Security > Employees** and open the employee.
2. In the employee's settings for the current studio, enable clock-in/clock-out.
3. Check **Eligible for Tip Share**.
4. Save the employee.

The employee must be clocked in at the current studio when the payment is processed. Eligibility is configured separately for each connected studio.

## Deposits

Tips collected while taking an appointment deposit can be assigned to the current employee or the appointment's employee, depending on **Deposit Credit Card Tip Prompt Mode**. Deposit tips are not automatically divided through Tip Sharing.

## Related

- [Concepts: Time Clock](/rev23-desktop-docs/concepts/time-clock/)
- [Concepts: Payments](/rev23-desktop-docs/concepts/payments/)
- [Concepts: Payouts](/rev23-desktop-docs/concepts/payouts/)
- [Configuration: My Studio](/rev23-desktop-docs/configuration/my-studio/)
