
```handle
{{before_regex text pattern flags="t"}}
```

## Description

Returns a string which is the subset of `text` before the match to the regular expression `pattern` and not including the matched pattern itself.

If no matches to `pattern` are present in `text`, returns an empty string.

If `pattern` is empty or is an invalid regular expression, throws an exception.

## Arguments

### `text`

The input string.

### `pattern`

A valid regular expression.

### `flags`

* `t` trim the final result prior to returning (remove all whitespace from beginning and end)


## Examples

> For the following examples, assume that `email.body` contains:

```text
This is red and that is blue and that is green.
```

### Example 1: Return text before first match of `pattern`

```Handlebars
{{before_regex email.body '/that/' flags='t'}}
```

The above example will output:

```text
This is red and
```

### Example 2: Return text before last match of `pattern`

```Handlebars
{{before_regex email.body '/that/' flags='tr'}}
```

The above example will output:

```text
This is red and that is blue and
```


### Example 3: Return an empty string if no match of `pattern`

```Handlebars
{{before_regex email.body '/pizza/' flags='t'}}
```

The above example will output:

```text
```
