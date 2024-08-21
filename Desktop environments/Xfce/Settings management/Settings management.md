 [Xfconf](https://docs.xfce.org/xfce/xfconf/start) is Xfce configuration system since v4.6

**Daemon**
`xfconfd`

**List all properties in all channels (without channel names )**
`xfconf-query --list | grep -E "^  " | tr -s ' ' | sed "s/^ //" | xargs -I {} xfconf-query --channel {} -lv`

**Storage**
Data are stored into `~/.config/xfce4/xfconf/xfce-perchannel-xml` folder

**d-bus binding**
```
import dbus
from gi.repository import GLib
from dbus.mainloop.glib import DBusGMainLoop

def signal_handler(*args):
	for i, arg in enumerate(args):
		print("arg:%d %s" % (i, str(arg)))

DBusGMainLoop(set_as_default=True)
bus = dbus.SessionBus()
bus.add_signal_receiver(signal_handler, bus_name='org.xfce.Xfconf')
loop = GLib.MainLoop()
loop.run()
```
# Changer le background de tous les desktops 
`xfconf-query --channel xfce4-desktop --list | grep "/last-image" | xargs -n 1 -I '{}' xfconf-query --channel xfce4-desktop --property {} --set /usr/share/xfce4/backdrops/xubuntu-yakkety.png`
# Changer les shortcuts 
List : `xfconf-query --channel xfce4-keyboard-shortcuts -lv`
Set : `xfconf-query --channel xfce4-keyboard-shortcuts --property /commands/custom/Print --set $HOME/programmes/prog/shell/xfce4-screenshot`
Set : `xfconf-query --channel xfce4-keyboard-shortcuts --property "/commands/custom/<Shift>Print" --set "$HOME/programmes/prog/shell/xfce4-screenshot --region"`
# Xfce terminal settings 
Key value storage inside `.config/xfce4/terminal/terminalrc` file

For example, since [v0.8.8](https://git.xfce.org/apps/xfce4-terminal/tag/?h=xfce4-terminal-0.8.8) , you can use:
`MiscShowUnsafePasteDialog=FALSE`
(see [BUG#13252](https://bugzilla.xfce.org/show_bug.cgi?id=13252) to understand why)
