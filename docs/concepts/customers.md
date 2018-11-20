# Customers

## Default Customer

The Default Customer is a special customer record, mostly hidden from REV23 Desktop, but serves a very convenient purpose. When creating a new sale/invoice, a customer is required. It doesn't matter if the customer is buying a pack of gum or your most expensive jewelry, you'll need to assign a customer to the sale. Remember RadioShack... you'd go in for a 9V battery and they wanted your name, phone number and address? Annoying, right? That's where the default customer comes in. With a single click you'll be able to assign the default customer to the sale, and skip that awkward moment of trying to get someone's information when they really just stopped in for a quick purchase.

The Default Customer is:
- Hidden from list views. You won't see it anywhere other than designated areas.
- Ineligible for reward points or referral credits.
- Only accessible from sales and invoices. You cannot assign the default customer to appointments, deposits, services or the waiting list.

The customer property on a Sale has a Default Customer button that you can click to set the customer of the sale to the Default Customer.

## Merge Duplicate Customers

There is a tool to merge duplicate customers into a single customer.

For REV23 Desktop to merge two customers, they must have a matching `Last Name` and `Birthday`. Trying to merge customers that do not have this matching data will result in an error.

1. Navigate to the Customer List
2. Select all duplicates to be merged by clicking each customer while pressing the CTRL key on your keyboard.
3. Click the **Tools** tab.
4. Click the **Merge Customers** action.

The customer record that was created first will become the new base. Any missing details that other records have will be merged into that customer record. Services, Deposits/Credits, Sales will also be merged and the old customers will be deleted after the process has completed. The [Audit Trail](audit-trail) data is not merged. 

This process may take several minutes depending on customer history.

## Related

- [Reference: Customers](../reference/customers.md)
- [Concepts: Email Marketing](email-marketing.md)
- [How To: Import Customers](../how-to/import-customers.md)


