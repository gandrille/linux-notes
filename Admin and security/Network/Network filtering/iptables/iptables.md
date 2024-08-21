**IMPORTANT : à partir de ** [Debian 10](https://www.debian.org/News/2019/20190706) **, nftables remplace iptables.** 

Remarque : UFW est un nouvel outil de configuration simplifié en ligne de commande de Netfilter, qui donne une alternative à l'outil iptables. UFW devrait à terme permettre une configuration automatique du pare-feu lors de l'installation de programmes en ayant besoin. 

see : [malekal tutorial](https://www.malekal.com/tutoriel-iptables/) 
# Concepts de bases 
iptables manipule… des tables. Chaque table contient des chaînes. Chaque chaîne contient des règles.

Les deux tables principales sont les suivantes :
* `filter` (table par défaut) : pour faire un pare-feu, avec les chaînes :
	* `INPUT` : pour filtrer les paquets entrants
	* `OUTPUT` : pour filtrer les paquets sortants
	* `FORWARD` : pour filtrer les paquets qui transitent entre deux interfaces réseau.
* `nat` : pour modifier des paquets, avec les chînes
	* `PREROUTING` : pour modifier les paquets à leur arrivée
	* `INPUT` : pour modifier les paquets entrants
	* `OUTPUT` : pour modifier les paquets sortants
	* `POSTROUTING` : pour modifier les paquets juste avant leur envoi
# Règles simples 
`iptables -t filter -I OUTPUT -o eth0 -d 216.58.208.195 -p tcp --dport 80 -j DROP`

**rule operation and selection**
* `-t filter` : sélectionne la table filter (qui est la table par défaut)
* `-I OUTPUT` : insert a rule at the beginning of `OUTPUT` chain
* `-D OUTPUT` : delete a rule of `OUTPUT` chain
* `-A OUTPUT` : append a rule at the end of `OUTPUT` chain

**matchers**
* `-o name` : name of an interface via which a packet is going to be sent
* `-d address` : destination  specification
* `-p protocol` : the  protocol of the rule or of the packet to check. The specified protocol can be one of `tcp`, `udp`, `icmp`, `icmpv6`,…
* `--dport 80` : tcp port number
* …

**what to do : règles pare feu**
* -j ACCEPT : let the packet through
* -j DROP : means to drop the packet on the floor. The sender is NOT notified and will timeout
* -j REJECT : le paquet est rejeté. Un paquet ICMP `destination-unreachable` est envoyé en retour à la source pour la notifier.
* …

**what to do : règles nat**
* `-j DNAT --to-destination 192.168.1.4:8080` : redirection 

**exemple: faire le mort aux pings**
`iptables -A INPUT -p icmp --icmp-type echo-request -j REJECT`
(remplacer -A par -D pour supprimer la règle précédemment ajoutée)
# Persister les règles 
Avec le package `iptables-persistent`

`sudo iptables-save > /etc/iptables/rules.v4`
