# Appointment Labels

Appointment Labels are customizable statuses to help you visually identify the nature of an appointment on the Scheduler View. An appointment can have both a Label and a Status (in the Scheduler View as well as the Appointment Detail View this is the property named "Show Time As").

> The appointment labels that are built-in are required by the system and cannot be deleted or renamed. These are the labels with an index of zero (0).

# Properties

**Type:** The type of the appointment label.
- *Label*: This appointment label will be a label.
- *Status*: The appointment label will be a status.

**Name:** The name of the appointment label.

**Color:** The color of the appointment label.

**Index:** The index of the appointment label. The index specifies the order in which it appears in the list.

> The scheduler uses the index to assign its label and status. Unlike other areas of REV23 Desktop, this can lead to past data being altered if you make significant changes. For example, imagine you have the following appointment labels, Personal (Index 5) and Vacation (Index 6). If you wanted to add a new label between those (making the new label index 6, and Vacation index 7), any appointment previously labeled as 6 will take on the new label name and color. This may be changed in future versions of REV23 Desktop.