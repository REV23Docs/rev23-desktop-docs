# Rotating Schedules

Rotating schedules have two main purposes. The first is to allow your artists flexibility to have weekends off if desired. Additionally, they enable you to have more artists than you may possibly have stations in your studio making your shop more versatile and more profitable.

Imagine the following scenarios:

You have multiple artists that all want weekends off.
You have an artist that has an appointment every other Wednesday and isn't in the studio.
You have three tattoo stations in your studio but want to hire a fourth artist.

These problems and many more are easily solvable with rotating schedules.

How do they work?
On the surface rotating schedules may seem complicated, but they're actually quite simple. You create a rotating schedule, set a start date, which is any Sunday where the first week of the schedule will land, then define each week's schedule (1-4) and then assign the schedule to a user in their profile. Once assigned, the user's working hours on the scheduler will change week to week, allowing you to book your appointments for them easily and effectively without wondering "is this their day off?"

## Rotating Schedule Properties

**Name:** The name of the Rotating Schedule. The name is required and must be unique.

**Rotation Start Date:** The date this schedule's week 1 will begin. This date can be in the past, the present or even the future. The rotation start date is the Sunday on which Week 1 would fall. 
Note: Even if the date is in the future, the scheduler will still show this schedule when viewing past dates.

**Week Definitions:** Week definitions control a work week. You can add or delete them using the Week Definitions Nested List View.

## Rotating Schedule Week Definitions

**Week Number:** The week number this definition applies to. This property must be unique for each Rotating Schedule. The Rotation Start Date of the Rotation Schedule will use the Week 1 definition. Currently you configure up to four weeks. Have a need for more than four weeks? Congratulations! You're a scheduling master! Contact us and we'll be happy to add support for your scenario.

> If you have a schedule that rotates every other week, or third week, you do not need to specify a week definition for all weeks in the rotating schedule. You would only need to specify Week 1 and Week 2. REV23 Desktop will alternate these weeks throughout the rest of the schedule.

**In On Sunday/Sunday In/Sunday Out:** Specifies if the week definition has Sunday as a working day and if so the in and out times for that day.

**In On Monday/Monday In/Monday Out:** Specifies if the week definition has Monday as a working day and if so the in and out times for that day.

**In On Tuesday/Tuesday In/Tuesday Out:** Specifies if the week definition has Tuesday as a working day and if so the in and out times for that day.

**In On Wednesday/Wednesday In/Wednesday Out:** Specifies if the week definition has Wednesday as a working day and if so the in and out times for that day.

**In On Thursday/Thursday In/Thursday Out:** Specifies if the week definition has Thursday as a working day and if so the in and out times for that day.

**In On Friday/Friday In/Friday Out:** Specifies if the week definition has Friday as a working day and if so the in and out times for that day.

**In On Saturday/Saturday In/Saturday Out:** Specifies if the week definition has Saturday as a working day and if so the in and out times for that day.

## Rotating Schedule Example

**Scenario:** We have three tattoo artists, Dave, Mike and Casey. Our studio is open 7 days a week, Sunday through Saturday. Each of the artists want weekends off. This is easily solvable with a rotating schedule.

- On week 1, Dave will have Saturday and Sunday off. Mike will have Monday and Tuesday off, and Casey will have Wednesday and Thursday off.
- On week 2, Dave will have Monday and Tuesday off, Mike will have Wednesday and Thursday off, and Casey will have Saturday and Sunday off.
- On week 3, Dave will have Wednesday and Thursday off, Mike will have Saturday and Sunday off, and Casey will have Monday and Tuesday off.

We want everyone in on Friday because it's our busiest day.

Every fourth week our schedule will start over again to week 1.

To accomplish this scenario we will need three rotating schedules, each one assigned to one of the artists. Each schedule will have a start date one week apart from each other. We will also have three week definitions in each schedule. These week definitions will be identical in each schedule. The reason for this is in this scenario our schedule is exactly the same hours, we just want each of them to start on a different week creating the pattern we need.

### Set it up

We will setup some rotating schedules to solve the "I want weekends off!" dilemma.

1. Create a new Rotating Schedule and name it "Artist Schedule 1".
2. Set the rotation start date to any Sunday (past, present, future, it doesn't matter) where you want the first week to begin. We'll pick December 1st, 2013.
3. Create a new Week Definition for the schedule in the nested list view.
4. Set the week number to Week 1.
5. Set the hours, in this case we'll set it to work every day except Saturday and Sunday.
6. Create a new Week Definition for Week2, and set it to work every day except Monday and Tuesday.
7. Create a new Week Definition for Week 3, and set it to work every day except Wednesday and Thursday.

### Clone the schedule
In our example, we want each artist to use this same schedule, we just be offset by a single week. This is easy to accomplish.

In the Rotation Schedule List View, Clone Artist Schedule 
1. Change the name to "Artist Schedule 2".
2. Set the rotation start date to be the Sunday after Artist Schedule 
3. Save the new schedule.

Now we have two versions of the same rotating schedule, but they both start one week apart from each other. We can now repeat those three steps for Artist Schedule 3 and we'll have three versions of the same schedule that we can assign to one artist each.

### Assign the schedule to a user

Navigate to **Security > Employees** and open the detail view for the artist you'd like to use Artist Schedule 1. Set their Rotating Schedule Group to Artist Schedule 1 and save their record. Repeat this for the artist that will use Artist Schedule 2 and Artist Schedule 3.

Now, when you're scheduling appointments you'll always be able to easily tell if that is an artist's day off without guessing or trying to do head math.

### Conclusion
This is one example of many useful scenarios for rotating schedules. You could have a single user that needs every other Monday off to deal with personal matters. One rotating schedule with two week definitions will do the trick. Additionally if you wanted to bring in a fourth artist to our scenario above but you only have three stations you could tighten the days, so one artist has Saturday and Sunday off and another has Sunday and Monday off, rather than Monday and Tuesday, etc... this would allow you to fit an extra artist in the schedule as a station would be empty every day of the week. Rotating schedules are very flexible and can allow you to create very complex or basic schedules.