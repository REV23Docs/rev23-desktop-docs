# Add-on PCs

The Add-on PC installer is an additional setup package for add-on PCs you have in your studio, in an additional studio, or at home. The Add-on PC installer only installs the REV23 Desktop application (client) that will connect to a database that is hosted on the computer where the Server installer was installed.

Add-on PC's must be the same version as the server version. If you update one you will have to update the other in order for things to work properly.

Find out more about setting up add-on PCs in the Add-on PCs topic.

> There is no trial version of the Add-on PC installer.

## Connecting to a REV23 Server

See [Enhanced Connections](../connection-concepts/enhanced-connections.md) to get the connection information.

## Changing Add-on PC Connection Information

If for some reason you need to alter the connect information (REV23 Desktop database was moved to another PC, need to change remote information, etc...) you can follow the steps below.

1. Close REV23 Desktop.
2. Open File Explorer on your PC and navigate to C:\Program Files (x86)\REV23 Desktop or, if (x86) doesn't exist, then simply C:\Program Files\REV23 Desktop.
3. In the file list of that directory locate `ResetConnection.cmd` and double-click to run.

REV23 Desktop will open and prompt you for the new connection details. See Add-on PCs topic for more info.

If you don't remember your connection info, see how to Reprint Enhanced Connection Instructions in the [Enhanced Connections](../connection-concepts/enhanced-connections.md) topic.

## Switching a Main PC to an Add-On PC

There are some cases where you may need to change a PC that previously had the REV23 Desktop main PC to an add-on PC. This commonly occurs if

-