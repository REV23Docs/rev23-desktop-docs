# Aftercare Forms

Aftercare Forms are Templates that are linked to the **Aftercare Form** property of a [Service Type](../configuration/service-types.md). Aftercare can be printed from a service, sale, or emailed automatically to the customer by the Virtual Receptionist after a service has been completed.

> It is recommended you familiarize yourself with the [Templates](templates.md) topic before proceeding with this topic.

## Customizing Aftercare Forms

1. Navigate to [**Configuration > Templates**](../configuration/templates.md).
2. Select a built-in aftercare form template provided by REV23.
3. Click the **Clone** action to create your own copy.
4. Click the **Show Template Designer** action.
5. Make your desired changes in the [Template Designer](template-designer.md) and save.
6. Navigate to [**Configuration > Service Types**](../configuration/service-types.md).
7. Double click a Service Type record that you wish to apply your new aftercare template to.
8. Set the **Aftercare Form** property to your new template.
9. Click the **Save & Close** action to save the Service Type.

This service type will now use the selected template. Repeat steps 7-9 for each service type you wish to use this aftercare template.

It's important to note that you do not need to create a separate aftercare form for each individual service type. Any property that exists on the service type, such as Healing Time, can be merged into the aftercare form template, so in most cases, you can reuse the same template across multiple service types such as all of your piercings.

> If you wish to create an empty template for your aftercare form rather than cloning an existing one, aftercare forms require a Template with the **Data Type** of *Service*.

## Emailing Aftercare Forms

The Virtual Receptionist can email aftercare forms to your customers after a service is completed. An email will be sent to the customer containing a body, and a PDF attachment of the aftercare form.

1. Navigate to [**Configuration > Virtual Receptionist**](../configuration/virtual-receptionist.md).
2. Ensure that the __Email Aftercare Instructions__ workflow is active.

This workflow will execute automatically for customers that have an email address for any service that has an **End On** time set and has ended within the last 24 hours. (Read: The service must have an end time set for this workflow to execute.)

If you wish to disable this feature, simply deactivate the __Email Aftercare Instructions__ workflow.

### Customize the Email Subject

You can customize the subject of the email that is sent in [**Configuration > Custom Texts**](../configuration/custom-texts.md) by modifying the custom text with key name `WORKFLOW_AFTERCARE_EMAIL_SUBJECT`.

### Customize the Email Body

The body that is sent in the email is a template which you can customize.

The template that is used for the email body can be changed in **Configuration > Virtual Receptionist Options** in the **Email Aftercare Instructions Email Options** tab. By default, this is the template with key name `REV23_AFTERCARE_EMAIL_BODY`, and is recommended you clone that template if you wish to change this text.

> The email body should _not_ contain your aftercare instructions, but a more general email along the lines of "*Thank you for coming in to Gotham City Tattoo & Piercing, attached are the aftercare instructions for your new tattoo.*"

## Printing Aftercare Forms

You can print an aftercare form from a Service by clicking the **Print Aftercare** action.

Additionally, you can be prompted to print aftercare instructions after a sale containing one or more services has been fully paid. You can disable this prompt, or set it to always automatically print in [Configuration: My Studio: Options: Service Options](../configuration/my-studio.md#service-options).

## Related

- [Configuration: Templates](../configuration/templates.md)
- [Configuration: Service Types](../configuration/service-types.md)