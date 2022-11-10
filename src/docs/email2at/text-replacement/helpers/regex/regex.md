
```handle
{{regex text pattern flags="t"}}
```

## Description

Returns a string which is the subset of `text` that matches the regular expression `pattern`.

If no matches to `pattern` are present in `text`, returns an empty string.

If `pattern` is empty or is an invalid regular expression, throws an exception.

## Arguments

### `text`

The input string.

### `pattern`

A valid regular expression.

### `flags`

* `r` return the last match to `pattern` and instead of the first match
* `t` trim the final result prior to returning (remove all whitespace from beginning and end)


## Examples

> For the following examples, assume that `email.body` contains:

```text
This is red and that is blue and that is green.
```

### Example 1: Return the first match to `pattern`

```Handlebars
{{regex email.body '/ is [^r]/' flags='t'}}
```

The above example will output:

```text
 is b
```
