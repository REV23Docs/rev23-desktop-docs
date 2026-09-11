---
title: "Walk-in Queue"
sidebar:
  label: "Walk-in Queue"
  order: 15
---
The Walk-in Queue is a feature intended for shops with medium to high volume to help you manage customers currently in your studio waiting for walk-in availability. When ready to perform the service you can start a Service record directly from the queue to copy all relevant details and remove the item from the queue.

If your studio does not need the benefits of the Walk-in Queue, you can disable it in [Configuration: My Studio: Options](/rev23-desktop-docs/configuration/my-studio/#service-options).

## Adding customers to the walk-in queue

You can create a new walk-in by either:

- Clicking the New Walk-in (Queued) action from the [Today Dashboard](/rev23-desktop-docs/concepts/today-dashboard/).
- Clicking the New action in the Walk-in Queue List View.

At a minimum, a **Customer** and **Service Type** are required. However, you can fill out as much information as you'd like, including **Placement Area** and **Design Description**. Any information you add here will be copied to the Service once it's started.

When a customer is waiting for more than one service type, add the other requested procedures to **Additional Service Types**. This enables the **Start Services** action for starting them together as a [Service Group](/rev23-desktop-docs/concepts/service-groups/).

## Managing the queue

### Paging a customer

:::caution[Text message paging is no longer available]
The **Page Customer** action sent a text message to summon a waiting customer back to your studio. Because [REV23 Desktop can no longer send text messages](/rev23-desktop-docs/how-to/create-twilio-account/) due to carrier A2P 10DLC requirements, this feature no longer works. Text-based customer communication is fully supported in [REV23 Cloud](https://cloud.rev23.com).
:::

### Removing a customer from the queue

If the customer does not return or has decided to leave without getting a service, you can click the **Changed Mind** action to remove the item from the queue.

### Starting a Service

When you're ready to perform the service, click the **Start Service** action to copy all relevant information from the queue to a new service record.

### Starting multiple services

For a queue item with additional service types, click **Start Services**. REV23 Desktop opens the Service Group window with the customer, employee, guardian, and requested service types already selected. After the services are created, the queue item's status changes to **Started**.

## Related

- [Concepts: Today Dashboard](/rev23-desktop-docs/concepts/today-dashboard/)
- [Concepts: Service Groups](/rev23-desktop-docs/concepts/service-groups/)
- [Reference: Walk-ins](/rev23-desktop-docs/reference/walk-ins/)
