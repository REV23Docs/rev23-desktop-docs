# Quick Start: Start a scheduled service

It's Saturday, and it is sure to be a busy day for the girls! There will probably be plenty of walk-ins and appointments scheduled by all the people checking out the new shop. Yesterday, as Commissioner Gordon was on a jog, he stopped in and made an appointment for today. Well, it's time, and being ever so punctual, he's here and ready to get his new tattoo!

1. Navigate to Home -> Appointments. Click the Go to today action on the ribbon - OR - find and select the current date on the date navigator on the right hand side of the scheduler. We can see the appointment he scheduled with Pam in the scheduler.



2. Right-click the appointment, and click the Start Service from the popup menu. This will create a new service based on the details of the appointment and open the Service Detail View. 

Now, we're just in a service like we were when we created that walk-in service. The only difference here is that by using the Start Service action, the service knows it created from an appointment (so we can later track walk-in services vs scheduled appointments), and some of the info has been filled out for us already-- but not everything.



3. Because he was just jogging by when he decided to make an appointment, he didn't have his ID for us to scan at the time. We're also missing some important information such as his address. Click the Open Related Record action in the Customer editor. This will open the Customer Detail View for that customer.



> Pro-tip: The Open Related Record action is extremely useful. Learning to incorporate it into your flow will make you much more efficient.

4. Now that we have his ID, we can click the Scan/Swipe ID action in the Customer Detail View on the ribbon to easily and instantly populate the information we didn't get earlier, such as his address and ID number. Now, the next time the client is here, swiping his ID will recall this customer record and we avoid a duplicate record.

We can make any other necessary additions, then click the Save & Close action to return to the Service Detail View.

5. At this point, this is just as simple as the service we did earlier! Back in the Service Detail View, we still have some additional things we need to set up. We'll need to select Tattoo in the Service Type editor. 

Additionally, we want to put some details about the tattoo in the Placement Area and Design Description editors. 

Finally, we will set the Amount editor to $500. By default, the Tattoo service type is set to a Custom pricing type, we're able to just type that amount in, unlike the walk-in service we did earlier, where the price was automatically set when we selected the service type.

6. Click the Sign Consent Form or Print Consent Form actions depending on your hardware availability and Save & Close the record to return to the Appointment Scheduler. 

The client has a deposit, and we will apply it to his sale in the next step.