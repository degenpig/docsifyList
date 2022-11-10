The `Autotask Create New Ticket` action performs a number of Autotask API calls and uses business logic to create a new Autotask ticket from an email. This action can be used for most scenarios for creating a new Autotask ticket, and will save you the work of having to manage a set of about 10 Actions if you solely used Autotask API calls.

Generally speaking, `Autotask Create New Ticket` will locate an existing Autotask account and contact based on the email sender's email address, and will then create a new Autotask ticket for that account and contact. If there is no matching contact, Email2AT can optionally create a new contact for you.

## Parameters

### Ticket Account and Contact

* `Sender Address`: choose the variable that contains the email sender's email address. Email2AT render the contents of this field and then search Autotask for existing contacts with an email address that matches the rendered text. This field should almost always be left with the default value `email.from.address`, but you may edit the field if you need to parse the sender's address from somewhere other than the email's from address (for example, if you are processing the contents of a website contact form).
* `If no existing contact exists in Autotask with a matching email address, create a new Contact for the email sender`: If this is enabled and no existing Autotask contact with a matching email address is located, Email2AT will create a new contact in your Autotask. The contact will be created on an account with a Web address that matches the sender's email domain. If no Autotask accounts have a Web field that matches the sender's domain, the contact will be created on the account you specify in `Default Account if no match`.
* `Contact Name`: If Email2AT creates a new Autotask contact, the contents of this field will be rendered and used as the First Name and Last Name for the new Autotask contact.
* `Default Account if no match`: If Email2AT is unable to locate an existing Autotask contact or account, Email2AT will create the ticket (and, optionally, a new contact) on the account you specify in this field. A popular practice is to create a new account called "Unknown Account" as a catch-all for all tickets that did not have a matching contact or account.

### Ticket Properties

The rendered values of these fields will be used to create the new Autotask ticket. If you would like to populate more fields of the Autotask ticket, you can select those fields (including User-Defined Fields) by clicking **Additional Fields**.

### Advanced

* `Attach email attachments to ticket?`: If enabled, Email2AT will create a new Autotask attachment on the ticket for each attachment from the inbound email.
* `Attach original email message as an attachment?`: If enabled, Email2AT will create on the ticket a new Autotask attachment that contains an .eml file of the inbound email. You can later download this file from the Autotask ticket and open it in most email clients to see the message with the original formatting as sent by the original sender.
* `Add all email recipients to ticket as "Additional Contacts"`: Email2AT will query the Autotask API to find any existing Autotask contacts that are associated to the account for this ticket and that have an email address that matches any of the other recipients of the inbound email message. This way, if the sender of the email copies other people on the email they send to your Email2AT account, those other people will be added to the Autotask ticket, as well. Email2AT will never create a new Autotask contact in order to associate it as an Autotask additional ticket contact. Email2AT will only use existing Autotask contacts.

### Action When Complete

If the action successfully created a new Autotask ticket, you may want to stop processing any further rules for this inbound message. Select one of the following in `Action to take if we successfully create a new ticket`:

* `Continue processing remaining actions` will continue processing the inbound email message, triggering any remaining actions on the current rule as well as any other matching rules.
* `Stop processing the actions on this rule` will stop processing the inbound email message in the current rule, but will trigger actions on any other matching rules.
* `Stop processing the actions on this rule and all other rules` will stop processing this message completely.

## Returned Variables

If you configure the `Store the results in Variable` option for this action, the following variables will be populated at the completion of this action:

| Variable | Type | Description |
| -- | -- | -- |
| `LocatedExistedAutotaskContact` | bool | True if the email sender's email address matched an existing Autotask contact |
| `CreatedNewAutotaskContact` | bool | True if Email2AT created a new Autotask contact (will never be true if `LocatedExistedAutotaskContact` is true) |
| `CreatedNewAutotaskContactCausedError` | bool | True if Email2AT attempted to create a new contact but that creation caused an error |
| `LocatedExistingAutotaskAccount` | bool | True if `LocatedExistedAutotaskContact` is true; True if `LocatedExistedAutotaskContact` is false but Email2AT located an account with a Web address matching the email sender's domain name |
| `AssignedTicketToDefaultAccount` | bool | True if `LocatedExistedAutotaskContact` is false and `LocatedExistingAutotaskAccount` is false |
| `CreatedNewAutotaskTicket` | bool | True if Email2AT successfully created a new Autotask ticket for the email |
| `CreatedNewAutotaskTicketCausedError` | bool | True if Email2AT received an error from Autotask when Email2AT attempted to create a new Autotask ticket for the email |
| `AttachedEmlToTicket` | bool | True if Email2AT attached an .eml file to the ticket |
| `AttachedEmlToTicketCausedError` | bool | True if Email2AT receive an error when attempting to attach an .eml file to the ticket |
| `Ticket` | object | An object containing the created Autotask ticket. This object will contain the ticket number for the new ticket, as well. |
| `TicketAccount` | object | An object containing the account associated to the ticket. |
| `TicketContact` | object | An object containing the contact associated to the ticket, or null if no contact was associated to the ticket. |
| `TicketAdditionalContactsCreated` | array of objects | An array of Autotask "TicketAdditionalContact" API objects  |

## How does Email2AT determine the correct Account and Contact for new Tickets?

### 1. Locate an existing Autotask contact

First, Email2AT will query the Autotask API for an existing, active contact with an email address that matches the email sender's address. When comparing the email address, we search across all 3 email fields on the contacts (`Email Address`, `Email Address 2`, and `Email Address 3`). If your Autotask instance has an `Email2AT Addresses` User-Defined Field on your contacts, Email2AT will search that field for a match, as well.

If Email2AT finds multiple Autotask contacts with email addresses that match the sender of the email, we pick the first contact using the following algorithm:

1. Email2AT finds the contact that has the oldest creation date and is not associated to your internal Autotask "zero" account or  account you've selected as the *Default Account if no match*.
2. If Email2AT has no match yet, it will then use the contact that has the oldest creation date that is assigned to your internal Autotask "zero" account.
3. If Email2AT still has no match, it use the contact that has the oldest creation date and is assigned to the Account you've selected as the *Default Account if no match*.

To summarize, Email2AT searches first by excluding your Autotask "zero" account and the account you've selected as the default account in this action, and we pick the oldest contact we find. We then expand the search to include your Autotask "zero" account, and then again expand the search to include the default account in this action.

If Email2AT found a matching contact, then it will create the ticket for the contact and the contact's account, and will move on to step 2.

### 2. If no existing contact, then locate an existing Autotask Account

If Email2AT is unable to locate a contact that matches the sender's email address, Email2AT will then attempt to find an Autotask account that matches the sender's domain name. When searching for a matching domain name, Email2AT searches all active Autotask accounts that have the sender's domain name in the account Web field. Email2AT will include partial matches (for example, if the domain name is `example.com`, the following would all match: `http://www.example.com/`, `www.example.com`, and `example.com`).

If your Autotask instance has an `Email2AT Domains` User-Defined Field for your accounts, Email2AT will search that field for a match, as well. When searching the `Email2AT Domains` field, Email2AT searches for the domain including the `@` sign. You must list the domain(s) in that field like this: `@domain1.com @domain2.com @domain3.com` (separated by spaces or commas and spaces).

### 3. If no existing contact, and no Autotask Account matching domain name, then use Default account

If Email2AT is unable to find any matching contact or account, Email2AT will use the account selected in as the *Default Account if no match* option. If that account is inactive or doesn't exist (for instance, if it was merged or deleted after the Email2AT rule was configured), Email2AT will fall back to using your internal Autotask "zero" account.

### 4. (OPTIONAL) If existing Account was located, but existing Contact was not located, create a new Contact

Email2AT will optionally create a new contact if no matching contact was found. If Email2AT creates a new contact, the contact will be created on the account that was matched above. This means the contact will be created either on the account that matched the domain name of the sender, or it will be created on the account selected as the *Default Account if no match*, or it will be created on your internal Autotask "zero" account.
