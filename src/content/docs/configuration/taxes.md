---
title: "Taxes"
sidebar:
  label: "Taxes"
  order: 20
---
A tax record defines a rate and the calculation rules that REV23 Desktop applies to taxable services and inventory items. Create each rate once, then assign it to the service types and current-studio inventory items that use it.

## Properties

**Name:** A required, unique name that makes the rate easy to identify.

**Rate:** The tax percentage.

**Discount Calculation:** Controls which amount is taxed.

- **After discounts (subtotal):** Calculates tax on the discounted subtotal.
- **Before discounts (total):** Calculates tax on the original amount before discounts.

Choose the rule required for the studio's jurisdiction and confirm the result with the person responsible for its tax reporting.

**Midpoint Rounding:** Controls what happens when the calculated tax is exactly halfway between two currency values.

- **To nearest even number:** Uses the even result. At 8.25% on $10.00, the tax is $0.82.
- **Away from zero:** Uses the value farther from zero. In the same example, the tax is $0.83.

The setting affects each calculation at a midpoint and can change a total by one cent. Keep it consistent with the studio's required accounting method.

## Connected studios

Taxes are location-aware. Use the Locations list on the tax record to link or unlink studios that share it.

**Connect Taxes** shows taxes from connected studios and links the selected records to the current studio. Once linked, editing the shared rate changes it for every linked studio, while each studio can decide which service types and inventory items use it.
