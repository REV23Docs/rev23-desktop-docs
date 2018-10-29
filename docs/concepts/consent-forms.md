# Consent Forms

Consent Forms are Templates that are linked to the **Consent Form** and **Guardian Consent Form** properties of a [Service Type](../configuration/service-types.md). Consent Forms can be printed and signed, or signed electronically with the [Signature Pad](../hardware/signature-pad.md).

> It is recommended you familiarize yourself with the [Templates](templates.md) topic before proceeding with this topic.

## Using the Signature Pad

Using the [Signature Pad](../hardware/signature-pad) you can capture signatures for your release forms and store them digitally.

To initiate a client signature for a release form, click the **Sign Consent Form** action in a service.

> The signature pad cannot scroll text, so customers cannot read your entire release form on the pad. Users will generally have a laminated copy for their release form for customers to read and acknowledge.

## Customizing Consent Forms

1. Navigate to [**Configuration > Templates**](../configuration/templates.md).
2. Select a built-in consent form template provided by REV23.
3. Click the **Clone** action to create your own copy.
4. Click the **Show Template Designer** action.
5. Make your desired changes in the [Template Designer](template-designer.md) and save.
6. Navigate to **Configuration > Service Types**.
7. Double click a Service Type record that you wish to apply your new aftercare template to.
8. Set the **Consent Form** and/or the **Guardian Consent Form** property to your new template.
9. Click the **Save & Close** action to save the Service Type.

This service type will now use the selected template. Repeat steps 7-9 for each service type you wish to use this consent form template.

It's important to note that you do not need to create a separate consent form for each individual service type. Any property that exists on the service type, such as Service Ty, can be merged into the aftercare form template, so in most cases, you can reuse the same template across multiple service types such as all of your piercings.

> If you wish to create an empty template for your consent form rather than cloning an existing one, consent forms require a Template with the Data Type of *Service*.

> If customizing the consent form template, ensure that you add the properties for the images of the signatures, otherwise they will not appear on the generated copy.
> - `Service > Customer Signature Image`
> - `Service > Employee Signature Image`
> - `Service > Guardian Signature Image`


## Auto Export

After a release form is signed, it can optionally be automatically exported to a hard drive for extra protection. Ideally this hard drive should be an external hard drive.

Another extra benefit of auto exporting is the ability to save to a cloud storage service such as OneDrive, Dropbox or Google Drive by setting your export path to a synced folder.

You can configure auto export in [Configuration: My Studio: Options: Signature Pad](../configuration/my-studio.md#signature-capture-options), and override the export path in [Device Options](../configuration/device-options.md).

## Guardian & Minor Consent Forms

When a customer does not meet the **Required Age** property of the service's service type, REV23 Desktop will attempt to use the Guardian Consent Form configured for that service type. If a value is not set, you will not be able to proceed with the service.

## Printing Consent Forms

You can print a consent form from a Service by clicking the **Print Consent Form** action.

## Emailing Consent Forms

The Virtual Receptionist can email a copy of a signed consent form to your customers immediately after a they has been signed. An email will be sent to the customer containing a body, and a PDF attachment of the signed consent form.

1. Navigate to [**Configuration > Virtual Receptionist**](../configuration/virtual-receptionist.md).
2. Ensure that the __Email consent form__ workflow is active.

This workflow will execute automatically for customers that have an email address.

If you wish to disable this feature, simply deactivate the __Email consent form__ workflow.

### Customize the Email Subject

You can customize the subject of the email that is sent in [**Configuration > Custom Texts**](../configuration/custom-texts.md) by modifying the custom text with key name `WORKFLOW_CONSENT_FORM_CUSTOMER_COPY_EMAIL_SUBJECT`.

### Customize the Email Body

The body that is sent in the email is a template which you can customize.

The template that is used for the email body can be changed in **Configuration > Virtual Receptionist Options** in the **Consent Form Customer Copy Email Options** tab. By default this is the template with key name `REV23_CONSENTFORM_EMAIL_BODY`, and is recommended you clone that template if you wish to change this text.

> The email body should _not_ contain your consent form, but a more general email along the lines of "*Thank you for coming in to Gotham City Tattoo & Piercing, attached is your signed release form.*"

## Template Common Fields

When modifying consent forms in the [Template Designer](template-designer.md), there are several fields that are useful to merge into your template from the Data Explorer.

Name | Field Path | Description
--- | --- | ---
**Customer ID** | Service > Customer > Identification Image | The ID image of the customer.
**Guardian ID** | Service > Guardian > Identification Image | The ID image of the guardian.
**Customer Signature** | Service > Customer Signature Image | The acquired signature of the | customer.
**Employee Signature** | Service > Employee Signature Image | The acquired signature of the employee, or the stored signature of the artist from their profile.
**Guardian Signature** | Service > Guardian Signature Image | The acquired signature of the guardian.
**Service Type Name** | Service > Service Type > Name | The name of the service type.
**Age** | Service > Customer Age on Service Date | The age of the customer the date the service was performed. Use this rather than Customer > Age.

## Related

- [Configuration: Templates](../configuration/templates.md)
- [Configuration: Service Types](../configuration/service-types.md)