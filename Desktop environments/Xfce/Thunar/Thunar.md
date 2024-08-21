# Shortcuts 
* `F4`: open terminal in the current path
* `Ctrl + Shift + F` / `Cmd + Shift + F`: open Catfish in the current path

**Thunar config (** [Documentation](https://docs.xfce.org/xfce/thunar/start) )

Change backspace behavior
* In file `.config/Thunar/accels.scm`
* append the following line: `(gtk_accel_path "<Actions>/ThunarWindow/open-parent" "<Alt>Up")`

→ Keynames: https://gitlab.gnome.org/GNOME/gtk/-/blob/main/gdk/keynames.txt

**Custom Launchers**
`.config/Thunar/uca.xml`
```
<action>
	<icon>drive-network</icon>
	<name>Start Webserver</name>
	<unique-id>2574257978896168-8</unique-id>
	<command>exo-open --working-directory %f --launch TerminalEmulator /usr/bin/python -m http.server</command>
	<description>Start Webserver on port 8000</description>
	<patterns>*</patterns>
	<directories/>
</action>
```
# Hide folders 
Since Thunar is using glib, with its [glocalfileinfo.c](https://gitlab.gnome.org/GNOME/glib/blob/master/gio/glocalfileinfo.c#L1533) file, it's possible to hide folders/files using a `.hidden` file inside any folder. This file lists the elements to be hidden (see [Wikipedia](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory#GNOME) ).

For example, to hide the snap folder from the home reposiitory: `echo snap >> ~/.hidden`
# Thumbnailer 
`cat ~/.local/share/thumbnailers/git.thumbnailer`

```
[Thumbnailer Entry]
Version=1.0
Encoding=UTF-8
Type=X-Thumbnailer
Name=Git Thumbnailer
MimeType=inode/directory;
Exec=sh -c '[ -d %i/.git ] && cp ~/documents/images/logos/git.png %o'
```

https://askubuntu.com/questions/1368910/how-to-create-custom-thumbnailers-for-nautilus-nemo-and-caja
# Name orderning 
Defined in [gunicollate.c](https://gitlab.gnome.org/GNOME/glib/blob/master/glib/gunicollate.c) file, provided by glib.
