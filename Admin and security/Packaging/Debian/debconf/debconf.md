* https://en.wikipedia.org/wiki/Debian_configuration_system
* `man debconf`

`Debconf` permet de poser des questions pour configurer le système. C'est la bonne manière de poser des questions lors de l'installation d'un paquet. Les réponses sont enregistrées dans une base de données qui peut être utilisée par qui veut.

**Pour lire la base de données**
* `sudo debconf-show <package name>`
* commande `debconf-get-selections`, du package `debconf-utils` pour lire toute la base de données.

**Pour écrire dans la base de données une réponse**

* `sudo debconf-set-selections <<< "wireshark-common/install-setuid true"`
* `sudo echo "wireshark-common wireshark-common/install-setuid boolean true" | debconf-set-selections -v` 

**Pour lancer une commande sans frontend, donc en prenant les réponses par défaut**

* `debconf --frontend=noninteractive apt install ...`
* `DEBIAN_FRONTEND=noninteractive apt-get -yq install [packagename]`

**Pour reconfigurer après coup**

* `sudo dpkg-reconfigure wireshark-common`

**Exemple**

```
echo "wireshark-common wireshark-common/install-setuid boolean true" | debconf-set-selections -v
DEBIAN_FRONTEND=noninteractive apt install --yes wireshark
```
