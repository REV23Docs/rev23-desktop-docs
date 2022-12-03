# SMTP (Email) Troubleshooting

In 95% of cases, any issues with emailing from REV23 Desktop are caused by authentication issues, meaning the password is incorrect. Gmail does not use your account password, but an App Password that you will need to generate.

## Gmail App Passwords
To send emails from REV23 Desktop using Gmail you will need to create an App Password. You will use this password in REV23 instead of your regular password.

[Googleo Account - App Passwords](https://myaccount.google.com/apppasswords)

When creating an app password, select "Other" as the app, and type in _REV23 Desktop_ as the name. Copy the password and put it in REV23 Desktop settings. You do not need to remember this password other than to copy it into REV23. 

> IF YOU EVER CHANGE YOUR GOOGLE ACCOUNT PASSWORD YOU WILL NEED TO REDO THIS STEP AS IT RESETS ANY APP PASSWORDS YOU HAVE CREATED!

In your browser start an incognito mode session (Ctrl+Shift+N) and attempt to login with your credentials there. Often times users think they know the password, but when forced to actually type it in, it does not work.

Make sure this is applying to the target email account and not the one that auto logs you in. This is why using this link in an incognito browser is best.


## Other providers

You can find information on some common email provider settings such as Outlook and Yahoo here:

https://docs.rev23.com/rev23-desktop-docs/configuration/virtual-receptionist-options/#common-smtp-settings