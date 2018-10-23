# Dynamic Commissions

Dynamic Commissions, often referred to as sliding scale commissions, are an optional way to handle your artists commissions based on their the total revenue they have brought in for the week. They create an incentive for your artists to work all week long, bringing in as much revenue as they can, in order to increase their commission each week.

They work like this: You create a Dynamic Commission, and add tiers to it. Each tier represents a commission percentage, and the dollar range required to achieve that commission. As an artist begins tattooing for the week, they start at their base  commission. As the week progresses, the more tattoos they do, the higher the commission they can earn as they move through each tier. Once they enter a new tier, all of the week's previous tattoos will then adjust to reflect the new commission.

Finally, at the beginning of the week, they restart back at zero and will start over again.

Note: You can change the first day of the week that dynamic commissions use in your studio settings.

After creating a dynamic commission you must set the Dynamic Commission property on each Service Type you wish the commission to apply to and additionally on each Employee you must set each of their Employee Service Types commission type to Dynamic. 

## Properties

**Name:** The name of the dynamic commission. The name is required and must be unique.

**Dynamic Commission Mode:** The behavior to use when calculating a dynamic commission tier.

- ***Day***: The target values must be accomplished in a single day. Services for that day will all adjust their commission to the appropriate tier. These totals will reset at the end of each working day.
- ***Week to Date***: Target values must be accomplished in a single week. Services for that week will all adjust their commission to the appropriate tier. These totals will reset at the end of each week.
- ***Week Forward***: Target values must be accomplished in a single week. Service commissions will only adjust to the new commission going forward for the week, rather than adjusting each previous service. These totals will reset at the end of each week.

**Tiers:** The tiers nested list view is used to create or edit tiers within this Dynamic Commission.

## Dynamic Commission Tiers

**Commission Percentage:** The commission percentage that will be earned for all services during the week once the artist enters this tier.

**Start Amount:** The beginning amount of the range for this tier. When creating a new dynamic commission, you will always want a tier that starts at a zero amount. Each tier's start amount should be one cent (0.01) greater than the previous tier's end amount. The start amount is required to be greater than or equal to zero.

**End Amount:** The high end of the range for this tier. The end amount is required to be greater than zero only when the And Up setting is unchecked. If the And Up property is checked, this value will be zero and disabled.

**And Up:** If checked, this will act as the last tier in the dynamic commission. If they clear this value there is no higher commission that can be earned. It is the equivalent of verbally saying "$3,000+" or "$3,000 and up."