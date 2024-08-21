# Full list 
```
$  kill -l
 1) SIGHUP	 2) SIGINT	 3) SIGQUIT	 4) SIGILL	 5) SIGTRAP
 6) SIGABRT	 7) SIGBUS	 8) SIGFPE	 9) SIGKILL	10) SIGUSR1
11) SIGSEGV	12) SIGUSR2	13) SIGPIPE	14) SIGALRM	15) SIGTERM
16) SIGSTKFLT	17) SIGCHLD	18) SIGCONT	19) SIGSTOP	20) SIGTSTP
21) SIGTTIN	22) SIGTTOU	23) SIGURG	24) SIGXCPU	25) SIGXFSZ
26) SIGVTALRM	27) SIGPROF	28) SIGWINCH	29) SIGIO	30) SIGPWR
31) SIGSYS	34) SIGRTMIN	35) SIGRTMIN+1	36) SIGRTMIN+2	37) SIGRTMIN+3
38) SIGRTMIN+4	39) SIGRTMIN+5	40) SIGRTMIN+6	41) SIGRTMIN+7	42) SIGRTMIN+8
43) SIGRTMIN+9	44) SIGRTMIN+10	45) SIGRTMIN+11	46) SIGRTMIN+12	47) SIGRTMIN+13
48) SIGRTMIN+14	49) SIGRTMIN+15	50) SIGRTMAX-14	51) SIGRTMAX-13	52) SIGRTMAX-12
53) SIGRTMAX-11	54) SIGRTMAX-10	55) SIGRTMAX-9	56) SIGRTMAX-8	57) SIGRTMAX-7
58) SIGRTMAX-6	59) SIGRTMAX-5	60) SIGRTMAX-4	61) SIGRTMAX-3	62) SIGRTMAX-2
63) SIGRTMAX-1	64) SIGRTMAX
```
# Main signals 
* `SIGHUP` ① Hang up detected on controlling terminal or death of controlling process
* `SIGINT` ② Issued if the user sends an interrupt signal (Ctrl + C)
* `SIGQUIT` ③ Issued if the user sends a quit signal (Ctrl + D)
* `SIGFPE` ⑧ Issued if an illegal mathematical operation is attempted, such as division by zero
* `SIGKILL` ⑨ If a process gets this signal it must quit immediately and will not perform any clean-up operations. This signal cannot be intercepted, ignored, or handled by the process itself.
* `SIGALRM` ⑭ Alarm clock signal (used for timers)
* `SIGTERM` ⑮ Software termination signal. Unlike SIGKILL, it can be intercepted.
# Trap command 
Defines what to do when the shell receive signals.

There are two common usecases using trap command
* cleaning temporary files
* ignoring signals

`trap "echo Ctrl+C received!" SIGINT`
