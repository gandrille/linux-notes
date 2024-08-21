**Serveurs NTP**
* [serveurs renater](https://services.renater.fr/ntp/serveurs_francais) 
* [NTP pool](https://www.pool.ntp.org/zone/fr) 
* [serveurs de l'observatoire de Paris](https://syrte.obspm.fr/spip/services/ref-temps/article/diffusion-de-l-heure-par-internet-ntp-network-time-protocol?lang=fr) 

Note : Une bonne pratique est de garder l'heure matérielle en UTC, et d'avoir l'heure logicielle selon une timezone.
# Réglage manuel de l'heure 
**Réglage manuel de l'heure système**
* régler l'heure : `sudo date --set 11:51:12`
* régler la date : `sudo date --set 12/25/2015`

**Synchronisation heure matérielle (RTC) / heure système**
* `sudo hwclock --systohc`
* `sudo hwclock --hctosys`

**Réglage de la timezone**
* `/etc/timezone`
* `tzselect` : updates timezone
* Debian: `dpkg-reconfigure tzdata`

→ note : quelle est la différence avec le lien symbolique `/etc/localtime` ?
# [Actual] Avec systemd 
voir systemd [[timedatectl]]
# [Legacy] Démon NTP 
**Client NTP pour régler l'heure système**
* package `ntpdate`
* usage basique : `sudo ntpdate time.server.fr`
* usage avancé : éditer le fichier `/etc/default/ntpdate`

**Démon NTP**
* package `ntp`
