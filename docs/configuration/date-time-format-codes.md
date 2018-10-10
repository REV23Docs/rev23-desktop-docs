# Date/Time Format Codes

While configuring REV23 Desktop, you may notice properties that allow you to format a date/time format value. For example, if you set Invoice Number Generation Mode to Date/Time, a property called "Invoice Number Date Time Format" will appear. But, what does this mean and what can you do with it?
 
REV23 Desktop interprets this code and replaces it with the date time value to the specified format.
 
For example, if the code is yyyyMMdd and the date to be formatted is March 14, 2013, REV23 Desktop will replace this value with 20130314. This works as follows:
 
yyyy = The four digit year
MM = The two digit month
dd = The two digit date
 
This is case sensitive, so you must be careful. For example, using mm rather than MM would be the date/time's minute value, rather than the month.
 
You can use the table below to design your own date/time formats for use in REV23 Desktop.


| Format specifier | Description | Examples |
| --- | --- | --- |
| "d" | The day of the month, from 1 through 31. | 6/1/2009 1:45:30 PM -> 1 <br/>6/15/2009 1:45:30 PM -> 15 |
| "dd" | The day of the month, from 01 through 31. | 6/1/2009 1:45:30 PM -> 01<br/>6/15/2009 1:45:30 PM -> 15 |
| "ddd" | The abbreviated name of the day of the week. | 6/15/2009 1:45:30 PM -> Mon |
| "dddd" | The full name of the day of the week. | 6/15/2009 1:45:30 PM -> Monday |
| "f" | The tenths of a second in a date and time value. | 6/15/2009 13:45:30.617 -> 6<br/>6/15/2009 13:45:30.050 -> 0 |
| "ff" | The hundredths of a second in a date and time value. | 6/15/2009 13:45:30.617 -> 61<br/>6/15/2009 13:45:30.005 -> 00 |
| "fff" | The milliseconds in a date and time value. | 6/15/2009 13:45:30.617 -> 617<br/>6/15/2009 13:45:30.0005 -> 000 |
| "ffff" | The ten thousandths of a second in a date and time value. | 6/15/2009 13:45:30.6175 -> 6175<br/>6/15/2009 13:45:30.00005 -> 0000 |
| "fffff" | The hundred thousandths of a second in a date and time value. | 6/15/2009 13:45:30.61754 -> 61754<br/>6/15/2009 13:45:30.000005 -> 00000 |
| "ffffff" | The millionths of a second in a date and time value. | 6/15/2009 13:45:30.617542 -> 617542<br/>6/15/2009 13:45:30.0000005 -> 000000 |
| "fffffff" | The ten millionths of a second in a date and time value. | 6/15/2009 13:45:30.6175425 -> 6175425<br/>6/15/2009 13:45:30.0001150 -> 0001150 |
| "F" | If non-zero, the tenths of a second in a date and time value. | 6/15/2009 13:45:30.617 -> 6<br/>6/15/2009 13:45:30.050 -> (no output) |
| "FF" | If non-zero, the hundredths of a second in a date and time value. | 6/15/2009 13:45:30.617 -> 61<br/>6/15/2009 13:45:30.005 -> (no output) |
| "FFF" | If non-zero, the milliseconds in a date and time value. | 6/15/2009 13:45:30.617 -> 617<br/>6/15/2009 13:45:30.0005 -> (no output) |
| "FFFF" | If non-zero, the ten thousandths of a second in a date and time value. | 6/1/2009 13:45:30.5275 -> 5275<br/>6/15/2009 13:45:30.00005 -> (no output) |
| "FFFFF" | If non-zero, the hundred thousandths of a second in a date and time value. | 6/15/2009 13:45:30.61754 -> 61754<br/>6/15/2009 13:45:30.000005 -> (no output) |
| "FFFFFF" | If non-zero, the millionths of a second in a date and time value. | 6/15/2009 13:45:30.617542 -> 617542<br/>6/15/2009 13:45:30.0000005 -> (no output) |
| "FFFFFFF" | If non-zero, the ten millionths of a second in a date and time value. | 6/15/2009 13:45:30.6175425 -> 6175425<br/>6/15/2009 13:45:30.0001150 -> 000115 |
| "g", "gg" | The period or era. | 6/15/2009 1:45:30 PM -> A.D. |
| "h" | The hour, using a 12-hour clock from 1 to 12. | 6/15/2009 1:45:30 AM -> 1<br/>6/15/2009 1:45:30 PM -> 1 |
| "hh" | The hour, using a 12-hour clock from 01 to 12. | 6/15/2009 1:45:30 AM -> 01<br/>6/15/2009 1:45:30 PM -> 01 |
| "H" | The hour, using a 24-hour clock from 0 to 23. | 6/15/2009 1:45:30 AM -> 1<br/>6/15/2009 1:45:30 PM -> 13 |
| "HH" | The hour, using a 24-hour clock from 00 to 23. | 6/15/2009 1:45:30 AM -> 01<br/>6/15/2009 1:45:30 PM -> 13 |
| "K" | Time zone information. | With DateTime values:<br/>6/15/2009 1:45:30 PM, Kind Unspecified -> 6/15/2009 1:45:30 PM,<br/>Kind Utc -> Z 6/15/2009 1:45:30 PM <br/>Kind Local -> -07:00 (depends on local computer settings)<br/>With DateTimeOffset values:<br/>6/15/2009 1:45:30 AM -07:00 --> -07:00 |
| "m" | The minute, from 0 through 59. |  6/15/2009 1:09:30 AM -> 9<br/>6/15/2009 1:09:30 PM -> 9 |
| "mm" | The minute, from 00 through 59. | 6/15/2009 1:09:30 AM -> 09<br/>6/15/2009 1:09:30 PM -> 09 |
| "M" | The month, from 1 through 12. | 6/15/2009 1:45:30 PM -> 6 |
| "MM" | The month, from 01 through 12. | 6/15/2009 1:45:30 PM -> 06 |
| "MMM" | The abbreviated name of the month. | 6/15/2009 1:45:30 PM -> Jun |
| "MMMM" | The full name of the month. | 6/15/2009 1:45:30 PM -> June |
| "s" | The second, from 0 through 59. | 6/15/2009 1:45:09 PM -> 9 |
| "ss" | The second, from 00 through 59. | 6/15/2009 1:45:09 PM -> 09 |
| "t" | The first character of the AM/PM designator. | 6/15/2009 1:45:30 PM -> P |
| "tt" | The AM/PM designator. | 6/15/2009 1:45:30 PM -> PM |
| "y" | The year, from 0 to 99. | 1/1/0001 12:00:00 AM -> 1<br/>1/1/0900 12:00:00 AM -> 0<br/>1/1/1900 12:00:00 AM -> 0<br/>6/15/2009 1:45:30 PM -> 9 |
| "yy" | The year, from 00 to 99. | 1/1/0001 12:00:00 AM -> 01<br/>1/1/0900 12:00:00 AM -> 00<br/>1/1/1900 12:00:00 AM -> 00<br/>6/15/2009 1:45:30 PM -> 09 |
| "yyy" | The year, with a minimum of three digits. | 1/1/0001 12:00:00 AM -> 001 1/1/0900 12:00:00 AM -> 900<br/>1/1/1900 12:00:00 AM -> 1900 6/15/2009 1:45:30 PM -> 2009 |
| "yyyy" | The year as a four-digit number. | 1/1/0001 12:00:00 AM -> 0001 <br/>1/1/0900 12:00:00 AM -> 0900<br/>1/1/1900 12:00:00 AM -> 1900<br/>6/15/2009 1:45:30 PM -> 2009 |
| "yyyyy" | The year as a five-digit number. | 1/1/0001 12:00:00 AM -> 00001 <br/>6/15/2009 1:45:30 PM -> 02009 |
| "z" | Hours offset from UTC, with no leading zeros. | 6/15/2009 1:45:30 PM -07:00 -> -7 |
| "zz" | Hours offset from UTC, with a leading zero for a single-digit value. | 6/15/2009 1:45:30 PM -07:00 -> -07 |
| "zzz" | Hours and minutes offset from UTC. | 6/15/2009 1:45:30 PM -07:00 -> -07:00 |
| ":" | The time separator. | 6/15/2009 1:45:30 PM -> : |
| "/" | The date separator. | 6/15/2009 1:45:30 PM -> / |
| "string" | 'string' | Literal string delimiter. | 6/15/2009 1:45:30 PM ("arr:" h:m t) -> arr: 1:45 P 6/15/2009 1:45:30 PM ('arr:' h:m t) -> arr: 1:45 P |
| % | Defines the following character as a custom format specifier. | 6/15/2009 1:45:30 PM (%h) -> 1 |
| \ | The escape character. | 6/15/2009 1:45:30 PM (h \h) -> 1 h |
| Any other character | The character is copied to the result string unchanged. | 6/15/2009 1:45:30 AM (arr hh:mm t) -> arr 01:45 A |