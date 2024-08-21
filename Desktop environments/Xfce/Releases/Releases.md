`xfce4-about --version`

* [Changelogs](https://xfce.org/download/changelogs) 
* [Release model](https://www.xfce.org/about/releasemodel) 
→ check this blog: https://simon.shimmerproject.org
# v4.18 (tba 2022?) 
→ Wayland ? Gtk4 ? not sure...
# v4.16 (2020-12-22) 
 [Changelog](https://xfce.org/download/changelogs/4.16) 
 [Release anouncement](https://xfce.org/about/news/?post=1608595200) 

**Key updates**
* Gtk2 support removed
* repositories moved to GitLab → better pipeline support
**Key UI updates**
* deeper switch to GtkHeaderBars aka Client-side decorations (CSD)
* new icon set, following the freedesktop.org naming specification and a fixed color palette
* lot of updates inculding pause during thunar copy
# v4.14 (2019-08-12) 
 [Article sur linuxfr](https://linuxfr.org/news/sortie-du-bureau-leger-xfce-4-14) 
 [Changelog](https://xfce.org/download/changelogs/4.14) 
 [Release anouncement](https://www.xfce.org/about/news/?post=1565568000) 

**Key updates**
* All components of core ported to Gtk+ 3
* dbus-glib replaced with GDbus

**Key UI updates**
* sessions management deeply updated
* screen management deeply updated
* notification management update
* new screenshot tool
* Orage retired
* 32 bits support dropped
# v4.12 (2015-02-28) 
 [Article sur linuxfr](https://linuxfr.org/news/xfce-4-12-est-la) 
 [Changelog](https://xfce.org/download/changelogs/4.12) 

* Etape clé pour la migration vers Gtk3
	* GROSSE réécriture d'applications pour les porter vers Gtk3
	* les décorations «côté-client» (CSD : client side decorations) sont gérées
	* le moteur de thèmes GTK3 utilise CSS
* Améliorations du window tiling mode avec support du corner-tiling
* Meilleure gestion du multi-écrans et HiDPI
* Due to gstreamer1.0 having dropped the mixer-interface entirely, and xfce4-mixer and xfce4-volumed relying on this interface with gstreamer0.10, our mixer application and volume daemon cannot be ported to 1.0 and are consequently not maintained anymore.
* …et de nombreuses améliorations ergonomiques
# v4.10 (2012-04-28) 
 [Article sur linuxfr](https://linuxfr.org/news/xfce-4-10-est-disponible) 
 [Changelog](https://xfce.org/download/changelogs/4.10) 

* Gestionnaire de fenêtres ( [xfwm4](https://docs.xfce.org/xfce/xfwm4/start) ) : Gestion d'un mode « tiling »
* Application Finder ( [xfce4-appfinder](https://docs.xfce.org/xfce/xfce4-appfinder/start) ) : `xfrun4` et [xfce4-appfinder](https://docs.xfce.org/xfce/xfce4-appfinder/start) ont fusionné en un seul programme, avec une nouvelle interface, facilitant le lancement de programme via un `alt+F2`.
* Gestionnaire des paramètres ( [xfce4-settings](https://docs.xfce.org/xfce/xfce4-settings/start) ) : `xfce4-settings-helper` et `xfsettingsd` ont fusionné en un seul processus : `xfsettingsd`. 
	* `Xfce4-settings-manager` affiche maintenant des catégories (système, matériel, apparence, etc.)
	* un éditeur de « mime type » fait son apparition afin de modifier facilement les associations de fichiers
* Moteur de thèmes (`gtk-xfce-engine`) : Ajout de la prise en charge des thèmes GTK3. 
# v4.8 (2011-01-16) 
 [Article linuxfr](https://linuxfr.org/news/xfce-48-est-l%C3%A0%E2%80%AF--2) 
 [Changelog](https://www.xfce.org/download/changelogs/4.8) 

* Nouveau tableau de bord, réécrit de zéro ;
* Le portage de [Thunar](https://docs.xfce.org/xfce/thunar/Start) , [xfdesktop](https://docs.xfce.org/xfce/xfdesktop/start) et [thunar-volman](https://goodies.xfce.org/projects/thunar-plugins/thunar-volman) vers [gio](https://developer.gnome.org/gio/stable/) , permettant notamment l'utilisation des partages réseau dans [Thunar](https://docs.xfce.org/xfce/thunar/Start)  ;
* Utilisation de [consolekit](https://www.freedesktop.org/wiki/Software/ConsoleKit/) , [udisk](https://www.freedesktop.org/wiki/Software/udisks/) , [upower](https://upower.freedesktop.org/)  ;
* Expulsion de `HAL` ;
* Apparition de `libxfce4ui` (remplacement de `libxfcegui4`), `garcon` (gestion des menus, remplacement de `libxfce4menu`), `tumbler` (thumbnailer) ;
* Support multi-écran amélioré, avec une meilleure interface de configuration ;
* Et bien sûr, des corrections de bogues à la pelle.
# v4.6 (2009-02-27) 
 [Article linuxfr](https://linuxfr.org/news/xfce-46-et-tout-va-plus-vite) 
 [Changelog](https://xfce.org/download/changelogs/4.6.0) 

* [xfconf](https://docs.xfce.org/xfce/xfconf/start) remplace le vieillissant `xfce-mcs-manager` présent depuis la version 4.0
* Une nouvelle bibliothèque pour la gestion des menus a vu le jour, `libxfce4menu`. Elle remplace l'ancienne implémentation maison, et adhère au standard [menu-spec](https://standards.freedesktop.org/menu-spec/latest/) 
* `Xfce4 Mixer` a été réécrit de zéro pour utiliser [Gstreamer](https://fr.wikipedia.org/wiki/GStreamer) 
* ajout de [xfce4-power-manager](https://goodies.xfce.org/projects/applications/xfce4-power-manager) ,un gestionnaire d'énergie pour les portables, basé sur `HAL` et similaire à [gnome-power-manager](https://projects-old.gnome.org/gnome-power-manager/) 
* [xfce4-screenshooter](https://docs.xfce.org/apps/screenshooter/start) , qui était auparavant un greffon pour le panel, a été grandement amélioré et est maintenant une application à part entière. 
* [xfce4-dict](https://goodies.xfce.org/projects/applications/xfce4-dict) est aussi devenue une application à part entière, et permet de consulter des dictionnaires en ligne, d'avoir accès à des serveurs de traduction. 
* [Ristretto](https://docs.xfce.org/apps/ristretto/start) un afficheur d'images/photos simple et rapide. 
* [Xfmpc](https://goodies.xfce.org/projects/applications/xfmpc) , une interface simple pour MPD
* …nombreuses modifications cosmétiques…
# v4.4 (2007-01-21) 
 [Article linuxfr](https://linuxfr.org/news/sortie-de-xfce-44-lautre-environnement-de-bureau) 
 [Changelog](https://xfce.org/download/changelogs/4.4.0) 

* prise en charge des icônes de bureau
* [Thunar](https://docs.xfce.org/xfce/thunar/Start) remplace `Xffm`
* Ajout de [MousePad](https://git.xfce.org/apps/mousepad/about/) 
* [thunar-volman](https://goodies.xfce.org/projects/thunar-plugins/thunar-volman) voit le jour et propose le montage automatique des volumes, le lancement d'applications,…
* `Orage` remplace `xfcalendar`
* [Terminal Emulator](https://docs.xfce.org/apps/terminal/start) ajouté aux composants coeur
* ajout de deux projets de gestionnaires d'archives : `squeeze` et `Xarchiver`
* ajout d'une application de gravure : `xfburn`
* …
