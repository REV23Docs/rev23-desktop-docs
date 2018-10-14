# SQL Server Manual Installation

Microsoft SQL Server is a relational database management system developed by Microsoft, which is required by REV23 Desktop. REV23 Desktop attempts to download and install Microsoft SQL Server Express, However, sometimes, for various reasons, the installation of SQL Server may fail and will need to be installed manually by the user in order to properly install REV23 Desktop. Additionally, you may have upgraded your copy of SQL Server from Express to another edition. In which case you would want to install it using these instructions before attempting to install REV23 Desktop.

Every step must be exact, otherwise, REV23 Desktop will not run and you will have to uninstall the installed SQL Server and start the process over.

## Downloading SQL Server

Before you can begin, you need to download the appropriate version of Microsoft SQL Server. The current version of Microsoft SQL Server required by REV23 Desktop is Microsoft SQL Server 2014 Express SP2.

If you've upgraded your SQL Server license from Express to another edition (see the SQL Server Edition Upgrade topic), please download your appropriate version from where you purchased it and skip to the next section "Installing SQL Server for REV23 Desktop"

You can download directly from Microsoft at the Microsoft SQL Server 2014 download page.

> Download: https://www.microsoft.com/en-us/download/details.aspx?id=53167

Depending on your computer, you will either need to download the 32-bit version of the 64-bit version. If you're installing manually because the REV23 Desktop Setup instructed you to, it will tell you which file you need to download. Another easy way to tell is open File Explorer and navigate to your C:\ drive. If you see Program Files and Program Files (x86) directories you have a 64-bit PC. If you only see a single Program Files directory, you have a 32-bit PC.

+ For 64-bit computers, download the file SQLEXPR_x64_ENU.exe.
+ For 32-bit computers, download the file SQLEXPR32_x86_ENU.exe.

Save the file to your hard drive and once it is complete, execute the downloaded setup file.

Installing SQL Server for REV23 Desktop

The first screen is the SQL Server Installation Center. Click “New SQL Server stand-alone installation or add features to an existing installation".

In SQL Server 2014 Setup, on the License Terms Page click the checkbox to accept the license terms, then click “Next”.

On the Feature Selection page, make sure all available features are checked,then click “Next”.

On the Instance Configuration page, check the Named Instance radio button, and type in TATTOOSTUDIO. All uppercase, all one word, just as it appears here, and in the image below, then click “Next”. If this step is not done properly, REV23 Desktop will not recognize that Microsoft SQL Server has been installed.

On the Service Configuration page, change the Account Name for the SQL Server Database Engine Service, by clicking the drop down arrow in the Account Name column and clicking the “<<Browse…>>” item.

In the “Select User or Group” window that pops up, type the word “SYSTEM” in the bottom box. Then click the “Check Names” button, if there are no errors, click “OK”. This should resolve the Account Name to “NT AUTHORITY\SYSTEM”. If everything looks correct, click the “Next” button.

On the Database Engine Configuration page, set the Authentication Mode to Mixed Mode (SQL Server authentication and Windows authentication). In the password and confirm password box type a strong password. Keep this password for now. If support from REV23 is required, we may need it. Once everything is up and running you can discard this password.

In the “Specify SQL Server administrators” section, click the “Add…” button,and follow the instructions from the previous step to add NT AUTHORITY\SYSTEM as a SQL Server Administrator. DO NOT CLICK “NEXT” ON THIS SCREEN YET!

While still on the Database Engine Configuration page, click the FILESTREAM tab. Check the top checkbox that says “Enable FILESTREAM for Transact-SQL access”. Then click “Next”.

On the Error Reporting page, you can either check the checkbox to send error reports to Microsoft, or leave it unchecked, then click “Next.”

Microsoft SQL Server 2014 will now install.

Once complete, if there are no errors (all features have a green check mark)click the “Close” button. Microsoft SQL Server 2014 Express is now installed.

If the installation fails, please click the link on the bottom of the screen to open the Summary Log File. Email the contents of this file to support@rev23.com so we can further assist you.


