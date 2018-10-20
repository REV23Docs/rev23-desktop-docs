# Troubleshooting: Missing commissions

Problem
When running a payout report, or attempting to payout a user, services are missing.

## Solution 1
The most common cause of this problem is that the user is not properly configured to receive a commission for the missing service type(s). Services where the commission would be zero do not appear on payout reports.

As the Administrator user, open the Service Detail View of the Service that is missing, and inspect the payout information. Is there a commission set? If not, this user does not have a properly configured Employee Service Type record for the selected service type.

Note that after you modify the commission for that Employee Service Type, it does not retroactively apply to existing services. If you wish to include the missing services after correcting the user's commission, you can return to each service individually for that user and either modify the Employee or Service Type property, then revert it back to the correct value. This will refresh the configuration for that service, including payout data.

## Solution 2
If you've verified that the user is being paid a commission on that service but it's still not showing up on payout reports, it is likely being filtered by the Use Business Hours for Reporting option in Locations and My Studio. 

This option is primarily used for studios who are open past midnight which need services that occur past midnight to be reported on the previous business day. As a result, when this option is enabled, REV23 Desktop strictly filters services on reporting to those exact business hours. So if your hours at 12PM - 10PM, and a service starts at 10:01 PM, it will be excluded from reports. If you do not require such strict reporting, disable this option, or manually adjust the start time of the service to occur within your business hours.