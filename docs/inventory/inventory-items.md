# Inventory Items

Inventory Items in REV23 Desktop represent sellable and disposable items in your studio. The REV23 Desktop Inventory system is unmatched by competitors for how specific it is to our industry. Along with real time inventory tracking, automated bulk discounts and more, REV23 Desktop includes powerful options to associate items to specific service types, allowing full control on how to automate inventory when dealing with particular procedures. For example, discounting a piece of jewelry because it was done with a particular piercing type, including free aftercare that is automatically added (and discounted) on the sale during particular service types, or even reducing your disposables (gloves, needles, tubes, etc...), after completing a service.

## Properties

**Name:** The name of the inventory item. The name is required, and should be descriptive as this will be the main identifier of the item in REV23 Desktop and printed on sale receipts.

**Category:** The inventory category of this item. The category is required. Categories are used mostly for organization of your items for quick access.

**Department:** The inventory department of this item. The department is optional but recommended. Departments are useful for reporting at a high level (i.e. how much aftercare have you sold, regardless of brand or type).

**Inventory Item Type:** The particular type of item (if applicable).
- General: A general use item that is not specific to tattooing or piercing such as gloves or a t-shirt.
- Tattoo: An item specific for tattooing.
- Piercing: An item specific for piercing which will have more properties in the Piercing Item Specifications property.

**Jewelry Details:** Additional properties used to describe a jewelry item. To access them, click the ellipses button on the editor (...) to show the jewelry detail view. This property is only visible when the inventory item type is set to Piercing.

> If you leave the inventory item name blank, after setting the jewelry item specifications a name will be automatically generated for you. It will also look at other properties such as material to generate this name, so fill out all details in the Inventory Item detail view first, then move onto this view to generate a standardized name. This is particularly useful for jewelry.

**Quantity Per Unit:** The usable or sellable quantity in this item. If you buy this as a single item, the quantity per unit is one (1). If however, you purchase this in a case of twenty four (24), the usable quantity will be twenty four (24). Likewise a single box of gloves would likely have a quantity per unit of one hundred (100). This is an important factor in determining cost per unit pricing, as well as reordering. For example, if its a case, when you receive two cases, it will at 48 to your quantity on hand. So this is an important value not to get wrong, so think about how you use and sell the item before setting this value.

**Color:** The primary color of this inventory item.

**Material:** The primary material of this inventory item.

**Size:** The size of this inventory item. This form is free form, you can type anything from XL for an extra large shirt, or 1.5oz to describe fluid ounces.

**Manufacturer:** The manufacturer of this item.

**Model Number:** The manufacturer's model number for this item.

**UPC Barcode:** The Universal Product Code, printed on the item (if applicable). When the cursor is in this property, quickly scan the item with the barcode scanner to populate it. If no barcode exists, don't worry, a barcode will be created for you automatically when creating the Location Inventory Item. If supplied, this will be used when scanning barcodes to add items to a sale with the barcode scanner.

**Vendors:** Vendor Inventory Items for this item. Which are a list of vendors that you purchase this item from and their prices. Add them from the "Add Vendor" action.

**Employees:** Employee Inventory Items for this item. Which are a list of employees that use this item in your studio for their own needs along with information about how they're used.

**Locations:** Location Inventory Items for this item. Which are a list of your connected studios that also use this item. In this nested list view you're able to see inventory quantity information for the same item in your other connected studios.

### Jewelry Details
By clicking the ellipses (...) button in the Jewelry editor, you will create/edit the item as a jewelry inventory item.

**Jewelry Type:** The jewelry type of this item.

**Gauge:** The gauge of this jewelry or needle.

**Length/Diameter:** The length of needle or length/diameter of the jewelry.

**Gem Setting:** The gem configuration of the jewelry.

### Ordering

**Primary Vendor:** The primary vendor you purchase this item from. A vendor inventory item must exist for that vendor to be available in this list.

**Barcode:** An automatically generated barcode for this item. When a UPC does not exist for the inventory item, this barcode will be used when printing barcodes and scanning the item.

**Sellable:** If checked, the item is a sellable item. Items must be sellable for them to be added to a sale/invoice.

**Sale Price:** The sale price of this item.

**Markup:** The calculated markup for this item using the primary vendor's price for this item.

**Markup Percentage:** The calculated markup percentage for this item using the primary vendor's price for this item.

**Tax:** The sales tax to apply when this item is sold.

**Active:** If checked, the item is active in your studio. If you no longer use or sell the item, you can un-check this box.

**Stock Keeping Unit:** Your studio's internal SKU for this item if applicable.

**Bulk Discount Code:** The bulk discount code for this item.

**Commissionable:** If checked, employees are eligible for a commission on this item and will use their preset merchandise commission.

**Override Employee Commission:** If checked, this item will use it's own preset commission rather than what is set per employee. This is useful if you want to distribute a different commission for particular items.

**Commission Type:** If the commission is being overridden, how the commission is calculated.

- *None*: This item is not eligible for commission.
- *Fixed*: The commission for this item will be a fixed amount, defined in the commission amount property below.
- *Percent (Subtotal*): The commission for this item will be a percentage of the sale price, defined in the commission percentage property below.
- *Percent (Markup)*: The commission for this item will be a percentage of the item's markup value, defined in the commission percentage property below.

**Commission Percentage:** The overridden commission percentage.
Note: This property is only visible if the Commission Type is set to Percent (Subtotal) or Percent (Markup).

**Commission Amount:** The overridden commission amount.
This property is only visible if the Commission Type is set to Fixed.

**Override Points:** If checked, you can specify a different point structure than provided in your studio's default points. This is useful if you want to structure retail points separately from service points, or want to run limited promotions, such as all gold jewelry earns double points.

**Points Type:** The method for calculating points.

- *None*: No points are awarded to a customer.
- *Subtotal*: Points are awarded to a customer based on the subtotal. For example, a 200.00 invoice will earn 200.00 points.
- *Subtotal Multiple*: Points are awarded to a customer based on the subtotal then multiplied by the Points Subtotal Multiple property. For example a subtotal of 200.00 on an invoice with a subtotal multiplier of 2 will earn 400.00 points.
- *Custom*: The amount of points awarded is the static value in the Points Custom property. For example, a 200.00 service with a custom value of 1 will earn 1 point.

**Points Subtotal Multiplier:** The multiplier to apply to the invoice subtotal when the Default Points Type is set to Subtotal Multiple.
Note: This property is only visible if the Points Type is set to Subtotal Multiple.

**Points Custom:** The static point value for each item and service on an invoice when the Default Card Points Type is set to Custom.
Note: This property is only visible if the Points Type is set to Custom.

### Ordering

**Quantity Per Unit:** The inventory item's quantity per unit property, re-displayed here for reference. This value cannot be modified.

**Reorder Point:** The value at which when the on hand count is less than or equal to this value, you would like to reorder more.

**Reorder Units:** How many units you generally reorder.

**Quantity In Order:** This calculated value displays what will go back into your inventory with the specified reorder units. It is calculated as Quantity Per Unit * Reorder Units as a visual reference for you to see if your quantity per unit, as well as reorder units values are correctly configured.

**On Hand:** How many of this item you currently have in inventory.

**Units On Order:** How many units of this item you currently have on order.

**Use Automatic Ordering:** If checked, when the on hand value is less than or equal to the reorder point, the Units On Order will automatically update itself to be the Reorder Units value. REV23 Desktop assumes you'll have ordered the item, and will add it to your items to be received.

**Use Reorder Notification:** If checked, a task will be created for anyone in the built-in Inventory Manager role when the on hand value is less than or equal to the reorder point to notify them they should reorder more.

**Service Types:** A list of service type inventory items linked to this  item.

**History:** A list of history for this item's on hand value. Here you can see when and why the on hand value changed, whether it was sold, a manual change, etc...

> Do you need to put all of this stuff in?
Nope. It's totally up to you.  We realize this is a whole lot of information, but we offer it for those studios who want very in-depth reporting of their inventory. This level of inventory customization allows you to questions such as  "does anodized jewelry sell better than non anodized?" So it all depends on what you as a shop owner are interested in. If you don't care about such things, don't put this information in.

## Actions

### Records Creation Actions

**Receive Order:**

### Tools Actions

**Move To Category:**

**Assign Department:**

**Add Inventory Items To Location Service Types:**

**Connect Inventory Items:**
