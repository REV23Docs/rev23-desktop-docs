# Custom Texts

Custom Texts are special text values read by REV23 Desktop. Custom texts are primarily used with customer facing reports provided by REV23 Development, Inc.. In cases where a user may want to make a change to text on a report, such as the deposit policy on the deposit receipts, custom text allows you to edit that text without having to modify the report itself. It is rare that you would create a new custom text entry without the direction of support. As new reports are added, additional built-in custom texts may appear.

> The custom texts that are built-in are required by the system and cannot be deleted or renamed.

## Custom Text Properties

**Key Name:** The key name of the custom text. The key name is required must be unique. The key name is how REV23 Desktop locates the custom text.
Note: The key names of built-in custom texts cannot be edited and will appear disabled.

**Friendly Name:** The friendly name of the custom text for easier identification. The friendly name is required must be unique.
Note: The friendly names of built-in custom texts cannot be edited and will appear disabled.

**Value:**
The text you want to display when the custom text is retrieved. You can modify this value as necessary.

## Translations

Each Custom Text can have a translated value for the recipients preferred language. To create a translation, click the New button in the Translations nested list view of the Custom Text you wish to translate, select the Language and enter the value to use for that language.

## Connected Studio Behavior
Custom Texts are location aware. All studios will read from the text in the value property. If you wish to override a specific location you can go to the locations tab, and add a new Location Custom Text from the nested list view and provide the location and the value. If a location override cannot be found, the default will be used.