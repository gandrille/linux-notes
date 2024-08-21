# Password generator 
`apg -a 1 -m 10 -M SNCL -n 10`

* `-a 1` random character password generation (by contrast with pronounceable password generation)
* `-m 10` minimum length
* `-M SNCL` generator must use for every generated password Special, Numeric, Capital symbol, Lower case letter
* `-n 10` generates 10 passwords
# Random pin generator 
`shuf --random-source=/dev/urandom -i 0-9 -r -n 6 | paste -sd` ''
# cloc 
count lines of code.
package `cloc`
# Timeout 
If no signal is specified, send the `TERM` signal upon  timeout. 
`-k` aka `--kill-after=DURATION` also send a KILL signal if the command is still running this long after the initial signal was sent.

**examples**
* `timeout 60 ping google.com`
* `timeout 60s ping google.com`
* `timeout 1m ping google.com`

see also package `timelimit`
# Advanced Sort usage 
How to sort on multiple fields !
https://unix.stackexchange.com/questions/52762/trying-to-sort-on-two-fields-second-then-first
# Comm - A diff alternative for simple cases! 
Compare two sorted files line by line
