# CLI : timedatectl 
* Etat : `timedatectl` or `timedatectl status`
* Réglage de l'heure
	* `timedatectl set-time "2018-07-24 16:40:00"`
* Timezone management
	* `timedatectl list-timezones`
	* `timedatectl set-timezone "Europe/Paris"`
	* Set hardware clock to local timezone : `timedatectl set-local-rtc 1` BAD PRACTICE!!!
	* Set hardware clock to coordinated universal time (UTC): `timedatectl set-local-rtc 0` MUCH BETTER
* NTP
	* activation : `timedatectl set-ntp true`
	* desactivation : `timedatectl set-ntp false`
	→ Joue à la fois sur start/stop et enable/disabled
# Démon : systemd-timesyncd.service 
* état : `systemctl status systemd-timesyncd.service`
* lancement : `systemctl start systemd-timesyncd.service`
* activation auto : `systemctl enable systemd-timesyncd.service`

**Fichier de configuration : /etc/systemd/timesyncd.conf**
```
# very simple config file
# see also man timesyncd.conf
[Time]
NTP=time.server.fr
```
