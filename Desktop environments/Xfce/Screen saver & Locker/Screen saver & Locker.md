# Xfce Screensaver 
**IMPORTANT ** [Xfce screensaver](https://docs.xfce.org/apps/screensaver/start) is available since [Xfce 4.14](https://www.xfce.org/about/news/?post=1565568000) (released in... 2019)

* [releases](https://github.com/xfce-mirror/xfce4-screensaver/releases) 
* Source code : [GitHub](https://github.com/xfce-mirror/xfce4-screensaver) - [Xfce forge](https://bugzilla.xfce.org/) 
* [Bug tracker](https://bugzilla.xfce.org/) ( [Open bugs](https://bugzilla.xfce.org/buglist.cgi?bug_status===open==&no_redirect=1&order=Importance&product=Xfce4-screensaver&query_format=specific) ) [#14782](https://bugzilla.xfce.org/show_bug.cgi?id=14782) 
* `xfce4-screensaver`
* `xfce4-screensaver-preferences`

**properties: xfce4-screensaver channel**
* `/saver/enabled` true/false → full kill switch
* `/saver/idle-activation/enabled` true/false → autostart screensaver after idle time (delay)
* `/saver/idle-activation/delay <number of minutes>`
→ Note: properties are not created by `xfce4-screensaver-preferences` when using default values
# Screen locker 
* The command: `/usr/bin/xflock4`
* [Lock the screen](https://wiki.archlinux.org/index.php/Xfce#Lock_the_screen) 

C'est en fait un simple script qui recherche un locker (généralement un screensaver avec l'option --lock) a qui il délègue la tâche de vérouiller l'écran. Pour cela il teste l'existence des lockers les uns après les autres jusqu'a ce que l'un d'entre eux réponde.

A partir d'Ubuntu 19.10, une propriété permet de forcer le screensaver si besoin: 
`xfconf-query --channel xfce4-session --property /general/LockCommand --create --type string --set "gnome-screensaver-command --lock"`

Voir aussi : [[Configuration|GNOME Configuration]]
# Power management (suspend, hibernate,...) 
## Understanding the mess 
 [Source](https://docs.xfce.org/xfce/xfce4-power-manager/faq) 

**There are two managers used at the same time...**
* `systemd-logind`
	* unit: `systemd-logind.service`
	* config: `/etc/systemd/logind.conf`
	* tool: `loginclt` (Send control commands to or query the login manager)
	* documentation: `man logind.conf`
* Xfce's power manager
	* démarré avec `xfce4-power-manager`
	* config GUI `xfce4-power-manager -c`

**By default**
* `systemd-logind` is started in daemon mode
* Xfce's power manager is NOT started... BUT xfce4-power-manager inhibits logind handling suspend/hibernate and its keys. This is to prevent conflicts that xfce4-power-manager and logind can have.

Xfce properties: `xfconf-query --channel xfce4-power-manager -lv`
## Suspend 
* The command: `/usr/bin/xfce4-session-logout --suspend`
* [Suspend](https://wiki.archlinux.org/index.php/Xfce#Suspend) 

BUG: if TWO login screens show up after suspend
* `xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/lock-screen-suspend-hibernate -s false`
* see also: `xfconf-query -c xfce4-session -p /shutdown/LockScreen -s false`
## Lid switch control 
XUbuntu 20.04 → lid switch management works out of the box using Xfce power manager ☺

**Who is controlling the lid switch?**
`xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/logind-handle-lid-switch | sed -e "s/true/systemd logind/" -e "s/false/Xfce power manager/"`

**Using Xfce's power manager**
`xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/logind-handle-lid-switch -s false`

`xfce4-power-manager -c`
`xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/lid-action-on-ac -n -t uint -s 3`
`xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/lid-action-on-battery -n -t uint -s 3`
* 0 = turn the screen off
* 1 = suspend
* 3 = lock screen

**Using systemd logind**
`xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/logind-handle-lid-switch -s true`
See [[Systemd|Systemd login lid configuration]]
