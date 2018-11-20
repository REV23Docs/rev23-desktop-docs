# Troubleshooting: Virtual Receptionist

This topic covers common issues that might cause the Virtual Receptionist to stop working properly or not send messages.

## Determine the cause

If an email or text message was not sent as expected, it is first useful to determine if it was not sent at all, or attempted and failed. Since the most common scenario is a customer not receiving a text/email reminder for an appointment, we will start there.

1. First, navigate to [**Home > System Messages**](../reference/system-messages.md) to look for any error messages. This may reveal the reason.
2. Navigate to [**Home > Appointments**](../concepts/appointments.md).
3. Locate the appointment in question and click the **Show Virtual Receptionist History** action.
    - If there are records in this view, inspect the **State** column. A state of **Aborted** means it attempted and failed to run the workflow. The most common cause of failures are invalid email settings or an error when attempting to send the email from your email provider. [Check your email account settings](#check-your-email-account-settings).
    - If there are no records in this view, this means the Virtual Receptionist did not try to run a workflow for this object. This would indicate either the Virtual Receptionist Service is not running and you should [Check the Virtual Receptionist Service](#check-virtual-receptionist-service). Or, the proper criteria was not met for this object to have a workflow run, for example, the customer did not have an email or phone number.

See [Analyze Virtual Receptionist History](../concepts/virtual-receptionist.md#analyze-virtual-receptionist-history) for more information.

## Check your email account settings

The number one most frequent cause of the Virtual Receptionist not performing correctly is that someone has changed the password to the email account which your SMTP server uses to send emails.

1. Navigate to **Configuration > Virtual Receptionist Options**.
2. Click the **Send Test Message** button.
3. If this fails, verify your email password and other settings and try again.

## Check Virtual Receptionist Service

For the Virtual Receptionist to run its tasks, the [Virtual Receptionist Service](../server-concepts/virtual-receptionist-service.md) must be running.

1. Open the [**REV23 Desktop Control Panel**](../server-concepts/control-panel.md).
2. Click the **Virtual Receptionist Service** tile and ensure it is started.
3. Click the **Open Event Viewer** button to examine any logs. You can copy the logs and send to REV23 support for evaluation if needed.

If the Virtual Receptionist Service fails to start, or starts then stops immediately, this would indicate there is an error in one of the Virtual Receptionist Workflows. Did you recently try to create your own or modify one? Try deactivating any non-standard workflows in [**Configuration > Virtual Receptionist**](../configuration/virtual-receptionist.md) and try again.