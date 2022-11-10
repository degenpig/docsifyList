
```handle
{{lines text line_numbers flags="t"}}
```

## Description

Returns a string which is the subset of all lines of `text` specified in `line_numbers`. Any lines specified in `line_numbers` that are not present in `text` are ignored.

## Arguments

### `text`

The input string.

### `line_numbers`

A list of line numbers or ranges of numbers, separated by commas. For example, to specify 1, 3, 5, as well as all lines 10 through 20, `1,3,5,10-20`.

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

### Example 1: Return a range of lines

```handlebars
{{lines email.body '1-3' flags='t'}}
```

The above example will output:

```text
This is line 1.
This is line 2.
This is line 3.
```

### Example 2: Return a single line

```handlebars
{{lines email.body '2' flags='t'}}
```

The above example will output:

```text
This is line 2.
```

### Example 3: Return nothing when a non-existent line is requested

```handlebars
{{lines email.body '20' flags='t'}}
```

The above example will output:

```text
```

### Example 4: Return a complex range selection

```handlebars
{{lines email.body '1,3-4' flags='t'}}
```

The above example will output:

```text
This is line 1.
This is line 3.
This is line 4.
```

### Example 4: Return lines in a new order

```handlebars
{{lines email.body '4,3,2,1' flags='t'}}
```

The above example will output:

```text
This is line 4.
This is line 3.
This is line 2.
This is line 1.
```
