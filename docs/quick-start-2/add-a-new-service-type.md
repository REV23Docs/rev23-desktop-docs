# Quick Start Vol 2: Add a new service type

Unfortunately, many of the tattoos that were made in Gotham City were performed by some... less than reputable sources. Harley thinks adding a removal service will be beneficial so they can start making room for some better pieces on their new clientele. Tattoo removal comes in a variety of forms these days, but the girls know from experience, when you want a tattoo removed, there is no better way than their magical acquaintance, Zatanna!

> You will need to be logged on as the Administrator or a Manager to proceed with this topic.

## Create Consent and Aftercare Forms
Since this is a brand new service type we will need to create a release form and aftercare form for the removal.

1. Navigate to **Configuration > Templates**.
2. Click the **New** action.
> Alternatively, you could **Clone** an existing template and customize it as needed rather than starting from a blank template.
3. Fill out properties of the Template.
    + **Name:** `Consent Form for Tattoo Removal`.
    + **Data Type:** `Service`
4. Click the **Show Template Designer** action.
5. Create the document that will become the template. See [Templates](../concepts/templates.md) or [Modify Consent Form](../quick-start/modify-consent-form.md) for guidance.
6. Click the **Save** action in the Template Designer to save your changes.
7. Click the **Save & Close** action on the Template Detail View.

Repeat this process to create an Aftercare Form for this service type.

## Create a new Service Category and Department

Since removal is neither a tattoo nor piercing, we should separate it into its own category and department for ease of use as well as better reporting.

> If you are creating a new Piercing, or some other Service Type that applies to an existing Category or Department, you would otherwise skip these steps.

1. Navigate to **Configuration > Service Departments**.
2. Click the **New** action to create a new Service Department.
3. Type a **Name** for the department. We'll use `Tattoo Removal`.
4. Click the **Save & Close** action to save the Service Department.
5. Navigate to **Configuration > Service Categories**.
6. Click the **New** action to create a new Service Category.
> Hint: If you have a category selected in the tree view before clicking the New action, the newly created category will have the selected category set as its Parent Category, making this a subcategory. In this case, we want our new category to be at the root level, meaning it has no parent. If the Parent Category is already set when the detail view opens, you can click the X button on the right hand side of the Parent Category editor to clear it.
7. Type a **Name** for the category, we'll use `Tattoo Removal`.
8. Since we want Removal to be it's own category, ensure there is no value set for the **Parent Category** property. Click the X button on the Parent Category editor to clear any value there.
9.  Select our newly created `Tattoo Removal` Department for the **Default Service Department** value.
10. Click the **Save & Close** action to save the Service Category.

## Create the Service Type

Now we need to create the actual Service Type which directs REV23 Desktop on how to handle the pricing, commission, consent forms and all other behaviors of this service type.

1. Navigate to **Configuration > Service Types**.
2. Select our newly created `Tattoo Removal` category we created in the previous section.
3. Click the **New** action to create a new Service Type.
> Notice after clicking new, both the **Category** is selected, as well as the **Department**. This happened because we previously set the **Default Service Department** value when we created this category, which means any service type we create in this category will automatically use this **Department**.
4. Fill out the following properties:
    + **Name:** `Zatanna's Mystical Tattoo Removal`
    + **Required Age:** `18`
    + **Healing Time** `24 hours` *It is mystical after all*.
    + **Consent Form:** Select the newly created `Consent Form for Tattoo Removal` created in the previous section.
    + **Aftercare Form:** Select the newly created `Aftercare Form for Tattoo Removal` created in the previous section.
    + **Default Pricing Type:** `Fixed Location` which means each session will always be a set amount.
    + **Amount:** `$200.00`
    + **Draw Type:** `Remainder`. This means the shop will draw whatever is remaining after the User's commission.
5. Click **Save & Close** to save this record.

Of course there is one final last and important step after we've created this Service Type. Are you able to identify it?

If you've guessed *"You need to add Zatanna as a Service Provider for this service type"* you're right! Since Zatanna is doing the heavy lifting with her magical abilities, and doesn't require supplies, Harley is letting her keep 80% of each removal.

[Add Zatanna as a Service Provider](../quick-start/add-a-tattooer.md) for the Tattoo Removal service type, giving her a **Commission Percentage** of `80%`.
