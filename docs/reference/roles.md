# Role

## Properties

**Name:** The name of the role. The name is required and must be unique.

**Description:** A description of the role to easily understand the purpose of the role.

**Permission Policy:** A description of the role to easily understand the purpose of the role.

+ *Deny all by default*: All permissions to all objects are disallowed. You then individually assign type permissions to what is allowed.
+ *Read only all by default*: All objects are allowed to be viewed, but not + modified.
+ *Allow all by default*: All permissions to all objects are allowed. You can individually assigned type permissions to what is disallowed.

**Is Administrative:** If checked, the role is an administrative role, meaning the role has full access to everything. Using this is not advised.

**Can Edit Model:** If checked, users in this role can edit the REV23 Desktop Model, including detail view layouts, and other lower level elements of REV23 Desktop.

**Can See All User Objects:** If checked, users in this role will be able to see an unfiltered list of all user objects. If it is unchecked, users will only be able to see objects that are relevant to them. For example, the services list will either show all services (checked), or services performed by the currently logged on user (unchecked).

**Can Print:** If checked, users in this role will be able to print list views and detail views from the File menu.

**Can Export:** If checked, users in this role will be able to export lists to XLS, PDF, etc...

**Users:** The users assigned to this role in the studio you're currently logged on to.
