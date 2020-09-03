# Cloud Calendar

REV23 Cloud Calendar is a feature that allows your artists to see, but not modify, their schedules from their mobile device using the native calendar app for their device (i.e. the Calendar app on the iPhone).

## Set up

1. Navigate to **Security > Employees**.
2. Open the desired artist.
3. Ensure they have an email address specified, preferably one they can check on their phone.
4. Check the **Use Cloud Calendar** checkbox.
5. Optionally, check the **Customer contact information visible in Cloud Calendar** checkbox if you would like a client's email address and phone number to be visible in the schedule.
6. Click the **Send Cloud Calendar Email** button.

An email will be sent to the artist containing a unique link resembling the below link, as well as instructions on how to setup their device.

> **Sample Cloud Calendar Link:**  
`webcal://blob.mytattoostudio.com/calendars/00000000-0000-0000-0000-000000000000.ics`

## iPhone & iPad Setup

Tap each link in the received email and choose "Subscribe" when prompted. Depending on the email app used, if the link does not appear clickable, go to Settings, tap "Accounts & Passwords", tap "Add Account", tap "Other", tap "Add Subscribed Calendar". In the Server field, type or copy-and-paste the calendar link.

### iOS Auto Fetch

By default, iOS will only sync the calendar manually.

See [How to: Setup an iOS Device to fetch Cloud Calendar automatically](../how-to/cloud-calendar-ios-fetch.md) to setup your device to keep everything in sync.

However, even with those settings, sometimes you'll find you just need to refresh the calendar manually. To do so, open the Calendar app, tap "Calendars" in the bottom middle of the screen, then pull down and release to refresh. This should force the calendar app to fetch a fresh version of your Cloud Calendar file.

## Android Setup

From your PC, navigate to http://www.google.com/calendar, click the down-arrow next to "Other Calendars", select "Add by URL" from the menu. In the field provided, type or copy-and-paste the calendar link. Click the "Add calendar" button. Your schedule will sync with your Google Account to your Android Phone.

### Android Behavior

If you're using Google Calendar to sync your calendar to Android, you're really at the mercy of when and if these services decide to update your calendar. Google claims it may take up to 12 hours for changes to show up on Google Calendar. Unfortunately if using this platforms, all you can do is wait. See [**Other Apps**](#other-apps) below for alternate suggestions.

## Other Apps

You may be able to find apps in your devices app store that support subscription based calendars that may give you more flexibility of synchronization. Of course these are to be downloaded and used at your own risk and are unsupported by REV23.

+ **Microsoft Windows:** Outlook, included as a part of Microsoft Office, allows you to add internet calendars.
  
+ **Android:** 	ICSx⁵ is a paid app, in no way affiliated with REV23, that helps eliminate the delay of Google Calendar updating your REV23 Cloud Calendar. This app allows you to sync an internet calendar directly to the device, and many REV23 users have reported success with it.

## Related
- [Concepts: Users](users.md)
- [Troubleshooting: Cloud Calendar](../troubleshooting/cloud-calendar.md)