# Deposit/Credit

## Properties

**Date/Time:** The date and time the deposit/credit was created. 

**Customer:** The customer that the deposit/credit was created for. 

**Employee:** The user the deposit is intended for (who will be paid if the deposit is forfeit). This field is required for deposits only.

**Type:** The type of the Deposit/Credit Object. It's value will be either **Deposit**, **In-Store Credit**, or **Reward Credit**. This field cannot be edited.

**Amount:** The original amount of this deposit/credit. Do not edit this amount to alter the balance. Its balance should only be altered via its history.

**Memo:** An optional text field for a description of this deposit/credit and why it was created.

**Created By:** The user who created the deposit/credit.

**Expiration Date:** The date this deposit/credit is no longer valid. Once this date has elapsed, regardless of the history, its available balance will be calculated as zero.

**Available Balance:** The available balance is calculated based on the history of the deposit/credit. See [history](#deposit-credit-history) for more information.

**Redeemable at any connected studio:** For multiple studios only, if checked, the customer can redeem this deposit/credit at any of the studios. Otherwise, it will only be redeemable at the studio it was originally created in.

## Actions

### Record Edit

**Refund Deposit**

### View

**Show Payment**

### Detail View

**Sign Deposit Agreement**

### Print

**Print Deposit/Credit Receipt**
