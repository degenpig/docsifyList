
When processing each rule and action, Email2AT will first evaluate the "truthiness" of an expression to decide whether that rule or action should fire. If no expression is provided, Email2AT will evaluate the expression as "true", which will fire the rule or action.

When writing an expression, you will likely be testing the value of a variable (an incoming email subject line, or a piece of text extracted by a regular expression) to a literal (a known string value or regular expression).

For example, you may test whether the incoming email sender's address is equal to `test_address@ignore-this-domain.com` by writing the expression `email.from.address == 'test_address@ignore-this-domain.com'`.

In this example, you are comparing the variable `email.from.address` to the literal string `'test_address@ignore-this-domain.com'` using the equality operator `==`.

## Expression Operators

When comparing two values, you can use any of the following operators:

### `==` Equal

Is true if the the value to the left of the operator is equal to the value on the right of the operator.

### `===` Identical

Is true if the the value to the left of the operator is identical to the value on the right of the operator.

Two values must have the same type and value in order to be identical. For example, the integer `0` is not identical to the string value `'0'` (but both values would be equal if testing using `==`).

### `!=` Not Equal

Is true if the the value to the left of the operator is not equal to the value on the right of the operator.

### `!==` Not Identical

Is true if the the value to the left of the operator is not equal to the value on the right of the operator.

### `<` Less Than

Is true if the the value to the left of the operator is less than the value on the right of the operator.

### `>` Greater Than

Is true if the the value to the left of the operator is greater than the value on the right of the operator.

### `<=` Less Than or Equal

Is true if the the value to the left of the operator is less than or equal to the value on the right of the operator.

### `>=` Greater Than or Equal

Is true if the the value to the left of the operator is greater than or equal to the value on the right of the operator.

### `matches` Matches (regular expression match)

Is true if the the value to the left of the operator matches the regular expression to the right of the operator.

The regular expression is evaluated as a PCRE regular expression, and must include beginning and ending delimiters. An example of a simple regular expression that matches whether the email subject line contains the word "test":

`email.subject matches "/test/"`

Notice the regular expression includes the `/` delimiter at the beginning and end of the regular expression pattern.

To check if something does not match a regular expression, surround the entire expression with `not()`:

`not(email.subject matches "/test/")`

## Compound expressions

You can join multiple expressions to make compound expressions. To create compound expressions, join several expressions together with `&` (and), `|` (or), or `^` (xor). To ensure the expressions are evaluated correctly, it is best to surround each expression with paranthesis.

For example, to test if an email subject line contains "internal" and the email is sent from someone with an email address on the domain `domain.com`:

`(email.subject matches "/internal/") & (email.from.address matches "/@domain.com/")`

## Expression Examples

### Example 1: Check if incoming email subject contains "test here"

```Handlebars
email.subject matches "/test here/"
```

### Example 2: Check if incoming email address equals "test@domain.com"

```Handlebars
email.subject == "test@domain.com"
```

### Example 3: Check if incoming email body BEGINS with "internal"

```Handlebars
email.body matches "/^internal/"
```

In this example, the regular expression starts with a caret `^` which evaluates as true only if `email.body` begins with what follows the caret.


### Example 4: Check if a previous action returned a value

In this example, assume we have a multi-step rule with several actions, and we search Autotask for a ticket in the first step. We then store the Autotask result in the variable `custom.ticket`. To test whether we received back a ticket from Autotask, we can use:

```Handlebars
custom.ticket != null
```
