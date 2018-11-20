# Gift Cards

> The Gift Cards feature requires REV23 encoded gift cards or a specifically generated gift card numbers. You can acquire these from rev23.com.

## Sell a gift card
Use the **Add Gift Card** action in a sale. Take payment as usual.

## Redeem a gift card
When ready to pay, use the **Take Payment** action on a sale and click the **Gift Card** tile.

## Erase a gift card
If a used gift card is still in good condition and you wish to resell it, you can erase it.

1. Navigate to **Home > Gift Cards**.
2. Click the **Find Gift Card** action to locate the gift card.
3. Click the **Erase Gift Card Action**.

This action will allow you to create a new instance of this gift card, but does not erase the previous history.

## Ordering custom printed gift cards
You can order custom printed gift cards from our partner [here](http://www.printingplastic.com/rev23dev).

## Gift Card Lots
If you do not want to order gift cards from our gift card partner you can order Gift Card Lots directly from REV23. These lots are batches of valid gift card numbers which you can use to print your own gift cards or gift certificates.

### Bar code specifications
REV23 gift card bar codes should be printed in Code 128 format.

### Magstripe specifications

> If you're not using our partner, it is not recommended you use magnetic stripes and stick with bar codes. If you're having magnetic stripes printed from a printer, they should understand what this means. You should be able to simply show them this section and provide your gift card numbers that you acquired from REV23 and they should be able to figure it out.

REV23 gift card magnetic stripes require two tracks. Replace the following fields with your preferred data.

**Track 1:** Must start with `%B` and end with `?`  
**Track 2:** Must start with `;` and end with `?`

`%B[GIFTCARDNUMBER]^[ISSUERNAME]^9912023$[AMOUNT]$?`  
`;[GIFTCARDNUMBER]=9912023[AMOUNT]?`

> ***Do not include the `[` `]` brackets. They are used to show data field placeholders only.***

- **GIFTCARDNUMBER**: The gift card number. Numeric only.
- **ISSUERNAME**: The name of the card issuer -or- card holder. Alpha-numeric only, formatted as LASTNAME/FIRSTNAME MIDDLE, or just LASTNAME.
- **AMOUNT**: Denomination of card. Leave as 0 for custom amount, or enter a number between 1 and digits.

#### Examples of well formed data.

The below card is issued from GOTHAM CITY TATTOO with no default amount.  
`%B6023456789012345^TATTOO/GOTHAM CITY^9912023$0$?`
`;6023456789012345=99120230?`

The below card is issued from GOTHAM CITY TATTOO with a $100 amount.  
`%B6023456789012345^TATTOO/GOTHAM CITY^9912023$100$?  ;6023456789012345=9912023100?`

The below card is issued from REV23 with a $500 amount.  
`%B6023456789012345^REV23^9912023$500$?  ;6023456789012345=9912023500?`