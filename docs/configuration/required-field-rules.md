# Required Field Rules

Required field rules allow you to customize which properties are required when saving new or existing objects.

## Properties

**Name:** The name of the rule. The name is required and must be unique.

**Object Type:** The object type for this rule. For example, if you want to ensure the Design Description of a service is provided, select **Service**.

**Property:** The specific property you want to ensure is provided.

**Error Type:** The type of error to show if the object's property is not provided.

- *Error*: The object will not be able to be saved until a value is provided.
- *Warning*: The user will be warned that there is no value and offered a chance to correct it, but can ignore it.
- *Information*: The user will be notified that there is no value for the property only.

**Active:** If checked, this rule will be active. You can disable this rule without deleting it by unchecking this box.

**Id:** The ID of the rule. This is required and must be unique. It is automatically generated, but can be modified if desired.

**Custom Message Template:** Change the error message that appears when this rule fails to validate.

**Context IDs** When the rule is validated.
- *Save*: Validate the rule when saving the object.
- *Delete*: Validate the rule when the object is deleting.

**Skip Null or Empty Values:** Only validate the rule if there is whitespace (empty spaces), vs. an actual empty value.

**Invert Result:** Reverse how this rule is validated, for example, show an error when a value is provided.

**Target Criteria (Advanced):** Allows you to specify other rules before attempting to validate this rule. For example, only validate if another property is checked, or if the object is new only.

A text value of `IsNewObject([This])` can be used for validating new objects only.

## Related
- [How To: Add Required Fields](../how-to/add-required-fields.md)