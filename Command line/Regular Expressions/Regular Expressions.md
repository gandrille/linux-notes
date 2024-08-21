==IMPORTANT==
Here are Extended Regular Expressions (ERE). Thet can be used with `grep -E` but NOT with `sed` or basic `grep`, which requires Basic Regular Expressions.
In basic regular expressions the meta-characters `?`, `+`, `{`, `|`, `(`, and `)` lose their special meaning; instead use the backslashed versions `\?`, `\+`, `\{`, `\|`, `\(`, and `\)`.

**Sources**
* [Regex tutorial — A quick cheatsheet by examples](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285) 
* [Regex cookbook — Top 10 Most wanted regex](https://medium.com/factory-mind/regex-cookbook-most-wanted-regex-aa721558c3c1) 
# Examples 
**Trim spaces**
`^[\s]*(.*?)[\s]*$`

**HTML Tag**
`<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)`

**Hexadecimal value **
`\B#(?:[a-fA-F0–9]{6}|[a-fA-F0–9]{3})\b`

**Valid email (RFC5322)**
`\b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b`

**Username (simple)** 
`/^[a-z0-9_-]{3,16}$/`

**IPv4 address**
`\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b`
# Basic topics 
## Anchors — ^ and $ 
* `^The` matches any string that starts with The 
* `end$` matches a string that ends with end
* `^The end$` exact string match (starts and ends with The end)
* `roar` matches any string that has the text roar in it
## Quantifiers — * + ? and {} 
* `abc*` matches a string that has ab followed by zero or more c -> 
* `abc+` matches a string that has ab followed by one or more c
* `abc?` matches a string that has ab followed by zero or one c
* `abc{2}` matches a string that has ab followed by 2 c
* `abc{2,}` matches a string that has ab followed by 2 or more c
* `abc{2,5}` matches a string that has ab followed by 2 up to 5 c
* `a(bc)*` matches a string that has a followed by zero or more copies of the sequence bc
* `a(bc){2,5}` matches a string that has a followed by 2 up to 5 copies of the sequence bc
## OR operator — | or [] 
* `a(b|c)` matches a string that has a followed by b or c
* `a[bc]` same as previous
## Character classes — \d \w \s and . 
* `\d` matches a single character that is a digit
* `\w` matches a word character (alphanumeric character plus underscore)
* `\s` matches a whitespace character (includes tabs and line breaks)
* `.` matches any character

`\d`, `\w` and `\s` also present their negations with `\D`, `\W` and `\S` respectively.
For example, `\D` will perform the inverse match with respect to that obtained with `\d`.

In order to be taken literally, you must escape the characters `^.[$()|*+?{\` with a backslash `\` as they have special meaning.
`\$\d` matches a string that has a `$` before one digit.
Notice that you can match also non-printable characters like tabs `\t`, new-lines `\n`, carriage returns `\r`.
# Intermediate topics 
## Grouping and capturing — () 
* `a(bc)` parentheses create a capturing group with value bc
* `a(?:bc)*` using ?: we disable the capturing group
* `a(?<foo>bc)` using `?<foo>` we put a name to the group

This operator is very useful when we need to extract information from strings or data using your preferred programming language. Any multiple occurrences captured by several groups will be exposed in the form of a classical array: we will access their values specifying using an index on the result of the match.

If we choose to put a name to the groups (using `(?<foo>...)`) we will be able to retrieve the group values using the match result like a dictionary where the keys will be the name of each group.
## Bracket expressions — [] 
* `[abc]` matches a string that has either an `a` or a `b` or a `c` → is the same as `a|b|c`
* `[a-c]` same as previous
* `[a-fA-F0-9]` a string that represents a single hexadecimal digit, case insensitively
* `[0-9]%` a string that has a character from 0 to 9 before a % sign
* `[^a-zA-Z]` a string that has not a letter from a to z or from A to Z. In this case the `^` is used as negation of the expression

Remember that inside bracket expressions all special characters (including the backslash \) lose their special powers: thus we will not apply the "escape rule".

Finally, certain named classes of characters are predefined within bracket expressions, as follows. Their names are self explanatory, and they are `[:alnum:]`, `[:alpha:]`, `[:cntrl:]`, `[:digit:]`, `[:graph:]`, `[:lower:]`, `[:print:]`, `[:punct:]`, `[:space:]`, `[:upper:]`, and `[:xdigit:]`. For example, ` [[:alnum:]] ` means the character class of numbers and letters in the current locale. In the C locale and ASCII character set encoding, this is the same as `[0-9A-Za-z]`. (Note that the brackets in these class names are part of the symbolic names, and must be included in addition to the brackets delimiting the bracket expression.) Most meta-characters lose their special meaning inside bracket expressions. To include a literal `]` place it first in the list. Similarly, to include a literal `^` place it anywhere but first. Finally, to include a literal `-` place it last.

`\w` is a synonym for `[_[:alnum:]]` and `\W` is a synonym for `[^_[:alnum:]]`.
## Greedy and Lazy match 
The quantifiers `( * + {})` are greedy operators, so they expand the match as far as they can through the provided text.
For example, `<.+>` matches `<div>simple div</div>` in `This is a <div> simple div</div> test`. 

In order to catch only the div tag we can use a `?` to make it lazy:
`<.+?>` matches any character one or more times included inside < and >, expanding as needed

Notice that a better solution should avoid the usage of . in favor of a more strict regex:
`<[^<>]+>` matches any character except < or > one or more times included inside < and >
# Advanced topics 
## Boundaries — \b and \B 
`\babc\b` performs a "whole words only" search

`\b` represents an anchor like caret (it is similar to `$` and `^`) matching positions where one side is a word character (like `\w`) and the other side is not a word character (for instance it may be the beginning of the string or a space character).

It comes with its negation, `\B`. This matches all positions where `\b` doesn’t match and could be if we want to find a search pattern fully surrounded by word characters.
`\Babc\B` matches only if the pattern is fully surrounded by word characters

The symbols `\<` and `\>` respectively match the empty string at the beginning and end of a word. The symbol `\b` matches the empty string at the edge of a word, and `\B` matches the empty string provided it's not at the edge of a word. 
## Back-references — \1 

* `([abc])\1` using `\1` it matches the same text that was matched by the first capturing group
* `([abc])([de])\2\1` we can use `\2` (`\3`, `\4`, etc.) to identify the same text that was matched by the second (third, fourth, etc.) capturing group
* `(?<foo>[abc])\k<foo>` we put the name `foo` to the group and we reference it later (`\k<foo>`). The result is the same of the first regex
## Look-ahead and Look-behind — (?=) and (?<=) 
* `d(?=r)` matches a d only if is followed by r, but r will not be part of the overall regex match
* `(?<=r)d` matches a d only if is preceded by an r, but r will not be part of the overall regex match

You can use also the negation operator `!`
* `d(?!r)` matches a d only if is not followed by r, but r will not be part of the overall regex match
* `(?<!r)d` matches a d only if is not preceded by an r, but r will not be part of the overall regex match
