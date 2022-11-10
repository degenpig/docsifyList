
Creating a new for a mailbox can be done selecting the `Edit` button next to the desired mailbox on the [Email2AT Advanced Console homepage.](https://console.mspintegrations.com/#/email2at/advanced/mailboxes/hosted). At the bottom on the page click the `New Rule` button.

## Creating the rule

Create your rule by giving it a `Name`. Optionally add a comment explaining what it is this rule does. In the expression box enter an expression that will return either a `true` value, e.g `email.subject == "Test"`.

## Actions

When creating a rule you can specify actions that will be taken if an email is sent to a mailbox and matches the expression in the rule you defined above. Below are the list of actions that you can take with links to more detailed documentation about their properties, parameters and usage.

* Autotask
  * [Create Ticket](actions/autotask/create_ticket.md)
  * [Create Ticket Note](actions/autotask/create_ticketnote.md)
  * [API Create](actions/autotask/api/create.md)
  * [API Update](actions/autotask/api/update.md)
  * [API Query](actions/autotask/api/query.md)

* Utilities
  * [Perform Regex](actions/utilities/regex.md)
  * [Set Purge Date](actions/utilities/purgedate.md)
  * [Random](actions/utilities/random.md)
  * [Send Mail](actions/utilities/sendemail.md)

* Stopping
  * [Stop Processing this Rule Set](actions/stop/stop.md)
  * [Stop Processing this Message Completely](actions/stop/stopglobal.md)