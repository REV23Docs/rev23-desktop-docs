---
title: "Service Follow-ups"
sidebar:
  label: "Service Follow-ups"
  order: 14
---
The Virtual Receptionist is capable of sending a service follow up email to your customers a set amount of time after their service has been completed, for example, 14 days later.

:::caution[Text message follow-ups are no longer available]
REV23 Desktop can no longer send text messages due to carrier A2P 10DLC requirements. See [Text messaging in REV23 Desktop](/rev23-desktop-docs/how-to/create-twilio-account/) for details. Text follow-ups are fully supported in [REV23 Cloud](https://cloud.rev23.com).
:::

## Virtual Receptionist Configuration
The [Virtual Receptionist](/rev23-desktop-docs/concepts/virtual-receptionist/) must be configured to send emails using your email account for follow-up messages to be sent and the [Virtual Receptionist Service](/rev23-desktop-docs/server-concepts/virtual-receptionist-service/) must be running.

## Enable/Disable Service Follow-up
You can enable/disable this feature entirely.

1. Navigate to [**Configuration > Virtual Receptionist**](/rev23-desktop-docs/configuration/virtual-receptionist/).
2. There is a workflow that sends follow-up messages:
    + `Send service follow up email to customer`
3. Click the **Activate** or **Deactivate** action to enable/disable the workflow.

## Customize The Follow-up Time
Each service type can be configured to send a follow-up email as well as the amount of days after the service has ended.

1. Navigate to [**Configuration > Service Types**](/rev23-desktop-docs/configuration/service-types/).
2. Select the desired service type.
3. Set the **Follow-up Days** property to the desired amount of time after a service ends before sending the follow-up.
4. Check the **Send Text/Email Follow-up**.

## Customizing Service Follow-up Message

1. Navigate to [**Configuration > Templates**](/rev23-desktop-docs/configuration/templates/).
2. Select the Follow up email template with key name `REV23_FOLLOW_UP_EMAIL`.
3. Click the **Clone** action to create your own copy.
4. Click the **Show Template Designer** action.
5. Make your desired changes in the [Template Designer](/rev23-desktop-docs/concepts/template-designer/) and save.
6. Navigate to [**Configuration > Virtual Receptionist Options**](/rev23-desktop-docs/configuration/virtual-receptionist-options/).
7. Click the **Service Follow Up Options** tab.
8. Set the **Service Follow Up Email Template** property to your new template.
9. Click the **Save & Close** action to save the Virtual Receptionist Options.

### Customize the Follow Up Email Subject

You can customize the subject of the email that is sent in [**Configuration > Custom Texts**](/rev23-desktop-docs/configuration/custom-texts/) by modifying the custom text with key name `WORKFLOW_SERVICE_FOLLOW_UP_EMAIL_SUBJECT`.

### Troubleshooting
See [Troubleshooting: Virtual Receptionist](/rev23-desktop-docs/troubleshooting/virtual-receptionist/)
