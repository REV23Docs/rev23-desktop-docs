---
title: "Customers"
sidebar:
  label: "Customers"
  order: 1
---
## Properties

> See [**Persons**](/rev23-desktop-docs/reference/persons/) for shared properties of the customer object.

**Source:** The source where the customer heard about your business.

**Referred By:** The customer who made the referral. How and when that customer receives a credit depends on the studio's [referral credit mode](/rev23-desktop-docs/concepts/referrals/).

**Flag:** An optional flag for the customer. Flags can be used by your studio in any way you'd like. Obviously red could mean bad, green could be good, etc... but this scheme is completely up to you.

**Available Points:** The available points this customer has that have not yet been exchanged for a reward credit.

**Available Deposits/Credits:** The available deposits and/or credits this customer has to use.

**Customer Number:** The customer's custom or auto assigned entity number.

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

**Ineligible For Referral Credits:** This setting is displayed on the customer record, but current versions do not apply it when creating automatic referral credits.

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

**Print Customer Labels:** Prints customer addresses on the configured label report, such as an Avery 8160 layout.

### Export

**Export Mailing List to CSV:** Exports current-studio customers who have an email address. REV23 Desktop does not store marketing opt-in status, so review the file against the recipient and suppression lists in your marketing service. See [Email Marketing](/rev23-desktop-docs/concepts/email-marketing/).

**Sign up for Email Marketing:** Allows you to sign up for [Constant Contact](http://www.constantcontact.com/index.jsp?pn=rev23dev) Email Marketing.


### Tools

**Connect Customers:** For connected studios only, the connect customers action will allow you to import all or selected customer records from your connected studios into the current studio. This action is available in the customer list view only.

**Merge Customers:** Using the merge customers action, you can combine two or more duplicate customers into a single customer record, including all of their history. To use this action, highlight two or more customer rows in the list view, then click this action. All selected customers' birthdays and last names must match in order to merge them. This action is available in the customer list view only.

**Import Customers:** This action will allow you to import customers from a CSV (comma separated values) file. See Importing Customers.

**Export to CloudApp:** Exports the customers connected to the current studio to `REV23_CloudApp_Export.csv`. When importing that file into REV23 CloudApp, select the **REV23 CloudApp** file type rather than the REV23 Desktop file type. See [Export customers to REV23 CloudApp](/rev23-desktop-docs/concepts/customers/#export-customers-to-rev23-cloudapp).

## Connected Studio Behavior

A customer can exist in multiple studios and you can see their history for each. A subset of properties for customers, mostly options, can be set per studio, while changing other properties such as their name, email address, etc... will affect their entire profile which is visible between all of your studios. In the Customer Detail View you can see each studio the customer is associated with in the Locations tab, along with their options for each studio.

If you wish to link some or all customers from one studio into the current studio, you can use the **Connect Customers** action.
