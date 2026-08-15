---
title: "Appointment Confirmations & Reminders"
sidebar:
  label: "Appointment Confirmations & Reminders"
  order: 5
---
Appointment confirmations & reminders are email messages that can be sent to your client confirming and reminding them of their appointment. These messages are sent through the [Virtual Receptionist](/rev23-desktop-docs/concepts/virtual-receptionist/) which must be configured to send emails.

:::caution[Text message confirmations & reminders are no longer available]
REV23 Desktop can no longer send text messages due to carrier A2P 10DLC requirements. See [Text messaging in REV23 Desktop](/rev23-desktop-docs/how-to/create-twilio-account/) for details. Text confirmations and reminders are fully supported in [REV23 Cloud](https://cloud.rev23.com).
:::

+ **Confirmations** will send immediately when the appointment is created.
+ **Reminders** will be sent shortly before the scheduled appointment.

> By default, email confirmations & reminders are turned on when you first install REV23 Desktop. If you set up your email settings during the initial Setup Wizard when you first installed REV23 Desktop, things should "just work" with their default values. If you did not set up your email in the setup wizard, once you configure that (instructions below), things should immediately start sending with their default settings.

## Virtual Receptionist Configuration
The [Virtual Receptionist](/rev23-desktop-docs/concepts/virtual-receptionist/) must be configured to send emails using your email account for follow-up messages to be sent and the [Virtual Receptionist Service](/rev23-desktop-docs/server-concepts/virtual-receptionist-service/) must be running.

## Enable/Disable Appointment Confirmations & Reminders
You can enable/disable this feature entirely.

1. Navigate to [**Configuration > Virtual Receptionist**](/rev23-desktop-docs/configuration/virtual-receptionist/).
2. There are several workflows that control the sending of reminder/confirmation messages:
    + `Send email appointment confirmation to customer`
    + `Send email appointment reminder to customer`
3. Click the **Activate** or **Deactivate** actions to enable/disable the desired workflow(s).

## Customizing Confirmation & Reminder Messages

1. Navigate to [**Configuration > Templates**](/rev23-desktop-docs/configuration/templates/).
2. Select one of the confirmation or reminder templates with a key name from the [table below](#built-in-templates).
3. Click the **Clone** action to create your own copy.
4. Click the **Show Template Designer** action.
5. Make your desired changes in the [Template Designer](/rev23-desktop-docs/concepts/template-designer/) and save.
6. Repeat steps 2-5 with any of the remaining built-in templates you wish to customize.
7. Navigate to [**Configuration > Virtual Receptionist Options**](/rev23-desktop-docs/configuration/virtual-receptionist-options/).
8. Click the **Appointment Confirmation/Reminder Options** tab.
9. Set the following properties to your new template(s) as needed.
    + **Appointment Confirmation Email Template**
    + **Appointment Reminder Email Template**
10. Click the **Save & Close** action to save the Virtual Receptionist Options

> If you wish to create a brand new template rather than cloning an existing, the template's **Data Type** must be set to *Appointment*.

### Built-in Templates

These are the built-in (default) templates. You can clone and edit them as needed.

| Template Name | Key Name |
| --- | --- |
| Appointment Confirmation Email (REV23) | `REV23_APPOINTMENT_CONFIRMATION_EMAIL` |
| Appointment Reminder Email (REV23) | `REV23_APPOINTMENT_REMINDER_EMAIL` |

### Customize the Confirmation & Reminder Email Subjects

You can customize the subject of the email that is sent in [**Configuration > Custom Texts**](/rev23-desktop-docs/configuration/custom-texts/) by modifying the custom texts with key names: 

| Custom Text | Key Name |
| --- | --- |
| Confirmation Email | `WORKFLOW_APPOINTMENT_CONFIRMATION_EMAIL_SUBJECT` |
| Reminder Email | `WORKFLOW_APPOINTMENT_REMINDER_EMAIL_SUBJECT`


## Customize The Reminder Time
You can configure how far in advance a message is sent to the customer to remind them before their scheduled start time.

1. Navigate to [**Configuration > Virtual Receptionist Options**](/rev23-desktop-docs/configuration/virtual-receptionist-options/).
2. Click the **Appointment Confirmation/Reminder Options** tab.
3. Set the **Appointment Reminder Time** property to the desired value.
4. Click the **Save & Close** action to save the Virtual Receptionist Options

### Troubleshooting
See [Troubleshooting: Virtual Receptionist](/rev23-desktop-docs/troubleshooting/virtual-receptionist/)
