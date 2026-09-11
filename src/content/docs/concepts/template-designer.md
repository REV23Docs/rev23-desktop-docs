---
title: "Template Designer"
sidebar:
  label: "Template Designer"
  order: 11
---
The Template Designer is a word processing interface that allows you to customize [Templates](/rev23-desktop-docs/concepts/templates/) that REV23 Desktop uses for certain documents such as release forms, aftercare forms and more.

While the Template Designer contains many features commonly found in a word processing application, such as formatting, tables and more, they are outside the scope of these docs. If you would like assistance laying out your template, please feel free to contact REV23 support.

To show the template designer for a template, highlight the desired template in the Template List View and click the **Show Template Designer** action.

## Fields

When designing a template, you are creating a document that represents a single data object. For example, one service. Fields are special blocks that can be inserted into your template to act as placeholders for properties from that object. 

When you generate your template, fields will read data from that object and insert it into your template as text, an image, or even bar codes and check boxes. For example, when creating a consent form template for a service you would obviously want some key information that is populated when the consent form is generated such as the client's name, the date, etc... these can all be inserted as fields. Fields are accessed via the Data Explorer pane, which by default is located on the right of the document.

## Data Explorer

The Data Explorer shows all available properties from the template's data type.

At the root (top) of the data explorer you will see the object type assigned to the template.

Underneath the root, you will see each of the properties of that object type. Some may expand with a [+] symbol next to each level. You can keep expanding each property until you reach the data you're looking for.

For example, if the template has a data type of service, you will see the Service object at the top level. Underneath you will see properties such as Customer and Service Type which are separate objects of their own. Expanding the Customer property by clicking the [+] button will reveal the properties of a customer, such as their name, phone numbers, birthday, etc...

## Adding fields to a document

To add a field from the Data Explorer to the document, either place the caret where you want to insert the data, then double-click the field, or click and drag the field from the Data Explorer to the desired location in the document.

## Field Properties

Each field has its own set of options. The most important of these is the format string, meaning you can change how the field is displayed. For example, a date & time such as 10/30/2014 3:08 PM. Depending on how we want to lay out our template, the time may not be relevant, leaving only 10/30/2014, or only the time might be relevant, leaving 3:08 PM. You may also want to format them with a long date, such as "Thursday, October 30, 2014". All of this is easily achievable.

First, the field has to have already been added to the document. Next, click on the field (in document) to highlight it. You'll be taken to the Field ribbon page. On that page there is a Properties popup menu which allows you to configure the field.

Click the ellipsis button [...] on the Format String text box to invoke the format string editor. There, you can change the format to any standard type, or select a custom format. When you're done, click OK and the field will be formatted.

See the [Date/Time Format Codes](/rev23-desktop-docs/configuration/date-time-format-codes/) topic for more information.

## Data Preview

If data exists for the data type you're editing a template for, when a field is placed in the document, you'll see a random record's data as a preview. 

This helps you lay out your templates by showing real data. The space that `<<Customer.Birthday>>` takes up is much less than `10/31/1976`. If no data exists for that particular field, however, you'll see a placeholder, such as `<<Customer.Birthday>>`.

You can change which data row you're seeing in the preview by going to the **Mail Merge** ribbon page and changing the current record. You can scroll through up to 50 random rows of data to see how your template lays out with different content to ensure it looks correct in most cases.

## Person fields

Customer, employee, appointment, and service templates can reach the shared fields of the related person. In addition to names and contact details, the following fields are available:

- **Pronoun:** They/Them/Theirs, She/Her/Hers, or He/Him/His, based on the person's selected pronoun.
- **Medical Conditions All Comma List:** Every assigned medical entry, including its Allergy, Condition, or Disease prefix.
- **Medical Conditions Comma List:** Only entries classified as **Condition**.
- **Medical Allergies Comma List:** Only entries classified as **Allergy**.
- **Medical Diseases Comma List:** Only entries classified as **Disease**.

For an appointment or service template, expand its **Customer** property in the Data Explorer to reach these fields.
