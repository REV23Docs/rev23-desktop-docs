# Credit Cards

REV23 Desktop can process credit cards with integration from CardConnect. You can click [here](https://cardconnect.com/partner/rev23) to get started with a REV23 + CardConnect account.

## Configuring CardConnect

If you already have your CardConnect account and terminal, you can configure REV23 Desktop for use with your CardConnect account. This can be accomplished one of two ways.

+ Attempting to take a credit card payment before CardConnect has been configured.

+ Navigating to [**Configuration > P2PE Devices**](\configuration\p2pe-devices) and clicking the **Configure CardConnect** action.

You will be presented with the CardConnect configuration dialog. Enter your Merchant ID and specify which options to use for your terminals.

| Option | Description |
| --- | --- |
| Allow Device Beep | If turned on, the terminal will beep to prompt the customer to insert/remove their credit card. This is disabled by default because it is **loud**.|
| Banner Display Text | Your CardConnect terminal has the ability to display text underneath your logo. For example, _"Welcome to Gotham City Tattoo"_. The text you enter here will be displayed after each activity completes and you return to the logo screen. You may enter text or leave this blank.
| Friendly Name | By default, your terminal is identified by its serial number. You can specify a friendly name such as _Front Counter_. |

> The Friendly Name, as well as changing the above options can be specified in [**Configuration > P2PE Devices**](\configuration\p2pe-devices) after your CardConnect devices have been added to REV23 Desktop using one of the methods above.

> You can configure an optional credit card options such as surcharge and tip presets in [**Configuration > My Studio > Options > Sales & Payments**](\configuration\my-studio).


## Processing a credit card with CardConnect

1. When taking a payment, enter the amount and click the **Credit Card** tile as the payment method.

2. Select which device you would like to run the transaction on and click **EMV/Swipe** or **Manual Entry**.

    > If you have multiple terminals, your choice will be the saved and defaulted for the next transaction per PC.

The terminal will take over from here. Your customer will be guided through the transaction.

## Custom Terminal Logo/Theme

Your device allows you to specify a custom logo and theme colors. Follow the requirements below and send an email to CardConnect to update your device.

### Image Requirements

Ensure that your image meets the following requirements:

Format | Device | Max Size | Dimensions (X) x (Y)
--- | --- | --- | ---
JPEG or PNG | iSC250 | 1MB | 480 x 272 pixels
JPEG or PNG | iPP350 | 1MB | 320 x 240 pixels
JPEG or PNG | iPP320 | 1MB | 128 x 64 pixels

### Theme Requirements

Attribute | Format
--- | ---
Banner/Footer Color | Hex to RGB
Banner/Footer Font Color | Hex to RGB

To add an image or modify the color of the header, footer or font, email [ISVdelivery@cardconnect.com](mailto:ISVdelivery@cardconnect.com) with the:

+ Associated merchant ID

+ Image file

+ Hex to RGB color code(s)

## Related
- [P2PE Devices](../configuration/p2pe-devices.md)