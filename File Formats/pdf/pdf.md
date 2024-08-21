# Obtenir des infos sur un fichier pdf 
`pdfinfo myfile.pdf`

```
Title:          Microsoft Word - 15-002r5.docx
Keywords:       
Creator:        Word
Producer:       Adobe Mac PDF Plug-in
CreationDate:   Mon Apr 20 18:43:22 2015 CEST
ModDate:        Mon Apr 20 18:52:55 2015 CEST
Tagged:         no
UserProperties: no
Suspects:       no
Form:           none
JavaScript:     no
Pages:          7
Encrypted:      no
Page size:      612 x 792 pts (letter)
Page rot:       0
File size:      812601 bytes
Optimized:      no
PDF version:    1.4
```
# Extraire le texte d'un pdf 
* `ghostscript -sDEVICE=txtwrite -o output.txt fichier.pdf`
* avec affichage sur la sortie standard `ghostscript -sDEVICE=txtwrite -o - fichier.pdf`
# Extraire certaines pages d'un pdf 
Extraire les pages 10 à 12 de `in.pdf` :

`pdftk A=in.pdf cat A10-12 output out.pdf`
# Conversion en image 
* a la main avec `gimp`
* en cli avec `convert` 
# Manipuler, assembler, supprimer des pages, etc 
`pdftk` à regarder si besoin… ça semble assez puissant…
# Créer un livret (booklet) à patir d'un fichier pdf 
* `pdfbook2` ( [package source](https://www.ctan.org/pkg/pdfbook2) ) du package `texlive-extra-utils`
* le package `bookletimposer` pourrait être intéressant à regarder plus tard…
# Password protection 
**Password removal**
`qpdf --password=YOURPASSWORD-HERE --decrypt input.pdf output.pdf`
# OLD `pdfbook` util 
Historiquement, l'utilitare `pdfbook`/`pdfbook2` faisait partie du package `pdfjam`. Depuis 2016 environ, il faut utiliser le package `texlive-extra-utils` pour installer `pdfjam` ou `pdfbook`.

Par défaut, `pdfbook` faisait des blocs de 4 signatures. Or, on désire une signature globale sur le fichier…

J'avais donc copié et modifié l'utilitaire en remplaçant :

```
if test -z "$signature" ; then
	signature="--signature 4"
else
	signature=""
fi
```

par les lignes suivantes :

```
if test -z "$signature" ; then
	signature="--booklet true"
else
	signature=""
fi
```

Maintenant qu'il existe `pdfbook2`, cette solution n'est plus nécessaire.
