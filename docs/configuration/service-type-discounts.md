# Service Type Discounts

Service Type Discounts provide a way to group particular service types, when combined, into a single discount group. For example, if you would like to automatically discount a second piercing, three or more piercings, etc... you can accomplish this here. 

To work, you will need to create at least one Service Type Discount, having at least one tier defined. The tier is where you'll define the quantities and discount to be applied once matched. 

You can provide multiple tiers where you can create a structure of discounts based on their quantity, such as two piercings = 10% off, three piercings = 15% off, four to five piercings 20% off, six or more piercings 25% off.

After you define the discounts, will assign the Bulk Discount Code of each Service Type you wish to apply to this discount. When services are linked to an sale/invoice, the invoice will search for match discount codes and automatically apply the discount for you.

## Properties

**Name:** The name of the service type discount. The name is required and must be unique.

**Active:** If checked, this discount code will be active. If you want to run limited time promotions, you can easily make the code active during the promotion, and make it inactive once the promotion ends.

**Customer must match for discount to apply:** If checked, the customer on all services added to the invoice must be the same in order for a match to occur. For example, if a parent brings in two daughters to have their lobes pierced. If you have a tier where there is discounts for four piercings, would you like it to apply here with four lobes, or would you prefer to only give a discount of two piercing for each child?

**Don't apply discount of a manually applied discount is greater:** If checked, if a service has a discount that was manually entered (say from another promotion you may be running, or a coupon), this discount will not be applied if it is less than what was entered at the time of the service. If you always want bulk discount codes to rule, regardless of coupons, leave this unchecked.

## Connected Studio Behavior

A service type discount can exist in multiple studios. Instead of creating duplicate discount codes you should link to already existing discounts to each studio they apply to. Use the Link action in the Locations tab to add the code to additional studios.

