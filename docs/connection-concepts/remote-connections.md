# Remote Connections

In order for you to connect to your REV23 Desktop database from an add-on PC while you're outside of the network that database exists on, you will need to also configure remote connections.

By enabling [Enhanced Connections](enhanced-connections.md) you've done most of the heavy lifting. The remaining process must happen on your router where the main PC is located (most commonly, at your studio).

REV23 can configure this for you as a paid service by clicking [here](https://www.rev23.com/cart/addtocart?productVariantId=7e6e8981-6ed4-4227-bc71-cf6f73abe445), or you can use the guidance below.

+ Your Main PC should have either a static IP address, or, reserve its DHCP address in your router's settings.
+ Ensure the network type in Windows settings is set to **Private**
+ Create two port forwarding rules to your main PC.
    - Port 1533 TCP
    - Port 1434 UDP
+ On your add-on PC, the hostname is your public IP address, followed by a comma, then port 1533. For example, "23.23.23.23,1533"
+ It is recommended you either have a static IP address from your ISP, or, create a dynamic DNS hostname (i.e., dyndns.org). Most routers have support for these third party services (extra fees may apply), to keep your public IP address changes. In this case, you will use your hostname, followed by a comma, then port 1533. For example, my.dnshost.com,1533