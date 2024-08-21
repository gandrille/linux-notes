 [[Key pair|Key pair creation]]
# Regarder les logs d'un serveur ssh 
`grep sshd /var/log/auth.log`
# Récupération de clé publique 
* Clé distante : `ssh-keyscan github.com`
* Clé enregistrée localement dans le known_hosts : `ssh-keygen -F srvbackup`

Note : clés publiques données à github https://github.com/username.keys
# Fingerprint 
* fingerprint d'une clé : `ssh-keygen -lf ~/.ssh/id_rsa.pub`
* fingerprints des known hosts : `ssh-keygen -lf ~/.ssh/known_hosts`
* fingerprints des authorized keys : `ssh-keygen -lf ~/.ssh/authorized_keys`
* fingerprint de son serveur local : `ssh-keyscan 127.0.0.1 | ssh-keygen -lf -`
* fingerprint de clé distantes : `ssh-keyscan github.com | ssh-keygen -lf -`
# Copier une clé publique 
`ssh-copy-id -i ~/.ssh/id_rsa.pub user@host`
# Authentification par clé publique/clé privée sur un MAC 
**Activation de ssh sur un mac**

* aller dans `préférences systèmes > partage`
* activer `Session à distance`
* noter au passage la commande ssh avec ip et nom d'utilisateur

**Identification avec clé publique/clé privée**

* dans le terminal, aller dans le dossier `.ssh` de l'utilisateur
* ajouter la clé publique dans `authorized_keys`
# SSHFS 
**Exemple**

`sshfs#username@remotehost:/path/on/remote  /path/on/local   fuse   user,exec,allow_other,reconnect,transform_symlinks,BatchMode=yes,noauto,_netdev 0 0`

**Exemple plus ancien**

`sshfs#username@remotehost:/path/on/remote  /path/on/local   fuse    comment=sshfs,user,exec,uid=36751,gid=36751,allow_other,reconnect,transform_symlinks,BatchMode=yes,noauto 0 0`

`sshfs user@host_ip:/path/in/host local/path`
# GITHUB 
* http://help.github.com/articles/generating-ssh-keys/
# Tunneling SSH 
Très bon article: https://www.howtogeek.com/168145/how-to-use-ssh-tunneling/

`ssh -t username@gateway.fr ssh otheruser@destination`
# SSH ticks 
http://serversforhackers.com/editions/2014/07/01/ssh-tricks/

`ssh -D 1917 you@remoteho.st` 

Use `-D` to create a SOCKS5 tunnel inside your SSH connection. Some programs (like a web browser) can use these.
