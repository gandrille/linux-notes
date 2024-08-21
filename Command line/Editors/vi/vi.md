 [vi cheatsheet](https://devhints.io/vim) 

```
+-----------+ --- <ESC> ---> +----------+ ------ : ----> +---------+           
| insertion |                | commande |                | edition |
+-----------+ <-- i/a/A ---- +----------+ <--- <ESC> --- +---------+
```

* `i`   insertion avant le curseur
* `a`   insertion apres le curseur
* `A`   insertion en fin de ligne

**Edition**
* `:q`       sortie si pas de modifs
* `:q!`      sortie sans sauvegarder
* `:wq`      sortie en enregistrant (comme ZZ)
* `:set nu`  numeros de ligne (:set nonu pour annuler)
* `:r fic`   fusionne le fichier fic 
* `:18`      goto line 18
* `:0`       goto debut de fichier
* `:$`       goto fin de fichier   

**commandes**
* `0`   debut de ligne 
* `$`   fin de ligne
* `w`   avance mot par mot sur le debut
* `e`   avance mot a mot sur la fin
* `b`   recule mot par mot
* `u`   undo
* `x`   efface un caractere
* `dw`  supprime un mot
* `dd`  efface une ligne
* `3dd` efface 3 lignes
* `J`   joindre deux lignes
* `yy`  copie une ligne
* `p`   colle
