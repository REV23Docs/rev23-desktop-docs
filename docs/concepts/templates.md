# Templates

Templates are special documents in REV23 Desktop that contain placeholders (fields), which are filled with properties from a particular object. For example, consent forms are templates which contain fields from a service object, such as the customer's name, address, driver's licenses, etc... 

Unlike most objects in REV23 Desktop, you create and edit a template's text using the [Template Designer](template-designer.md) and do very little with the Template Detail View itself.

> IMPORTANT: Templates that are built-in to REV23 Desktop, easily identifiable by having an author of REV23, are overwritten each time you install an update to REV23 Desktop. This means that if you make a change to one of the built-in templates, the change will be reverted when you do an update and replaced with our version of the template. 
>
> If you wish to make minor changes to our templates, or use them as a guide to make your own, you must **Clone** the template first and edit your copy. This ensures that it will not be overwritten during a REV23 Desktop update. 
> 
> Additionally, occasionally we will make changes to REV23 Desktop that will require you to edit your custom templates to accommodate the changes. For example, we may remove or rename a property in the database which you were using in your template. After major updates to REV23 Desktop you should review your templates to ensure they're still working as you expect them to.

## Translations

Each Template can have a translated value for the recipients preferred language. To create a translation, click the New button in the Translations nested list view of the Template you wish to translate, select the Language and enter the value to use for that language. Then, use the Show Template Designer action on the each translation.

## Related Topics

+ [Concepts: Template Designer](template-designer.md)
+ [Concepts: Aftercare Forms](aftercare-forms.md)
+ [Concepts: Consent Forms](consent-forms.md)
+ [Configuration: Templates](../configuration/templates.md)