 [Bash emacs editing mode cheat sheet](https://catonmat.net/bash-emacs-editing-mode-cheat-sheet) 

By default, `Meta` = `Alt`.
Depending on the terminal configuration, some commands may not work, such as `Meta + F → File menu`.

**Commands for Moving**
* `Ctrl + a` Move to the beginning of line.
* `Ctrl + e` Move to the end of line.
* `Meta + b` Move backward a word.
* `Meta + f` Move forward a word.

**Killing and Yanking**
* `Ctrl + k` Kill the text from point to the end of the line
* `Meta + d` Kill from point to the end of the current word
* `Ctrl + w` Kill the word behind point, using white space as a word boundary
* `Ctrl + y` Yank the top of the kill ring into the buffer at point
* `Meta + y` Rotate the kill ring, and yank the new top

**Commands for Manipulating the History**
* `Meta + .` Insert the last argument to the previous command
* `Ctrl + r` Search backward starting at the current line (incremental)
* `Ctrl + g` Abort the current editing command and ring the terminal’s bell

**Misc**
* `Ctrl + l` clear screen
