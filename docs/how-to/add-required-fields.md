# How To: Add Required Fields

REV23 Desktop allows you to customize which fields are required when attempting to save an object to meet your business requirements.

In this example, we will demonstrate how to prompt the user to ask the customer if they were referred by another customer when creating their profile, if that field was left blank.

1. Navigate to **Configuration > Required Field Rules**.
2. Click the **New** action.
3. Enter the following values:
    - **Name**: `Referred by is recommended`
    - **Object Type:** `Location Customer`
    - **Property:** `Referred By`
    - **Error Type:** `Warning`
    - **Active:** `Yes`
    - **Custom Message Template:** `Please remember to ask if the customer was referred by another customer.`
    - **Target Criteria (Text):** `IsNewObject([This])`

The name, and custom message template can obviously be customized to your needs, the above are just suggestions.

## Related
- [Configuration: Required Field Rules](../configuration/required-field-rules.md)