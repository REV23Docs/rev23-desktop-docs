# Person

Customers and Employees are both based on a Person object and share several common properties. This topic is intended to describe the shared behavior and properties between them to prevent duplication between topics.

## Properties

**Photo:** Photo of the person.

**First Name:** The person's first name. The first name is required.

**Middle Name:** The person's middle name.

**Last Name:** The person's last name. The last name is required.

**Nickname:** The person's nickname, if applicable.

**Gender:** The person's gender.
+ Unspecified
+ Male
+ Female

**Ethnicity:** The ethnicity of the customer. Required by some health departments.

+ White
+ Hispanic, Latino, or Spanish
+ Black or African American
+ Asian
+ American Indian or Alaska Native
+ Middle Eastern or North African
+ Native Hawaiian or Other Pacific Islander
+ Other

**Birthday:** The person's date of birth.

**Age:** The person's current age, calculated from their date of birth.

**Email:** The person's email address.

### Address

**Street:** The person's street address.

**City:** The person's city.

**State/Province:** The person's state/province.

**Zip/Postal:** The person's zip/postal code.

**Country:** The person's country.

### Phone Numbers

**Business:** The person's business phone number.

**Home:** The person's home phone number.

**Mobile:** The person's mobile phone number.

**Mobile Provider:** The person's SMS gateway. This, along with their mobile phone number is required in order to send text messages to the person.

**Emergency:** An emergency contact number for the person.

### Lists

**Locations:** A list of connected studios the person is associated with.

**Notes:** A list of notes for the person.

**Medical Conditions:** A list of medical conditions for the person.

**Appointments:** A list of the person's appointments.

**Services:** A list of the person's services.