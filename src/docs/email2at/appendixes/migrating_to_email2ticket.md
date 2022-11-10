?> Email2Ticket by RapidFire Tools is not affiliated with MSPintegrations or Email2AT, but many Email2AT users have requested help in converting their workflows from Email2Ticket and bring them into Email2AT.

The following chart provides a quick reference to convert Email2Ticket text replacement variables to their Email2AT equivalent:

| Email2Ticket Variable | Email2AT Equivalent
|-|-|
| `$from$`	| `{{email.from.address}}` |
| `$fromname$`	| `{{email.from.display}}` |
| `$from_textbefore("substring")$`	| `{{before_string email.from.address "substring"}}` |
| `$from_textbetween("substring1","substring2")$`	| `{{between_strings email.from.address "substring1" "substring2"}}` |
| `$from_textafter("substring")$`	| `{{after_string email.from.address "substring" }}` |
| `$from_regex("pattern")$`	| `{{regex email.from.address "/pattern/i"}}` |
| `$from_regexcs("pattern")$`	| `{{regex email.from.address "/pattern/"}}` |
| `$to$`	| `{{email.to.[0].address}}` |
| `$to_textbefore("substring")$`	| `{{before_string email.to.[0].address "substring"}}` |
| `$to_textbetween("substring1","substring2")$`	| `{{between_strings email.to.[0].address "substring1" "substring2" }}` |
| `$to_textafter("substring")$`	| `{{after_string email.to.[0].address "substring" }}` |
| `$to_regex("pattern")$`	| `{{regex email.to.[0].address "/pattern/i"}}` |
| `$to_regexcs("pattern")$`	| `{{regex email.to.[0].address "/pattern/"}}` |
| `$cc$`	| `{{email.cc.[0].address}}` |
| `$cc_textbefore("substring")$`	| `{{before_string email.cc.[0].address "substring"}}` |
| `$cc_textbetween("substring1","substring2")$`	| `{{between_strings email.cc.[0].address "substring1" "substring2" }}` |
| `$cc_textafter("substrng")$`	| `{{after_string email.cc.[0].address "substring" }}` |
| `$cc_regex("pattern")$`	| `{{regex email.cc.[0].address "/pattern/i"}}` |
| `$cc_regexcs("pattern")$`	| `{{regex email.cc.[0].address "/pattern/"}}` |
| `$subject$`	| `{{email.subject}}` |
| `$subject_textbefore("substring")$`	| `{{before_string email.subject "substring"}}` |
| `$subject_textbetween("substring1","substring2")$`	| `{{between_strings email.subject "substring1" "substring2" }}` |
| `$subject_textafter("substring")$`	| `{{after_string email.subject "substring" }}` |
| `$subject_regex("pattern")$`	| `{{regex email.subject "/pattern/i"}}` |
| `$subject_regexcs("pattern")$`	| `{{regex email.subject "/pattern/"}}` |
| `$body$`	| `{{email.body}}` |
| `$body_textbefore("substring")$`	| `{{before_string email.body "substring"}}` |
| `$body_textbetween("substring1","substring2")$`	| `{{between_strings email.body "substring1" "substring2" }}` |
| `$body_textafter("substring")$`	| `{{after_string email.body "substring" }}` |
| `$body_regex("pattern")$`	| `{{regex email.body "/pattern/i"}}` |
| `$body_regexcs("pattern")$`	| `{{regex email.body "/pattern/"}}` |
| `$body_line(n)$`	| `{{lines email.body "n"}}` |
| `$body_lines(2)$`	| `{{lines email.body "2"}}` |
| `$body_lines(2,4)$`	| `{{lines email.body "2-4"}}` |
| `$body_beforeregex("myexpr")$`	| `{{before_regex email.body "/myexpr/i" }}` |
| `$body_beforeregexcs("myexpr")$`	| `{{before_regex email.body "/myexpr/" }}` |
| `$body_betweenregex("myexpr1","myexpr2")$`	| `{{between_regexs email.body "/myexpr1/i" "/myexpr2/i"}}` |
| `$body_betweenregexcs("myexpr1","myexpr2")$`	| `{{between_regexs email.body "/myexpr1/" "/myexpr2/"}}` |
| `$importance$`	| `{{email.headers.Importance}}` |
| `$date$`	| `{{email.headers.date}}` |
| `$date("format")$` | `{{date email.headers.date to_format="format"}}` |
