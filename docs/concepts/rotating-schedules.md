# Rotating Schedules

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

## Related
- [Configuration: Rotating Schedules](../configuration/rotating-schedules.md)