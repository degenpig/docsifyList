
```handle
{{after_line text line_number flags="t"}}
```

## Description

Returns a string which is the subset of all lines of `text` after line number `line_number` and not including line number `line_number` itself. If `text` contains fewer than `line_number` number of lines, will return an empty string.

## Arguments

### `text`

The input string.

### `line_number`

The boundary line number.

### `flags`

* `t` trim the final result prior to returning (remove all whitespace from beginning and end)

## Examples

> For the following examples, assume that `email.body` contains four lines of text:

```text
This is line 1.
This is line 2.
This is line 3.
This is line 4.
```

### Example 1: Return a single line

```handlebars
{{after_line email.body '2' flags='t'}}
```

The above example will output:

```text
This is line 3.
This is line 4.
```

### Example 2: Return no lines when requested line doesn't exist

```handlebars
{{after_line email.body '15' flags='t'}}
```

The above example will output:

```text
```
