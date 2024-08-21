see: 
* https://doc.ubuntu-fr.org/sudoers
* https://www.sudo.ws/man/sudoers.man.html
# Autoriser un utilisateur à utiliser sudo 
Avec la configuration par défaut, il faut simplement le rendre membe du groupe admin : `usermod -G admin -a mon_utilisateur`
# Configuration de sudo 
Pour modifier la configuration de sudo, il FAUT passer par la commande `visudo` qui effectue un ensemble de vérifications avant d'écrire la nouvelle configuration.

**Modification du timeout**

Remplacer la ligne `Defaults env_reset` par `Defaults env_reset, timestamp_timeout=5`
→ Applique les valeurs par défaut, sauf pour le timeout (exprimé en minutes).
* `timestamp_timeout=0`, le mot de passe sera demandé à chaque commande. 
* `timestamp_timeout=-1`, le mot de passe n'expire jamais

**Ajouter l'affichage des asterix quand on tape le mot de passe**

Remplacer la ligne `Defaults env_reset` par `Defaults env_reset, pwfeedback`
