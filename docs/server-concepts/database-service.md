# Database Service

The Database Service is the Microsoft SQL Server service which must be running for REV23 Desktop to establish a connection to the database. You should rarely need to do anything with the service itself. However, there are some options for configuring remote connections as well as a database usage meter which shows your database usage of the 10 GB limit of SQL Server Express.

## Database usage meter
The database usage meter shows the approximate usage of your REV23 Desktop database in relevance to the (current) 10GB limit. The 10 GB limit is set by Microsoft SQL Server Express, the free database engine REV23 Desktop is pre-installed with and uses for data access. 

If your usage meter reaches 100%, you will need to acquire a license to an edition of Microsoft SQL Server which does not have this limit. Only the Express Edition has a database size limit. REV23 Development, Inc. has no control over this limit and is in no way an attempt to charge you additional money. You can purchase a Microsoft SQL Server license directly from your local Microsoft Store or online at http://store.microsoft.com.

As of the time of this writing, REV23 Desktop comes pre-installed with Microsoft SQL Server 2014 Express with Service Pack 2. This version has a database size limit of 10 GB.

## Database Service Options

**Enable Enhanced Connections:** Enables Enhanced Connections. See [Enhanced Connections](../connection-concepts/enhanced-connections.md).

**Allow Enhanced Connections through Windows Firewall**: A firewall is like locking the front door to your house—it helps keep intruders (in this case, hackers and malicious software) from getting in. Windows Firewall is on by default on your Windows PC, so you don't need to set it up. To allow REV23 Desktop to connect from other PCs inside your network (PCs in your shop) and outside of your network (your PC at home) you will need to configure the Windows Firewall to allow this connection. Click this link to automatically configure the Windows Firewall. If you have another firewall, such as Norton or McAfee, it will need to be configured independently. See the Enhanced Connections topic for more information.

**Test Enhanced Connections from outside of this network**: If you've configuration your network for Remote Connections, you can use this link to test if they're working from outside of your own studio.

**Reprint Enhanced Connection Instructions:** If you've enabled Enhanced Connections but have lost or misplaced your Enhanced Connection Instructions with your username and password, you can reprint them using this link.