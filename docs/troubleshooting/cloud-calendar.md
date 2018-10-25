## Troubleshooting: Cloud Calendar

Cloud Calendar itself is actually a very simple implementation, admittedly created as a temporary work around until a more permanent solution is designed. Because it is a very basic system, there isn't much that can really go wrong on the REV23 Desktop side and issues generally are with the devices themselves.

First, let's talk a little bit about how Cloud Calendar works so you can better understand how to troubleshoot it.

When enabled for a user, the REV23 Desktop Integration Service periodically generates a file using the iCal standard format and uploads this file to REV23's Cloud. This file contains user's future appointments and some duration of past appointments. This is where our involvement ends. Your device then "subscribes" to this file and should update its calendar with the contents of this file. We can't control what the device does, so as long as that file exists on our server there isn't much we can do from our side.

### iOS Auto Fetch
Most iOS users simply forget to configure the Fetch settings to automatically update their device. See [Concepts: Cloud Calendar](../concepts/cloud-calendar.md#ios-auto-fetch).

### Check Integration Service

For Cloud Calendar files to upload, the [Integration Service](../server-concepts/integration-service.md) must be running.

1. Open the [**REV23 Desktop Control Panel**](../server-concepts/control-panel.md).
2. Click the **Integration Service** tile and ensure it is started.
3. Click the **Show Log** button to examine when the last upload occurred.

### Check file contents

When you were sent your Cloud Calendar Instructions email it contained a link. It looked something like this: `webcal://blob.mytattoostudio.com/calendars/00000000-0000-0000-0000-000000000000.ics`

Using your unique link, if you replace the **webcal://** with **http://** and paste the address in your browser it will download the iCalendar file. You can then open this file using Notepad or any other text editor to see its contents. If you feel like an appointment is missing from your phone but it appears in this file, this means that the problem is that your device is not using a current version of this file and needs to be refreshed. If the file is correct there is unfortunately nothing we can do, and is up to your device.