
```handle
{{date date_string add="add_interval" subtract="subtract_interval" from_format="c" to_format="c" from_tz="UTC" to_tz="UTC"}}
```

## Description

Returns a representing a date and/or time. If `date_string` is not provided, will default to the current date and time.

Can also add or subtract, convert formats, and change timezones.

## Arguments

### `date_string`

A string representation of a date and time. Can be a static date and time (`2019-04-05 01:45:00`) or a relative date and time (`tomorrow noon` or `first day of next month midnight`).

### `add` (optional)

An amount of time to add to the date. Can include any number of years, months, minutes, hours, minutes, and seconds.

### `subtract` (optional)

An amount of time to subtract from the date. Can include any number of years, months, minutes, hours, minutes, and seconds.

### `from_format` (optional)

To ensure `date_string` is parsed correctly, provide a format representing the format of `date_string`. (Defaults to `Y-m-d h:m:s`)

### `to_format` (optional)

Will change the format of the returned date and time.

### `from_tz` (optional)

Provide a valid timezone identifier that specifies the timezone of the provided `date_string`.

### `to_tz` (optional)

Will change the timezone of the returned date and time.

## Examples

### Example 1: Output the current day and time

```Handlebars
{{date}}
```

If executed on April 5, 2019 at 1:45 AM, the above example will output:

```text
2019-04-05 01:45:00
```

### Example 2: Change the format of a given date

```Handlebars
{{date custom.mydate to_format="l jS \of F Y h:i:s A"}}
```

If `custom.mydate` contains the text `2019-04-05 01:45:00` the above example will output:

```text
Friday 5th of April 2019 01:45:00 AM
```

### Example 3: Output the date exactly 3 weeks, 2 hours, and 14 seconds from now

```Handlebars
{{date add="3 weeks 2 hours 14 seconds"}}
```

If executed on May 1, 2019 at 4:33:12 AM, the above example will output:

```text
2019-05-22 06:33:26
```

And to change the format of that same date:

```Handlebars
{{date add="3 weeks 2 hours 14 seconds" to_format="m-d-Y h:i:s A"}}
```

If executed on May 1, 2019 at 4:33:12 AM, the above example will output:

```text
05-22-2019 06:33:26 AM
```
