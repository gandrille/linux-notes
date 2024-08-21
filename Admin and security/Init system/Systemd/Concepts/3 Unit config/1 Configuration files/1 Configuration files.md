**Configurations système**
* Fourni par les packages du système : `/usr/lib/systemd/system`
* Configurations de l'admin : `/etc/systemd/system`
* Généré au runtime : `/run/systemd/system`

**Configurations user**
* Configuré par l'admin, pour tous les users : `/etc/systemd/user`
* Généré au runtime : `/run/systemd/user`
* Locally installed software : `~/.local/share/systemd/user`
* Surchargé par l'utilisateur : `~/.config/systemd/user`
