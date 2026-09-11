---
title: "Credit Cards"
sidebar:
  label: "CardPointe"
  order: 1
---
REV23 Desktop processes integrated credit card payments through REV23's Fiserv partnership and the CardPointe platform. Visit the [REV23 credit-card partner page](https://www.rev23.com/partners/credit-cards/) to get started with a REV23 + Fiserv account.

## Configuring CardPointe

If you already have your merchant account and integrated terminal, you can start configuration in either of these ways:

+ Attempt to take a credit card payment before CardPointe has been configured.

+ Navigate to [**Configuration > Credit Card Terminals**](/rev23-desktop-docs/configuration/p2pe-devices/) and click **Configure CardPointe**.

In the **REV23 + Fiserv** window, enter your CardPointe Merchant ID and specify the initial terminal options. REV23 Desktop retrieves the integrated terminals registered to that merchant account.

| Option | Description |
| --- | --- |
| Allow Device Beep | If turned on, the terminal will beep to prompt the customer to insert/remove their credit card. This is disabled by default because it is **loud**.|
| Banner Display Text | The terminal can display text underneath your logo. For example, _"Welcome to Gotham City Tattoo"_. The text reappears when a transaction completes and the terminal returns to its idle screen. You may enter text or leave this blank.
| Friendly Name | By default, your terminal is identified by its serial number. You can specify a friendly name such as _Front Counter_. |

> You can change the Friendly Name, beep, and banner options later in [**Configuration > Credit Card Terminals**](/rev23-desktop-docs/configuration/p2pe-devices/).

> You can configure optional credit card settings such as surcharges and tip presets in [**Configuration > My Studio > Options > Sales & Payments**](/rev23-desktop-docs/configuration/my-studio/).


## Processing an integrated credit card

1. When taking a payment, enter the amount and click the **Credit Card** tile as the payment method.

2. Select the terminal and choose **Insert/Swipe/Tap**, **Manual**, or **Reference**.

    > If you have multiple terminals, your choice will be the saved and defaulted for the next transaction per PC.

The terminal will take over from here. Your customer will be guided through the transaction.

## Custom Terminal Logo/Theme

Logo and theme support depends on the terminal model. Contact CardPointe support at [ISVhelpdesk@fiserv.com](mailto:ISVhelpdesk@fiserv.com) and include your Merchant ID to confirm the image dimensions and theme options for your device.

## Related

- [Integrated Terminals](/rev23-desktop-docs/configuration/p2pe-devices/)
- [Credit Card Concepts](/rev23-desktop-docs/concepts/credit-cards/)
