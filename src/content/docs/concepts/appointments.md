---
title: "Appointments"
sidebar:
  label: "Appointments"
  order: 4
---
Appointments are scheduled blocks of time for an artist. They can represent an appointment for a service with a customer, such as a tattoo, or can be more generic.

The start and end fields are independent. If you edit **Start On** in the appointment detail view, REV23 Desktop does not shift **End On** automatically. Check both values before saving. Moving or resizing an appointment on the Scheduler uses the Scheduler's own time-block behavior.

## Find an Opening

Use the **Find an Opening** action to open the Free Time Calculator. Here you can search for the duration as well as other useful criteria to find the next available opening for a specific artist or anyone that has time.

The duration list includes common appointment lengths, including 45 minutes. REV23 Desktop remembers the duration, starting date, search length, time of day, weekdays, and employee used in your most recent search.

After searching, if a time block matching the criteria is located, you can choose to book the appointment or find the next one based on the customer's schedule.

To work properly you must set business hours for the studio as well as your artist's schedule.

> All day appointments (appointments with the all day checkbox checked) will block out the entire day. This includes holidays or sometimes users will create an all day appointment indicating "don't book this day" or something similar. If an all day appointment exists, the Find an Opening tool will not find available time on that day.

## Rescheduling an appointment

The **Reschedule** action preserves the original appointment while placing it in a pending-reschedule queue. It is available for appointments that do not have a linked service.

1. Select the appointment and click **Reschedule**, or right-click it in the Scheduler and select **Reschedule**.
2. When you are ready to choose the new time, either use **Find Opening** and select the pending appointment from the duration field, or right-click an empty Scheduler time cell and select **New Rescheduled Appointment**.
3. Double-click the appointment in the **Pending Reschedules** window. You can filter the list by the selected duration or employee.
4. Review and save the new appointment.

When rescheduling from an empty Scheduler cell, the selected resource becomes the employee for the new appointment. REV23 Desktop warns you before changing the appointment to a different employee. The customer, subject, description, duration, location, label, quoted amount, reminder settings, attachments, deposits, and notes are carried forward to the new appointment.

## Starting multiple services

If the appointment covers more than one service type, select the appointment and click **Start Service Group**. You can also right-click the appointment in the Scheduler and select **Start Service Group**. REV23 Desktop fills in the appointment's customer and employee, creates an individual Service record for each selected service type, links the services to the appointment, and changes the appointment status to **Started**.

The action is available while the appointment has no linked services. See [Service Groups](/rev23-desktop-docs/concepts/service-groups/) for the complete workflow.

## Related

- [User Interface: Scheduler](/rev23-desktop-docs/ui/scheduler/)
- [Concepts: Service Groups](/rev23-desktop-docs/concepts/service-groups/)
- [Reference: Appointments](/rev23-desktop-docs/reference/appointments/)
