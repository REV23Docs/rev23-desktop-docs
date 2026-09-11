---
title: "Sale/Invoice"
sidebar:
  label: "Sales & Invoices"
  order: 11
---
## Properties

**Invoice Number:** The invoice number for this sale/invoice. Depending on your invoice number generation settings, this may be auto generated and read-only, or blank allowing you to customize the value yourself. The invoice number is used to easily locate an invoice from a receipt.

**Date/Time:** The date and time assigned to the sale/invoice. After the record has been saved, changing this field requires **Can Backdate** permission.

**Customer:** The customer this invoice is assigned to. A customer is required. You can use the default customer button to quickly assign the Default Customer.

**Commission Employee:** The commission employee is for saving time while adding sale items. If you're scanning/adding commissionable items, they will be entered as this employee. You can of course override them after they've been created.

**Subtotal:** The calculated subtotal of all services, sale items and sold gift cards. This value is read-only and cannot be modified.

**Tax Amount:** The calculated total tax amount of combined taxable services and sale items. This value is read-only and cannot be modified.

**Total Amount:** The calculated total amount of subtotal with tax amount. This value is read-only and cannot be modified.

**Balance:** The calculated balance the customer owes. The total amount less payments made and deposits/credit used. This value is read-only and cannot be modified.

**Payment Status:** The payment status of this invoice. This value is read-only and cannot be modified.

## Actions

**Take Payment:** Records a payment against the remaining balance.

**Apply Deposit/Credit:** Uses an available deposit or credit belonging to the customer.

**Refund/Return:** Starts the return and refund workflow for eligible items, services, and payments.

**Print Receipt:** Prints another copy of the sale receipt.

See [Sales & Invoices](/rev23-desktop-docs/concepts/sales-and-invoices/) for the working flow.
