# Key facts 
* unit: `systemd-logind.service`
* config: `/etc/systemd/logind.conf`
* tool: `loginclt` (Send control commands to or query the login manager)
* documentation: `man logind.conf`
# Configuration file: lid related config 
`/etc/systemd/logind.conf`
(of course, you need to restart the service after a config update)
## Understanding the situation 
**Default values**
* `HandleLidSwitch=suspend`
* `HandleLidSwitchExternalPower=suspend`
* `HandleLidSwitchDocked=ignore`
* `LidSwitchIgnoreInhibited=yes`

For the first three keys, value can be one of `ignore`, `poweroff`, `reboot`, `halt`, `kexec`, `suspend`, `hibernate`, `hybrid-sleep`, `suspend-then-hibernate`, and `lock`. If `ignore`, logind will never handle these keys. If `lock`, all running sessions will be screen-locked; otherwise, the specified action will be taken in the respective event.

**According to the man page**
* If the system is inserted in a docking station, or if more than one display is connected, the action specified by `HandleLidSwitchDocked=` occurs; if the system is on external power the action (if any) specified by `HandleLidSwitchExternalPower=` occurs; otherwise the `HandleLidSwitch=` action occurs.
* `PowerKeyIgnoreInhibited=`, `SuspendKeyIgnoreInhibited=`, `HibernateKeyIgnoreInhibited=`, `LidSwitchIgnoreInhibited=` Controls whether actions that systemd-logind takes when the power and sleep keys and the lid switch are triggered are subject to high-level inhibitor locks (`shutdown`, `sleep`, `idle`). Low level inhibitor locks (`handle-power-key`, `handle-suspend-key`, `handle-hibernate-key`, `handle-lid-switch`), are always honored, irrespective of this setting.
## Possible issues 
Inside `/etc/systemd/logind.conf`

**Invisible login screen**
????

**With HandleLidSwitch=suspend → TWO logins!**
If you are using Xfce: `xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/lock-screen-suspend-hibernate -s false`
