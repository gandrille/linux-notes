# Quel type de clé 
| type       | info                 | taille de clé en 2018  | signature creation   |
|------------|----------------------|------------------------|----------------------|
| DSA        | INSECURE !!!!!!      | max 1024bits by design | DO NOT USE IT        |
| RSA        | standard de fait     | 3072 ou 4096 bits      | using random numbers |
| ECDSA      | Bien                 | 256 bits               | using random numbers |
| EdDSA      | standard de demain ? | 256 bits               | deterministic        |
| ecdsa-sk   | FIDO                 |                        |                      |
| ed25519-sk | FIDO                 |                        |                      |

* RSA repose sur la factorisation de nombre premiers. En 2017, 2048 bits n'est plus suffisant.
* ECDSA repose sur des courbes eliptiques (EC).
* En terme de "solidité" de clé, RSA 3248bits est comparable ECDSA 256 bits
* Les paramètres des courbes de EdDSA (Ed25519 est une implem de EdDSA qui utilise Twisted Edward curves) ont été choisis selon un processus ouvert (contrairement à ECDSA, poussé par le NIST). Notons qu'il est possible d'introduire des backdoors avec certaines valeurs…

→ en 2018, EdDSA (implem Ed25519) est un choix rationnel.
# Key pair creation 
**Génération de paire de clés**

* `ssh-keygen -a 100 -b 256 -t ed25519`
	* `-a 100` : ajouter des itérations pour rendre la passphrase plus résistante aux attaques brute force
	* "Ed25519 keys have a fixed length and the -b flag will be ignored" says `man ssh-keygen`
* `ssh-keygen -b 8092 -t rsa`

Note : début 2020, GitHub propose dans [son guide](https://help.github.com/articles/connecting-to-github-with-ssh/) l'utilisation de clé rsa de 4096 bits.

**Générer clé publique**

* `openssl rsa -in private-key.key -pubout`
* et pour ed25519 ?
# Fingerprint 
`ssh-keygen -lf ~/.ssh/id_rsa.pub`
`ls /etc/ssh/*.pub | xargs -n 1 ssh-keygen -lf`
# Pass phrase 
Retirer la pass phrase d'une clé privée : `openssl rsa -in privkey.pem -out unlocked-privkey.key`
