 [LA vidéo à regarder](https://www.youtube.com/watch?v=2Y8hTI912zQ) (premier quard d'heure). 
 [Article à lire](https://blog.container-solutions.com/linux-capabilities-in-practice) 
# Théorie 
## Capabilities d'un processus 
* **permitted** : privilèges qui peuvent être utilisés
* **effective** : privilèges actifs à un moment donné (qui sont donc a l'origine permitted)
* **inheritable** : un peu plus complexe que de l'héritage.
* **ambiant** : ensemble hérité au processus fils. Pour ajouter dans ambiant, il faut que ce soit dans inheritable et permitted. Le fils qui récupère l'ensemble ambiant  peut placer des éléments de ambiant dans effective. C'est bien de l'héritage à proprement parler.

→ Lors du lancement d'un processus fils, on vide permitted et effective
## Capabilities d'un fichier 
* **permitted** : privilèges qui seront transmis au processus dans son ensemble permitted
* **effective** : pour un fichier, c'est un simple bit. Quand le processus est lancé, les privilèges permitted du fichier sont copiés dans les privilèges effective du processus au démarrage du processus.
* **inheritable** : 
# Commandes 
* `grep Cap /proc/$BASHPID/status` : regarder les capabilities d'un processus (par son PID)
* `setcap` : gérer les capabilities d'un fichier
* `capsh` : inspecter les capabilities d'un processus shell ou decoder des capabilities : `capsh --decode=xxxxxxxxx`
