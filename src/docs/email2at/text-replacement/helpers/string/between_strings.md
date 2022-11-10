
```handle
{{between_strings text string_delimiter_start string_delimiter_end flags="irxt"}}
```


## Description

Returns a string which is the subset of `text` between `string_delimiter_start` and `string_delimiter_end` and not including `string_delimiter_start` or `string_delimiter_end` themselves.

If either `string_delimiter_start` or `string_delimiter_end` is not present in `text`, returns an empty string.

If either `string_delimiter_start` or `string_delimiter_end` is empty, throws an exception.

## Arguments

### `text`

The input string.

### `string_delimiter_start`

The starting boundary string.

### `string_delimiter_end`

The ending boundary string.

### `flags`

* `i` treat delimiter as not case-sensitive (default is case-sensitive)
* `r` split text at last instance of `string_delimiter_start` and last instance of `string_delimiter_end` instead of the first
* `x` expand located text: use the first found instance of `string_delimiter_start` and the last found instance of `string_delimiter_end`
* `t` trim the final result prior to returning (remove all whitespace from beginning and end)


## Examples

> For the following examples, assume that `email.body` contains:

```text
This is red and that is blue and that is green.
```


<!-- panels:start -->
<!-- div:title-panel -->

### Example 1:

Return text between first instance of `string_delimiter_start` and first instance of `string_delimiter_end`

<!-- div:left-panel -->

Template:

```Handlebars
{{between_strings email.body 'is' 'is' flags='t'}}
```

<!-- div:right-panel -->

Rendered:
```text
red and that
```


<!-- panels:end -->


### Example 2: Return text between first instance of `string_delimiter_start` and last instance of `string_delimiter_end` (expanded flag)

```Handlebars
{{between_strings email.body 'is' 'is' flags='tx'}}
```

The above example will output:

```text
red and that is blue and that
```

### Example 3: Return text between last instance of `string_delimiter_start` and last instance of `string_delimiter_end` (reverse flag)

```Handlebars
{{between_strings email.body 'is' 'is' flags='tr'}}
```

The above example will output:

```text
```
