---
title: "Appointments"
sidebar:
  label: "Appointments"
  order: 0
---
## Properties

**Subject:** The short description shown on the Scheduler and appointment lists.

**Customer:** The customer expected for the appointment.

**Employee:** The employee whose schedule contains the appointment.

**Start On:** The appointment's starting date and time.

**End On:** The appointment's ending date and time. Start On and End On are independent fields; changing Start On does not move End On automatically. Review both after changing either value.

**All Day:** Blocks the employee's entire day. Find Opening treats the day as unavailable.

**Recurrence:** Repeats the appointment using the configured recurrence pattern.

**Label:** The Scheduler color/category assigned to the appointment.

**Show Time As:** Controls how the time is presented for calendar availability.

**Status:** The appointment's current workflow status, such as Scheduled, Confirmed, Canceled, Rescheduled, or Started.

**Quoted Amount:** The amount quoted before the service begins.

**Send Email Reminder:** Includes the appointment in the email-reminder workflow when that workflow is configured.

**Send Text Message Reminder:** Kept for existing records, but text messaging is no longer available in REV23 Desktop. See [Text messaging in REV23 Desktop](/rev23-desktop-docs/how-to/create-twilio-account/).

**Notes:** Internal notes attached to the appointment.

**Deposits:** Deposits associated with this appointment.

**Attachments:** Images or documents attached to the appointment.

## Actions

**Find Opening:** Opens the Free Time Calculator with the appointment information available to the search.

**Reschedule:** Preserves the original as Rescheduled and places it in the pending-reschedule queue. Finish the move with Find Opening or **New Rescheduled Appointment** from an empty Scheduler cell.

**Start Service:** Creates one service from the appointment when the customer arrives.

**Start Service Group:** Creates several linked services from the appointment. See [Service Groups](/rev23-desktop-docs/concepts/service-groups/).

**Take Deposit:** Creates a deposit associated with the appointment.

**Add Holidays To Calendar:** Adds the predefined holidays for a selected region as all-day appointments. Review the results and remove holidays when the studio remains open, because Find Opening treats them as unavailable days.

See [Appointments](/rev23-desktop-docs/concepts/appointments/) for Find Opening and rescheduling workflows.
