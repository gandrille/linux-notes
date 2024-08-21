| Command        | SysVinit               | Systemd             |
|:---------------|:-----------------------|:--------------------|
| 1. System halt | halt (et shutdown)     | systemctl halt      |
| 2. Power off   | poweroff (et shutdown) | systemctl poweroff  |
| 3. Reboot      | reboot (et shutdown)   | systemctl reboot    |
| 4. Suspend     | pm-suspend             | systemctl suspend   |
| 5. Hibernate   | pm-hibernate           | systemctl hibernate |

Pour des raisons de compatibilité, systemd utilise des liens symboliques de halt, poweroff, reboot,... vers systemctl.

see [man systemctl](https://freedesktop.org/software/systemd/man/systemctl.html) :
* `systemctl isolate halt.target` has the shorthands:
	* `shutdown -H now`
	* `systemctl halt`
	* plain unadorned `halt`
* `systemctl isolate reboot.target` has the shorthands:
	* `shutdown -r now`
	* `telinit 6`
	* `systemctl reboot`
	* plain unadorned `reboot`
* `systemctl isolate poweroff.target` has the shorthands:
	* `shutdown -P now`
	* `telinit 0`
	* `shutdown now`
	* `systemctl poweroff`
	* plain unadorned `poweroff`
* `systemctl isolate rescue.target` has the shorthands:
	* `telinit 1`
	* `systemctl rescue`
* `systemctl isolate multi-user.target` has the shorthands:
	* `telinit 2`
	* `telinit 3`
	* `telinit 4`
* `systemctl isolate graphical.target` has the shorthand:
	* `telinit 5`

Pour en savoir plus
* [man systemd.special](https://freedesktop.org/software/systemd/man/systemd.special.html) : liste des units (et donc des targets) créés par systemd
* [man bootup](https://www.freedesktop.org/software/systemd/man/bootup.html) : diagrammes de boot avec les targets

 [Post TRES intéressant](https://unix.stackexchange.com/questions/195898/what-is-the-difference-between-these-commands-for-bringing-down-a-linux-server/196014#196014) pour plus de détails.
