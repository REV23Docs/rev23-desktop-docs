# Service Follow-ups

The Virtual Receptionist is capable of sending service follow up email and text message to your customers a set amount of time after their service has been completed, for example, 14 days later.

## Customize The Follow-up Time
Each service type can be configured to send a follow-up text/email as well as the amount of days after the service has ended.

1. Navigate to [**Configuration > Service Types](../configuration/service-types.md).
2. Select the desired service type.
3. Set the **Follow-up Days** property to the desired amount of time after a service ends before sending the follow-up.
4. Check the **Send Text/Email Follow-up**.

## Customizing Service Follow-up Message

1. Navigate to [**Configuration > Templates**](../configuration/templates.md).
2. Select the Follow up email template with key name `REV23_FOLLOW_UP_EMAIL`.
3. Click the **Clone** action to create your own copy.
4. Click the **Show Template Designer** action.
5. Make your desired changes in the [Template Designer](template-designer.md) and save.
6. Repeat steps 2-5 with the built-in template with key name `REV23_FOLLOW_UP_SMS` to edited the Follow up text message template.
7. Navigate to [**Configuration > Virtual Receptionist Options**](../configuration/virtual-receptionist-options.md).
8. Click the **Service Follow Up Options** tab.
9. Set the **Service Follow Up Email Template** and/or the **Service Follow Up Text Message Template** properties to your new template(s).
10. Click the **Save & Close** action to save the Virtual Receptionist Options

### Customize the Follow Up Email and Text Message Subjects

You can customize the subject of the email and text that is sent in [**Configuration > Custom Texts**](../configuration/custom-texts.md) by modifying the custom texts with key names `WORKFLOW_SERVICE_FOLLOW_UP_EMAIL_SUBJECT` and `WORKFLOW_SERVICE_FOLLOW_UP_SMS_SUBJECT`.