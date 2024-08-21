With bash-4.0 (see [release notes](https://tiswww.case.edu/php/chet/bash/NEWS) ): "If a command is not found, the shell attempts to execute a shell function named `command_not_found_handle`, supplying the command words as the function arguments.

```
function command_not_found_handle() {
  if [ $1 == foo ]; then
    echo "It's foo"
  elif [ -x /usr/lib/command-not-found ]; then
    /usr/lib/command-not-found -- "$1"
    return $?
  elif [ -x /usr/share/command-not-found/command-not-found ]; then
    /usr/share/command-not-found/command-not-found -- "$1"
    return $?
  else
    printf "%s: command not found\n" "$1" >&2
    return 127
  fi
}
```
