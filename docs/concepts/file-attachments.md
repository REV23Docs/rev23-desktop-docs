# File Attachments

Some objects, such as Customers, Services and Appointments can store file attachments. Anywhere attachments can be stored you will see an attachments tab or nested list view.

You can manually attach files, or in some cases, like Services, attachments will be automatically added. For instance, when a consent form is signed and generated for a service, the resulting document will be automatically stored as an attachment in the service record.

Anywhere you can add an attachment you can either add it from a file on your file system, or add it directly from your document scanner. Additionally you can of course open the file, or save it from your database to another location. See File Attachment Actions for more information.

You can double click a file attachment to open it's detail view. To open the attachment itself, use the Open action on the toolbar or right click menu.

## File Attachments Properties

**File Name:** The name of the attachment's file. If you've attached this from a file on the hard drive, it will use that file name.

**Attachment Type:** Represents the type of file this is. Depending on the object this attachment is associated with, these values will change. For instance, appointment's attachment types may be "artwork" or "inspiration", while service attachment types will be "consent form" or "work in progress".

**Date/Time:** The Date/Time the attachment was created.

**Size:** The physical size of the file on the hard disk.

## File Attachment Actions

Objects that support file attachments have special actions for interacting with those attachments. They're generally located in a nested list view in the master object's detail view.

### Records Creation Actions

**Add From File:** Add an attachment from a file on your PC.

**Add From Scanner:** Add an attachment by scanning the document on your scanner. After the scan, you will be prompted for an attachment name and the attachment type. By default, REV23 Desktop will prompt you for which scanner you'd like to use. You can set your default scanner in Device Options to avoid this prompt.

### Save Actions

**Save As:** Save the selected attachment from the database to a location on your PC.

### Open Object Actions

**Open:** Opens the selected attachment in the default program for that file type.

