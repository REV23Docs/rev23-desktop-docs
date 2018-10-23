# Quick Start: Start a walk-in service

Well, it's still Friday and our appointment we scheduled earlier isn't until tomorrow. Business must go on. Luckily, we have a body piercer hanging around to start taking some walk-in piercings. Let's see how a walk-in works.

1. From the Today Dashboard click the New Walk-In action -OR- Navigate to Home -> Services to open the Service List View, then click the New action to open the Service Detail View. 

> Hint: The step of navigating to the list view isn't actually necessary. From most any screen you're in you can click the down arrow on the New action and select Service from the drop down menu. So, if you're in the Appointment Scheduler already and get a walk-in, there is no need to leave it.

2. In the Service Detail View, we'll set up the service. For services, we only need a few things to get it rolling. The extent you need to fill this out is up to your health department.

    + **Customer:** Required. Obviously.
    + **Service Type:** Required. The type of service you're performing.
    + **Employee:** Required. The employee providing the service.
    + **Placement Area:** Recommended. The placement of the service on the body. If a piercing (what we're doing in this case) the name of the piercing itself generally guides this and is unnecessary.
    + **Design Description:** Mostly for tattoos, or large piercing projects. A description of what is being done.
    + **Amount:** The amount you're charging for the service. Generally you'll only fill this editor out when dealing with tattoos, since in most cases, piercing prices are fixed and determined by the studio.

3. Like we saw when we scheduled an appointment for a customer, we can click the Customer editor to search for a customer by name, or create a new customer by clicking the New action or Scan/Swipe ID action. Since this client has her ID with her, we'll click the Scan/Swipe ID action to open the Customer Detail View and pre-fill that data in.

> Hint: If you do not yet have a barcode reader or magstripe stripe swiper, when REV23 Desktop is waiting for you to to scan the ID, press the letter 'D' on your keyboard to use demo data, which demonstrates the information that can be extracted from the ID.

By swiping the ID, we will obtain the following fields automatically without any typing: First name, middle name, last name, gender, birthday, address, driver's license number and state. We'll add a few more fields such as email and mobile phone + provider.

The next time this client returns, swiping the ID will recall this record, including any changes we've  made.

4. Hover over the ID Image Editor. We can click the scan button in the Image Editor to acquire the ID Image from the document scanner. 

5. After we have scanned the ID image, click the Save & Close action to return to the Service Detail View. This customer is now set in the Customer editor.

6. Now that the customer is entered in, we will select Lobe as the Service Type, and select Selina as the Employee. Notice that employees that are not assigned to the selected Service Type do not show up in the employee list, so when we clicked the Employee editor, only Selina appeared.

Because we've previously set the Lobe piercing price to $20.00 in the Setting service prices quick start topic, the Amount has been defaulted for us to $20.00 and can not be modified.

Here, we could also set some jewelry parameters in the Gauge, Length/Diameter editors, but we will keep this as light as possible for now.

The only additional change we will make is to set the Quantity to 2, since our client wants both of her ear lobes pierced.

7. It's time for the release form! Depending on your set up you can take one of two paths.

    - If you have the Signature Pad, click the **Sign Consent Form** action. Unlike other actions we've dealt with so far, this does not appear on the ribbon.  Instead, you can find it in the Detail View itself underneath the main group of editors we just filled out. This will prompt the client to sign the signature pad device, generate the release form, and store it in the database. Optionally, you can have the signed document emailed to the client.
  
    - If you do not have the Signature Pad, click the **Print Consent Form** action. This will fill the client's details and ID image onto a release form that is printed and ready to be signed. 

> Hint: Hold the SHIFT key down on your keyboard while clicking this action to preview the consent form instead.

The release form looks pretty good. There are a few things that stand out that we would like to fix (our logo is too large), so we will come back to this later. For now, we have a release form that the client can sign.

8. Click the Save & Close action to save the record to return to the Service List View.

With the release form signed, Selina can now go do what she does best (well, second best after jewel heists) and pierce the client.

Next, we'll see how to charge the client for the service.