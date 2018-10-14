# Virtual Receptionist

The Virtual Receptionist is a background process that runs on your system's main PC, however its configuration can be accessed from any of your connected PCs. The configuration consists of two areas, Virtual Receptionist Definitions (covered in this topic) and Virtual Receptionist Options, which allow you to access options for built-in workflows that have preferences that you can configure to your studio's needs.

If the workflow definition is active, the Virtual Receptionist service will be continually looking for objects that it needs to execute the workflow for. Once a workflow definition is run for a single object it will not be run again, regardless if it has failed or completed. You can determine if a workflow has failed by finding the the object (such as a single service) and using the "Show Virtual Receptionist History" action on the object. This will show you all of the workflow definitions that have run for that object and the state of that workflow.

To activate or deactivate a workflow definition, highlight it in the list and use the Activate/Deactivate actions. After changing a workflow's active status you can either restart the Virtual Receptionist Service manually, or wait 15 minutes and the workflow will be loaded/unloaded automatically.

## Virtual Receptionist Workflow Definition Properties

First, and most importantly, you should not directly edit any built-in workflow definition. With each update to REV23 Desktop, the built-in definitions are replaced,so any changes you make will be lost. It's also important to note that these definitions are an extremely complex area, and not intended to be modified by anyone except REV23. Modifying these workflows is outside of the scope of this document and will not be covered here. If you wish to make a change to or create a new workflow definition, please contact REV23 Support rather than attempt this on you own.


## Virtual Receptionist Workflow Definition Actions 

### Records Creation

**Import Workflow:** REV23 is able to release Virtual Receptionist Workflow Definitions out of the usual release cycle. We can use this method to deliver new features to the Virtual Receptionist without a new version being released. These are delivered as XML files from REV23 If we write a custom workflow for you, or release one on our website, you can import the file using this action.

## Record Edit

**Activate:** Activates the selected workflow Definition(s). After activating a workflow that was previously deactivated, you can either restart the Virtual Receptionist Service in the REV23 Desktop Control Panel, or wait 15 minutes and the Virtual Receptionist Service will automatically load the newly activated Workflow Definition.

**Deactivate:** Deactivates the selected workflow Definition(s). After deactivating a workflow that was previously deactivated, you can either restart the Virtual Receptionist Service in the REV23 Desktop Control Panel, or wait 15 minutes and the Virtual Receptionist Service will automatically unload the deactivated Workflow Definition.