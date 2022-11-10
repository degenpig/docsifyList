
```handle
{{between_regexs text pattern flags="t"}}
```

## Description

Returns a string which is the subset of `text` between the match to the regular expression `start_pattern` and the match to the regular expression `end_pattern` and not including either matched pattern themselves.

If no matches to `start_pattern` are present in `text`, returns an empty string.

If no matches to `end_pattern` are present in `text`, returns an empty string.

If `start_pattern` or `end_pattern` is empty or is an invalid regular expression, throws an exception.

## Arguments

### `text`

The input string.

### `start_pattern`

A valid regular expression.

### `end_pattern`

A valid regular expression.

### `flags`

* `r` split text at last match to `start_pattern` and last match to `end_pattern` instead of the first matches
* `x` expand located text: use the first match to `start_pattern` and the last match to `end_pattern`
* `t` trim the final result prior to returning (remove all whitespace from beginning and end)


## Examples

> For the following examples, assume that `email.body` contains:

```text
This is red and that is blue and that is green.
```

### Example 1: Return text between first match to `start_pattern` and first match to `end_pattern`

```Handlebars
{{between_regexs email.body '/is/' '/is/' flags='t'}}
```

The above example will output:

```text
red and that
```

### Example 2: Return text between first match to `start_pattern` and last match to `end_pattern` (expanded flag)

```Handlebars
{{between_regexs email.body '/is/' '/is/' flags='tx'}}
```

The above example will output:

```text
red and that is blue and that
```

### Example 3: Return text between last match to `start_pattern` and last match to `end_pattern` (reverse flag)

```Handlebars
{{between_regexs email.body '/is/' '/is/' flags='tr'}}
```

The above example will output:

```text
```
