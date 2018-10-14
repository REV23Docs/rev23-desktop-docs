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

**Use business hours when running reports:** If checked, reports will use your actual business hours when filtering start and end dates. This is useful if you close after midnight and want those services to be counted for the previous calendar date. Note that running reports with this enabled will create a very strict time frame. For example, if you run a report for a Friday and you're open 12:00 PM to 10:00 PM, it will look for things that occurred between exactly those times. If something occurred at 10:02 PM, it will not show up on the report. Alternatively with this option turned off, reports run from 12:00 AM - 11:59 PM on the specified day.

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

> Note: This property is only visible if the Invoice Number Generation Type is set to Date/Time.

**Service Number Generation Type:** The method used for generating service numbers.

+ *None*: No service numbers are used.
+ *Incremental*: Service numbers will be generated incrementally. Example, 1, 2, 3, 4, 5, etc...
+ *Date/Time*: The service number will represent a date, which will be formatted as defined by the Invoice Number Date/Time Format property.

**Service Number Date/Time Format:** The format to use for the date/time element of the service number if Date/Time is selected for Service Number Generation Type.

If a date/time format is used that would allow for duplicates, such as the year, month and date a number will be appended to the end. For example, 20131031-1, 20131031-2, 20131101-1, etc...
To avoid the appending number, use a date time format that would include the hour, minute and second codes to create a unique invoice number for that moment in time.

> Note: This property is only visible if the Service Number Generation Type is set to Date/Time.

See Date/Time Format Codes for more information about Invoice Number and Service Number Date/Time Formats.