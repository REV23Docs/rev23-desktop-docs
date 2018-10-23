# Add-on PCs

The Add-on PC installer is an additional setup package for add-on PCs you have in your studio, in an additional studio, or at home. The Add-on PC installer only installs the REV23 Desktop application (client) that will connect to a database that is hosted on the computer where the Server installer was installed.

Add-on PC's must be the same version as the server version. If you update one you will have to update the other in order for things to work properly.

Find out more about setting up add-on PCs in the Add-on PCs topic.

> There is no trial version of the Add-on PC installer.

## Connecting to a REV23 Main PC

See [Enhanced Connections](../connection-concepts/enhanced-connections.md) to get the connection information.

## Changing Add-on PC Connection Information

If for some reason you need to alter the connect information (REV23 Desktop database was moved to another PC, need to change remote information, etc...) you can follow the steps below.

1. **Close** REV23 Desktop.
2. Open **File Explorer** on your PC and navigate to `C:\Program Files (x86)\REV23 Desktop`.
3. In the file list of that directory locate `ResetConnection.cmd` and double-click to run.

You can update your connection's hostname, username and password as necessary.

If you don't remember your connection info, see how to Reprint Enhanced Connection Instructions in the [Enhanced Connections](../connection-concepts/enhanced-connections.md) topic.

## Switching a Main PC to an Add-on PC

There are some cases where you may need to change a PC that previously had the REV23 Desktop Main PC to an Add-on PC. This commonly occurs if:

- You've acquired a better PC and want to make that your main, and the old main an add-on.
- You've installed the trial version on a PC at home and are ready to install the main PC at the studio and make your PC an Add-on.
- You messed up and installed the wrong version.

Because REV23 Desktop retains connection information even after being uninstalled, you will need to take an additional step to clear it out.

1. **Uninstall** REV23 Desktop from the Windows Control Panel.
   > If you've already installed the Add-on PC you can skip this step.
2. Open **File Explorer**.
3. Navigate to `C:\Program Files (x86)\REV23 Desktop`
4. **Delete** the file `connectionStrings.config`.
5. Install REV23 Desktop Add-on PC Setup.
    > If you've already installed the Add-On PC, run this setup again and choose the **Repair** option.

You should additionally uninstall the Microsoft SQL Server from the *old* main PC via the Windows Control Panel.