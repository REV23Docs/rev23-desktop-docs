# How to: Import Customers

REV23 Desktop allows you to import customers from a CSV (comma separated values) file format.

To begin, when in the Customer List View, use the Import Customers action in the tools tab. There you will select your CSV file to import and hit the OK button. REV23 Desktop will process the file and once complete tell you how many customers were imported, skipped or failed.

## Setting up a file

1. Export your data source to a CSV file. This file **must** contain headers.
2. Open the file in a text editor such as Notepad to inspect it and modify the header names as necessary to match REV23 expected input and save the file.

For example, your file may have a header name of `First` or `First Name` for the customer's name. You will need to change this to `FirstName` for REV23 to process it. Ensure that all columns that you want to import into REV23 have a header name that matches an expected value from the list below.

> The column order does not matter. Properties can appear in any order in your CSV file, all that matters is the exact match of header name.
    
| Field Type | Allowed Property Names |
| --- | --- |
| **Names** | `FirstName`, `MiddleName`, `LastName`, `Nickname` |
| **Address** | `Street`, `City`, `StateProvince`, `ZipPostal` |
| **Phone Numbers** | `HomePhoneNumber`, `MobilePhoneNumber`, `EmergencyPhoneNumber`, `CallbackPhoneNumber`, `OtherPhoneNumber` |
| **Other** | `Email`, `Birthday`, [`Gender`](#genders), `IdentificationNumber`, `IdentificationState` |

### File Example

Below is an example of well formed expected input. Obviously, your data will likely have many more fields that are not used by REV23.

```
FirstName,MiddleName,LastName,Gender,Street,City,StateProvince,ZipPostal,Birthday,HomePhoneNumber,MobilePhoneNumber,OtherPhoneNumber,CallbackPhoneNumber,EmergencyPhoneNumber,Nickname,IdentificationNumber,IdentificationState,Email
Abby,L.,Edwards,1,1430 NELSON ST,Denver,CO,80215,1988-05-01 00:00:00.000,(303) 202-7332,,,,,,54-592-8114,CO,
Adam,D.,Williams,2,9338 W IOWA AVE,Denver,CO,80232,1982-02-23 00:00:00.000,(720) 307-7746,,,,,,89-693-9935,CO,
...
```

## Import the File

1. Navigate to **Home > Customers**.
2. Click the **Tools** tab.
3. Click the **Import Customers** action.
4. Select your file and click **OK**.

The import may take several minutes to complete. Please be patient.

## Import Behavior

### Duplicate processing

The import will attempt to skip over customers that already exist in the system. A customer is considered a duplicate if the first and last name match as well as having the same birthday or the the same street address (not including city, state, etc...)

### Genders

For gender, there are several acceptable values to enter male and female.

**Female:** F, Female or 1 are acceptable.

**Male:** M, Male or 2 are acceptable.

**Unspecified:** 0, or any other value will default to Unspecified gender.