# Téléchargement 
 [Download page](https://code.visualstudio.com/) 
# Configuration 
Pour accéder à la configuration : `file > preferences > settings`.

```
{
	"[markdown]":{
		"editor.wordWrap": "bounded",
		"editor.wordWrapColumn": 80,
		"editor.quickSuggestions": false,
		"editor.glyphMargin": true
	},
	"markdownlint.config": {
		"MD006": false,
		"MD007": false,
		"MD009": false,
		"MD012": false,
		"MD029": false
	},
	"markdown-toc.orderedList": true,
	"markdown-toc.updateOnSave": true,
	"markdown-toc.depthFrom": 2,
	"languageTool.language": "afr",
	"markdown-pdf.styles": [
		"/home/eg244698/programmes/config/vscode/markdown-pdf.css"
	]
}
```
# Plugins 
* Pour installer un plugin, aller dans le volet extension sur la gauche (`Ctrl+Maj+X`).
* Pour exécuter une commande, `F1` ou `Ctrl+Shift+P`.
## Markdown-TOC (v1.5.6) 
Permet de générer facilement une table des matières. Les valeurs par défaut peuvent être changées dans le fichier de config de l'utilisateur.

**Commandes principales**
* Markdown TOC: Delete
* Markdown TOC: Insert/Update
## Table formater (v1.2.1) 
Un must have pour formatter rapidement des tables. La documentation est très bien faite.

**Commandes principales**
* Table: Format Current
* Table: Format All
## Markdown PDF (v0.1.7) 
Conversion en pdf, (mais aussi html, png et jpeg via le fichier de config). Fait très bien le job.

Possibilité de configurer le rendu avec une feuille de style. Voir celles [par défaut](https://github.com/yzane/vscode-markdown-pdf/tree/master/styles) à titre d'exemple, ou encore :

```
body {
  font-size: 10px;
}

code {
  font-size: 10px;
  line-height: 15px;
}
```

Commandes principales :

* Convert Markdown to PDF
## Auto-Open Markdown Preview (v0.0.4) 
Affiche automatiquement la prévisualisation à l'ouverture des fichiers markdown.

Pas de commandes.
## LanguageTool for Visual Studio Code (3.8.0) 
Correcteur orthographique encore en phase de développement… L'absence d'une bonne prise en charge de cette fonctionnalité est très handicapante…

Attention : il faut aussi installer une extension par langage que l'on souhaite supporter.

* ex : French Support for LanguageTool
## Markdownlint (v0.10.0) 
Vérifie que le document est bien formé, et affiche des warnings éventuels dans la marge. Les règles étant très strictes, un peu de configuration est souhaitable…

* [Règles de validation](https://github.com/DavidAnson/markdownlint/blob/v0.4.1/doc/Rules.md) 

Pas de commandes.
