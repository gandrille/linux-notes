Le protocole de serveur d'affichage `X11` (avec son implémentation `X.Org`) présente de nombreuses limites en terme de sécurité, du fait que les applications ne sont pas convenablement isolées.

Le protocole de serveur d'affichage `Wayland` est la solution à privilégier aujourd'hui.

Pour connaitre le type de serveur d'affichage utilisé : `echo $XDG_SESSION_TYPE`.

Remarque : pour les applications qui ne tournent pas nativement sous Wayland, `XWayland` qui fournit une couche d'adaptation.

**Debian**
* Debian 9 Stretch (17 juin 2017):  Wayland présent, mais non activé par défaut.
* [Debian 10 buster (6 juillet 2019)](https://www.debian.org/News/2019/20190706) : Wayland comme serveur d’affichage par défaut pour GNOME (Avec la mise à jour de GNOME vers la version 3.30)

**Ubuntu**
* 17.04: X11
* 17.10: Wayland
* 18.04: X11 (rollback!)
* ...
* 21.04: Wayland (+pipewire)
