
Text replacement helpers process are used to extract or convert text. For example, helpers can be used to extract a piece of information from an email so that the information can be used somewhere.

There are four categories of text replacement helpers:

* **string** helpers extract text before, after, or between specific strings
* **line** helpers extract one or more lines of text
* **regex** helpers extract text before, after, or between regular expressions, or extract strings that match a regular expression
* **date** helpers convert date formats, add or subtract time, and convert between timezones

## The format of a text replacement helpers

Text replacement helpers are identifiers followed by zero or more parameters each separated by a space. Each parameter is itself an expression.

```handlebars
{{helper_name argument1 argument2 argument3 argument4=""}}
 |-----------|         |---------|         |------------|
	  |						|		    		 |
The name of the			A positional		  A named			
	helper				 argument		      argument
```

For example, this expression uses the `before_text` helper to extract the portion of `john@domain.com` before the first `@`, and would render `john`:

```handlebars
{{before_text 'john@domain.com' '@'}}
```

And since each parameter is itself an expression, we can change `'john@domain.com'` to `email.from.address` like this:

```handlebars
{{before_text email.from.address '@'}}
```

### Denoting strings with quote marks

Notice that the first example has single quotes around `'email@domain.com'`, and the second example has no quotes around `email.from.address`.

The quotes in the first example cause the `before_text` helper to use the literal text `email@domain.com`.

The lack of quotes in the second example cause `before_text` to first render `email.from.address` as an expression before then using the results of that expression. In this way, the second example would first render `email.from.address` to the email sender's address, and then would extract the part of that email before the `@` sign.

We recognize single quotes and double quotes as valid text delimiters in expressions. The following expressions would render the exact same text:

```handlebars
{{before_text 'john@domain.com' '@'}}
{{before_text "john@domain.com" "@"}}
{{before_text "john@domain.com" '@'}}
{{before_text 'john@domain.com' "@"}}
```
