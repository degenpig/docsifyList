
The `Perform a Regular Expression Match` action uses a regular expression to extract one or more portions of text from a text string.

This action is useful for identifying text that matches a specific pattern, such as a serial number, ticket number, email address, or phone number.

## Parameters

### Pattern

The pattern must be a valid PCRE2 regular expression, including a starting delimiter, ending delimiter, and optional flags.

### Subject

The subject can be any valid text, including rendered text. For example to test a regular expression against the body of an email in Email2AT, the subject can be set to `{{email.body}}`.

### Return all matches

If selected, this action item will return an array of all matches for the regular expression.
