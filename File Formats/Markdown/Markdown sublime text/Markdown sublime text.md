L'exécutable : `/opt/sublime_text/sublime_text`
# Coloration syntaxique 
## Installation 
* Installer le package control
* Installer Monokai extended
## Le fichier de config 
Ce fichier est : `/home/eg244698/.config/sublime-text-3/Packages/User/Markdown.sublime-settings`

```
{
  "color_scheme": "Packages/MarkdownEditing/MarkdownEditor-Dark.tmTheme",
  "enable_table_editor": true,
  "table_editor_syntax": "Auto",
  "tab_size": 2,
  "draw_centered": true,
  "line_numbers": false,
  "wrap_width": 100,
  "extensions":
  [
	"mdown",
	"txt",
	"md"
  ]
}
```

( [reference](http://docs.sublimetext.info/en/latest/reference/settings.html) )
## Configuration avancée 
Pour modifier les couleurs, il est possible de modifier le thème. Pour cela, ouvrir l'archive `~/.config/sublime-text-3/Installed Packages/Monokai Extended.sublime-package` et extraire le fichier `Monokai Extended.tmTheme`

Placer ce fichier dans un autre dossier, comme par exemple `~/.config/sublime-text-3/Packages/` en le nommant, encore par exemple `me.tmTheme`

Éditer le fichier, en recherchant par exemple le texte `markdown.heading`.

Configurer enfin le fichier `~/.config/sublime-text-3/Packages/User/Markdown.sublime-settings` en mettant à jour la ligne "`color_scheme": "Packages/me.tmTheme",`.
# View HTML 
* Installer Markdown preview
* Tools / Commanad palette / …
# Dictionnaire 
Installer le package `Language - French Français`
# MarkdownTOC 
* https://packagecontrol.io/packages/MarkdownTOC
* https://github.com/naokazuterada/MarkdownTOC
