Exo is a support library used in the Xfce desktop. It has some helper applications that are used throughout the entire desktop, to manage preferred applications and edit .desktop files. 
# Preferred Apps 
The `exo-preferred-applications` GUI allows to choose the default browser, mailer, file manager and terminal.

Under the covers, it uses several desktop files :
* `/usr/share/applications/exo-web-browser.desktop`
* `/usr/share/applications/exo-mail-reader.desktop`
* `/usr/share/applications/exo-file-manager.desktop`
* `/usr/share/applications/exo-terminal-emulator.desktop`

Every desktop file delegates `exo-open` the execution using an exec statement such as this one: `Exec=exo-open --launch WebBrowser %u`
# Exo-open 
## Launching Prefered Apps 
Here is a basic command: `exo-open --launch WebBrowser %u`
Only 4 application types are allowed: `WebBrowser`, `MailReader`, `TerminalEmulator` and `FileManager`.

**Storage backend**
* `/etc/xdg/xfce4/helpers.rc`
* `/etc/xdg/xdg-xubuntu/xfce4/helpers.rc`
* `~/.config/xfce4/helpers.rc`

NOTE: `xdg-settings get default-web-browser` result is based on helpers.rc files content.
## Launching URL or files 
`exo-open` can be used with urls. For instance `exo-open http://foo.fr`
In order to launch the relevant application, `mimeapps.list` files are parsed in order to find the desktop file corresponding to the relevant scheme handler.

`exo-open` can also be used with files. For instance `exo-open my-music.mp3`
`mimeapps.list` is then used to find the desktop file for the relevant mime type.
