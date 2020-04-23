# Service Type Inventory Items

Service Type Inventory Items represent a link between service types and how specific inventory is used.

Some examples of Service Type Inventory Items include:
+ Automatically add aftercare to a sale when a tattoo or piercing is invoiced.
+ Reduce the sale price of an item when it is included as part of a service, such as the price of standard jewelry in a piercing.

You may add a single item to a single service type by navigating to the Service Types tab in an item and clicking the **New** action, however, more useful, you can select multiple inventory items in the Inventory list, and click the Tools tab and use the **Add To Service Types** action, where you can select multiple service types as well, allowing you to apply these properties in batches, saving a significant amount of time.

## Properties

**Service Type:** The service type you want to associate this item with.

**Automatically add to invoice:** If checked, when a service with the specified service type is added to a sale, this item will also be added.

**Quantity Used In Service:** The quantity generally used in a single service of this type.

**Use the same quantity as the service:** If checked, the quantity will be set to the same quantity as the service, for example, a Lobe piercing with a quantity of two may add two of the same type of jewelry.

**Use Service Price:** If checked, the price of the item will be specified by the Service Price field.

**Service Price:** The price of this item when added to a sale from a service. For example, if this is standard jewelry included with a piercing, you may set this value to zero, so it will be included free with the piercing, but still removed from inventory.

**Non Taxable:** If checked, this item will not be taxed when included on a sale from a service.

**Employee Commission:** If set, this will override the commission from the Inventory Item.

**Commission Type:** If the commission is being overridden, how the commission is calculated.

- *None*: This item is not eligible for commission.
- *Fixed*: The commission for this item will be a fixed amount, defined in the commission amount property below.
- *Percent (Subtotal*): The commission for this item will be a percentage of the sale price, defined in the commission percentage property below.
- *Percent (Markup)*: The commission for this item will be a percentage of the item's markup value, defined in the commission percentage property below.

**Commission Percentage:** The overridden commission percentage.
Note: This property is only visible if the Commission Type is set to Percent (Subtotal) or Percent (Markup).

**Commission Amount:** The overridden commission amount.
This property is only visible if the Commission Type is set to Fixed.