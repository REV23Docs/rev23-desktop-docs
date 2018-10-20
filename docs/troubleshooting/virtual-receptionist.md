# Troubleshooting: Virtual Receptionist

This topic covers common issues that might cause the Virtual Receptionist to stop working properly.

## Check the email account settings.

The number one most frequent cause of the Virtual Receptionist not performing correctly is that someone has changed the password to the email account which your SMTP server uses to send emails.

1. Navigate to **Configuration > Virtual Receptionist Options**.
2. Click the **Send Test Message** button.
3. If this fails, verify your email password and other settings and try again.

## Check Virtual Receptionist Service

For the Virtual Receptionist to run its tasks, the [Virtual Receptionist Service](../server-concepts/virtual-receptionist-service.md) must be running.

1. Open the [**REV23 Desktop Control Panel**](../server-concepts/control-panel.md).
2. Click the **Virtual Receptionist Service** tile and ensure it is started.
3. Click the **Open Event Viewer** button to examine any logs. You can copy the logs and send to REV23 support for evaluation if needed.

If the Virtual Receptionist Service fails to start, or starts then stops immediatley, this would indicate there is an error in one of the Virtual Receptionist Workflows. Did you recently try to create your own or modify one? Try deactivating any non-standard workflows in [**Configuration > Virtual Receptionist**](../configuration/virtual-receptionist.md) and try again.


