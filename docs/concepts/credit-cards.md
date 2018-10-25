# Credit Cards

This topic focuses only on credit card payments processed through [CardConnect](https://cardconnect.com/partner/rev23). For information on non-integrated credit card payments, see the [Payments](payments.md) topic.

## Set up

See [Configuration: Credit Cards](../configuration/credit-cards.md).

## Usage

### Taking a credit card payment

A payment using your CardConnect terminal can be initiated in a few ways:

#### From a sale

Click the **Take Payment** action. When prompted for the payment type, click the **Credit Card** tile.

#### From the Payment Detail View

When taking a payment by clicking the **New** action, there will be a P2PE Device button on the **Payment Type** editor. Click it to initiate a new transaction using the CardConnect terminal.

#### From the Deposit/Credit Detail View

Same as Payment Detail View.

### Read Card Method

Before initializing the terminal, you will be prompted for the **Read Card Method**, click the appropriate tile.

- **Insert/Swipe/Tap**: Use this to read a card using the terminal, or NFC payment such as ApplePay.

- **Manual:** Type in the card number. You will also be prompted to type in the expiration date, security code and postal code.

- **Reference:** Download a previously recorded transaction using the CardConnect reference number.

### Tips

The terminal can prompt the customer to enter a tip for the eligible sales people on a sale.

To configure tipping behavior:

1. Navigate to **Configuration > My Studio**.
2. Click the **Options** tab.
3. Click the **Sales & Payments** tab.
4. 

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

You can log onto https://www.cardpointe.com to manage your account as well as see reports and manage transactions.

### Hosted Payment Page

CardConnect can set up a Hosted Payment Page for your to accept payments from a website for things such as online deposits.

These transactions can be entered into REV23 Desktop by clicking the **Reference** tile when taking a new payment and entering the transaction number.

### Related Topics
- [Configuration: Credit Cards](../configuration/credit-cards.md)
- [Configuration: P2PE Devices](../configuration/p2pe-devices.md)