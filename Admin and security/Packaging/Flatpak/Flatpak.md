https://flatpak.org/setup

`flatpak` est poussé par RedHat. Cette solution est assez orientée desktop. 

* il y a un set de librairies dans le runtime.
* problème : il faut un runtime pour GNOME, un runtime pour KDE,…
* portal : pour parler au système de notification,…

**Quick Install**
http://flatpak.org/getting.html
* Installation : `sudo apt-get install flatpak`
* Plugin Flatpak pour le software center de GNOME : `sudo apt install gnome-software-plugin-flatpak`
* Desktop integration : `sudo apt install xdg-desktop-portal`
* RESTART !

**Remote management**
* list remotes: `flatpak remotes`
* add a remote: `flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo`
* and also: `flatpak remote-add --gpg-import=repo-key.gpg url_address`

**Basic application management**
* List installed flatpak: `flatpak list`
* Installation: `flatpak install flatpak_remote flatpak_name` / `flatpak install --noninteractive --assumeyes flatpak_remote flatpak_name`
* Execution:  `flatpak run flatpak_name`
* Uninstall: `flatpak uninstall flatpak_name`

**Portals**
http://flatpak.org/xdg-desktop-portal/portal-docs.html
* xdg-desktop-portal
* Network Monitor
* proxy resolver
* notification portal 
* file chooser
* open URI
* printing
* Screenshot
* Device

**GUI for managing Flatpak permissions**
 [Warehouse](https://flathub.org/apps/io.github.flattool.Warehouse) 
```
flatpak install flathub io.github.flattool.Warehouse
flatpak run io.github.flattool.Warehouse
```
 [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal) 
```
flatpak install flathub com.github.tchx84.Flatseal
flatpak run com.github.tchx84.Flatseal
```

**Ressources**
* https://github.com/flatpak/flatpak/tags
* http://flatpak.org/flatpak/flatpak-docs.html
* http://flatpak.org/flatpak/reference/html/index.html
* http://flatpak.org/apps.html
* https://github.com/flatpak/flatpak/releases
* [Flathub](https://flathub.org/home) 
* Builder un flatpak : http://docs.flatpak.org/en/latest/first-build.html
