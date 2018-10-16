# My Studio

Your tattoo and/or body piercing studio in REV23 Desktop is referred to as a Location. There are many options in the Location that control how you want REV23 Desktop to behave in your studio.

REV23 Desktop supports business models that have multiple studios either in close proximity or across the country. If you have multiple studios you can chose to have them each have their own separate database, or share a single database. If shared, you will have some additional elements in the user interface to allow for location aware data.

The Location Detail View (accessible for the studio you're currently logged into from the My Studio item in the Configuration navbar group) contains the basic information for your studio such as the name, phone number, address, etc... as well as a variety of options that control the behavior of REV23 Desktop.


## Main

**Name:** The name of your studio. You can use the same name for multiple studios however you should use a name that is easy for you to identify each one. If you have two studios in the same city you probably already designate them with I, II, etc... so you should do that here as well for easy identification. The name is required.

**Owner Name:** The first and last name of the owner(s) of the studio.

**Website:** Your studio's web address.

**Email:** Your studio's email address.

**Employer Identification Number:** Your federal Employer Identification Number (EIN). This property is currently for reference only and unused by REV23 Desktop, however it may be utilized in future versions.

**Logo:** Your studio's logo. Right click the image area and select "Load" from the popup menu. Your logo should be small in file size and a height/width that would look appropriate on printed materials such as receipts and aftercare instructions. To save ink your logo should have a white or transparent background.

**Street:** Your studio's street address.

**City:** The city of your studio's address.

**State/Province:** The state/province of your studio's address.

**Zip/Postal:** The zip/postal code of your studio's address.

**Country:** The country of your studio's address.

**Business Phone Number:** Your studio's phone number.

**Fax Phone Number:** Your studio's fax number if applicable.

### Business Hours

**Open On Sunday/Sunday In/Sunday Out:** Specifies if the studio is open on Sunday and if so the open and close times for that day.

**Open On Monday/Monday In/Monday Out:** Specifies if the studio is open on Monday and if so the open and close times for that day.

**Open On Tuesday/Tuesday In/Tuesday Out:** Specifies if the studio is open on Tuesday and if so the open and close times for that day.

**Open On Wednesday/Wednesday In/Wednesday Out:** Specifies if the studio is open on Wednesday and if so the open and close times for that day.

**Open On Thursday/Thursday In/Thursday Out:** Specifies if the studio is open on Thursday and if so the open and close times for that day.

**Open On Friday/Friday In/Friday Out:** Specifies if the studio is open on Friday and if so the open and close times for that day.

**Open On Saturday/Saturday In/Saturday Out:** Specifies if the studio is open on Saturday and if so the open and close times for that day.

**Use business hours when running reports:** If checked, reports will use your actual business hours when filtering start and end dates. This is useful if you close after midnight and want those services to be counted for the previous calendar date.

> Running reports with this enabled will create a very strict time frame. For example, if you run a report for a Friday and you're open 12:00 PM to 10:00 PM, it will look for things that occurred between exactly those times. If something occurred at 10:02 PM, it will not show up on the report. Alternatively with this option turned off, reports run from 12:00 AM - 11:59 PM on the specified day.

**First Day Of Week:** Specifies the first day of your studio's work week. This is used for various reporting, including dynamic commissions.

## Appointment Options

**Enable Appointments:** If checked, the appointment scheduler will be available as a feature in REV23 Desktop. If your studio does walk-in piercings only for example, you may wish to disable this feature.

**Scheduler First Day Of Week:** This setting controls which day of the week appears on the scheduler when in week/work week mode. You can select Sunday through Saturday or System, which will use your settings from Microsoft Windows.

**Show off-hours watermark on scheduler:** If checked, the scheduler will show a water mark that says "Closed" over time cells where the studio is closed, or "Off" when viewing the scheduler by Resource and the time cell is the over the user's off hours. If unchecked, the time cells where you're not open are still shaded darker indicating business hours, however this is not always apparent to all users.

**Show confirmation when dragging and dropping an appointment:** If checked, you will be prompted to confirm the change when dragging and dropping an appointment between time cells on the scheduler.

**Show display pictures on scheduler:** If checked, display picture for each user will appear on the scheduler header.

**Enable Deposit Suggestions:** If enabled, deposit suggestions will appear when scheduling an appointment for a customers. If the customer already has an available balance with the artist being scheduled, you will not be prompted for a deposit.

## Deposit & Credit Options

**Require Customer's Signature for Deposits:** If checked, a customer will be required to sign the signature pad accepting your deposit agreement in order to place a deposit. This can be overridden for each deposit taken.

**Deposit/Credit Receipt:** The report definition of the receipt you'd like to use when printing a deposit/credit receipt for the customer.

**Deposit/Credit Printing Prompt:** The behavior that will be used when REV23 Desktop would prompt you to print a deposit/credit receipt after it has been saved.

+ *Prompt*: You will be prompted to print the document when it is ready. You can then decide for each case whether or not to print the document or skip it.
+ *Print*: The document will automatically be sent to the default printer for this document type when it is ready.
+ *Skip*: You will not be prompted to print this document and it will not print automatically. If you'd like to print it you will have to print it manually from the Application Button.

**Default Deposit/Credit Expiration Days:** The default number of days a deposit/credit is valid for before it expires. Check your local law to determine if expiring a deposit is legal. Set to zero if your deposits/credits do not expire. You can override the expiration date on each deposit/credit. This provides the default only.

## Entity Number Generation Options

**Entity Number Generation Type:** The method used for generating entity numbers. Entity numbers are properties such as Customer Number, Employee Number and Vendor Number.

+ *None*: No entity numbers are used.
+ *Incremental*: Entity numbers will be generated incrementally. Example, 1, 2, 3, 4, 5, etc...
+ *Custom*: The entity number property will be present but you will type the number in yourself. Use this option if you already have entity numbers from a previous system.

**Invoice Number Generation Type:** The method used for generating invoice numbers.

+ *None*: No invoice numbers are used.
+ *Incremental*: Invoice numbers will be generated incrementally. Example, 1, 2, 3, 4, 5, etc...
+ *Date/Time*: The invoice number will represent a date, which will be formatted as defined by the Invoice Number Date/Time Format property.

**Invoice Number Date/Time Format:** The format to use for the date/time element of the invoice number if Date/Time is selected for Invoice Number Generation Type.

If a date/time format is used that would allow for duplicates, such as the year, month and date a number will be appended to the end. For example, 20131031-1, 20131031-2, 20131101-1, etc...
To avoid the appending number, use a date time format that would include the hour, minute and second codes to create a unique invoice number for that moment in time.

See [Date/Time Format Codes](date-time-format-codes.md) for more information about Invoice Number and Service Number Date/Time Formats.

> Note: This property is only visible if the Invoice Number Generation Type is set to Date/Time.

**Service Number Generation Type:** The method used for generating service numbers.

+ *None*: No service numbers are used.
+ *Incremental*: Service numbers will be generated incrementally. Example, 1, 2, 3, 4, 5, etc...
+ *Date/Time*: The service number will represent a date, which will be formatted as defined by the Invoice Number Date/Time Format property.

**Service Number Date/Time Format:** The format to use for the date/time element of the service number if Date/Time is selected for Service Number Generation Type. 

If a date/time format is used that would allow for duplicates, such as the year, month and date a number will be appended to the end. For example, 20131031-1, 20131031-2, 20131101-1, etc...
To avoid the appending number, use a date time format that would include the hour, minute and second codes to create a unique invoice number for that moment in time.

See [Date/Time Format Codes](date-time-format-codes.md) for more information about Invoice Number and Service Number Date/Time Formats.

> This property is only visible if the Service Number Generation Type is set to Date/Time.

## Gift Card Options

**Gift Card Points Type**: The way points are earned for gift card purchases. See Points for more information on how points are earned and redeemed.

+ *None*: No points are awarded to a customer when purchasing or redeeming a gift card.
+ *Subtotal*: Points are awarded to a customer based on the subtotal. For example, a 200.00 gift card will earn 200.00 points.
Subtotal Multiple: Points are awarded to a customer based on the subtotal then multiplied by the Gift Card Points Subtotal Multiple property. For example a 200.00 gift card with a subtotal multiplier of 2 will earn 400.00 points.
+ *Custom*: The amount of points awarded is the static value in the Gift Card Points Custom property. For example, a 200.00 gift card with a custom value of 1 will earn 1 point.

**Gift Card Points Subtotal Multiple**: The multiplier to apply to gift card points when the Gift Card Points Type is set to Subtotal Multiple.
Note: This property is only visible if the Gift Card Points Type is not set to Subtotal Multiple.

**Gift Card Points Custom**: The static point value for each gift card when the Gift Card Points Type is set to Custom.

> This property is only visible if the Gift Card Points Type is not set to Custom.

**Default Gift Card Point Application Type**: The person who will earn points when a gift card is purchased or redeemed. This option can be overridden for each gift card sold. For example, if your default setting is to award the purchaser of the gift card points that is what will be used when you create a new gift card. However, lets say the mother of a friend of the studio comes in to buy a gift card, you may decide to give the points to the friend of the studio, rather than his mother who may never be back in.

+ *None*: Neither party earns points when a gift card is purchased or redeemed.
+ *Purchaser*: The customer who purchased the gift card will earn points at the time the gift card is purchased.
+ *Redeemer*: The customer who received the gift card as a gift will earn points at the time they use the gift card.

**Activate gift cards once the invoice has been fully paid**: If checked, the gift card will not be considered active until the sale of the gift card has been completed. If unchecked, all gift cards are automatically active when they're created.

## Inventory Options

**Default Sales Tax:** The default sales tax to use when creating new sellable location inventory items.

**Barcode Prefix:** If defined, the automatically generated barcode for  inventory items will start with this text. It can be used to easily identify a barcode as being from a particular studio if you have multiple studios.

This property can be a number, or even a short bit of text. For example, the barcode prefix of 1 will generate a barcode of 1000001 when an item is first created.  You could use a string such as REV23 which would generate REV23000001. This should still be readable by the barcode scanner when printed, but it shouldn't be too long.

**Reuse barcodes from my other studios when available:** If checked, and you have a connected studio license, when you add an inventory item to this studio that already exists in another it will use an existing Location Inventory Item barcode if available.

## Sales & Payments Options

**Sales Receipt:** The report definition of the receipt you'd like to print as a receipt for the customer.

**Sales Receipt Printing Prompt:** The behavior that will be used when REV23 Desktop would prompt you to print an invoice (sale) receipt after it has been paid.

+ *Prompt*: You will be prompted to print the document when it is ready. You can then decide for each case whether or not to print the document or skip it.
+ *Print*: The document will automatically be sent to the default printer for this document type when it is ready.
+ *Skip*: You will not be prompted to print this document and it will not print automatically. If you'd like to print it you will have to print it manually from the Application Button.

> This setting, as well as the 'Aftercare Printing Prompt' setting, located in Service Options, are somewhat dependent on each other. Regardless of the 'Skip' or 'Print' value here, if the Aftercare Printing Prompt is set to 'Prompt', you will still see the dialog asking if you would like to print, giving you the ability to optionally print the invoice receipt. In this scenario, if this setting is 'Print', the option to print the receipt will be checked by default, if it is set to 'Skip', the option to print the receipt will not be checked by default.

**Default Invoice Discount Payout Adjustment**: The default behavior for how to adjust commissions when discounting an invoice. This behavior can be overridden on each item if necessary, this provides the default value.

+ *Reduce both payouts based on subtotal*: The commission/draw for both the studio and employee will calculate on the new subtotal, but their percentages will remain the same.
+ *Location absorbs discount amount in payou*t: The location's draw will be reduced to absorb the discount. The employee will retain their full commission amount.
+ *Employee absorbs discount amount in payout*: The employee's commission will be reduced to absorb the discount. The location will retain the full draw configured.

**Automatically use the default customer for new sales:** If checked, new invoices will automatically set the Default Customer as the selected customer.

**Remove inventory from on hand when:** The behavior for removing inventory from your on hand count when adding items to a sale or invoice.

+ *Invoice is Paid*: The items will be removed immediately when the sale/invoice is fully paid.
+ *Invoice is Saved*: The items will be removed immediately when the sale/invoice is saved.

### Credit Cards

> The settings in this section require CardConnect.

**Credit Card Surcharge:** An additional surcharge to add to credit card fees. If set to 2%, charging $100.00 will add an additional $2.00. The customer will be prompted on the terminal to agree to this charge. Check with your states laws regarding credit card surcharges.

**Credit Card Tip Prompt Mode:** The behavior that will be used when the client is prompted to tip on the credit card terminal.

+ *Always*: Customers will always be prompted to enter a tip when taking a credit card payment on a sale.
+ *Services only*: Customers will only be prompted to enter a tip if a service, such as a tattoo or piercing, is on the sale.
+ *Never*: Customers will never be prompted to enter a tip when accepting credit card payments.

**Show Recommended Tip Amounts:** If enabled, the credit card terminal will show recommended tip amounts based on the amount of sale item or service using the Tip Preset 1, 2 and 3 properties as the recommended percentages.

### Payouts

**Default Service Cash Payout Mode:** The default behavior for how to distribute cash during Service Cash Payouts.

**Payout as much cash as possible to employee:** The employee will be paid out as much cash as they brought in. Example, if the artist does a $100.00 tattoo at 60% paid in cash, they'll receive the full 60% ($60.00) in cash.
Payout cash proportional to employee's commission: The employee will be paid out cash proportional to their commission. Example, if the artist does a $100.00 tattoo at 60% paid in cash, they'll receive 60% of their commission in cash which would be $36.00.

**Default Deposit Cash Payout Mode:** The default behavior for how to distribute cash during Deposit Cash Payouts.

**Payout as much cash as possible to employee:** The employee will be paid out as much cash as they brought in. Example, if the artist does a $100.00 at 60% paid in cash, they'll receive the full 60% ($60.00) in cash.
Payout cash proportional to employee's commission: The employee will be paid out cash proportional to their commission. Example, if the artist does a $100.00 tattoo at 60% paid in cash, they'll receive 60% of their commission in cash which would be $36.00.

## Marketing Options

**Add new customers to mailing list:** If checked, any new customer you create will automatically be added to the mailing list by default. If you use this option, you must respect opt-out requests if you use something other than Constant Contact to manage your mailing list.

**Default Mobile Provider:** If selected, this will automatically be set as a new customer's mobile provider. Only recommended if there are few options for mobile providers in your area.

## Point Options

**Enable Points:** If checked, customers will earn points as they pay their invoices for goods and services.  See Points for more information on how points are earned and redeemed.

**Default Points Type:** The default method for calculating points. The Points Type can be overridden on all services types, inventory items and gift cards. This provides the default that will be used if no override is specified.

+ *None*: No points are awarded to a customer when paying for an invoice by default.
+ *Subtotal*: Points are awarded to a customer based on the subtotal. For example, a 200.00 invoice will earn 200.00 points.
+ *Subtotal Multiple*: Points are awarded to a customer based on the subtotal then multiplied by the Default Points Subtotal Multiple property. For example a subtotal of 200.00 on an invoice with a subtotal multiplier of 2 will earn 400.00 points.
+ *Custom*: The amount of points awarded is the static value in the Default Points Custom property. For example, a 200.00 invoice with a custom value of 1 will earn 1 point for each service and sold item.

**Default Points Subtotal Multiplier:** The multiplier to apply to the invoice subtotal when the Default Points Type is set to Subtotal Multiple.
Note: This property is only visible if the Default Points Type is set to Subtotal Multiple.

**Default Points Custom:** The static point value for each item and service on an invoice when the Default Card Points Type is set to Custom.
Note: This property is only visible if the Default Points Type is set to Custom.

**Point Conversion Rate:** The conversion rate of a single point to your local currency. For example 5.00% is equal to $0.05 USD.

**Auto Redeem Points Threshold:** The currency value at which a customer's points are exchanged for a reward credit in this amount.

**Points Required To Redeem:** A read only value that shows you how many points a customer will need to earn for their points to exchange to a credit.

**Point Expiration Days:** How many days points are valid before they go stale,meaning points that haven't converted to a credit yet. Set this to zero if your points do not expire.

**Points Credit Expiration Days:** How many days reward credits are valid once the points have been exchanged. Set this to zero if your credits earned from points do not expire.

## Referral Credit Options

**Referral Credit Mode:** How you award referral credits to referring customers.

+ *None*: Your studio does not offer referral credits.
+ *Per Customer*: For each new customer that you create, the referring customer will receive the Referral Credit Amount after they're saved.
+ *Per Service*: For each new service that you create, the referring customer will receive the Referral Credit Amount. This means that if Jack refers Sally, each time Sally has a service done, Jack will receive the Referral Credit Amount.

**Referral Credit Amount:** The amount that will be created as a new credit for the referring customer for each new referral. Each time a referral happens a credit in this amount will be created for the referring customer.

## Service Options

**Enable Walk-in Queue:** If checked, the Walk-in Queue feature will be available. If your studio is appointment only, or only do a couple walk-ins per day, you may not need this feature.

**Default Service Type:** The default service type that will be automatically set for all new services. If your studio only performs tattoos it makes sense to set this value to your tattoo service type so you will never have to set it when creating a new service.

**Default Service Discount Payout Adjustment:** The default behavior for how to adjust commissions when discounting a service. This behavior can be overridden on each service if necessary, this provides the default value.

+ *Don't adjust payouts*: The commission/draw for both the studio and the employee are not adjusted when a discount is applied. You will pay out based on the full amount.
+ *Reduce both payouts based on subtotal*: The commission/draw for both the studio and employee will calculate on the new subtotal, but their percentages will remain the same.
+ *Location absorbs discount amount in payout*: The location's draw will be reduced to absorb the discount. The employee will retain their full commission amount.
+ *Employee absorbs discount amount in payout*: The employee's commission will be reduced to absorb the discount. The location will retain the full draw configured.

**Automatically set the service end time when it is added to an invoice:** If checked, the service end time (the date & time the service was finished) will be set when the service is added to an invoice. If you take payment after a service has been completed it makes sense to use this option since many features rely on a service end time being set.

**Aftercare Printing Prompt:** The behavior that will be used when REV23 Desktop would prompt you to print aftercare forms for all the services on an invoice.

+ *Prompt*: You will be prompted to print the document when it is ready. You can then decide for each case whether or not to print the document or skip it.
+ *Print*: The document will automatically be sent to the default printer for this document type when it is ready.
+ *Skip*: You will not be prompted to print this document and it will not print automatically. If you'd like to print it you will have to print it manually from the Application Button.

> This setting as well as the 'Sale Receipt Printing Prompt' setting, located in Invoicing & Payment Options, are somewhat dependent on each other. Regardless of the 'Skip' or 'Print' value here, if the Customer Invoice Receipt Printing Prompt is set to 'Prompt', you will still see the dialog asking if you would like to print, giving you the ability to optionally print the aftercare form. In this scenario, if this setting is 'Print', the option to print the aftercare will be checked by default, if it is set to 'Skip', the option to print the aftercare will not be checked by default.

**Show a warning when trying to complete a service before it has been paid for:** If checked, a warning will be displayed when trying to set a service to complete before its invoice has been paid.

## Signature Capture Options

**Consent Form File Name Generation Mode:** The file name of the generated PDF when a signature is captured and the consent form is saved. 

Consider the following service: Tattoo for Jane L. Doe on October 31, 2013. The following options will give demonstrate the output for the generated file name.

+ *Default*: Consent Form.pdf
+ *[Full Name]*: Jane L. Doe.pdf
+ *[Last Name] [First Name] [Middle Name]*: Doe Jane L..pdf
+ *[Full Name] [Service Type]*: Jane L. Doe Tattoo.pdf
+ *[Last Name] [First Name] [Middle Name] [Service Type]*: Doe Jane L. Tattoo.pdf
+ *[Date/Time] [Full Name] [Service Type]*: 20131031 Jane L. Doe Tattoo.pdf
+ *[Date/Time] [Last Name] [First Name] [Middle Name] [Service Type]*: 20131031 Doe Jane L. Tattoo.pdf

**Consent Form File Name Date/Time Format:** The format to use for the date/time property of the file name if a Consent Form File Name Generation Mode with a [Date Time] option is selected.

> This property is only visible if the Consent Form File Name Generator Mode contains a date/time place holder. See [Date/Time Format Codes](date-time-format-codes.md) for more information.

**Show Mailing List Opt-In:** If checked, the signature pad will display a prompt asking the customer if they'd like to join the mailing list. If customer is already on the mailing list, this prompt is skipped.

**Enable Signature Capture Auto Close:** If checked, once all signatures have been obtained from the signature pad the signature capture window will auto close after 5 seconds.

**Require Service Provider's Signature on Consent Forms:** If checked, the employee of the service will be required to sign the signature pad before the consent form can be generated.

**Automatically print consent form after signature is captured:** If checked, the signed release form will automatically be printed.

**Set the service start time to the time signature was captured:** If checked, the start time of the service will be adjusted to the exact time the customer's signature was captured.

### Auto Export

**Auto export consent forms to my hard drive for extra protection:** If checked, consent forms that are generated and stored in the database are also saved to a local disk. This is an extra layer of protection for your release forms.

**Auto Export Path:** The drive and folder that your consent forms are exported to.

> This path should not be located on your system drive (i.e. C:\) instead it should be on a separate internal hard drive or an external hard drive. If your system drive was to crash you would lose access to your auto exported release forms, which defeats the purpose of this feature. Alternately, you could point this to a cloud storage folder such as OneDrive, Dropbox or Google Drive.

**Create a subfolder containing the service type:** If checked, the auto exported release forms will be placed in a folder that contains the service type's name in the path.

For example, if your Auto Export Path is D:\ConsentForms, they will be placed in subfolders such as D:\ConsentForms\Tattoo

**Create a subfolder containing the service date:** If checked, the auto exported release forms will be placed in a folder that contains the service's date in the path.

For example, if your Auto Export Path is D:\ConsentForms, they will be placed in subfolders such as D:\ConsentForms\20131031

> If you also have the option to create a service type subfolder checked the date folder will be after the service type folder. For example, D:\ConsentForms\Tattoo\20131031

**Subfolder Date/Time Format:** The format to use for the date/time property of the file name if a subfolder containing the service date is created.
Note: This property is only visible if the Create a subfolder containing the service date checkbox is checked. See [Date/Time Format Codes](date-time-format-codes.md) for more information.

## Connected Studio Options

> These options are only visible if REV23 Desktop is licensed for connected studios.

**Add customers created in any of my studios to here:** If checked, any time a customer is created in another one of your locations they will also be added to this studio.

****Add vendors created in any of my studios to here:** **If checked, any time a vendor is created in another one of your locations they will also be added to this studio.

**Deposits and credits are redeemable at any of my studios:** If checked, all new deposits and credits will be redeemable at any of your locations. This can be overridden per deposit/credit.

**Gift Cards are redeemable at any of my studios:** If checked, gift cards that are created in this studio will be redeemable at any of your locations. This can be overridden per gift card.

**Points are redeemable at any of my studios:** If checked, points that are earned in this studio can be exchanged for credits in another one of your locations if they cross the auto-redeem threshold in that location.

**New notes are visible to all of my studios by default:** If checked, notes that are created will be visible to all of your locations. This can be overridden per note.