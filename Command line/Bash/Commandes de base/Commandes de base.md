# Navigation dans les repertoires 
`pwd` : print working directory

`ls` : list sort
* `-a` fichiers cachés
* `-l` liste des infos
* `-g` comme l sans le groupe  
* `-i` affiche les i-noeuds
* `-p` ajoute un slash après les repertoires
* `-R` recursif
→ [exa](https://the.exa.website) est une alternative très sympathique à `ls`

`cd` : change directory
* sans argument, retour au home dir
* `-` aller au repertoire precedent
# Modification de l'arborescence 
`mkdir` : creer un repertoire

`rmdir` : supprimer un repertoire vide

`rm` : supprime des fichiers dont les noms sont donnes en param
* `-i` demande de confirmation
* `-r` recursif et supprime les repertoires non vides

`cp` : copy from source to destination
* `-R` copie des fichiers device

`mv` : deplacer / renommer un ficher

`ln` : link => donner au fichier un autre nom (pas de creation d'i-node)
* `-s` lien symbolique a la windows

`touch` : creer un fichier

`chmod` : modification des droits
* syntaxe en trois morceaux : ogu +-= wrx
# Affichage de fichiers 
`more` : affichage page par page

`less`

`cat` : afficher sur la sortie standard le contenu d'un fichier passe en parametre

`head`

`tail`
# commandes systemes 
`nice` : execute la commande en param avec une faible priorite
* `-nombre` la priorite

`kill` : envoyer un signal a un process dont on donne le PID
* `-9` assassiner un process (SIGKILL)

`pidof firefox` : trouver le pid

`ps` : affichage des processus de l'utilisateur
* `-e` tout plein de process de tout le monde
* `-f` des iofos

`jobs` : liste des processus lances en arriere plan 

`nohup` : execute la commande en arriere plan et ne la termine pas au unlog

`<CTRL>+Z bg` : passer un process en tache de fond

`fg` : passe en tache principale la tache dont le numero de job est indique
# imprimante 
`lp` : imprimer un fichier dont le nom est donne en param
* `-P` suivi du nom du printer
* `-h` ne pas imprimer la page de head
* `-#` suivi du nombre d'exemplaires

`lpstat` : etat des imprimantes (equivalent a lpq)

`cancel` : annule le travail dont le numero obtenu par lpstat est passe en param (equivalent a lprm)
# reseau 
`telnet` : etablir une connexion distante
* en param le seveur

`ftp` : liaison ftp
* en param le serveur
* `hash` : affiche un # tous les kilo transferes
* `ascii` : positionne le type de transfert en ascii
* `put` : envoyer un fichier
* `get` : recuperer un fichier

`mail` : envoyer des mails…
* `t` lire un msg
* `h` afficher la liste
* `d` supprimer le mail
* `q` quitter
* `mail -f mbox` : lire les anciens mails
* `mail username < un fichier`
# commandes diverses 
`man` : obtenir des pages de manuel

`hostname` : nom de la machine (`hostname -I` les ip des interfaces) 

`id` : infos sur un utilisateur
* `-u` son UID
* ...

`whoami` : mon nom!!!

`who am i` : mon nom + des infos

`who` : nom des utilisateurs connectes

`passwd` : changer son password

`date` : date courante 

`wc` : word count
* `-l` compte les lignes

`last` : liste des connexions 
* `nomUtilisateur` seulement celles de celui-ci

`sort` : tri alphabetique
* `-u` elimine les doublons
* `-r` reverse

`grep` : Global Regular Expressions Print - Recherche des occurences dans des lignes ou un fichier passe en param
* `-n` affiche les numeros de ligne
* `[...]` definition d'un intervale de carac
* `[!..]` complement
* `^ $` debut et fin de ligne 
Note: `grep -P "\x61"` pattern Perl, caractère hexadécimal 61, cad 'a'. `"\xa0"` est un espace insécable.

`find` : recherche sur le dur dans les rep passes en argument
* `-name` pour specifier le nom de fichier
* `-print` pour afficher
* `-type` pour leur type (f pour plain file, d pour directory…)
* `-size` pour la taille (faire un man…)
# variables du shell 
* `HOME` : le chemin d'acces du repertoire de l'utilisateur
* `?` : le code de retour de la derniere commande lancee
# jockers 
* `?`  un caractere quelconque
* `*` une chaine de caracteres, eventuellement vide
* `[`  debut de definition d'un ensemble
* `[!` debut de definition du complement
* `]`  fin de definition d'un ensemble
* `-`  marque d'intervale dans un ensemble
# entrées sorties 
* `commande < fichier` : met le fic sur l'entree std de la com
* `commande > fichier` : redirige la sortie std dans le fic 
* `commande >> fichier` : idem sans ecraser

de meme pour `2>` et `2>>` avec la sortie d'erreur standard
de meme `&>` et `&>>` avec les deux sorties d'un coup
# divers 
`set -o vi` suivi de `ESC` puis `k` et `j` pour rappeler les commandes.
