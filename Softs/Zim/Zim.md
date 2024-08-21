* [Changelog](https://github.com/zim-desktop-wiki/zim-desktop-wiki/blob/master/CHANGELOG.md) 
* [Roadmap](https://github.com/jaap-karssenberg/zim-desktop-wiki/wiki/Planning) 
* [Downloads](https://zim-wiki.org/downloads.html) 

**Format as code in zim**
* `Ctrl+T` selecting one or multiple lines
# Packages 
`apt install zim gtkspellcheck gtkspell`
# Plugins 
* Correcteur d'orthographe
* Edition sans distraction
	 	largeur maximale de la page : 850
	 	Marges verticales : 50
	 	Fond du texte : #FAFAFA
	 	Texte : #2E3436
	 	Fond de l'écran : #EDEDED
* Liste des tâches
* Navigateur de fichiers liés
* Table des matières
* Editeur de tableaux
* Etiquettes
# Supprimer les Creation-Date 
`find . -name "*.txt" -print0 | xargs -0 -n 1 sed -i "/^Creation-Date: /d"`
# Corriger les espaces insécables en français 
```
find . -name "*.txt" -type f -print0 | xargs -0 -n 1 sed -i "s/ »/\xC2\xA0»/g"
find . -name "*.txt" -type f -print0 | xargs -0 -n 1 sed -i "s/« /«\xC2\xA0/g"
find . -name "*.txt" -type f -print0 | xargs -0 -n 1 sed -i "s/ :/\xC2\xA0:/g"
find . -name "*.txt" -type f -print0 | xargs -0 -n 1 sed -i "s/ ?/\xC2\xA0?/g"
find . -name "*.txt" -type f -print0 | xargs -0 -n 1 sed -i "s/ \!/\xC2\xA0\!/g"
```

==→ Vérifier que ça marche avec les tableaux et leurs options d'alignement...==
# Projets similaires 
 [Liste des projets similaires](https://github.com/jaap-karssenberg/zim-wiki/wiki/Similar-projects) 

* [Tag Spaces](https://github.com/tagspaces/tagspaces) 
* [Cherry tree](http://www.giuspen.com/cherrytree/) 
* [Tiddly wiki](http://tiddlywiki.com) 
* [Tree Sheets](http://strlen.com/treesheets/) 

 [See also…](https://alternativeto.net/software/zim---a-desktop-wiki/) 
