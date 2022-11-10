
The `Autotask Create New Ticket Note` action is similar to the `Autotask Create New Ticket` action, but instead of creating a new Autotask ticket, this action adds a note to an existing ticket.

This action performs a number of Autotask API calls and uses business logic to create a new Autotask ticket note from an email. This action can be used for most scenarios for updating an Autotask ticket, and will save you the work of having to manage a set of about 10 Actions if you solely used Autotask API calls.

Generally speaking, `Autotask Create New Ticket Note` will locate an existing Autotask ticket, create a note on that ticket, and optioanlly change the status of the ticket.

## Parameters

### Search for Autotask Ticket number

Select the variable(s) to search for an Autotask ticket number. By default Email2AT will search the email subject line, but you can have it search any available variable, including the body of the email, the Email2AT mailbox, or a parsed value from a previous action.



### Ticket Note Properties

The rendered values of these fields will be used to create the new Autotask ticket note.

### Change Ticket Status

If you would like Email2AT to change the status of the ticket after adding the ticket note, select the status here.

### Advanced

* `Attach email attachments to ticket?`: If enabled, Email2AT will create a new Autotask attachment on the ticket for each attachment from the inbound email.
* `Attach original email message as an attachment?`: If enabled, Email2AT will create on the ticket a new Autotask attachment that contains an .eml file of the inbound email. You can later download this file from the Autotask ticket and open it in most email clients to see the message with the original formatting as sent by the original sender.
* `Enable Reply-All Storm Catcher`: See below
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
| `IdentifiedAutotaskTicketNumber` | bool | True if Email2AT located text that matched the pattern for an Autotask ticket number. |
| `LocatedExistingAutotaskTicket` | bool | True if the Autotask API returned a valid Autotask ticket when Email2AT queried for the identified ticket number. |
| `UnableToLocateExistingAutotaskTicket` | bool | True if `LocatedExistingAutotaskTicket` is false. |
| `CreatedNewAutotaskTicketNote` | bool | True if Email2AT successfully added a new Autotask ticket note to the ticket |
| `CreatedNewAutotaskTicketNoteCausedError` | bool | True if Autotask returned an error when Email2AT attempted to add a new note to the ticket. |
| `UpdatedStatusOfTicket` | bool | True if Email2AT successfully updated the status of the Autotask ticket |
| `UpdatedStatusOfTicketCausedError` | bool | True if Email2AT attempted to update the status of the Autotask ticket but Autotask returned an error |
| `AttachedEmlToTicket` | bool | True if Email2AT attached an .eml file to the ticket |
| `AttachedEmlToTicketCausedError` | bool | True if Email2AT receive an error when attempting to attach an .eml file to the ticket |
| `TicketNote` | object | An object containing the created Autotask ticket note. |
| `Ticket` | object | An object containing the created Autotask ticket. |
| `TicketAdditionalContactsCreated` | array of objects | An array of Autotask "TicketAdditionalContact" API objects  |

## What is Reply-All Storm Catcher™ and How Does it Work?

Imagine this scenario. One of your clients sends an email to your Email2AT address which generates a new Autotask ticket. On that original email, the client also copied a dozen of their co-workers. As the copied co-workers reply-all to the original email they were copied on, each reply will create a new Autotask ticket because the replies won't have an Autotask ticket number.

Reply-All Storm Catcher logs the message ID header and the associated Autotask ticket for every email processed by the `Autotask Create New Ticket` action. Every time the `Autotask Create New Ticket Note` action processes an incoming email message that has no valid ticket number, Email2AT will check the headers of the message to see if the email is a reply to an email that created a ticket previously. If there's a match, Email2AT will use the ticket number of the created ticket.

In the scenario above, Reply-All Storm Catcher would have recognized each of the reply-all replies and created a new Autotask ticket note on the original ticket instead of creating a new Autotask ticket for each reply.
