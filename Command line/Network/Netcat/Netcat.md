Envoyer du contenu au travers du réseau.

* côté réception : `nc -l -p 2000 > image.iso`
* côté envoi : `dd if=/dev/sda | nc <IP> 2000`

* côté réception : `nc -l -p 8080 > bigfile`
* côté envoi : `cat bigfile | nc <IP> 8080`
