---
title: "Deposit/Credit"
sidebar:
  label: "Deposits & Credits"
  order: 2
---
## Properties

**Date/Time:** The date and time assigned to the deposit/credit. After the record has been saved, changing this field requires **Can Backdate** permission.

**Customer:** The customer that the deposit/credit was created for. 

**Employee:** The user the deposit is intended for (who will be paid if the deposit is forfeit). This field is required for deposits only.

**Type:** The type of the Deposit/Credit Object. Its value will be either **Deposit**, **In-Store Credit**, or **Reward Credit**. This field cannot be edited.

**Amount:** The original amount of this deposit/credit. Do not edit this amount to alter the balance. Its balance should only be altered via its history.

**Memo:** An optional text field for a description of this deposit/credit and why it was created.

**Created By:** The user who created the deposit/credit.

**Expiration Date:** The date this deposit/credit is no longer valid. Once this date has elapsed, regardless of the history, its available balance will be calculated as zero.

**Available Balance:** The available balance is calculated based on the [deposit/credit history](/rev23-desktop-docs/reference/deposit-credit-history-items/).

**Redeemable at any connected studio:** For multiple studios only, if checked, the customer can redeem this deposit/credit at any of the studios. Otherwise, it will only be redeemable at the studio it was originally created in.

## Actions

### Record Edit

**Refund Deposit:** Starts a refund for the unused, refundable deposit balance.

### View

**Show Payment:** Opens the payment taken when the deposit was created.

### Detail View

**Sign Deposit Agreement:** Captures the customer's signature. If `SIGNATURE_PAD_DEPOSIT_AGREEMENT` is empty, REV23 Desktop skips the agreement text and opens signature capture directly.

### Print

**Print Deposit/Credit Receipt:** Prints the receipt, including the deposit policy and captured signature when available.
