# Templates

Templates are special documents in REV23 Desktop that contain placeholders (fields), which are filled with properties from a particular object. For example, consent forms are templates which contain fields from a service object, such as the customer's name, address, driver's licenses, etc... 

Unlike most objects in REV23 Desktop, you create and edit a template's text using the [Template Designer](template-designer.md) and do very little with the Template Detail View itself.

> IMPORTANT: Templates that are built-in to REV23 Desktop, easily identifiable by having an author of REV23, are overwritten each time you install an update to REV23 Desktop. This means that if you make a change to one of the built-in templates, the change will be reverted when you do an update and replaced with our version of the template. 
> 
> If you wish to make minor changes to our templates, or use them as a guide to make your own, you must **Clone** the template first and edit your copy. This ensures that it will not be overwritten during a REV23 Desktop update. 
> 
> Additionally, occasionally we will make changes to REV23 Desktop that will require you to edit your custom templates to accommodate the changes. For example, we may remove or rename a property in the database which you were using in your template. After major updates to REV23 Desktop you should review your templates to ensure they're still working as you expect them to.


## Template Properties

**Name:** The name of the template. The name is required and must be unique.

**Author:** The user who created the document. This is pre-populated with the user logged in at the time. This property is mainly used to quickly identify templates created by REV23 so they are not directly modified, as changes made to them will be overwritten with each update.

**Data Type:** The data type indicates what type of object the template will be used for. This value  controls which property will show up in the Template Designer.

+ *Appointment*: Used for templates such as email & text message appointment reminders. Gives you access to properties related to a single appointment.
+ *Customer*: Generic template for a customer record, such as a letter directly to the customer.
+ *Service*: Used for consent forms and aftercare instructions. Gives you access to properties related to a single service.
+ *Special Order Item*: Used for email & text message communications for alerting customers that their special order has arrived.

> Editing the Template with the Template Detail View only allows you to edit the template metadata. To edit the contents of the template itself use the [Template Designer](template-designer.md).


## Related Topics

+ [Concepts: Template Designer](template-designer.md)
+ [Concepts: Aftercare Forms](aftercare-forms.md)
+ [Concepts: Consent Forms](consent-forms.md)
+ [Configuration: Templates](../configuration/templates.md)