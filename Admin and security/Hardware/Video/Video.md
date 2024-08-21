 [Drivers Nvidia](https://korben.info/comment-installer-les-drivers-nvidia-sous-linux.html) 
# Résolutions 
## Format 4/3 
| name  | X    | Y    |
|:------|:-----|:-----|
| QVGA  | 320  | 240  |
| VGA   | 640  | 480  |
| SVGA  | 800  | 600  |
| XGA   | 1024 | 768  |
| SXGA  | 1280 | 1024 |
| UXGA  | 1600 | 1200 |
| QXGA  | 2048 | 1536 |
| QUXGA | 3200 | 2400 |
## Format 16/9 
| name                     | X    | Y    | Notes                                             |
|:-------------------------|:-----|:-----|:--------------------------------------------------|
| Youtube 144p             | 256  | 144  |                                                   |
| HD                       | 1280 | 720  | 720p, quand affichage progressif (non entrelacé)  |
| WXGA                     | 1366 | 768  |                                                   |
| HD+                      | 1600 | 900  |                                                   |
| Full HD                  | 1920 | 1080 | 1080p, quand affichage progressif (non entrelacé) |
| 4K (par abus de langage) | 4096 | 2304 |                                                   |
| 5K (par abus de langage) | 5120 | 2880 |                                                   |
## Format 16/10 
| name   | X    | Y    | Notes                                                                                   |
|:-------|:-----|:-----|:----------------------------------------------------------------------------------------|
|        |      |      |                                                                                         |
| WXGA+  | 1440 | 900  |                                                                                         |
| WSXGA+ | 1680 | 1050 |                                                                                         |
| WUXGA  | 1920 | 1200 | Parfois qualifée de 1080p, par abus de langage (seule 1920x1080 peut être nommée ainsi) |
| WQXGA  | 2560 | 1600 |                                                                                         |
| WQUXGA | 3840 | 2400 |                                                                                         |
# Interfaces 
## VGA 
* **Création :** 1987
* **Connecteurs :** 15 broches.
* **Type de signal :** analogique.
* **Compatibilité :** le signal analogique est compatible VGA
* **Résolutions :** 4/3 uniquement, jusqu'à QXGA (2048x1536)
* **Autres canaux :** La détection de la résolution du moniteur peut se faire avec un bus I2C optionnel utilisant deux broches du connecteur.
## DVI 
* **Création :** 1999
* **Connecteurs :** Le DVI peut fournir un signal numérique ou analogique (compatible VGA). C'est la raison pour laquelle les connecteurs possèdent des détrompeurs en fonction de ce que l'équipement propose.
* **Type de signal :** numérique et analogique (pas en même temps)
* **Compatibilité :** le signal analogique est compatible VGA
* **Résolution max :** 3 840 × 2 400 pixels (WQUXGA)
## DisplayPort 
| Version | Approved          | Notes                                                             |
|:--------|:------------------|:------------------------------------------------------------------|
| v1.0    | mai 2006          |                                                                   |
| v1.1    | 2 avril 2007      |                                                                   |
| v1.2    | 22 décembre 2009  | écrans 4K (4096 x 2160) à 60 images par seconde                   |
| v1.3    | 15 septembre 2014 | deux écrans 4K à 60Hz ou bien un écran 5K (5120 × 2880)           |
| v1.4    | 1 mars 2017       | un écran 8K (7680 × 4320) à 60Hz, ou le support de la 4K à 120Hz. |

* **Création :** 2006
* **Connecteurs :** Le signal Display Port peut être transmis par un connecteur DisplayPort, mini DisplayPort, Thunderbolt (DisplayPort + PCI Express) ou USB 3.1 type C.
* **Type de signal :** numérique
* **Compatibilité :** DisplayPort est rétrocompatible avec le « single link » DVI/HDMI 
* **Autres canaux :** Un canal auxiliaire peut être utilisé pour les données d’écran tactile, une liaison USB, une caméra, un microphone, etc. ;
## HDMI 
Format d'abord fait pour la TV (transmission du son), mais utilisé également sur les ordinateurs.

* **Création :** 2002
* **Connecteurs**
	* **Type A :** 19 broches, conecteur standard
	* **Type B :** 29 broches, pour les résolutions plus importantes
* **Type de signal :** numérique
* **Compatibilité :** 
	* Type A : rétro-compatible avec le DVI Single-link (DVI-D, DVI-I mais pas DVI-A)
	* Type B : rétro-compatible avec le DVI Dual-link (idem). 
* **Autres canaux :** son.

* HDMI 1.4 4K à 24Hz et 3840 x 2160 pixels à 30Hz
