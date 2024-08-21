* `/usr/share/texlive/texmf-dist/tex/latex/beamer`
* `/usr/share/doc/texlive-doc/latex`
# Theme 
**\usetheme{(nom du thème)}**
```
\usetheme{default} % A utiliser dans un premier temps
\usetheme{Warsaw}  % A utiliser dans un second temps
```

**\usecolortheme{(nom du thème)}**
`% \usecolortheme{albatross}`

**\usefonttheme{(nom de la police)}**
`% \usefonttheme{serif}`

**\useinnertheme{(nom du thème)}**
`% \useinnertheme{rectangles}`

**\useoutertheme{(nom du thème)}**
`% \useoutertheme{sidebar}`
# Transitions 
`\trans(nom de l'animation)<(overlay)>[(option)]`

```
\transdissolve<3>[duration=2]
\transblindshorizontal
\transblindsvertical
\transboxin
\transboxout
\transglitter
\transreplace
\transsplitverticalin
\transsplitverticalout
\transsplithorizontalin
\transsplithorizontalout
\transwipe
\transduration
```
# Misc 
```
\usepackage{multimedia}
\movie[(options)]{}{(lien vidéo)}
```
