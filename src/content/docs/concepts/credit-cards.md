---
title: "Credit Cards"
sidebar:
  label: "Credit Cards"
  order: 18
---
This topic focuses on integrated credit card payments through REV23's Fiserv partnership and CardPointe platform. For non-integrated credit card payments, see the [Payments](/rev23-desktop-docs/concepts/payments/) topic.

## Set up

See [Configuration: Credit Cards](/rev23-desktop-docs/configuration/credit-cards/).

## Usage

### Taking a credit card payment

A payment using a CardPointe integrated terminal can be initiated in a few ways:

#### From a sale

Click the **Take Payment** action. When prompted for the payment type, click the **Credit Card** tile.

#### From the Payment Detail View

When taking a payment by clicking the **New** action, use the integrated-terminal button on the **Payment Type** editor to initiate a transaction on the CardPointe terminal.

#### From the Deposit/Credit Detail View

Same as Payment Detail View.

#### Let the cardholder enter the amount

If an integrated credit-card payment starts with an amount of $0, the terminal asks the cardholder to enter the amount. After approval, REV23 Desktop updates the payment to the terminal's approved total. Use the normal sale or deposit balance when REV23 Desktop already knows how much is due.

### Read Card Method

Before initializing the terminal, you will be prompted for the **Read Card Method**, click the appropriate tile.

- **Insert/Swipe/Tap**: Use this to read a card using the terminal, or NFC payment such as ApplePay.

- **Manual:** Type in the card number. You will also be prompted to type in the expiration date, security code and postal code.

- **Reference:** Download a previously recorded transaction using its CardPointe reference number.

### Tips

The terminal can prompt the customer to enter a tip for the eligible sales people on a sale.

To configure tipping behavior:

1. Navigate to **Configuration > My Studio**.
2. Click the **Options** tab.
3. Click the **Sales & Payments** tab.
4. Set **Credit Card Tip Prompt Mode** to **Always**, **Services only**, or **Never**.
5. Optionally enable **Show Recommended Tip Amounts** and configure the three tip-preset percentages.

To divide part of each tip among eligible clocked-in employees, also configure [Tip Sharing](/rev23-desktop-docs/concepts/tip-sharing/).

### Surcharges

You can optionally include an added surcharge to your card payments, up to a max of 4%. When a surcharge is added, the terminal will prompt the customer to agree to the surcharge, then show them final amount. Surcharges are also applied to tips.

This interaction appears like this:

- `Confirm $100.00.`
- `Agree to 2% surcharge?`
- `Confirm new total of $102.00.`

To configure the surcharge:

1. Navigate to **Configuration > My Studio**.
2. Click the **Options** tab.
3. Click the **Sales & Payments** tab.
4. Set the **Surcharge** property.

> Each state has their own rules on whether surcharges are allowed and up to what percentage. Please check the rules in your state before configuring a surcharge to prevent fines or termination of service.

### Refunding a credit card payment

### Managing transactions on CardPointe

You can log on to [CardPointe](https://www.cardpointe.com) to manage your account, view reports, and manage transactions.

### Hosted Payment Page

Fiserv can set up a CardPointe Hosted Payment Page for accepting payments from a website, such as online deposits.

These transactions can be entered into REV23 Desktop by clicking the **Reference** tile when taking a new payment and entering the transaction number.

### Related Topics
- [Configuration: Credit Cards](/rev23-desktop-docs/configuration/credit-cards/)
- [Configuration: Integrated Terminals](/rev23-desktop-docs/configuration/p2pe-devices/)
