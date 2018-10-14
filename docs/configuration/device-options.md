# Device Options

Device Options are options specific to the PC that you're currently using. They mostly control default hardware options. You can access Device Options from the Main Window's Tools page on the ribbon.

**Default Webcam:** If selected, when acquiring a picture from the webcam, you will not be prompted for which device to use.

**Default Scanner**: If selected, when acquiring a picture/document from a scanner, you will not be prompted for which device to use.

**Force TWAIN 1.x Behavior:** If checked, REV23 Desktop will force TWAIN 1.x during scanning operations. Some devices have issues with the newer TWAIN 2.x model. If you encounter errors or freezing of the application while attempting to scan, check this box and restart REV23 Desktop.

**Default Receipt Printer:** If selected, sale & invoice receipts will attempt to print to this printer.

**Default Consent Form/Aftercare Printer:** If selected, consent form and aftercare documents will attempt to print to this printer.

**Default Deposit/Credit Printer:** If selected, deposit & credit receipts will attempt to print to this printer.

**Default Credit Card Printer:** If selected, credit card authorization receipts will attempt to print to this printer.

**Default Batch Report Printer:** If selected, credit card batch reports  will attempt to print to this printer.

**Use Cash Drawer:** If checked, REV23 Desktop will open the cash drawer when payments with payment types that have the "Open Cash Drawer" setting are created or during a No Sale.

**Cash Drawer Printer:** The printer the cash drawer interface cable is connected to. This must be specified for the cash drawer to open.

**Cash Drawer Open Code:** The cash drawer open code is the sequence REV23 Desktop will use when attempting to open the cash drawer. These settings are specific to the receipt printer. The defaults provided are for the Epson T88V. See the Cash Drawer topic for more information.

**Test Cash Drawer:**
Clicking this button will attempt to open the cash drawer to verify your settings.

**Auto Export Path (Override):** If configured to auto-export Consent Forms, each PC can override the path via this settings. For example, if you wish to export to a cloud provider such as OneDrive or Dropbox, this path may not be exactly the same on each PC, even though it will go to the same cloud destination.