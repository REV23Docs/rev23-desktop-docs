# How-to: Create a Twilio Account for REV23 Desktop
A Twilio account is required for sending text messages from REV23 Desktop. Here you will learn how to create a Twilio account and retrieve the information REV23 Desktop requires to these messages.

> **REV23 Support cannot assist you with setting up a Twilio account. If you need help setting up an account or have questions about using Twilio, [please contact Twilio's support team](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support).**

## Things you will need
To configure REV23 Desktop to use Twilio you will need the following pieces of information. This topic will help you retreive these values. If you already have a Twilio account, you may skip the account creation step.

- A Twilio account (you can create a free trial but you will need to pay before sending text messages to customers)
- A Twilio Phone Number
- Your Twilio Account SID
- Your Twilio Auth Token

Follow the steps below to obtain these things. If you need assistance you will need to contact Twilio's support team, not REV23 support.

## Create a new Twilio account
To create a new Twilio account:

1. Go to [Twilio's sign up page](https://www.twilio.com/try-twilio) and click the "Sign Up" button to create a free trial account.

2. Complete the Twilio trial information form and click the "Start your free trial" button. A confirmation message will appear.

3. Twilio will send you a confirmation email. Open this email and click the link in the email.

4. On the verification screen, provide your phone number and click the "Verify" button.

> Twilio requires a verified phone number in order to make their platform more secure and for you to use when testing their products during your trial. You can also use this number's caller ID when making outbound phone calls using Twilio phone numbers.

5. Twilio will send you an automated SMS message to the phone number you provided. This message will contain your verification code. Type the verification code into the the field provided on the verification screen. Then click the "Submit" button.

6. When prompted for how you plan to use Twilio select the following options:

    - **Which Twilio product are you here to use?** SMS

    - **What do you plan to build with Twilio?** Alerts & Notifications

    - **How do you want to build with Twilio?** With no code at all

    - **What is your goal today?** 3rd party integrations

Once your information is verified, Twilio will take you to your console.

## Get a trial phone number
Your trial will contain credits that you can use to test before upgrading your account. To test, you’ll need to secure a trial phone number.

Twilio will provide you with an option. We suggest using their option to get started. You can always change this later.

## Connect to REV23 Desktop
Now that you have your Twilio trial account and phone number, you can use REV23 Desktop to send SMS Text Messages!

Take note of your Account SID, Auth Token and Phone Number. You will enter these values in [Virtual Receiption Options](../configuration/virtual-receptionist-options.md).

If you need help locating your Auth Token, as well as learning more about its usage and security best practices, see here:

[Twilio Support - Auth Tokens and How To Change Them](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-How-to-Change-Them)