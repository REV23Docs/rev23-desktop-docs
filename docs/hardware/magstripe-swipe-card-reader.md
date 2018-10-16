# Magstripe Swipe Card Reader

## Device Driver

No device driver is necessary for the Magstripe Swipe Card Reader for use in REV23 Desktop.

## Changing reading modes

In order to work properly with REV23 Desktop, the Magstripe Swipe Card Reader must be using Keyboard Emulation, not HID  (Human Interface Device). Most magstripe swipe card readers shipped by REV23 are already configured for Keyboard Emulation, but every once in a while, we will ship one pre-configured for HID based on our stock status.

You can test if your magstripe swipe card reader is using Keyboard Emulation mode by opening Notepad (notepad.exe) and swiping a card. Does text 'type' into the window? If not, the device may be in HID mode. Luckily, this is easily fixed using one of the methods below.

### Method #1
Using Internet Explorer only, https://www.magtek.com/changemode/ and use the Change device mode button. Once complete, test in Notepad again. Everything should be configured properly. If this fails, proceed to Method 2.

### Method #2
Sometimes, Method #1 doesn't work for various reasons. Here is the slightly longer work around. Follow the directions carefully.

 Download Demo Program Direct: https://www.magtek.com/Content/SoftwarePackages/99510026.exe
 Alternate (Download the Demo Program): https://www.magtek.com/support/sureswipe?tab=software

1) Download and install the Demo program from the above link. When installing, use the default options, not installing the source code.

2) Run USBMSR Demo from the Windows start menu.

For Windows 10

Type USBMSR Demo in the search box on the taskbar, and then select USBMSR Demo.

For Windows 8.1 / Windows RT 8.1 

Swipe in from the right edge of the screen, tap Search (or if you're using a mouse, point to the lower-right corner of the screen, move the mouse pointer up, and then click Search), enter USBMSR Demo in the search box, and then tap or click USBMSR Demo.

For Windows 7

Click the Start button. In the search box, type USBMSR Demo, and then, in the list of results, click USBMSR Demo.


3) Click the yellow Load File button.

4) In the Open File Dialog, navigate to the following directory, depending on your operating system architecture:

Windows 64-bit: C:\Program Files (x86)\MagTek\USBMSR
Windows 32-bit: C:\Program Files\MagTek\USBMSR

5) Select the Change to Keyboard.txt file and click the Open button.



6) Click the yellow Download button.



Your MagTek Swipe Card reader should now be set to Keyboard Emulation mode, which is the proper mode for REV23 Desktop.

Once you've verified everything is working properly, you may uninstall the MakTek USBMSR Demo from your PC using the Windows Control Panel.