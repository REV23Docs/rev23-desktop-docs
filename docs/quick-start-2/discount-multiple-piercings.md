# Quick Start Vol 2: Discount multiple piercings

Multi-service discounts
In Quick Start Vol. 1, Harley set the price of an ear lobe piercing to $20.00. As expected, when Selina performed a walk-in piercing and set the quantity to two (2), the client's total was $40.00. 

Selina has suggested a discount when having two or more piercings done in the same sitting. REV23 Desktop can handle this easily with Service Type Discounts. In this topic, we'll set REV23 Desktop to discount the second piercing by $5.00 automatically once the service is added to a sale.

 You will need to be logged on as the Administrator or a Manager to proceed with this topic.

Create the discount

1. Navigate to Configuration -> Service Type Discounts and click the New action to show the Service Type Discount Code Detail View.

2. Choose a Name for the discount. We'll call ours $5 discount on 2+ piercings



3. Click the New action in the Tiers nested list view to create a new Service Type Discount Tier Detail View.

Check the First Is Full Price checkbox editor.
Set the Start Quantity editor to 2.
Check the "And up" checkbox editor.
Set the Discount Type editor to Fixed.
Set the Discount Amount editor to $5.00.



So, what did we just do? We've created a new tier that in plain english says: When the quantity is two or more, charge full price for the first one, then discount each additional service $5.00. You can create as many tiers as you'd like. For example, 2-4 with a $5.00 discount, 5-7 with a $10.00 discount and 8+ with a $15.00 discount.

Can you also see how we could have accomplished the same result without the use of the First Is Full Price? If you guessed setting the Discount Amount to $2.50, you'd be correct.

Configure Service Type to use the discount

Now we have to tell our service type(s) to use this Discount Code.

4. Navigate to Configuration -> Service Types and double click the Lobe service type to open the Service Type Detail View. Set the Discount Code editor to our newly created discount code.

 Hint:  You can use the same discount code for multiple service types.



Testing the results

5. Begin a new Service, and set the Service Type to Lobe and set the Quantity to two (2). The Service Detail View will show the subtotal is $40.00, which is to be expected, since the discount is applied when we add it to a sale.



6. Add the service to a new sale by clicking the Sale action in the Service Detail View. Now, you can see the balance is $35.00, and examining the nested Services List View shows the discount was properly applied.
 


If you return to the Service Detail View you will see the Fixed discount of $5.00 has applied.



We could now reuse this same discount code on all applicable service types, or create as many discount codes as we need!