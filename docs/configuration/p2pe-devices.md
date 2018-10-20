# P2PE Devices

P2PE (Point-to-point Encryption) Devices represent the credit card terminals from CardConnect that REV23 Desktop can connect to to process credit card transactions.

Use the Configure CardConnect action to automatically retrieve your registered terminals. You can configure some options per terminal.

See: [Concepts: Credit Cards](../concepts/credit-cards.md) for more information on Credit Card Processing with CardConnect.

## P2PE Device Properties

**Friendly Name:** By default P2PE Devices are identified by their serial number. If you have more than one terminal you can assign a friendly name, such as "Left" or "Right" for easy identification. The friendly name is required must be unique.

**HSN:** The Hardware Serial Number of the terminal. The HSN is required must be unique.
> Note: After the P2PE Device record is saved, the HSN cannot be changed.

**Merchant ID:** The Merchant ID associated with this P2PE Device.
> Note: After the P2PE Device record is saved, the merchant ID cannot be changed.

**Allow Beep:** If checked, the terminal will beep when prompting the customer to insert and remove their card.

**Banner Display Text:** If supplied, this text will be displayed on the bottom of the terminal when not in use. If blank, no text will be displayed and the terminal will only show your logo.

> Banner Display Text Note: As of the time of this writing, all CardConnect P2PE Devices reboot themselves at approximately 3AM EST. When rebooted, the banner display text reverts back to its connection status (i.e. `BOLTED`). Your banner display text will be displayed again after the end of the first transaction for the day.