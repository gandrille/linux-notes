# inotify 
`inotifywait --quiet --monitor --format "%e %w%f" --event modify,move,create,delete /home/foo`

* `--monitor` Instead of exiting after receiving a single event, execute indefinitely.  The default behaviour is to exit after the first event occurs.
* `--recursive`
* `--quiet` If specified once, the program will be less verbose.  Specifically, it will not state when it has completed establishing all inotify watches.
# entr 
 [entr](http://eradman.com/entrproject/) est une alternative aux inotify tools qui permet de réagir plus facilement aux mises à jour d'un système de fichier.

`ls *.css *.html | entr reload-browser Firefox`
# Watchexec 
https://watchexec.github.io/
package: `watchexec-cli`
