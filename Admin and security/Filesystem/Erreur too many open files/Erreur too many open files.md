Dans le fichier `/etc/security/limits.conf`, ajouter les lignes :

* `hard nofile 50000`
* `soft nofile 50000`

Voir commande `ulimit -n`
