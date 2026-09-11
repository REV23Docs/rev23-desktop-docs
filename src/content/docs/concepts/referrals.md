---
title: "Referrals"
sidebar:
  label: "Referrals"
  order: 24
---
REV23 Desktop can issue an in-store credit to the customer who referred someone to your studio. The program is configured per studio, and the credit belongs to the referring customer's account.

## Configure referral credits

Open **Configuration > My Studio**, then find **Referral Credit Options**.

**Referral Credit Mode** controls when REV23 Desktop creates the credit:

- **None:** Do not create referral credits.
- **Per Customer:** Create one credit when a customer with **Referred By** is saved. The customer can be new or already on file. REV23 Desktop creates only one per-customer referral credit for that customer record.
- **Per Service:** Create a credit each time a new service is saved for a customer with **Referred By**.

**Referral Credit Amount** is the amount of each credit.

## Record a referral

1. Open the customer who was referred.
2. Set **Referred By** to the customer who made the referral.
3. Save the customer.

In **Per Customer** mode, saving creates the credit immediately. In **Per Service** mode, saving the customer records the relationship; the credit is created when a new service is saved for that customer.

The credit appears in the referring customer's **Deposits & Credits** list and can be applied to a sale like any other in-store credit.

Changing **Referred By** later does not move or remove a credit that has already been issued. Per-service credits are not created retroactively for older services.

## Related

- [Set up a referral program](/rev23-desktop-docs/quick-start-2/referral-program/)
- [Deposits & Credits](/rev23-desktop-docs/concepts/deposits-and-credits/)
- [Customer reference](/rev23-desktop-docs/reference/customers/)
