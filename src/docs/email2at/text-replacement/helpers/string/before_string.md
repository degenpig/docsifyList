
```handle
{{before_string text string_delimiter flags="irt"}}
```

## Description

Returns a string which is the subset of `text` before ```string_delimiter``` and not including `string_delimiter` itself. If ```string_delimiter``` is not present in `text`, returns an empty string. If `string_delimiter` is empty, throws an exception.

## Arguments

### `text`

The input string.

### `string_delimiter`

The boundary string.

### `flags`

* `i` treat delimiter as not case-sensitive (default is case-sensitive)
* `r` split text at last instance of delimiter instead of the first
* `t` trim the final result prior to returning (remove all whitespace from beginning and end)


## Examples

> For the following examples, assume that `email.body` contains:

```text
This is red and that is blue and that is green.
```

### Example 1: Return text before first instance of `string_delimiter`

```Handlebars
{{before_string email.body 'is' flags='t'}}
```

The above example will output:

```text
This
```

### Example 2: Return text before last instance of `string_delimiter`

```Handlebars
{{before_string email.body 'is' flags='tr'}}
```

The above example will output:

```text
This is red and that is blue and that
```
