**sources**
* [GNU documentation](https://www.gnu.org/software/sed/manual/sed.html) 
* [Eric Pement oneliners](http://www.pement.org/sed/sed1line.txt) 
* [Learn by example](https://github.com/learnbyexample/Command-line-text-processing/blob/master/gnu_sed.md) 

`-i` update source file
# Pattern building 
* `\x...` hexadecimal caracter.
	* `\xC2\xA0` → non breaking space
	* `\x0D` → `^M`
	* `\x61` → `a`
* `.\{5\}` 5 caracters
# Pattern substitution 
**Basic substitutions**
* `sed "s/foo/bar/"` replaces only 1st instance in a line
* `sed -n "s/foo/bar/p"` replaces only 1st instance in a line, and only print replaced lines
* `sed "s/foo/bar/4"` replaces only the 4th instance in a line
* `sed "s/foo/bar/g"` replaces ALL instances in a line
* `sed "s/foo/bar/3g"` replaces all instances, starting the replacements with the third
Note: several options can be combined, ie `sed "s/foo/bar/gi"`

**trim**
* `sed "s/^[ \t]*//"` Delete leading whitespace (spaces, tabs) from front of each line
* `sed "s/[ \t]*$//"` Delete trailing whitespace (spaces, tabs) from end of each line
* `sed "s/^[ \t]*;s/[ \t]*$"` Delete BOTH leading and trailing whitespace from each line

**Advanced substitutions**
* `sed "/baz/s/foo/bar/g"` substitute "foo" with "bar" ONLY for lines which contain "baz"
* `sed "/baz/!s/foo/bar/g"` substitute "foo" with "bar" EXCEPT for lines which contain "baz"
# Print or delete full line 
* `-n` suppress automatic printing of pattern space

**p = print**
* `sed -n "3p"` print third line
* `sed -n "$p"` print last line
* `sed -n "3,8p"` print lines between 3 and 8 (inclusive)
* `sed -n "3,$p"` print everything, starting line 3
* `sed -n "/PATTERN/p"` print lines matching pattern (`grep` equivalent)
* `sed -n "/PATTERN/!p"` print lines NOT matching pattern (`grep -v` equivalent)
* `sed -n "/PATTERN/,5p"` print lines between pattern and 5th line of the input
* `sed -n "/PATTERN/,+5p"` print line matching pattern, and 5 more lines (6 lines in total)
* `sed -n "/PATTERN1/,/PATTERN2/p"` prints between tokens (lines matching tokens are printed)

**d = delete**
* `sed "1d"` kill first line
* `sed "3,8!d"` print lines between 3 and 8 (inclusive)
* `sed "$!d"` remove everything but last line (print last line)
* `sed "/./,$!d"` preserve lines between the first non empty one and the end of the file (delete all leading blank lines at top of file)
* `sed "/PATTERN/d"` remove line matching pattern (`grep -v` equivalent)
* `sed "/PATTERN/!d"` remove everything BUT line matching pattern (`grep` equivalent)
* `sed "/PATTERN1/!d; /PATTERN1/!d; /PATTERN1/!d"` remove everything BUT line matching ONE or more patterns
* `sed "/token1/,/token2/d"` remove between tokens (lines matching tokens are removed)

**q = quit**
* `sed 10q` exits after printing the first 10 lines. `head -n 10` equivalent
* `sed q` exits after printing first line. `head -n 1` equivalent
* `sed "/PATTERN/q"` print file content until pattern is found (line matching pattern is printed)
# Insert or append a line 
**i text = Insert line (before)**
* `sed "/PATTERN/i pattern found on next line"`
* `sed "1i inserted at the beginning"`
* `sed "$i inserted before the last line"`

**a text = Append line (after)**
* `sed "/PATTERN/a pattern found just before"`
* `sed "1a inserted after the first line"`
* `sed "$a inserted at the end"`
# Using a pattern file 
`... | sed -f filename.txt`

```
cat filename.txt
s/un/one/
s/deux/two/
```
# Playing with pattern space and hold space 
* `h` `H` Copy/append pattern space to hold space.
* `g` `G` Copy/append hold space to pattern space.
* `n` `N` Read/append the next line of input into the pattern space.
* `p` Print the current pattern space.
* `x` Exchange the contents of the hold and pattern spaces.
* `d` Delete pattern space. Start next cycle.
* `D` If pattern space contains no newline, start a normal new cycle as if the d command was issued. Otherwise, delete text in the pattern space up to the first newline, and restart cycle with the resultant pattern space, without reading a new line of input.

`sed -n "/password/{x;p};h"` print the line before a line containing 'password'

`sed -n "/^$/{p;h;};/./{x;/./p;}"` delete the last line of each paragraph
→ so intuitive in order to achieve this result ☺

==TODO: to be updated==
# delete duplicate lines from a sorted file (emulates "uniq"). First
# line in a set of duplicate lines is kept, the rest are deleted
sed '$!N; /^\(.*\)\n\1$/!P; D'
# delete all CONSECUTIVE blank lines from file except the first; also
# deletes all blank lines from top and end of file (emulates "cat -s")
sed '/./,/^$/!d'          # method 1, allows 0 blanks at top, 1 at EOF
sed '/^$/N;/\n$/D'        # method 2, allows 1 blank at top, 0 at EOF
# delete all CONSECUTIVE blank lines from file except the first 2:
sed '/^$/N;/\n$/N;//D'
# delete all trailing blank lines at end of file
sed -e :a -e '/^\n*$/N;/\n$/ba'
# Sed multiline (ou équivalent avec perl) 

```
cat a
one
two
three
four
five
six
eg244698 ~ $ cat a | perl -0pe 's/two\nthree/yo/'
one
yo
four
five
six
eg244698 ~ $ cat a
one
two
three
four
five
six
eg244698 ~ $ perl -i -0pe 's/two\nthree/yo/' a
eg244698 ~ $ cat a
one
yo
four
five
six
```
# Color 
* inverted red: `sed 's#FATAL#\x1b[1;41m&\x1b[0m#`'
* red: `sed 's#ERROR#\x1b[1;31m&\x1b[0m#`'
* yellow: `sed 's#WARN#\x1b[1;33m&\x1b[0m#`'
* blue: `sed 's#INFO#\x1b[1;34m&\x1b[0m#`'
* light blue: `sed 's#DEBUG#\x1b[1;36m&\x1b[0m#`'
* green: `sed 's#TRACE#\x1b[1;32m&\x1b[0m#`'

`alias colorlog="sed 's#FATAL#\x1b[1;41m&\x1b[0m#;s#ERROR#\x1b[1;31m&\x1b[0m#;s#WARN#\x1b[1;33m&\x1b[0m#;s#INFO#\x1b[1;34m&\x1b[0m#;s#DEBUG#\x1b[1;36m&\x1b[0m#;s#TRACE#\x1b[1;32m&\x1b[0m#'"`
