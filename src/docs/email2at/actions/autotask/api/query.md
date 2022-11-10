
You can create an action in order to make queries against Autotask. The results can then be stored in a variable for use at a later point in your rule.

Select `API: Query for one object` in the `Perform this action` dropdown.

The will then load the setting and parameters that you can change and input in order to retrieve the desired data in Autotask.

Start by selecting the `Entity Type` from the `Autotask Entity Type to Query` dropdown.

You can then use the `Query Parameter` UI in order to define the query that will be run against Autotask. You can chose to either have all statements return true (`All of these (SQL comparison 'and')`) or a boolean operator (`Any of these (SQL comparison 'or')`).

By default there is 1 group of conditional statements. You can use the add new conditional statement button in order to add another parameter to the query. You can also new groups of statements in order to utilise both `AND` and `OR` queries.

### Sorting

If you query returns more than a single result, only the first result will be returned to Email2AT. You can optionally sort the results in order to make sure the first object returned is the one your desire.

As with the order actions, you can set a boolean expression in the action settings to only create the entity in certain circumstances.