
The following are common timezones. For a complete list, see the [*TZ database name* column in this Wikipedia article](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## America

* `America/New_York` (Eastern Time, UTC-5/4)
* `America/Chicago` (Central Time, UTC-6/5)
* `America/Denver` (Mountain Time, UTC-7/6)
* `America/Los_Angeles` (Pacific Time, UTC-8/7)
* `UTC-7` (Mountain Time with no daylight saving time, i.e. Arizona)

## A Special Note about Autotask Dates

When storing data in the backend database, Autotask uses the `America/New_York` timezone globally, no matter what database zone hosts your Autotask instance. Autotask converts the date and time to your timezone when Autotask displays the time in the browser, but all times are stored in `America/New_York`.

In order to assist in conversion to and from Autotask's database, we support a special timezone we call `Autotask`. You can use this timezone when using the `{{date}}` text replacement helper.

For example, after retrieving a Time Entry from the Autotask API, use the following to display the start time of the Time Entry in the Los Angeles timezone:

```handlebars
{{date custom.TimeEntry.StartDateTime from_tz="Autotask" to_tz="America/Los_Angeles"}}
```

In the same way, if adjusting the start time for the time entry, you will need to convert the time from your own timezone to the Autotask timezone:

```handlebars
{{date custom.NewStartTime from_tz="America/Los_Angeles" to_tz="Autotask"}}
```

To set the Time Entry start date to *now*, you always need to specify `to_tz="Autotask"`. Internally, Email2AT will create a new date/time object with the current date and time in UTC, and will convert it to the `Autotask` timezone prior to rendering the text.

If you do not specify that you want your date rendered to the `Autotask` timezone, the current date/time in the UTC timezone will be stored in the Autotask database, but Autotask will think the date/time is for the `America/New_York` timezone. When the time is displayed in the Autotask web interface, it will be off by several hours (how many hours will depend on the difference in time between your own timezone and `America/New_York`).

When storing the current date/time in Autotask, always convert using `to_tz="Autotask"`:

```handlebars
{{date to_tz="Autotask"}}
```

If providing a specific date/time to Autotask, always specify the timezone of the date you're submitting using `from_tz="America/Los_Angeles"` (replace `America/Los_Angeles` with the correct timezone) and the destination timezone using `to_tz="Autotask"`:

```handlebars
{{date custom.NewStartTime from_tz="America/Los_Angeles" to_tz="Autotask"}}
```

or:

```handlebars
{{date '2019-04-05 01:22:37' from_tz="America/Los_Angeles" to_tz="Autotask"}}
```
