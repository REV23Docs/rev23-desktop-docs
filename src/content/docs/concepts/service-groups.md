---
title: "Service Groups"
sidebar:
  label: "Service Groups"
  order: 8.5
---
When a customer receives multiple piercings during the same visit, creating each [service](/rev23-desktop-docs/concepts/services/) one by one means repeatedly entering the same customer, employee, guardian, consent-form, and sale information. Service Groups solve this by letting you select all the piercings and create their Service records together in one batch.

For example, if a customer is getting lobe and cartilage piercings, you can set the quantity and amount for both service types in one window, collect the required consent forms, and optionally link everything to one sale.

Each selected service type still becomes its own normal Service record for reporting, commissions, and recordkeeping. A Service Group is not a reusable bundle or a combined Service record; it is a faster way to start the individual records together without repeating the same setup for every piercing.

:::note[Version availability]
Service Groups are available in REV23 Desktop 26.1.1 and later.
:::

## Before you begin

The selected employee must be assigned to every service type they will perform at the current studio location. The Service Group window only lists the employee's available [Employee Service Types](/rev23-desktop-docs/configuration/service-types/#employee-service-types).

Each row displays the default price configured for that employee and service type when using fixed location or fixed employee pricing. Review the amount before continuing, especially for service types that use custom pricing.

## Where to start a Service Group

You can open the Service Group window from several places:

- **Today Dashboard:** Click **New Service Group** to start an unscheduled group. Select the customer and employee in the window.
- **Appointment:** Select an appointment with no linked services, then click **Start Service Group**. The customer and employee are filled in from the appointment. You can also right-click the appointment in the Scheduler and select **Start Service Group**.
- **Walk-in Queue:** Add one or more **Additional Service Types** to a queued walk-in. Select the queue item and click **Start Services**. The customer, employee, guardian, and requested service types are filled in from the queue item.

## Start the services

1. Confirm the **Customer** and **Employee**. Select a **Guardian** when one is required for any of the services.
2. In the Services list, enter a **Quantity** greater than zero for each service type you want to start. A row with a quantity of zero is skipped.
3. Review the **Amount** for each selected service type.
4. Choose the options described below.
5. Click **OK** to create the services.

:::tip
Choose the employee before editing quantities and amounts. Changing the employee reloads the Services list using that employee's available service types and pricing.
:::

At least one service must have a quantity greater than zero. If the customer is younger than the **Required Age** for a selected service type, select a guardian and make sure the service type has an appropriate [Guardian Consent Form](/rev23-desktop-docs/concepts/consent-forms/#guardian--minor-consent-forms).

## Service Group options

**Sign Consent Forms:** Runs the consent-form signing workflow for each service being created. REV23 Desktop stores a generated consent form with each Service record and prints it when your studio is configured to print consent forms after signing.

**Create New Sale & Link Services:** Creates one new sale/invoice for the customer and links every service in the group to it.

**Show Sale In New Window:** Opens the newly created sale after the services are saved. This option is only available when **Create New Sale & Link Services** is selected.

REV23 Desktop remembers these three selections for the current Windows user and uses them the next time a Service Group window opens.

## What happens after completion

- Each row with a quantity greater than zero creates one Service record containing that quantity and amount.
- All created services use the selected customer and employee. A required guardian is copied to each applicable service.
- Services started from an appointment are linked to that appointment, and the appointment status changes to **Started**.
- Services started from the Walk-in Queue change the queue item's status to **Started**.
- If sale creation is enabled, all services are linked to the same new sale/invoice.

## Related

- [Concepts: Services](/rev23-desktop-docs/concepts/services/)
- [Concepts: Appointments](/rev23-desktop-docs/concepts/appointments/)
- [Concepts: Walk-in Queue](/rev23-desktop-docs/concepts/walk-in-queue/)
- [Concepts: Consent Forms](/rev23-desktop-docs/concepts/consent-forms/)
- [Concepts: Sales & Invoices](/rev23-desktop-docs/concepts/sales-and-invoices/)
