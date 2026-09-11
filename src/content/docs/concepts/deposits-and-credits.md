---
title: "Deposits & Credits"
sidebar:
  label: "Deposits & Credits"
  order: 7
---
Deposits and credits hold value on a customer's account. Both can reduce the balance of a sale, but they enter the account in different ways.

## Deposits

A deposit is value the customer paid for in advance. It can be attached to an appointment or left floating on the customer's account. Creating a deposit requires a payment.

## In-store credits

An in-store credit is value issued by the studio. Credits can be created directly, issued during a refund, or created by the [referral program](/rev23-desktop-docs/concepts/referrals/).

## Reward credits

A reward credit is created automatically when the customer reaches the configured [points](/rev23-desktop-docs/concepts/points/) threshold. It cannot be created manually.

## Balance and history

The original amount is the starting balance. Every later change is recorded as a history item, including funds applied to a sale, funds removed, a forfeiture, a refund, or a tip.

Do not edit the original amount to correct the current balance. Add the appropriate history item so the reason and amount remain visible.

An expiration date makes the available balance $0 after that date. The [Deposits & Credits report](/rev23-desktop-docs/concepts/reports/#deposits--credits) shows the balance that expired.

## Deposit policy and agreement

The **Deposit Policy** is printed on the deposit receipt. Edit the custom text whose key is `DEPOSIT_POLICY` under **Configuration > Custom Texts**.

**Sign Deposit Agreement** captures the customer's signature and stores it with the deposit. The agreement screen uses the custom text whose key is `SIGNATURE_PAD_DEPOSIT_AGREEMENT`.

If that custom text is empty, REV23 Desktop skips the agreement screen and goes directly to signature capture. This lets you collect a signature without presenting a separate acknowledgement on the pad.

## Backdate a deposit or credit

You can set **Date/Time** while creating the record. Changing it after the record has been saved requires a role with **Can Backdate**. The permission changes the date only; the balance must still be changed through history.

Backdating changes the reports and business period that contain the deposit or credit. Verify the affected reports after the correction.

## Related

- [Deposit/Credit reference](/rev23-desktop-docs/reference/deposits-credits/)
- [Deposit/Credit History Item reference](/rev23-desktop-docs/reference/deposit-credit-history-items/)
- [Apply a deposit](/rev23-desktop-docs/quick-start/apply-a-deposit/)
