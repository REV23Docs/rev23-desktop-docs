# Common Actions
There are some actions that appear throughout the user interface in both list views and detail views. Some are used for navigation and others are object specific.

> If an action appears dimmed then that action is disabled for the selected object(s).

## Records Creation

**Clone:** In some views, a Clone action will appear. Think of the clone action like a copy & paste with with objects. Creating a clone will take the selected object's values and create a new object with those existing values in place. This is particularly useful for inventory items where you want to create a variant of a single item.

## Edit

**Delete:** The Delete action will delete either the currently selected row(s) in a list view, or the current object in a detail view.

You can find the Delete action in the Home tab of the ribbon in the Edit group.

Deleting some objects, such as an Invoice, will present a different user interface than the standard prompt.

> When an object is deleted, in most cases it technically stays in the database but is invisible to the user interface. This way you do not lose record of those objects if they were set as a property on another object.

> Use caution when deleting objects. While they technically remain in the database, once deleted they cannot be recovered by either yourself or Support.

## View

**Refresh:** The Refresh action will refresh the data in the list view or a single object in a detail view.

You can find the Refresh action in the Home tab of the ribbon in the View group.

When you refresh in a list view the list will be refresh from the database. For example, if you have add-on PCs connecting to the REV23 Desktop database and one PC has the Customer List View opened and on another PC a new customer is added, you can execute the Refresh action on the first PC and that customer will now appear in the Customer List View.

When you refresh in a detail view that single object will have the data that is in the database loaded. For example, if you have multiple PCs connecting to the REV23 Desktop database and one PC makes a change to a customer you also have opened, you can execute the Refresh action on the first PC and that customer's new data will be loaded, however, changes you have made will be discarded.

> If you have add-on PCs you don't always need to refresh manually. Switching between list views is enough to refresh the data. Only when that view is already opened and you want to load new data do you need to manually execute the Refresh action. Similarly when you open a detail view it will read the new data from the database. Only when that detail view is already opened do you need to manually refresh.

**Reset View Settings:** The Reset View Settings action will reset any view customizations for the currently logged in user, such as column sorting, visibility, detail view editors, etc... back to defaults. This only applies to the current view.

**Show Change History:** The Show Change History action will show the selected object's audit trail, or change history. The change history is a useful tool to show what changes have been made to an object such as the date/time it was created, modified, what the previous value was, what the new value was set to, as well as who made the change. This creates accountability in your shop by your users.

You can find the Show Change History action in the Home tab of the ribbon in the View group.

## Open Related Record

**Open Related Record:** The Open Related Record action is a big time saver though some of its options and benefits may not be immediately obvious. It allows you to click on a property in the view you are currently in and open the record that is currently selected.

You can find the Open Related Record action on the Home tab of the ribbon in the Open Related Record group.

Imagine this, you've started a new Service and selected a customer. The customer is clearly not a minor but the service is requiring a guardian is present. The problem is that the customer's birthday has either been entered incorrectly or not entered at all in their customer profile. You can highlight the Customer property in the Service record and then click the Open Related Record button. This will open that customer's profile where you can correct their birthday and save and close that record. Now, the service is no longer requesting a guardian and you can proceed.

Open Related Record is only available on properties that are a link to another object in the database known as reference objects. You can find out more about these objects in Lookup List Views.

## Workflow

**Show Virtual Receptionist History:** When the Virtual Receptionist begins a workflow on an object it stores a history of what happened in the database. This history can be accessed with the Show Virtual Receptionist Instances action.

You can find the Show Virtual Receptionist History action in the Home tab of the ribbon in the Workflow group of any list view or detail view.

This is useful if you are alerted by a customer that they did not receive their text message or email appointment reminder. You can find their appointment, execute this action and see if that workflow ran or not and if so if it Completed, meaning they should have received it, or Aborted, meaning there was a problem when that workflow was run.

## Records Navigation

**Previous Record/Next Record:** The Previous Record/Next Record actions allow you to navigate between objects in the database. In a detail view this is useful when trying to find or inspect certain data. You can open the detail view for the first object, then use the Next Record action to load the next object into the database into your currently loaded detail view. 

## Tools

**Diagnostics:** The diagnostics tool is used by support and is not always visible.