# Comprendre le problème 
## Répertoire plat : L'ASCII 
Date de 1968. L'ASCII est codé sur 7 bits. Historiquement, le bit de poid fort était utilisé comme bit de parité pour détecter des erreurs de transmission. On a donc 128 caractères.

Un `man ascii` affiche une jolie table :-)
## Des extensions au répertoire plat : les pages de code nationales 
Pour ajouter des caractères, le premier réflexe a été d'ajouter des pages de codes nationales à l'ASCII.
On utilisait donc les 8 bits de l'octets, l'ancien bit de parité étant supprimé pour choisir entre le jeu ASCII, ou un jeu de codage national.

Nous avons donc par exemple les jeux suivants, très utilisés en France :

* `ISO-8859-1`, en 1992, dit `Latin1`, qui contient 189 caractères
* `ISO-8859-15`, dit `Latin9`, qui ajoute au `Latin1` le symbole €, œ,… et retire d'autres caractères non utilisés

`Windows-1252` ou `CP1252` est une extension d`'ISO-8859-1`, qui rajoute un certain nombre de caractères: œ, €, mais aussi guillemets anglais, points de suspension,… En tout, cela représente 218 caractères imprimables.
`Windows-1252` est parfois appelé `ANSI`, mais ce codage n’a jamais été un standard de l’ANSI. Ce nom est donc abusif.

`MacRoman` est une extension d'ASCII, qui n'est pas exactement compatible avec `Latin1`. Comme son nom l'indique, ce codage est utilisé sous Mac.

Problèmes
* Pas possible d'écrire un texte mêlant français et japonais
* Quand on change de pays, la page nationale change… et euro peut devenir livre…
## Unicode : une structuration plus complexe 
**Répertoire des caractères abstraits (Abstract Character Repertoire)**
Liste de caractères abstraits qui ont tous un nom standardisé.
Il s'agit donc d'un inventaire, qui ne contient pas de matérialisation. L'annuaire standard de fait est celui de l'ISO/CEI 10646.

**Jeu de caractères codés (Coded Character Set)**
On ajoute simplement un index numérique a la table précédente.
Cet index est de 4 à 6 chiffres hexa, selon le caractère abstrait.

**Formalisme de codage des caractères (Character Encoding Form)**
On défini ici sur combien de bits seront codés les jeux de caractères

**Mécanisme de sérialisation des caractères (Character Encoding Scheme)**
Prise en charge des unités de stockage : big/little endian,…

**Surcodage de transfert (Transfer Encoding Syntax)**
Compression, sérialisation…

**Les versions du satndard Unicode**
* Unicode v12.0 mars 2019
* Unicode v11.0 juin 2018
* Unicode v10.0 juin 2017
* Unicode v9.0 juin 2016
* Unicode v8.0 juin 2015
* Unicode v7.0 juin 2014
* Unicode v6.0 février 2011
* Unicode v5.0 juillet 2006
* Unicode v4.1 novembre 2005
## UTF-8 
 [UTF-8](https://fr.wikipedia.org/wiki/UTF-8) est un codage de caractères informatiques conçu pour coder l’ensemble des caractères Unicode.
# Outils Linux en ligne de commande 
 [Commande recode : de très nombreux exemples](https://opensharing.fr/commandes-linux-recode) 

**Connaitre l'encodage d'un fichier**
* `file -i filename.txt`
* `chardet filename.txt` → pour installer chardet : `pip install chardet`

**Changer l'encodage avec iconv**
* le résultat est écrit sur la sortie standard ou dans un fichier avec le flag `-o`
* possibilité de lire depuis l'entrée standard avec le nom de fichier `-`
→ `iconv -f WINDOWS-1252 -t UTF-8 filename.txt -o result.txt`

**Changer l'encodage avec recode**
* package `recode`
* `recode windows-1252..UTF-8 filename.txt`

**Changer l'encodage (vers UTF-8) avec VIM**
Quelque chose de générique quand on ne connait pas l'encodage de départ, mais que l'on désire convertir en UTF-8.
`vim +"set nobomb | set fenc=utf8 | x" filename.txt`

* `+` : Used by vim to directly enter command when opening a file. Usualy used to open a file at a specific line: `vim +14 file.txt`
* `|` : Separator of multiple commands (like `;` in bash)
* `set nobomb` : no utf-8 BOM
* `set fenc=utf8` : Set new encoding to utf-8
* `x` : Save and close file
* `filename.txt` : path to the file
* `"` : qotes are here because of pipes. (otherwise bash will use them as bash pipe)
→ Attention, cela ne change pas les fins de ligne. 

**Réencoder le NOM des fichiers**
`convmv` : renommer des noms de fichiers en changant de jeu de caractères
