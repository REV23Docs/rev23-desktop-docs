# Bulk Discount Codes

Bulk Discount Codes allow you to automatically apply a discount to your sellable items based on their quantity. You assign one or more items to a bulk discount code. When added to a sale/invoice, the items will look for other participating items, and apply the appropriate discount.

You can create multiple tiers in the discount code which relate to the discount to apply at each quantity level. For example a quantity of 2 to 4 = 5% off, 5 to 9 = 10% off and 10 and up = 20% off.

In order to work, you need to create a bulk discount code with at least one tier with a starting quantity of 2 or more. Then assign the bulk discount code to each inventory item you wish to participate in the discount.

## Bulk Discount Code Properties

**Name:** The name of the bulk discount. The name is required and must be unique.

**Active:** If checked, this discount code will be active. If you want to run limited time promotions, you can easily make the code active during the promotion, and make it inactive once the promotion ends.

**Don't apply discount of a manually applied discount is greater:** If checked, if an item has a discount that was manually entered (say from another promotion you may be running, or a coupon), this discount will not be applied if it is less than what was entered at the time of the sale. If you always want bulk discount codes to rule, regardless of coupons, leave this unchecked.

**Tiers:** List of Bulk Discount Tiers that apply to this discount code.

### Bulk Discount Code Tier Properties

**Discount Percentage:** The discount percentage to apply to each matching item.

**Start Quantity:** The minimum quantity of items for this tier to be applied.

**End Quantity:** The maximum quantity of items for this tier to be applied before searching for the next tier.

**And Up:** If checked, the end quantity is infinite, meaning there are higher discount tiers after this.

## Connected Studio Behavior
A bulk discount code can exist in multiple studios. Instead of creating duplicate discount codes you should link to already existing discounts to each studio they apply to. Use the Link action in the Locations tab to add the code to additional studios.

