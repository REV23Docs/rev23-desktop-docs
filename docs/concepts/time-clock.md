# Time Clock

The REV23 Desktop Time Clock can be used to track your user's time worked and hourly rate. Please note, this if for hourly employees, not tattoo artists doing hourly work. There are only three two options for the time clock, which make it one of the easiest features to use in REV23 Desktop.

## Enable the Time Clock for a user

1. Navigate to **Security > Employees**.
2. Open the user you wish to enable the time clock for.
3. Check the **Enable clock-in/clock-out** editor.
4. Optionally, fill in an hourly rate.
5. Click the **Save & Close** action.

When the time clock is enabled for a user, after they log on with their password they will be prompted if they would like to make an adjustment to their time card. This prompt will appear slightly different depending on their current status.

## Clocking-in

If a user is clocked out, once they log on with their password they will be prompted to clock-in. This will put them on the clock and track their time until they clock-out. To clock in, the user can chose one of three options. 

**Clock-in & log on:** Creates a new time card entry with the current date & time and REV23 Desktop will continue to the Main Window. The user can use REV23 Desktop as usual. This option is only visible if the user has been assigned one or more Roles.

**Clock-in only:** Creates a new time card entry with the current time, however REV23 Desktop will return to the log on screen.

**Log on only:** Does not modify the time card and will show the main window. The user can use REV23 Desktop as usual. This option is only visible if the user has been assigned one or more Roles.

## Clocking-out

If a user is clocked in, once they log on with their password they will be prompted to clock-out. This will end their current time entry and stop tracking their time. To clock out, the user can chose one of two options. Note: If the user is currently using REV23 Desktop they will need to log off, then log on again with their password in order to clock out. This is done so other users cannot clock-out a user and makes the process password protected.

**Clock-out:** Modifies the user's current time card and sets the clock out time to the current date & time and REV23 Desktop will return to the log on screen.

**Log on only:** Does not modify the time card and will show the main window. The user can use REV23 Desktop as usual. This option is only visible if the user has been assigned one or more Roles.

## Editing Time Clock Entries

It's inevitable. From time to time your users will forget to clock in or out when they were supposed to. Here's how to fix this common scenario.

Each time entry record consists of two values, the Clocked-in Date/Time and the Clocked-out Date/Time. Any entry without a clocked-out value is considered "on the clock". There can only be one "on the clock" entry per user, meaning you cannot create a new time entry record if the user is on the clock, they must be clocked out first.

### User forgot to clock-in
Go to the Time Clock List view, create a new Time Entry using the New action. Set the employee and the clocked-in date/time property to the necessary value.

### User clocked-in late
Go to the Time Clock List View. Locate the record and modify the clocked-in date/time property to the necessary value.

> Tip: Use the **On the clock now** list view filter to quickly locate the record by looking at only time entries that are currently clocked-in.

### User forgot to clock-out
Go to the Time Clock List View. Locate the record and set the clocked-out date/time property to the necessary value.