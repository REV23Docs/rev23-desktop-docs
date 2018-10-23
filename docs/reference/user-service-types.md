# User Service Types (Employee Service Types)

User Service Types are objects that link a User (Employee) to a particular Service Type, and describes how an artist is paid for each service.

## Properties

**Service Type:** The service type you're creating or modifying for this employee.

**License Number:** The employee's issued license number to perform this service type.

**License Expiration Date:** The expiration date of this employee's license. When specified, you will be warned when creating a service of this type once the expiration is sixty (60) days away from the current date, then, every ten (10) days afterwords until there is only ten (10) days remaining, at which point you will be warned every day.

**Amount:** The fixed amount to charge for this service when being performed by this artist. This value is only used if the Service Type's Pricing Source is set to 'Fixed - Employee'. This is useful if you have levels of piercers that charge a different amount for the same type of piercing (i.e. master piercer, apprentice, etc...).

**Area Rate:** For tattoos, the rate to charge per square inch, foot, etc... (whichever measurement unit you've decided on). This value is only used when the service's pricing source is set to 'Area'.

**Hourly Rate:** For tattoos, the rate to charge per hour. This is calculated by the service's start and end time.

**Hourly Rate Minimum:** When using an hourly rate, the minimum amount to charge in the event the rate with the service's total time is less than the artist's minimum.

**Rounding Direction:** When the commission is calculated using an hourly rate and the start and end time of the service, you can round the time up or down to the nearest quarter, half or full hour.

- *None*: The total hours will not be rounded, it will be an exact value of time.
- *Up*: The total hours will be rounded up to the nearest interval, specified below.
- *Down*: The total hours will be rounded down to the nearest interval, specified below.

**Rounding Interval:** When the rounding direction is set to a value of Up or Down, you need to specify the interval in which the time will round to.

- *Quarter*: Round to the nearest 15 minute interval.
- *Half*: Round to the nearest 30 minute interval.
- *Full*: Round to the nearest 60 minute interval.

Taking a service end time of 4:05 PM / 16:05, the following scenarios will show you how REV23 Desktop will round the time.

Combination | Result
--- | ---
Up/Quarter | 4:15 PM / 16:15
Down/Quarter | 4:00 PM / 16:00
Up/Half | 4:30 PM / 16:30
Down/Half | 4:00 PM / 16:00
Up/Full | 5:00 PM / 17:00
Down/Full | 4:00 PM / 16:00

Note: This property is only visible when Rounding Direction is set to Up or Down.

**Commission Type:** The portion of the commission the employee will take when this service is performed in the Employee Payout. Think hard about how your commissions work before choosing this value, as you will configure the artist/piercer commission on their Employee Service Type record, so you'll obviously want everything to match up in the end. For example, setting this value to a percentage of 60%, then having your studio configured at 50% would equal 110%, which obviously wouldn't work, but REV23 Desktop will not stop you in this scenario.

- *None*: No Employee Payout will be calculated. Any remainder left over after the studio's commission has been calculated will be placed in the Remaining Payout.
- *Fixed*: The Employee Payout will be a fixed amount, provided in the Commission Amount property. This option is less common. Any remainder left over after the studio's draw has been calculated will be placed in the Remaining Payout.
- *Percent*: The Employee Payout will be a percentage of the service amount, provided in the Commission Percentage property. Any remainder left over after the studio's draw has been calculated will be placed in the Remaining Payout. This is the most common commission type, as it easily allows you to specify the artist/piercer's commission percentage.
- *Remainder*: The Employee Payout will be whatever amount is remaining after the studio's draw has been calculated.
- *Dynamic*: The Employee Payout will be dynamically adjusted using the dynamic commission set on this User Service Type.

**Commission Percentage:** The percentage of the employee payout. This property is only visible if the Commission Type is set to Percent.

**Commission Amount:** The amount of the employee payout. This property is only visible if the Commission Type is set to Fixed.

**Dynamic Commission:** The dynamic commission to use. This property is only visible if the Commission Type is set to Dynamic.

## Connected Studio Behavior

Location Employee Service Types: A list showing the specific service types options for this service type in all of your connected studios. This list view is only visible when connected studios are enabled.