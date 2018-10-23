# Deposits & Credits

REV23 combines the concepts of deposits and credits into a single object type for ease of use.

While used the same, there are slight differences in how these different types behave and how they're created, but they both have the same goal, to reduce the balance of a sale.

Each deposit/credit has a customer, as well as a starting balance.

## Credits

A credit is money that exists on a customer account that can be used towards the purchase of a tattoo, piercing or retail item. They can be created manually in the Deposits & Credits list view, or more commonly issued as part of a refund as an in-store credit.

## Deposits

Deposits behave similar to credits with one key difference, in order to be created, the customer must make a payment in exchange for the deposit. Deposits can be created manually in the Deposits & Credits list view if it is floating (it does not have an appointment associated with it), or more commonly created as part of creating an appointment.

## Reward Credits

Reward credits are the same as credits with the exception that they are only created automatically by the [Points](points.md) system. Reward credits cannot be created manually.

## Deposit/Credit History

Each deposit/credit has a list of history items (found in the History tab). Each history item has an adjustment amount which alters the Available Balance of the deposit/credit. For instance, If a deposit started at $200, a history item of *Funds Removed* with an adjustment amount of *$50*, would reduce the **Available Balance** to $150.

You can manually create history items to adjust the balance as needed, but more commonly they will be created in a few ways.

- Redeeming all or part of a deposit/credit on a sale.
- Forfeiting a deposit/credit. For example, when a customer doesn't show up for an appointment.
- Tipping an artist. The customer may choose to a remaining balance of their deposit as a tip for the artist.

## Deposit Policy

The Deposit Policy is a custom text that appears on the deposit receipt.

You can customize this text by navigating to **Configuration > Custom Texts** and altering the custom text with key name `DEPOSIT_POLICY`.

## Deposit Agreement

You can optionally require a customer to sign a deposit agreement, using the signature pad, when taking a deposit with the Sign Deposit Agreement action. The deposit agreement provides the user with your defined terms of the deposit (such as no refunds or any other policies you have) and forces them to acknowledge and agree to them, they then provide their signature. The signature is stored in the database and printed on the deposit/credit receipt.

The text which appears on the signature pad that the customer must first acknowledge is defined by custom text using the `SIGNATURE_PAD_DEPOSIT_AGREEMENT` key name.

## Related

- [Reference: Deposits/Credits](../reference/deposits-credits.md)
- [Reference: Deposit/Credit History Items](../reference/deposit-credit-history-items.md)
