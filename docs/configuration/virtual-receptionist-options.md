# Virtual Receptionist Options

The Virtual Receptionist Options configuration allows you to provide additional settings for each of the built in workflow definitions.

## SMTP Server

SMTP Servers are outgoing mail servers, supplied by your email provider, which allow you to send email from your smartphone, desktop email clients such as Outlook, or in this case, REV23 Desktop. An SMTP server is required to send emails and text messages from the Virtual Receptionist. You can add an SMTP server, or multiple servers if you have more than one studio sharing your database, and assign it to your Virtual Receptionist Options. REV23 Desktop can attempt to detect these settings for you, or you can enter them yourself. These settings should be easily discoverable by checking with your email provider. You can also check our list of Common SMTP Server Settings.

### SMTP Server Properties

**Email:** The email address used for this SMTP Server.

**Display Name:** The display name is how recipients will see your name in their email.

**Host**: The host name of the SMTP Server.

**Port**: The port to communicate with with SMTP Server on.

**Use SSL**: If checked, REV23 Desktop will communicate with this SMTP Server over a secured connection if your SMTP Server requires it.

**Use Authentication**: If checked, REV23 Desktop will use your user name/password when communicating with the SMTP Server.

**User Name**: Your SMTP Server user name.

**Password**: Your SMTP Server password.

### Common SMTP Server Settings

#### Outlook/Hotmail

**Host:** smtp.live.com  
**Port:** 587  
**Use SSL:** Yes  
**Requires Authentication:** Yes  
**User name:** Your full outlook.com or hotmail.com email address.
**Password:** Your outlook.com or hotmail.com password. If using two-factor authentication, you will need to generate a new app password.

#### Office 365

**Host:** smtp.office365.com  
**Port:** 587  
**Use SSL:** Yes  
**Requires Authentication:** Yes  
**User name:** Your full email address.

#### Gmail

**Host:** smtp.gmail.com  
**Port:** 587  
**Use SSL:** Yes  
**Requires Authentication:** Yes  
**User name:** Your full gmail.com email address.
**Password:** Your gmail.com password. If using two-factor authentication, you will need to generate a new app password.

> You will need to enable Less Secure Apps in your Google Account in order to send emails from REV23 Desktop. See [Less Secure Apps](https://www.google.com/settings/security/lesssecureapps) on Google.

#### Yahoo! Mail
**Host:** smtp.mail.yahoo.com  
**Port:** 587  
**Use SSL:** Yes  
**Requires Authentication:** Yes  
**User name:** Your full yahoo.com email address.
**Password:** Your yahoo.com password.

> You will need to enable Less Secure Apps in your Yahoo Account in order to send emails from REV23 Desktop. See [Less Secure Apps](https://login.yahoo.com/account/security) on Yahoo.

## Connected Studio Behavior

Each Connected Studio has their own set of Virtual Receptionist Options that can be configured, so you may have a different SMTP Server or different templates for each studio.