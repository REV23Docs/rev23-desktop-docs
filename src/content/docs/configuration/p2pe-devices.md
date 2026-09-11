---
title: "Integrated Terminals"
sidebar:
  label: "Integrated Terminals"
  order: 7
---
Integrated Terminals are the CardPointe credit card terminals that REV23 Desktop can use to process payments through REV23's Fiserv integration. Older releases referred to these records as P2PE Devices.

Use **Configure CardPointe** to retrieve the terminals registered to your Merchant ID. You can configure several options per terminal.

## Actions

### Records Creation

**Configure CardPointe:** Retrieves the integrated terminals registered to your CardPointe Merchant ID.

## Properties

**Friendly Name:** By default, integrated terminals are identified by their serial number. If you have more than one terminal, you can assign a friendly name, such as "Left" or "Right," for easy identification. The friendly name is required and must be unique.

**HSN:** The Hardware Serial Number of the terminal. The HSN is required and must be unique.
> Note: After the Integrated Terminal record is saved, the HSN cannot be changed.

**Merchant ID:** The CardPointe Merchant ID associated with this terminal.
> Note: After the Integrated Terminal record is saved, the Merchant ID cannot be changed.

**Allow Beep:** If checked, the terminal will beep when prompting the customer to insert and remove their card.

**Banner Display Text:** If supplied, this text will be displayed on the bottom of the terminal when not in use. If blank, no text will be displayed and the terminal will only show your logo.

> After a terminal restarts, its banner may show the connection status instead of your custom text. REV23 Desktop sends the banner text again after the next completed transaction.

## Related
- [Concepts: Credit Cards](/rev23-desktop-docs/concepts/credit-cards/)
- [Configuration: Credit Cards](/rev23-desktop-docs/configuration/credit-cards/)
