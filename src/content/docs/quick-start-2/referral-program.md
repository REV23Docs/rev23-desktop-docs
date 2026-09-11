---
title: "Quick Start Vol 2: Referral program"
sidebar:
  label: "Reward clients with referrals"
  order: 2
---
This example gives a customer a $5 in-store credit for each customer they refer. Log in as an Administrator or Manager before you begin.

1. Open **Configuration > My Studio**.
2. Find **Referral Credit Options**.
3. Set **Referral Credit Mode** to **Per Customer**.
4. Set **Referral Credit Amount** to **$5.00**.
5. Click **Save & Close**.

## Testing the results

1. Create a customer, or open an existing customer who was referred to your studio.
2. Set **Referred By** to the customer who made the referral.
3. Save the customer.
4. Open the referring customer and select **Deposits & Credits**.

The referring customer now has a $5 in-store credit.

REV23 Desktop creates one per-customer referral credit for the referred customer record. Saving that record again will not issue the same credit twice. If you switch the studio to **Per Service**, the referring customer receives the configured amount whenever a new service is saved for the referred customer instead.

See [Referrals](/rev23-desktop-docs/concepts/referrals/) for the full behavior of both modes.
