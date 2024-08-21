La manipulation des `unit` se fait à l'aide de la commande `systemctl`. Bien entendu, pour les modifications d'état, il faudra être root pour l'utiliser. 
Note: systemctl tries to send requests to `systemd-logind` when the calling user is not the superuser.

**Les units peuvent être des units système, ou user**
* `systemctl --system`
* `systemctl --user`

**Lister**
* `systemctl list-units`
* `systemctl list-units --type=service`

**Afficher / Editer la configuration d'une unit**
* `systemctl cat ssh.service` raw file content
* `systemctl show ssh.service` key/value dump
* `systemctl edit --full ssh.service` 
	* after the unit has been edited, systemd configuration is reloaded (in a way that is equivalent to daemon-reload). 
	* to use another editor: `sudo update-alternatives --config editor`

**Connaître et modifier l'état courant**
* `systemctl status ssh.service`
* `systemctl start ssh.service` 
* `systemctl stop ssh.service`
* `systemctl restart ssh.service`
* `systemctl reload ssh.service` recharge les fichier de configuration

**Gérer le démarrage automatique au boot**
* `systemctl is-enabled ssh.service`
* `systemctl enable ssh.service`
* `systemctl disable ssh.service`
* `systemctl is-failed ssh.service`
* `systemctl --failed`

**Mask**
Par le jeu des dépendances, une unit peut être chargée automatiquement. La masquer bloque son chargement par dépendance (mais elle peut être chargée à la main)
* `systemctl mask ssh.service`
* `systemctl unmask ssh.service`

**Envoyer un signal**
* `systemctl -s SIGKILL ssh.service`

**Et aussi…** 
* `systemd-analyze blame` pour connaitre le temps de démarrage
* `systemctl daemon-reload` pour relire les fichiers décrivant les units (après cration/modification)
