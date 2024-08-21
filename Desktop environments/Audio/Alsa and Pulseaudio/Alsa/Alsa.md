* `alsamixer` graphical interface for ALSA
* `amixer` command-based utility for ALSA
* `alsactl` to store and restore a full configuration
# amixer 
`amixer -c [card-number] set [control] [value]`

**Set the volume on the Master control/property of the first sound card to 100%**
`amixer -c 0 set Master 100%`

**Set the volume on the Speaker control/property of the second sound card to 50%**
`amixer -c 1 set Speaker 50%`

**Set the volume on the Speaker control/property of the second sound card to 3db**
`amixer -c 1 set Speaker 3db`

**Increase the volume on the Speaker control/property of the second sound card by 2db**
`amixer -c 1 set Speaker 2db+`

**Mute and unmute a property**
`amixer -c 0 set Mic mute`
`amixer -c 0 set Mic unmute`
# alsactl 
By default the config is stored in `/var/lib/alsa/asound.state`
`sudo alsactl store`
`sudo alsactl restore`

The configuration can be stored somewhere else, for instance
`alsactl --file ~/.config/asound.state store`
`alsactl --file ~/.config/asound.state restore`
# IMPORTANT 
At startup, pulse audio may load configuration.
see `/etc/pulse/client.conf`
and check for `autospawn` 

**Walkaround:**

```
#!/bin/sh
restore_alsa() {
    while [ -z "$(pidof pulseaudio)" ]; do
        sleep 1
    done
    alsactl restore 
}
restore_alsa &
```

```
crontab -e:
@reboot ~/alsarestore.sh 2>/dev/null
```
