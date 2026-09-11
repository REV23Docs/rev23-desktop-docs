---
title: "Medical Conditions"
sidebar:
  label: "Medical Conditions"
  order: 6
---
Medical Conditions can be assigned to customers in the Customer Detail View. When attempting to start a service for a customer that has medical conditions present, you will see a dialog that warns you of these conditions.

## Properties

**Name:** The name of the Medical Condition. The name is required and must be unique.

**Type:** Groups the entry as an **Allergy**, **Condition**, or **Disease**. The type is included in the combined medical-condition template field and can also be used to insert only allergies, conditions, or diseases into a template.

## Using medical conditions in templates

Customer and service templates can use these person fields:

- **Medical Conditions All Comma List:** Every assigned entry, prefixed with its type.
- **Medical Conditions Comma List:** Entries whose type is **Condition**.
- **Medical Allergies Comma List:** Entries whose type is **Allergy**.
- **Medical Diseases Comma List:** Entries whose type is **Disease**.

See [Template Designer](/rev23-desktop-docs/concepts/template-designer/#person-fields) for details.
