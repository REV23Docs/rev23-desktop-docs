---
title: "Scheduler"
sidebar:
  label: "Scheduler"
  order: 9
---
The Scheduler is the calendar view of your studio's appointments. Open it from the **Appointments** navigation item.

## Navigating the Scheduler

Use the navigation bar embedded directly above the calendar to move backward or forward, return to today, open the date picker, or switch the calendar view. The view selector is part of the Scheduler itself rather than the main ribbon.

The ribbon still contains commands for zooming and grouping appointments by date or employee. When grouped by employee, each employee appears as a Scheduler resource.

## Creating and moving appointments

Double-click an empty time cell to create an appointment at that time. You can also drag an existing appointment to another time or employee. If **Show confirmation when dragging and dropping an appointment** is enabled in [My Studio](/rev23-desktop-docs/configuration/my-studio/#appointment-options), REV23 Desktop asks you to confirm the move before saving it.

Right-click an appointment for quick access to these commands:

- **Start Service**
- **Start Service Group**
- **Reschedule**
- **Set Status**
- **Delete**

Right-click an empty time cell and select **New Rescheduled Appointment** to place an appointment from the pending-reschedule queue into that time. If the Scheduler is grouped by employee, the selected resource becomes the employee for the new appointment.

## Business hours and availability

Closed hours and employee time off are shaded in the Scheduler. The optional **Closed** and **Off** watermarks can make those periods more obvious. Configure business hours, the first day of the week, drag-and-drop confirmation, and other Scheduler behavior in [My Studio: Appointment Options](/rev23-desktop-docs/configuration/my-studio/#appointment-options).

The **Find Opening** action searches the same business hours and employee schedules for an available appointment. See [Appointments](/rev23-desktop-docs/concepts/appointments/) for search and rescheduling details.
