 [Release notes](https://www.cis.upenn.edu/~bcpierce/unison/download/releases/stable/unison-manual.html#news) 
 [Manual](https://www.cis.upenn.edu/~bcpierce/unison/download/releases/stable/unison-manual.html) 
# Package infos and download 
* [Debian package infos](https://tracker.debian.org/pkg/unison) 
* [Debian FTP webpage](http://ftp.debian.org/debian/pool/main/u/unison/) 
# Bug 
Debian et Ubuntu ne compilent pas avec la même version de la librairie `ocaml`. Du coup, la synchronisation ne fonctionne pas quand les fichiers de plus de 700ko sont modifiés d'un des deux côtés.

La solution est d'installer la même version de chaque côté (Ubuntu ou Debian) en téléchargeant le paquet à la main.
# Configuration 
**The default profile**
```
# .unison/default.prf
auto  = true
batch = true
log   = false
```

**A profile, referencing the defaults**
```
include default

root=/home/foo/
root=ssh://foo@backup/home/foo/

path=bar
path=baz

ignore=Name .git
```
