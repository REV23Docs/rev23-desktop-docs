# Quick Start Vol 2: Incentivize artists

Incentives using dynamic commissions
Pam has been turning down a lot of tattoo work since the shop opened. The citizens of Gotham City don't seem to share her same affection of floral tattoos, despite how much she tries to convince them otherwise. Harley thinks creating a dynamic commission (also known as a sliding scale commission), which will increase her commission the more she tattoos, may create the incentive Pam needs to stop turning away tattoos that aren't flower and plant themed.

We previously set Pam to have 50% commission on tattoos she performs when we added her as a service provider. We will modify her commission settings to use our new dynamic commission. Using this new commission type, her commission will adjust each week based on her revenue. Her new pay structure will be as follows:

50% for $0 - $1,999
55% for $2,000 - $2,499
60% for $2,500 or more.

 You will need to be logged on as the Administrator or a Manager to proceed with this topic.

 Note: Dynamic Commissions use the First Day Of Week setting in Studio Options. This setting determines the date when a new week begins and the hashed total of services resets.

1. Navigate to Configuration -> Dynamic Commissions and click the New action to create a new Dynamic Commission Detail View.

2. Type a Name for this Dynamic Commission. We'll use Tattoo Dynamic Commission.

3. Click the New action in the Tiers nested list view to create a new Dynamic Commission Tier Detail View. The tiers describe each level of this dynamic commission.

4. We need to create each tier for this dynamic commission. We'll start at the lowest first. Set the following editor's values.

Commission Percentage: 50%
Start Amount: $0.00
End Amount: $1,999.99
And Up: Unchecked

Save & Close this tier.

5. Create two (2) more tiers with the values below. When complete, Save & Close the Dynamic Commission Detail View.

Commission Percentage: 55%
Start Amount: $2,000.00
End Amount: $2,499.99
And Up: Unchecked

Commission Percentage: 60%
Start Amount: $3,000.00
And Up: Checked



Notice our use of the .99 cents in the End Amount of each tier. While you could leave that off and probably be fine, this ensures we have no gaps as Pay moves from tier to tier. Finally, by checking the And Up editor in the last tier, we're signaling that anything above $2,500 is the final tier, the text equivalent of saying "$2,500+" or "$2,500 and up".

Now, we need to make a minor change to Pam's Tattoo Employee Service Type record, to signal that rather than paying her a flat percentage commission as we were before, she will participate in this Dynamic Commission.

6. Navigate to Security -> Employees and double click Pam to open her Employee Detail View.



7. Click the Service Types tab to show Pam's Service Types that we configured in the Adding a service provider topic. Double click the Tattoo service type to open the Employee Service Type Detail View.



8. Change the Commission Type editor to Dynamic, and set the Dynamic Commission editor that appears to our newly created Dynamic Commission. Save & Close this detail view, as well as the Employee Detail View.

> Hint: If all users that perform this service type will use the same dynamic commission, you can instead set the Dynamic Commission property on the Service Type record in Configuration -> Service Types. By setting it on the employee level, as we've done here, we would be able to create different dynamic commissions based on abilities and experience. For example, some studios may have a Class A, Class B, and Class C commission structure, where the demands of Class C are much harder to meet than the Class A tiers. However, in either scenario, you still must change the Dynamic Commission Type for each employee as we've done in this step.



We're done! What you'll notice now is, when you create a new tattoo service for Pam, her Commission Type will be Percent, however, her commission percentage will be set to 0%. Once the service is saved, REV23 Desktop will look at her other services that participate in this same sliding scale commission for that week and adjust the commission amount appropriately. At the beginning of the next week, her totals will reset to $0.00 and she will again be at a 50% commission.

Upon creating this Dynamic Commission, it will not immediately update past services for the current week, because at the time those services were created, they did not participate in this dynamic commission. It is advised you wait to enable dynamic commissions until the start of a new week before any services have been performed. As a work around, you could open each Service Detail View for the current week that you wish to update, and change either the service type or employee editors to a different value, then change them back to. Performing this step causes the service to update its commission values to the current configuration for that service type and employee.