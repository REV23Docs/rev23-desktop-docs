# Virtual Receptionist

The Virtual Receptionist is a background service that runs "workflows" (complex tasks) when an object is created or meets a specific criteria.

You can activate or deactivate the desired workflows in [Configuration: Virtual Receptionist](../configuration/virtual-receptionist.md). Many of these workflows have their own sets of options that you can configure as well, located in [Configuration: Virtual Receptionist Options](../configuration/virtual-receptionist-options.md).

## Configure Email Settings

The most common use of the Virtual Receptionist is sending emails and text messages. These messages are sent via your own email accounts SMTP server and the virtual receptionist needs to be configured with that information. You can easily obtain your SMTP settings from your provider (they will know what this means). There is also a list of common providers in [Configuration: Virtual Receptionist Options](../configuration/virtual-receptionist-options.md#common-smtp-settings).

1. Navigate to **Configuration > Virtual Receptionist Options** and supply your SMTP information. You can attempt to use the **Detect Email Settings** button to automatically detect these settings.

2. After you have successfully sent a test message, click the **Save** action to save these settings.

> It is important to remember that if you ever change your email password you will also need to update the password in these settings. Otherwise, messages will begin to fail to send.

## System Messages

[System Messages](../reference/system-messages.md), located in **Home > System Messages** contain useful information about the health of the Virtual Receptionist. If you start seeing a lot of errors pop up there about the Virtual Receptionist, it's probably a good indicator that something is wrong, such as an invalid password.

## Analyze Virtual Receptionist History

Each time a Virtual Receptionist Workflow runs for an object it records information about the execution such as whether it completed (finished) or aborted (failed). If there is ever a question as to whether a particular workflow ran for a specific object (i.e. was the customer sent a text message reminder for this appointment?) you can look at the Virtual Receptionist History to determine what happened.

1. Select the object you wish to analyze, such as an appointment.
2. Click the **Show Virtual Receptionist History** action.

If this list appears empty, no workflows have run for that object. This could mean one of a few things:

+ The object did not meet specific criteria. Many workflows criteria are based on specific time periods.
+ The [Virtual Receptionist Service](../server-concepts/virtual-receptionist-service.md) is not running, or was not running when this object met the criteria to execute.

If there are items in the list, these represent each workflow that ran for that object. The **State** will show whether it Completed or Aborted. 

If completed, this means the workflow ran without errors.

## Re-run a workflow

A workflow can run only once per object. Once it has run, even if it has failed it will not attempt to run again. However, you can force this to happen for a particular object.

1. Select the object you wish to analyze, such as an appointment.
2. Click the **Show Virtual Receptionist History** action.
3. Select the Completed or Aborted workflow that you wish to run again.
4. Click the **Delete** action.

If the object still fits the workflows criteria, it will attempt to run again on the next cycle. You can click the **Refresh** action to watch if this record appears. It should take about 15-30 seconds after deleting a previously executed workflow for it to run again if it will.

## Related
- [Configuration: Virtual Receptionist](../configuration/virtual-receptionist.md)
- [Configuration: Virtual Receptionist Options](../configuration/virtual-receptionist-options.md)



