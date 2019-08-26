# Taxes

Tax configuration allows you to define the various tax rates that you must collect on services and sale items. You can define multiple tax rates and select which to use for each service type and location inventory item.

## Properties

**Name:** The name of the Tax. The name is required and must be unique.

**Rate:** The tax rate for this tax.

**Calculation Type:** The method used to apply taxes to a sale or service.

+ _Before Discounts_: The tax will be calculated after discounts.
+ _After Discounts_: The tax will be calculated before discounts are applied.

**Midpoint Rounding:** The method used to round the tax when between two numbers.

Consider a tax with rate of 8.25% and an item priced at $10.00. 

+ _To nearest even number_: The tax would be $0.82.
+ _Away from zero_: The total would be $0.83.

## Actions

### Tools

**Connect Taxes:** Use this action to display taxes from other connected studios that you which to connect to the current studio you're logged into. This is useful if you have two or more studios that share the same tax rate. If it ever increases, you need to only update the tax once, and the others will use the updated rate.

## Connected Studio Behavior
Taxes are location aware. You can add or remove a tax to multiple locations using the Link/Unlink actions in the nested list view without needing to create another tax record for the other studio. You can also use the Connect Taxes action in the tools tab of the tax list view.