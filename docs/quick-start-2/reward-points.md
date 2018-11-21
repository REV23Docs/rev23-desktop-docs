# Quick Start Vol 2: Reward points

The referral program seems to be helping drive traffic into the studio, and Gotham's citizens are finally starting to accept the girl's new venture and receiving some awesome tattoos and piercings. Harley wants to reward her loyal customers by enabling Reward Points.

Rewards work like this: For each purchase a customer is awarded a certain number of points, generally based on the subtotal of a purchase. For example, $100.00 = 100 points, though you can customize this.

After a customer has earned enough points they will be redeemed for a credit that can be used just like a [Deposit/Credit](../concepts/deposits-and-credits).

Configuration is simple once you figure out these things.

- **A:** How much will the redeemed credit be worth?
- **B:** How much does the client need to spend to earn that credit?

REV23 requires the conversion rate of a point to an actual dollar. Which is **A** *divided by* **B**, *multipled by* **100**.

`(A / B) * 100`

In the case of Gotham City Tattoo, Harley will reward a customer with $5.00 for every $100.00 they spend.

So, five (dollars) divided by one-hundred (dollars)

`$5.00 / $100.00 = 0.05`

Take the result or 0.05 and multiply by 100.

`0.05 * 100 = 5.00%`

So **5%** is our conversion rate which we will need to configure REV23 Desktop.

1. Navigate to **Configuration > My Studio**.
2. Click the **Options** tab.
3. Click the **Points** tab.
4. Set the following properties:
    + **Enable Points:** `Yes`
    + **Default Points Type:** `Subtotal`
    + **Point Conversion Rate:** `5%`
    + **Auto Redeem Points Threshold:** `$5.00`
5. Click the **Save & Close** action.

Points are accumulated for each sale. You can configure each service type and retail item to override how their Points Type works. For example, if one weekend you want to offer double points on all Nose piercings, you could set that service type's **Points Type** to `Subtotal multiple` and set the **Multiplier** to `2`.

Once the customer has enough points to redeem the $5.00 credit, the points will be "cashed out" and a new credit will be created.
