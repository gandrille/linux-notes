# Settings management 
**Tools**
* `GSettings` is the tool to be used for configuration
* `dconf` is a backend for `GSettings`. `GSettings` should be used instead of `dconf`
* `Gconf` / `gconftool-2` est l'ANCETRE (qui peine à disparaitre…) de `gsettings`. Il faut donc utiliser `gsettings` en priorité.

see
* https://developer.gnome.org/GSettings/
* https://developer.gnome.org/dconf/unstable/dconf-overview.html

**gsettings usage**

Lister les clés dans un schéma : `gsettings list-keys org.gnome.desktop.background`

Connaitre la valeur d'une clé

* `gsettings get org.gnome.desktop.background picture-uri`
* `gsettings get org.gnome.desktop.background picture-options`

see:
* https://people.gnome.org/~ryanl/glib-docs/gvariant-format-strings.html

**Lister TOUS les schemas et TOUTES les clés**
`gsettings list-recursively`
`gsettings list-schemas | xargs -n 1 -I '{}' sh -c 'gsettings list-keys {} | sed "s/^/{} - /"`'
# GNOME screensaver and locker 
The daemon is controled using `gnome-screensaver-command`

`gnome-screensaver-command -l` → lock now !

The lock screen wallpaper is controlled using a gsettings key:
`gsettings set org.gnome.desktop.background picture-uri 'file:///usr/share/backgrounds/gnome/FootFall.png`'

**IMPORTANT:** to force gnome wallpaper to reload, the content of folder `~/.cache/wallpaper` has to be removed.

https://wiki.gnome.org/Attic/GnomeScreensaver
# Nautilus : ajouter 'open terminal here' 
voir contrib avec les screen shots :
http://askubuntu.com/questions/76712/setting-nautilus-open-terminal-to-launch-terminator-rather-than-gnome-terminal

ou sinon :
1. `sudo apt-get install nautilus-open-terminal`
2. `nautilus -q`

La seconde commande permet de forcer un refresh de la config.
# Activating Night Light 
https://www.maketecheasier.com/configure-color-temperature-gnome-night-light/

To reduce blue light during night :

`gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled true`

```
$ gsettings list-keys org.gnome.settings-daemon.plugins.color
night-light-schedule-automatic
priority
recalibrate-display-threshold
night-light-last-coordinates
night-light-enabled
night-light-schedule-from
night-light-schedule-to
night-light-temperature
recalibrate-printer-threshold
active
```
