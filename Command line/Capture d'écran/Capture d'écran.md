# Avec import 
Possible avec [import](http://www.imagemagick.org/script/import.php) , un outil d`'ImageMagick`.

**Tout l'écran**

`import -window root ecran.png`
`import -window root screenshot-$(date '+%Y-%m-%d-%H-%M-%s%N').png`

**Partie de l'écran**

Capture d'une parte de l'écran : sélectionner une zone de 800×600 pixels en partant du point situé 150 pixels à plus à droite et 100 pixels plus bas que le coin supérieur gauche de l'écran.

`import -window root -crop 800x600+150+100 image.png`
# Avec scrot 
package: `scrot`

exemples:
* `scrot`
* `scrot --note "-f '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf/40' -x 10 -y 20 -c 255,0,0,255 -t 'Hi'"`
# Avec gnome-screenshot 
==TODO==
