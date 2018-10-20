# Service Types

Service Types represent the types of services or procedures you perform in your studio. Each service type has its own set of options such as which consent form to use, and how pricing works.

## Employee Service Types

Each artist that performs services in your studio should be assigned to each service type they perform. This is how REV23 knows who is able to do what, and what their commission should be for each. For example, how an artist gets paid for a tattoo vs. how they get paid for different piercings.

See Employee Service Types for more information.

## Service Type Properties

**Name:** The name of the Service Type. The name is required and must be unique.

**Family:** The body modification family of this service type.
- *Tattoo*
- *Piercing*
- *Other*
- *Permanent makeup*

**Category:** The category of the service type. The category is required.

**Department:** The department of the service type.

**Healing Time:** The typical healing time for this service type. The healing time appears on the default aftercare forms, so while not required, it's a good idea to fill this out. Useful to fill out for adding to [aftercare forms](../concepts/aftercare-forms.md).

**Downsize/Change Out Time:** The typical amount of time before the piercing should be downsized. Useful to fill out for adding to [aftercare forms](../concepts/aftercare-forms.md).

**Required Age:** The minimum age the customer needs to be to provide their consent for this service type.

**Consent Form:** The [consent form](../concepts/consent-forms.md) template to be used for this service type.

**Guardian Consent Form:** The [consent form](../concepts/consent-forms.md) template to be used for this service when the customer is younger than the required age. If no guardian consent form is specified, it is assumed you are not allowed to perform that service type on minors and REV23 Desktop will prevent you from proceeding with the service.

**Aftercare Form:** The aftercare form template to be used for this service type.

**Require Placement Area:** If checked, you will be required to manually fill in the placement area on the service before you can save the record. This is recommended if your consent form requires the placement area to be provided.

**Require Amount:** If checked, you will be required to have specified an amount for a service before you can save the record.

**Default Pricing Type:** The default pricing type controls how this service type is priced.

- *Custom*: The price is determined per service. This is the best option for tattoo service types because the amount is variable.
- *Fixed - Location*: The amount is a fixed shop amount, provided in the Amount property. This option is best if you charge a standard amount for each service of this type and is unaffected by who is performing it.
- *Fixed - Employee*: The amount is predetermined by the Amount property in the Employee Service Type record. This option is best if you have levels of piercers that charge a different amount for the same type of piercing.
- *Duration*: The amount is calculated based on the Employee's hourly rate and the Total Hours that are manually entered in the service.
- *Time (Start/End)*: The amount is calculated based on the Employee's hourly rate and the start and end time of the service.
- *Area/Size*: The amount is calculated based on the Employee Service Type's area rate and the height/width values on the service.

**Amount:** The amount of this service type. This property is only visible if the **Default Pricing Type** is set to *Fixed - Location*.

> REV23 Recommendation: If you're specifying an amount for a piercing, specify the cost of the piercing only, do not include the price of the jewelry. Instead, you can configure any inventory item to use a special price when it is used as part of a service type. That amount should control inflating the cost. This prevents the need for having to create multiple versions of the same service type just to handle different jewelry (standard vs premium) See the Service Type Inventory Items topic for more information.

**Discount Code:** The service type bulk discount code to match when a service of this type is added to an invoice.

**Tax:** If required, specify the tax to be used for this service type and calculated into its total price.

**Draw** Type: The portion of the commission the studio will take when this service is performed in the Location Payout. Think hard about how your commissions work before choosing this value, as you will configure the artist/piercer commission on their Employee Service Type record, so you'll obviously want everything to match up in the end. For example, setting this value to a percentage of 50%, then having an artist configured at 60% would equal 110%, which obviously wouldn't work, but REV23 Desktop will not stop you in this scenario.

- *None*: No Location Payout will be calculated. Any remainder left over after the employee's commission has been calculated will be placed in the Remaining Payout.
- *Fixed*: The Location Payout will be a fixed amount, provided in the Draw Amount property. This option is less common. Any remainder left over after the employee's commission has been calculated will be placed in the Remaining Payout.
- *Percent*: The Location Payout will be a percentage of the service amount, provided in the Draw Percentage property. Any remainder left over after the employee's commission has been calculated will be placed in the Remaining Payout.
- *Remainder*: The Location Payout will be whatever amount is remaining after the artist/piercer's commission has been calculated. This is the most common option for draw type, as it easily allows for variable commission rates for each artist/piercer.

**Draw Percentage:** The percentage of the location payout. This property is only visible if the Draw Type is set to Percent.

**Draw Amount:** The amount of the location payout. This property is only visible if the Draw Type is set to Fixed.

**Dynamic Commission:** If applicable, the dynamic commission to be used for this service type. To use dynamic commissions for this service type, this value is required and the Commission Type on the Employee Service Type must be set to dynamic for the artists/piercers you'd like to participate in dynamic commissions.



**Override Points:** If checked, you can specify a different point structure than provided in your studio's default points. This is useful if you want to structure service points separately from retail points, or want to run limited promotions. For example, you may have a weekend where all ear piercings earn double points. You could then override points on your service types for lobe, tragus, helix, etc..., then remove the override after the promotion has ended.

**Points Type:** The method for calculating points.

- *None*: No points are awarded to a customer.
- *Subtotal*: Points are awarded to a customer based on the subtotal. For example, a 200.00 invoice will earn 200.00 points.
- *Subtotal Multiple*: Points are awarded to a customer based on the subtotal then multiplied by the Points Subtotal Multiple property. For example a subtotal of 200.00 on an invoice with a subtotal multiplier of 2 will earn 400.00 points.
- *Custom*: The amount of points awarded is the static value in the Points Custom property. For example, a 200.00 service with a custom value of 1 will earn 1 point.

**Points Subtotal Multiplier:** The multiplier to apply to the invoice subtotal when the Default Points Type is set to Subtotal Multiple.
Note: This property is only visible if the Points Type is set to Subtotal Multiple.

**Points Custom:** The static point value for each item and service on an invoice when the Default Card Points Type is set to Custom.
Note: This property is only visible if the Points Type is set to Custom.

**Description:** The description of this service. If you wanted to provide technical information about the procedure to the customer on the aftercare form for example, you could enter that information here.

### Follow-up Options

**Follow Up Days:** When a follow up task is created, the task will be set for this many days from the service date. For example, if you'd like to follow up two weeks later, set this value to 14.

**Create Follow Up Task:** If checked, a task will be created when the service is finished and will be assigned to the artist/piercer for them to follow up with the client.

**Send Text/Email Follow-up:** If checked, the Virtual Receptionist will run its default follow-up flow for text and email reminders for this service type. Uncheck this for service types that do not require follow-ups.

See [Service Follow-Ups](../concepts/service-follow-ups.md) for more information.

### Piercing Options

> These properties are only visible if the **Family** property is set to *Piercing*.

**Default Gauge:** If applicable, you can specify the default gauge this piercing is generally done with. When the service is created for this type, it will use this gauge, you can then override it per service as needed.

**Default Length/Diameter:** If applicable, you can specify the default length/diameter this piercing is generally done with. When the service is created for this type, it will use this length/diameter, you can then override it per service as needed.

**Default Anchor Rise:** If applicable, you can specify the default anchor rise this piercing is generally done with. When the service is created for this type, it will use this rise, you can then override it per service as needed.