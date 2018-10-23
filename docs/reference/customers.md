# Customers

## Properties

> See [**Persons**](persons.md) for shared properties of the customer object.

**Send Email:** If checked, the customer has authorized you to send them email messages.

**Source:** The source where the customer heard about your business.

**Referred By:** If applicable, the customer that referred this customer. This must be filled out for the referring customer to get their referral credit.

**Flag:** An optional flag for the customer. Flags can be used by your studio in any way you'd like. Obviously red could mean bad, green could be good, etc... but this scheme is completely up to you.

**Available Points:** The available points this customer has that have not yet been exchanged for a reward credit.

**Available Deposits/Credits:** The available deposits and/or credits this customer has to use.

**Customer Number:** The customer's custom or auto assigned entity number.

**Mailing List:** If checked, the customer is opting in to receive marketing mail. Mailing labels generated will only include customer's who are on the mailing list.

### Identification

**ID Type:** The customer's identification type that was scanned and used for their release forms.

- None
- Driver's License
- Identification Card
- Passport
- Military
- School
- Birth Certificate
- Financial
- Other

**ID State:** The identification types issuing state.

**ID Number:** The identification types unique number. For example, the driver's license number.

**ID Image:** A scanned image of the identification.

> MILITARY ID WARNING: The photocopying of U.S. Government identification cards is a violation of Title 18, U.S. Code Part I, Chapter 33, Section 701 and punishable by fine and imprisonment. It is recommended you obtain another identification type other than military.

**Occupation:** The occupation of the customer. Required by some health departments.

### Options

**Preferred Language**: The customer's preferred language. If specified, REV23 Desktop will attempt to use templates and custom text translations for this language if they exist.

**Deposit Suggestion Mode:** Override the behavior of deposit suggestions for this customer.

- Suggest deposits automatically: REV23 Desktop will determine when you should take a deposit for this customer and recommend that action to you when scheduling an appointment.
- Always require a deposit: When scheduling an appointment for this customer you will always be prompted to take a deposit.
- Never require a deposit: When scheduling an appointment for this customer you will never be prompted to take a deposit. Use for well trusted customers, employees, etc...

**Retail Discount Percentage:** An automatic discount to apply to retail items this customer purchases.

**Service Discount Percentage:** An automatic discount to apply to services for this customer.

**Ineligible For Points:** If checked, the customer will not earn points on services or purchases.

**Ineligible For Referral Credits:** If checked, the customer will not earn referral credits if selected as the referring customer for another customer record.

### Lists

**Appointments:** A list of the customer's appointments, past and future.

**Sales:** A list of the customer's past sales & invoices.

**Services:** A list of the customer's past services.

**Attachments:** Documents or images attached to the customer record. See File Attachments.

**Deposits & Credits:** A list of the customer's deposits and/or credits.

**Points:** A list of the customer's points history.

**Notes:** A list of the customer's notes.

**Locations:** A list of the customer's connected studios.

## Actions

### Records Creation

**Start Service:** Start a new service for the selected customer. If this customer has an appointment you should instead use the start service action in appointment actions.

**New Sale:** Creates a new sale/invoice for the selected customer.

**Add To Waiting List:** Adds the selected customer to the waiting list.

**Scan/Swipe ID:** Use this action to read the data from customer's driver's license into REV23 Desktop from either the magnetic stripe or 2D (PDF417) barcode. From the driver's license, REV23 Desktop will create a new customer record with the customer's first name, middle name, last name, address, gender, driver's license number & state. If a matching customer record already exists (based on driver's license number), rather than create a new record, REV23 Desktop will open the existing customer record. If a name or address has changed, you will be prompted to update the existing customer information from the scanned ID.

### View

**Show Customer Notes:** This action will show all notes for the selected customer. Aside from customer notes, this will show notes from all of the selected customer's related objects, including appointments, services, deposits & credits, waiting list, special orders and more.

### Print

**Print Customer Labels:** Use the print labels action to print your mailing list customers onto address labels, such as the Avery 8160 template.

### Export

**Export Mailing List to CSV:** Exports your email marketing mailing list to a CSV file for importing into a third-party email marketing service. See [Email Marketing](../concepts/email-marketing.md).

**Sign up for Email Marketing:** Allows you to sign up for [Constant Contact](http://www.constantcontact.com/index.jsp?pn=rev23dev) Email Marketing.


### Tools

**Connect Customers:** For connected studios only, the connect customers action will allow you to import all or selected customer records from your connected studios into the current studio. This action is available in the customer list view only.

**Merge Customers:** Using the merge customers action you can combine two or more duplicate customers into a single customer record, including all of their history. To use this action you will highlight two or more customer rows in the list view, then click this action. All selected customer's birthdays and last name must match in order to merge them. This action is available in the customer list view only.

**Import Customers:** This action will allow you to import customers from a CSV (comma separated values) file. See Importing Customers.

## Connected Studio Behavior

A customer can exist in multiple studios and you can see their history for each. A subset of properties for customers, mostly options, can be set per studio, while changing other properties such as their name, email address, etc... will affect their entire profile which is visible between all of your studios. In the Customer Detail View you can see each studio the customer is associated with in the Locations tab, along with their options for each studio.

If you wish to link some or all customers from one studio into the current studio, you can use the **Connect Customers** action.