# Enhanced Connections

By default, REV23 Desktop is configured to only allow the Windows user that installed the software to connect to the database. Enhanced connections alter the security to allow not only other Windows users on the same PC to use REV23 Desktop, but Add-on PC's on the same network to connect as well. Additionally, with extra setup, Enhanced Connections can be enabled for Remote Connections, connections from REV23 Desktop Add-on PCs from outside your local network, for example from another studio or from your home.

## Setup Enhanced Connections

Enhanced Connections are actually very simple to setup as we do all of the heavy lifting for you!

1) Open the REV23 Desktop Control Panel
2) Click the Database Service tile.
3) In the Enhanced Connections section, click "Enable Enhanced Connections"

REV23 Desktop will configure the necessary settings for you. Once complete, the Enhanced Connections Instruction sheet will appear for you to print or save (you should do both). If you're going to be configuring Add-on PCs, this is the information you will need to get connected.

If you're simply wanting to allow other Windows users on the same PC to connect to REV23 Desktop, there are no additional steps that need to be taken.

You can reprint these instructions anytime using the Reprint Enhanced Connection Instructions link in the Database Service.

## Firewall Configuration

Firewalls keep unwanted traffic out of your PC. Windows Firewall is enabled by default on your Windows PC which REV23 Desktop can automatically configure for you using the REV23 Desktop Control Panel. 

1) Open the REV23 Desktop Control Panel.
2) Click the Database Service tile.
3) In the Enhanced Connections section, click "Allow Enhanced Connections through Windows Firewall"

The Windows Firewall will be configured and Add-on PCs should be able to connect.

However, some personal firewall software (Norton, McAfee, etc...) will disable the Windows Firewall, leaving the configuration up to you. So, if you're using a personal firewall you will need to add rules to allow internet traffic through on the following ports and protocols.

| Rule Name | Port | Protocol |
| --- | --- | ---|
| SQL Server | 1533 | TCP |
| SQL Browser | 1434 | UDP |