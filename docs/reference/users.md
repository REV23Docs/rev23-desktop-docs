# Users (Employees)


## Properties

> See [**Persons**](persons.md) for shared properties of the user/employee object.

## Actions

### Records Creation

**Add Roles:** Displays a list of available roles to add to the user. The same functionality can be found using the Link action in the nested Roles list view.

**Add Service Types:** Displays a dialog for you to create/edit one or more employee service types to the selected employee(s).

### Edit

**Change my Password:** Shows a dialog to change the current user's password. This action is only visible when the employee detail view is showing the record associated with the currently logged on user.

**Reset Password:** Resets the password for the selected user. A dialog will be presented showing a random password that you can either use, or type in a new password. After resetting the password, the employee's "Require a password change on next log on" option will be flagged, requiring them to change their password after logging on with the new password.

### Record Edit

**Add Signature:** Captures the artist's signature from the signature pad. If a signature for this user exists, it will be added to the Consent Form automatically, regardless of the setting to require artist signatures in [My Studio: Options: Signature Pad Options](../configuration/my-studio.md#signature-capture-options).

### Detail View

**Send Cloud Calendar Email:** Send an email to the user containing instructions and access links to their Cloud Calendar. An email address is required.

### Tools

**Connect Employees:** For connected studios only, the connect employees action will allow you to import all or selected employee records from your connected studios into the current studio. This action is available in the employee list view only.

## Connected Studio Behavior

A single employee can exist in multiple studios with different roles, service types, hourly rates, etc... Instead of creating a duplicate user for each of your studios, use the Connect Employees action to bring in select employees from other studios that do not exist in the currently logged on studio. When you open the Employee Detail View, some properties are specific to the current studio, so changing them there will not change them in all studios. You can see each studio the user is connected to in the Employee Detail View's Locations list.