# Templates

Templates are special documents in REV23 Desktop that contain placeholders (fields), which are filled with properties from a particular object. For example, consent forms are templates which then have fields such as the customer's name, address, driver's licenses, etc... populated and merged into the document. Unlike most objects in REV23 Desktop, you create and edit a template's text using the Template Designer and do very little with the Template Detail View itself.

> Important Note: Templates that are built-in to REV23 Desktop, easily identifiable by having an author of REV23 Development, Inc., are overwritten each time you install an update to REV23 Desktop. This means that if you make a change to one of the built-in templates, the change will be reverted when you do an update and replaced with our version of the template. If you wish to make minor changes to our templates or use them as a guide to make your own, you must Clone the template first and edit your copy. This ensures that it will not be overwritten during a REV23 Desktop update. Additionally, occasionally we will make changes to REV23 Desktop that will require you to edit your custom templates to accommodate the changes. For example, we may remove or rename a property in the database which you were using in your template. After major updates to REV23 Desktop you should review your templates to ensure they're still working as you expect them to.

## Template Properties

> Note: Editing the Template with the Template Detail View only allows you to edit the template metadata. To edit the contents of the template itself use the "Edit Template" action.

**Name:** The name of the template. The name is required and must be unique.

**Author:** The user who created the document. This is pre-populated with the user logged in at the time. This property is mainly used to quickly identify templates created by REV23 Development, Inc. so they are not directly modified, as changes made to them will be overwritten with each update.

**Data Type:** The data type indicates what type of object the template will be used for. This value  controls which property will show up in the Template Designer.

+ _Appointment_: Used for templates such as email & text message appointment reminders. Gives you access to properties related to a single appointment.
+ _Customer_: Generic template for a customer record, such as a letter directly to the customer.
+ _Service_: Used for consent forms and aftercare instructions. Gives you access to properties related to a single service.
+ _Special Order Item_: Used for email & text message communications for alerting customers that their special order has arrived.
  
## Translations

Each Template can have a translated value for the recipients preferred language. To create a translation, click the New button in the Translations nested list view of the Template you wish to translate, select the Language and enter the value to use for that language. Then, use the Show Template Designer action on the each translation.

## Template Actions

### View

**Edit Template:** Open the Template Designer for the selected template. This action is only available in the Template List View.

### Tools

**Connect Templates:** Use this action to display templates from other connected studios that you which to connect to the current studio you're logged into. If all of your studio's use the same template and you wish to keep the same when you make a change, connecting the templates will allow you to modify the template and all studios that template is connected to will receive the change inherently. This action is only available in the Template List View.
