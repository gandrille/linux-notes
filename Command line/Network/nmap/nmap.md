Network Mapper : scanner réseau
(Zmap interface graphique)

**Spécification des hôtes**
* `192.168.0.21` l'hôte spécifié
* `192.168.0.21/24` tous les hôtes de 0 à 255
* `192.168.0.10-30` entre 10 et 30

**Options**
* `-sS` scan TCP
* `-sU` scan UDP
* `-sV` tente de doner la version des services
* `-sP` que le scan du ping
* `-p 80,53` restreindre l'analyse à certains ports
* `-A` active la détection du système d'exploitation et des versions

**Etat des ports**
* `open`     : actif
* `closed`   : pas de service
* `filtered` : bloqué par un pare-feu ou une application
* `non-filtered` : nmap ne sait pas trop quoi dire…

**Exemples simples**
* `nmap -sP 192.168.0.10-30` regarde qui répond au ping sur la plage indiquée
* `nmap -sS -sU -sV -T3 192.168.1.101` fait un scan TCP et UDP sur l'hôte et affiche les versions
* `nmap -A -p 80,8000,8080,443,8443,7443,7070,7000,21,22,23 192.168.1.0/24` scan rapide du réseau sur une sélection de ports
