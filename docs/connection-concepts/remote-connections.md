# Remote Connections

In order for you to connect to your REV23 Desktop database from an add-on PC while you're outside of the network that database exists on, you will need to also configure remote connections.

By enabling [Enhanced Connections](enhanced-connections.md) you've done most of the heavy lifting. The remaining process must happen on your router where the main PC is located (most commonly, at your studio). This guide gives a very high level overview of how to perform this configuration. 

## Via VPN (Virtual Private Network)
VPN is the recommended method for remote connections for REV23 Desktop, however this is more complex and cannot be setup by REV23;  you will need to find someone to assist you with this. When connecting with VPN there are no extra steps from [Enhanced Connections](enhanced-connections.md).

## Via Direct SQL Connection

> While easier to configure (and the only way REV23 can assist with), this method is not recommended for security purposes. VPN is the recommended approach for studio's connecting remotely.

**If you are not confident in performing these steps do not proceed on your own. Most local 'computer guys' will be able to follow this guide with ease and help you.**

> REV23 can configure remote connections via direct SQL connection for you as a paid service by clicking [here](https://www.rev23.com/cart/addtocart?productVariantId=7e6e8981-6ed4-4227-bc71-cf6f73abe445), or you can use the guidance below.

### Preparation

The following preparation should take place on your Main PC. If you decide to pay REV23 to perform this configuration for you, you will still need to perform these pre-requisites first.

#### Connection

+ Your Main PC should be plugged into ethernet if possible and not using Wi-Fi. Note that if you set this up on Wi-Fi, then later change to ethernet, this configuration will need to be changed on the router. Wi-Fi speeds for remote connections are much slower than if hard wired.

#### ISP

+ You should get a static IP from your ISP. This is a paid feature of your internet service, however it makes things more consistent and stable.

+ Or, if you chose not to get a static IP from your ISP you will need some type of dynamic DNS service, such as [Dyn](https://account.dyn.com/) or no-ip.org. Check which (if any) your router supports, and select from that list. Otherwise, [Dyn](https://account.dyn.com/) offers a Windows Update Client that runs in the background on your main PC and will update your hostname with any changes to your public IP address. If REV23 performs this config, we usually assist you with setting up [Dyn](https://account.dyn.com/).

#### Router Login Information

+ Ensure you can log onto your router's administrative page. In the majority of cases you'll find this by opening a browser to http://192.168.1.1 or http://10.1.10.1. You can also do an internet search for your make/model of router and find that information easily. If neither of these work you can find this with the following steps.

    1. Press `WIN+R` on your keyboard
    2. Type `cmd` and press ENTER
    3. Type `ipconfig` and press ENTER
    4. Look for the `Default Gateway` entry. This is generally your router's address. Type it into a browser window.

        > If you have two routers (one from your ISP and then another Wi-Fi router) this complicates things a bit and the ISP router will need to be put in Bridged mode (to not act as a router and only serve the broadband connection. You may need to call your ISP for them to change this.) Alternatively, you can plug the Main PC into the broadband router, skipping your other router.

    5. Ensure you know the admin username and password. In most cases, this is `admin` and `password` respectively. If this is the case, you should also take the time to change this password.

### Configuration

1. Ensure the Network Profile in Windows settings is set to **Private**. In the latest versions of Windows 10 this can be done by clicking the Network icon in the bottom right corner, selecting Properties on the network you are connected to, then making sure this is set to Private and not Public.

2. Ensure Windows Power Settings are set to not turn off the PC or put it to sleep automatically. You cannot connect to your database if the main PC is not available for connections.

3. Log into your router's administrative panel.

4. Find DHCP Reservations and reserve your Main PC's current IP address to its physical MAC address. You can also chose an IP address, sometimes REV23 support will assign something like 192.168.1.23 to the main PC (if its not already in use).

5. Create one Port Forwarding rule to your main PC's private IP address (the one which was reserved in step 3).

    | Rule Name | Port | Protocol |
    | --- | --- | --- |
    | SQL Server (REV23) | 1533 | TCP |

6. If you have any other security software such as McAfee you will need to configure it to allow traffic to that PC on this port as well.

7. In the REV23 Desktop Control Panel open the Database Service tile and click the *Test Enhanced Connections from outside of this network* link to verify your connection. If this test fails, something is not properly configured.

If your test succeeds you are finished! You will now need to configure your add-on PC with the proper connection information for accessing your main PC from outside of the studio.

### Add-on PC Configuration

If you are already at the screen asking for connection details this information is the same as the information that was provided to you when you setup [Enhanced Connections](enhanced-connections.md) with one difference. You will need to set the Server Name to be your public static IP address or your dynamic DNS hostname, followed by a comma, then the number 1533.

For example:

+ Using a dynamic hostname: my.dynhost.com,1533
+ Using your static IP: [yourstaticip],1533 e.g. 66.66.123.123,1533

If you attempt this in the studio and it fails, this is most likely because your router does not support loopback, meaning you cannot use the external IP address to connect to the main PC when you're in the same network. In this case you will need to add a new connection profile to your REV23 Desktop add-on PC.

1. Close REV23 Desktop.
2. Hold down the SHIFT key and open REV23 Desktop again. Wait until you see the Connection dialog.
3. On the Connection dialog, ensure this is set to the information from your Enhanced Connections sheet, which uses the main PC's computer name for the server name. i.e. YOURMAINPCNAME\TATTOOSTUDIO.
4. Click the 'Edit Other Connections' button in the bottom left.
5. Add a new connection. Name it something like "Out of Studio" and enter your remote connection details and save. If you're still in the same network, this will fail again, but you will be able to proceed.
6. Click OK and close the connection dialog.

When you open REV23 Desktop again you will be prompted for which connection to use. Select the appropriate one for the environment you are in (in studio or out of studio).

### Troubleshooting

+ If you're running separate security software on your main PC disable it and try again. If the connection works you will need to independently configure it to allow these connections.

+ If your connection used to work and is suddenly broken, verify this configuration again. Generally this is caused by the Windows network profile changing, or a change to your public IP address (which is why you should get a static IP).

> REV23 can assist you with this process as a paid service by clicking [here](https://www.rev23.com/cart/addtocart?productVariantId=7e6e8981-6ed4-4227-bc71-cf6f73abe445). We cannot provide troubleshooting through TeamViewer without charging for it as it takes way too much of our time.