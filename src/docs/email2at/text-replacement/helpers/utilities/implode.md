
```handle
{{implode pieces glue=", " property_name="address"}}
```

## Description

Given an array of strings (`pieces`), will return a concatenation of each string separated by `glue`.

Given an array of objects (`pieces`), will extract from each object the property `property_name` and will return a concatenation of each object's property `property_name` separated by `glue`.

## Arguments

### `pieces`

An array of strings or objects.

### `glue` (optional)

A string that will be inserted between each array item in `pieces`

### `property_name` (required only if `pieces` is an array of objects)

The name of the property to extract from each object in `pieces`.

## Examples

### Example 1: Render an email's recipient list to a comma-separated list

```Handlebars
{{implode email.to glue=", " property_name="address"}}
```

If rendered for an email sent to 4 people, would render:

```text
joe@test.com, sarah@test.com, george@test.com, lily@test.com
```
