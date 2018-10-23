# Hardware Troubleshooting

## Barcode Scanner Troubleshooting

Most issues with the barcode scanner revolve around unexpected input. We're going to assume that when you attempt to read the barcode it lights up, beeps, etc... if it's not doing that make sure it's plugged in? Maybe it's dead? Try it on another PC. If it's still not working, you may just need a new barcode scanner.

If the barcode scanner is scanning the barcode but it's not being correctly read by REV23 Desktop there are two possible solutions.

1) Have you configured the barcode scanner to properly work with REV23 Desktop? See the Barcode Scanner topic for more information. Maybe try the configuration again. Sometimes the barcode scanner after a reboot will need to be reconfigured. 

2) If after configuration its still not reading properly, we may just need to make some adjustments to REV23 Desktop so that it can better understand that barcode. Open Notepad (notepad.exe) on your PC, and with the cursor blinking inside of it scan the barcode. You'll see some text start to type into Notepad. Once completed, save and send the text document to support@rev23.com and we can make the necessary adjustments if the data is in fact valid. In most cases, you yourself will be able to tell. Do you see text representing someone's first and last name, address, etc...? If so, then we should be able to fix it. If not, there isn't anything we can really do. If its not in that text, we can't read it.
   
## Magstripe Swipe Card Reader Troubleshooting
Most issues with the magstripe swipe card reader 
revolve around unexpected input. We're going to assume that there is probably some kind of light on the device that is lit up... if it's not doing that make sure it's plugged in? Maybe it's dead? Try it on another PC. If it's still not working, you may just need a new magstripe swipe card reader.

If the card reader is new, it may be in the wrong mode. REV23 Desktop requires card readers be in Keyboard Emulation mode and not HID. See Magstripe Swipe Card Reader for more information on how to change this.

If the magstripe swipe card reader appears to be working and in the proper Keyboard Emulation mode, but the magstripe is not being correctly read by REV23 Desktop we can inspect the data and issue a fix for that type of card. Open Notepad (notepad.exe) on your PC, and with the cursor blinking inside of it swipe the magstripe. You'll see some text start to type into Notepad. Once completed, save and send the text document to support@rev23.com and we can make the necessary adjustments if the data is in fact valid. In most cases, you yourself will be able to tell. Do you see text representing someone's first and last name, address, etc..., or a credit card or gift card number? If so, then we should be able to fix it. If not, there isn't anything we can really do. If its not in that text, we can't read it.

## Documents & Photo Scanners

Some devices have issues with the newer TWAIN 2.x model. If you encounter errors or freezing of the application while attempting to scan you can attempt to force REV23 Desktop to use TWAIN 1.x when scanning. You can Force TWAIN 1.x Behavior in [Device Options](../configuration/device-options.md). After changing this setting you will need to restart REV23 Desktop for it to take effect.