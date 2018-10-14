# Payment Types

Payment Types are the different types of methods your studio accepts as payment for goods and services.  The properties in a Payment Type object control the behavior of REV23 Desktop when receiving or making a payment.

> The payment types that are built-in are required by the system and cannot be deleted or renamed.

## Payment Type Properties

**Name:** The name of the Payment Type. The name is required and must be unique.
> The names of built-in payment types cannot be edited and will appear disabled.

**Behavior Type:** If checked, this will be the payment type that is returned to a customer as change and used for cash payouts. Only one payment type can have this checkbox checked.

+ _Default_: The payment type has no special behavior.
+ _Cash_: The payment type will be returned to a customer as change and used for cash payouts. Only one payment type can have this behavior selected.
+ _Credit Card_: The payment type will be eligible for credit card transactions.
+ _Gift Card_: The payment type will be the payment type that is used when redeeming gift cards. Only one payment type can have this behavior selected.

**Refund Type:** The Payment Type that REV23 Desktop will attempt to use when processing a refund the payment.

+ _Default_: An attempt will be made to refund the payment as it was taken.
+ _Cash_: The payment will be refunded using cash.
+ _In-Store Credit_: The payment type will be refunded with an in-store credit.

**Accepted As Payment**
If checked, this payment type will appear in the lookup list view when creating a new payment.

**Open Cash Drawer**
If checked, the cash drawer will open (if installed) when a payment that uses this payment type is saved.
