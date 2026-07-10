# Walk-in Queue

The Walk-in Queue is a feature intended for shops with medium to high volume to help you manage customers currently in your studio waiting for walk-in availability. When ready to perform the service you can start a Service record directly from the queue to copy all relevant details and remove the item from the queue.

If your studio does not need the benefits of the Walk-in Queue, you can disable it in [Configuration: My Studio: Options](../configuration/my-studio.md/#service-options).

## Adding customers to the walk-in queue

You can create a new walk-in by either:

- Clicking the New Walk-in (Queued) action from the [Today Dashboard](today-dashboard.md).
- Clicking the New action in the Walk-in Queue List View.

At a minimum, a **Customer** and **Service Type** are required, however you can fill out as much information as you'd like including **Placement Area** and **Design Description**. Any information you add here will be copied to the Service once its started.

## Managing the queue

### Paging a customer

!!! warning "Text message paging is no longer available"
    The **Page Customer** action sent a text message to summon a waiting customer back to your studio. Because [REV23 Desktop can no longer send text messages](../how-to/create-twilio-account.md) due to carrier A2P 10DLC requirements, this feature no longer works. Text-based customer communication is fully supported in [REV23 Cloud](https://cloud.rev23.com).

### Removing a customer from the queue

If the customer does not return or has decided to leave without getting a service, you can click the **Changed Mind** action to remove the item from the queue.

### Starting a Service

When you're ready to perform the service, click the **Start Service** action to copy all relevant information from the queue to a new service record.

## Related
- [Concepts: Today Dashboard](../concepts/today-dashboard.md)
- [Reference: Walk-ins](../reference/walk-ins.md)