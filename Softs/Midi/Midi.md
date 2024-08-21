# Samples d'instruments 
Pour lire le midi, il faut des jeux d'instruments qui peuvent être:
* des SoundFont (terme générique)
* des résultats du projet freepats

Paquets
* fluid-soundfont-gs
* fluid-soundfont-gm
* freepats
# FluidSynth 
Une fois que l'on a des jeux d'instruments, il faut un synthétiqseur pour les exploiter. C'est le rôle de fluidsynth, qui peut être utilisé de manière standalone (pour les barbus) ou plus généralement sous forme de plugin, pour vlc, par exemple

paquets
* vlc-plugin-fluidsynth
* fluidsynth

→ Attention : si ça ne marche pas dans vlc, c'est qu'il faut donner les soundfonts à utiliser dans un menu de config...
# Timidity 
Timidity est le player spécialisé pour les fichiers mid :

paquets
* timidity
* timidity-interfaces-extra
* timidity-freepats

→ Attention : il faut configurer dans /etc/timidity/timidity.cfg 
Les jeux d'instruments à utiliser. 

Voir : http://slackwiki.com/Timidity%2B%2B
