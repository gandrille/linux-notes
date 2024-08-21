# Plugin markdown pour gedit 
* http://www.jpfleury.net/en/software/gedit-markdown.php
# Fonctionnement des associations de fichiers et coloration syntaxique dans gedit 
L'association se fait en deux étapes :

* `freedesktop` associe une extension à un type via `/usr/share/mime/packages/freedesktop.org.xml`
* le type est associé par gedit à un coloration syntaxique via `/usr/share/gtksourceview-3.0/language-specs/*.lang`
# Pour que les fichiers `*.txt` soient coloriés en markdown 
* éditer `/usr/share/mime/packages/freedesktop.org.xml` et déplacer `*.txt` dans la section markdown
* exécuter en root la commande : `update-mime-database /usr/share/mime`
# Ressources 
* http://judsonsnotes.com/notes/index.php?option=com_content&view=article&id=556:default-highlighting-in-gedit&catid=37:tech-notes&Itemid=59
* http://askubuntu.com/questions/44730/can-i-set-a-default-syntax-highlighting-in-gedit
