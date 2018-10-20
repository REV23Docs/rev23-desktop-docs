# Quick Start: Modify consent form

We noticed a few things on the release forms earlier that we'd like to change, so now seems like a good time to get that taken care of.

Consent and Aftercare forms, as well as other various bits of text, such as the text message and email appointment reminders, exist as Templates.

REV23 Desktop comes with default templates for every scenario, including tattoo & body piercing consent and aftercare forms. However, you probably have your own you'd like to use, or maybe you'd just like to make minor modifications to the templates provided.

Here's the catch. Each time the software is updated, we overwrite our built-in templates. Meaning, if you modify one of the built-in templates, the next time you update REV23 Desktop to a new version, your change will be erased and replaced with the default one again. So you can either start a new template using the New action, or, most commonly, you can modify an existing template by first copying it using the Clone action. This is the approach we will take in this topic.

1. Navigate to Configuration -> Templates to open the Template List View. You'll need to be logged on as an Administrator or Manager user to access this area.

2. Select the Consent Form for Tattoo (REV23) record, and click the Clone action. This will open the Template Detail View for our newly created copy. Provide a new name in the Name editor.

3. Click the Show Template Designer action on the ribbon to open the Template Designer. The Template designer is a full word processor that allows you to format your templates however you'd like, as well as insert fields that are populated from the database.

The Template Designer itself is a complex topic, so here we will only cover the basics and make a couple of changes.

> Hint: Looking at the Template Designer, we can see some data already exists from a service we created earlier. These are previews of the Service records we created earlier. It will randomly show you a record so that you can see what the template looks like with actual data. You can change the record you're looking at by using the Mail Merge tab on the ribbon and changing the Current Record editor to scroll through up to 50 records. This is useful so you can see what longer names or larger IDs do to the formatting of the template and make sure to adjust for them. Don't worry, this data is not saved to the template and is only there for preview purposes.

4. We see a couple of changes we'd like to make. First, the logo we selected in the Setup Wizard is too large. The logo can be changed either by selecting a new image in Options (which is probably a better idea, since it will adjust all templates), but you can also resize it here. We will click it to see its bounding box, then click and drag an anchor to resize it.

That looks better already!

5. Now we'd like to update the release form to use the Mobile Phone Number. Erase the entire line that says "Home Phone: <<Customer.HomePhoneNumber>>." You can replace with with "Mobile Phone: " and leave the cursor blinking in that spot.

6. On the right hand side of the Template Designer is the Data Explorer. This allows us to insert a field which will read data from the database. In this case, a release form is based on the Service data type, so we can access all properties of a Service here. Scroll to the top of the data explorer window.

Notice the arrows next to each Property. This allows you to drill down into each property to see the properties of that property. For example, the Customer is a property of Service, and Mobile Phone Number is a property of Customer. So, we'll need to expand the Customer property to see what we have access to. So, our path will be Service -> Customer -> Mobile Phone Number.

7. Locate the Mobile Phone Number property nested inside the Customer Property. Click and drag it to the spot you'd like to insert it into the template, then release the mouse button. You can also double click it to insert it to wherever the cursor is blinking in the document.

We're now properly displaying the mobile phone number.

Our template looks pretty good, and we can come back to it later at any time to add additional details or formatting. But now, we need to tell REV23 Desktop to use this template instead of the default.

8. Save the Template using the Save action in the top left corner of the Template Designer to close it, then click the Save & Close action in the Template Detail View.

9. Navigate to Configuration -> Service Types. Locate the Tattoo service type in the Service Type List View and double click it to open the Service Type Detail View. This detail view should look familiar as we saw it earlier when we were settting service prices.

10. Change the Consent Form editor to the new template we just created. Then Save & Close the Service Type Detail View.

That's it! We've now created a new template for our Tattoo Consent Form and have told REV23 Desktop to use it instead of the default. Now, whenever a consent form is generated for this service type, it will use this new one. You can repeat this process for any additional service types that will use this same template.

Templates are versatile and easily reused. For example, you don't need a different template for each piercing type. Using the values from each service type, you're able to insert fields for the name, healing time, etc.. so don't create more templates than you really need. Now that you have your own copy, any time you edit it, the service type will automatically pick up these changes, and you do not need to repeat the step of setting it in this step.

There is now some commotion up front, and Commissioner Gordon has returned to the shop. He looks pretty mad and is demanding a refund. Let's check out what's happening.