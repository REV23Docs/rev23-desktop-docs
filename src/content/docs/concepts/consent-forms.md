---
title: "Consent Forms"
sidebar:
  label: "Consent Forms"
  order: 13
---
A consent form is a service template that combines the service, customer, identification, and captured signatures into one document. Each service type can have an adult form and a guardian form.

Read [Templates](/rev23-desktop-docs/concepts/templates/) before changing a consent form. The printed form and the short agreement shown on the signature pad are separate pieces of content.

## Assign forms to a service type

1. Open **Configuration > Templates**.
2. Select a built-in consent form and click **Clone**.
3. Give the copy a clear name, then click **Show Template Designer**.
4. Make the required changes and save the template.
5. Open **Configuration > Service Types**.
6. Open a service type and set **Consent Form**, **Guardian Consent Form**, or both to your template.
7. Click **Save & Close**.

A consent-form template must use the **Service** data type. One template can serve several service types because service fields, including the service type name, can be merged into the document.

Keep the signature image fields in any customized form that needs to show signatures:

- `Service > Customer Signature Image`
- `Service > Employee Signature Image`
- `Service > Guardian Signature Image`

## Capture signatures

Open a service and click **Sign Consent Form**. REV23 Desktop selects the consent form from the service type, collects each required signature, generates the signed document, and stores it with the service.

The signature pad can show a short service agreement before the signature step. Edit the custom text whose key is `SIGNATURE_PAD_SERVICE_AGREEMENT` under **Configuration > Custom Texts**.

If the service agreement text is empty, REV23 Desktop skips that screen and goes directly to signature capture. The consent-form document is still generated from the service type's template.

## Guardians and minors

When the customer is younger than the service type's **Required Age**, REV23 Desktop requires a guardian and uses the **Guardian Consent Form**. The service cannot proceed when a guardian form is required but none is assigned.

## Print or open a signed form

Use **Print Consent Form** from the service to print the current form. Signed forms also appear in the service's attachments, where they can be opened again.

Check a signed form after changing a template. Confirm that identification images, signatures, long text, and page breaks appear where expected before using it with customers.

## Automatic export

REV23 Desktop can export a copy after the form is signed. Configure the studio path under [My Studio signature capture options](/rev23-desktop-docs/configuration/my-studio/#signature-capture-options), then use [Device Options](/rev23-desktop-docs/configuration/device-options/) when one computer needs a different path.

An export is an additional copy, not a database backup. Keep the [REV23 Desktop backup service](/rev23-desktop-docs/server-concepts/backup-service/) configured separately.

## Email a signed copy

The Virtual Receptionist can email the customer a PDF copy after signing.

1. Open [Configuration > Virtual Receptionist](/rev23-desktop-docs/configuration/virtual-receptionist/).
2. Enable the **Email consent form** workflow.
3. Under **Configuration > Virtual Receptionist Options**, confirm the template used for **Consent Form Customer Copy Email Options**.

The default email-body template is `REV23_CONSENTFORM_EMAIL_BODY`. Clone it before making studio-specific changes. The email body should introduce the attachment; the consent language belongs in the attached consent-form template.

The subject comes from the custom text `WORKFLOW_CONSENT_FORM_CUSTOMER_COPY_EMAIL_SUBJECT`.

## Useful template fields

| Name | Field path | Use |
| --- | --- | --- |
| Customer ID | `Service > Customer > Identification Image` | Customer identification image |
| Guardian ID | `Service > Guardian > Identification Image` | Guardian identification image |
| Customer signature | `Service > Customer Signature Image` | Captured customer signature |
| Employee signature | `Service > Employee Signature Image` | Captured or stored employee signature |
| Guardian signature | `Service > Guardian Signature Image` | Captured guardian signature |
| Service type | `Service > Service Type > Name` | Service type name |
| Age on service date | `Service > Customer Age on Service Date` | Customer age when the service occurred |

Use **Customer Age on Service Date** instead of the customer's current age so an older record continues to show the correct age.

## Related

- [Templates configuration](/rev23-desktop-docs/configuration/templates/)
- [Service Types configuration](/rev23-desktop-docs/configuration/service-types/)
- [Template Designer](/rev23-desktop-docs/concepts/template-designer/)
