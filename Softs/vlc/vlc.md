# Using D-Bus interface 
 [See freedesktop specification](https://specifications.freedesktop.org/mpris-spec/2.2/Player_Interface.html) 

**Method call**
Play / pause : `dbus-send --type=method_call --dest=org.mpris.MediaPlayer2.vlc /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.PlayPause`
Seek 2s forward: `dbus-send --type=method_call --dest=org.mpris.MediaPlayer2.vlc /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Seek int64:2000000`
Seek 2s backward: `dbus-send --type=method_call --dest=org.mpris.MediaPlayer2.vlc /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Seek int64:-2000000`

**Get property**
`dbus-send --dest=org.mpris.MediaPlayer2.vlc --print-reply /org/mpris/MediaPlayer2 org.freedesktop.DBus.Properties.Get string:org.mpris.MediaPlayer2.Player string:PlaybackStatus`
`dbus-send --dest=org.mpris.MediaPlayer2.vlc --print-reply /org/mpris/MediaPlayer2 org.freedesktop.DBus.Properties.Get string:org.mpris.MediaPlayer2.Player string:Volume`
`dbus-send --dest=org.mpris.MediaPlayer2.vlc --print-reply /org/mpris/MediaPlayer2 org.freedesktop.DBus.Properties.Get string:org.mpris.MediaPlayer2.Player string:Metadata`

**Set property**
`dbus-send --dest=org.mpris.MediaPlayer2.vlc --print-reply /org/mpris/MediaPlayer2 org.freedesktop.DBus.Properties.Set string:org.mpris.MediaPlayer2.Player string:Volume variant:double:0.5`

**Basic Python example**
```
from pydbus import SessionBus
bus = SessionBus()
# Create an object that will proxy for a particular remote object.
remote_object = bus.get(
	'org.mpris.MediaPlayer2.vlc', # Bus name
	'/org/mpris/MediaPlayer2'     # Object path
)

print(remote_object.PlaybackStatus)
print(remote_object.Volume)

remote_object.PlayPause()

print("Introspection data:\n")
print(remote_object.Introspect())
```
# Using HTTP interface 
## HTTP interface activation 
* preferences > all > Main interfaces > enable Web
* restart vlc
* browse http://localhost:8080/ ☺

**Note:** A password may be required.
## Some cURL commands 
With password "mypass"
* **Toggle pause:** `curl --user :mypass http://localhost:8080/requests/status.xml?command=pl_pause`
* **Full status:** `curl -s --user :mypass http://localhost:8080/requests/status.xml`
* **Song name:** `curl -s --user :mypass http://localhost:8080/requests/status.xml | xmllint --xpath "//info[@name='filename']/text()" -`
# VLC config for playing videos from beamer 
**Tested with VLC v3.0.8**

```
echo "Reset config"
vlc --reset-config vlc://quit

echo "Don't ask for network policy at startup"
sed -i "s/#qt-privacy-ask=1/qt-privacy-ask=0/" ~/.config/vlc/vlcrc

echo "Fullscreen (tools / preferences / video / fullscreen)"
sed -i "s/#fullscreen=0/fullscreen=1/" ~/.config/vlc/vlcrc

echo "play and exit (in media menu)"
sed -i "s/#play-and-exit=0/play-and-exit=1/" ~/.config/vlc/vlcrc

echo "Always on top (Preferences / All / Video / Always on top)"
sed -i "s/#video-on-top=0/video-on-top=1/" ~/.config/vlc/vlcrc

echo "Disable video title (Preferences / All / Video / Show media title on video)"
sed -i "s/#video-title-show=1/video-title-show=0/" ~/.config/vlc/vlcrc
```
