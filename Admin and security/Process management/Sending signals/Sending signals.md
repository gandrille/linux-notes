Remember that
* `SIGINT` = 2
* `SIGKILL` = 9
# pgrep and pkill 
**Examples**
* `pgrep -u root sshd`
* `pkill -HUP syslogd`

**Common options**
* `-u user` Only match processes whose effective user name or ID is listed.
* `-f`, `--full` The pattern is normally only matched against the process name.  When `-f` is set, the full command line is used.
* `-x`, `--exact` Only match processes whose names (or command line if `-f` is specified) exactly match the pattern.

**pgrep only**
* `-l`, `--list-name` list the process name as well as the process ID.
* `-a`, `--list-full` list the full command line as well as the process ID.

**pkill only**
`-signal` `--signal signal` Defines the signal to send to each matched process.  Either the numeric or the symbolic signal name can be used.
* `pkill -SIGINT ...` or `pkill -2 ...` or `pkill --signal SIGINT ...` or `pkill --signal 2 ...`
* `pkill -SIGKILL ...` or `pkill -9 ...` or `pkill --signal SIGKILL ...` or `pkill --signal 9 ...`
# kill command 
Send a signal to a process refered by its PID. This is the most basic command.
* `kill -2 100` or `kill -SIGINT 100` send SIGINT to process which PID is 100
* `kill 100` send SIGTERM (default signal) to process which PID is 100
# killall command 
kill processes by name

* `-s FOO`, `--signal FOO`, `-FOO` Send signal FOO instead of SIGTERM. Either the numeric or the symbolic signal name can be used.
* `-r`, `--regexp` Interpret process name pattern as a POSIX extended regular expression
* `-u`, `--user` Kill only processes the specified user owns.  Command names are optional.

* `-y`, `--younger-than` Match only processes that are younger (started after) the time specified.  The time is specified as a float then a unit.  The units are s,m,h,d,w,M,y for seconds, minutes, hours, days, weeks, Months and years respectively.
* `-o`, `--older-than` Match only processes that are older (started before) the time specified.  The time is specified as a float then a unit.  The units are s,m,h,d,w,M,y for seconds, minutes, hours, days, weeks, Months and years respectively.
