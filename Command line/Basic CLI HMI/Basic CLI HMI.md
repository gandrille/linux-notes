# GUM 
https://github.com/charmbracelet/gum
See [README](https://github.com/charmbracelet/gum#tutorial) file for examples.
# ncurses 
`whiptail --title "Tell me" --yesno "Tell me yes or no…" 20 30`
`whiptail --title "Tell me" --inputbox "Tell me something" 15 45`

```
dialog \
	--backtitle "This is an options panel" \
	--menu "Please select" \
	10 40 3 \
	1 "First option" \
	2 "Second option"
```
# read line wrapper 
`rlwrap [rlwrap-options] command ...`

`rlwrap` runs the specified command, intercepting user input in order to provide readline's line editing, persistent history and completion.

`rlwrap`  tries  to be completely transparent - you (or your shell) shouldn't notice any difference between command and rlwrap command - except the added readline functionality, of course.  This should even hold true when you are re-directing, piping and sending signals from and to command, or when command manipulates its terminal settings.

There are many options to add (programmable) completion, handle multi-line input, colour and re-write prompts.
