# Packages 
Dans le passé, il fallait installer le package `smbfs`. Il a été remplacé par `cifs` et `cifs-utils`.
Sur les distributions encore plus récentes, seul subsiste le package `cifs-utils`.

```
apt-get install cifs-utils
apt-get install smbclient
```
# Basic Examples 
**Find the workgroup**
`nmblookup -A 192.168.0.20 | grep GROUP` 

**Montage local**

`mount -t cifs //192.168.0.20/toto -a username=moi /mnt/ici`
On peut aussi regarder avec profit `gvfs`, et les utilistaires `gvfs-*`.

**smbclient**

* `smbclient -U MYDOMAIN/mylogin -I server.foo.fr -L.`
* `smbclient -U MYDOMAIN/mylogin -L server.foo.fr`

Common options
* `-U MYDOMAIN/mylogin`
* `-U mylogin`
* `--no-pass`
* `-I 192.168.0.10`
* `-I server.foo.fr`
* `-L` lister les partages

**Fstab example**

`//host/my/share  /local/mount/point      cifs    rw,uid=myuser,gid=mygroup,credentials=/very/secret/file,domain=FOO,sec=ntlmssp,users,vers=2.1      0 0`

`/very/secret/file` content
```
username=me
password=mypass
```

Par le passé, j'ai aussi utilisé le flag `lfs` pour Large File Support.
# Audio Cocktail x12 (using unsafe SMB1) 
**Lister les partages**

* Lister les partages `smbclient --no-pass -L //192.168.0.15`
* Parcourir un partages `smbclient --no-pass //192.168.0.15/LocalStorages`

**Monter dans la fstab**

`//192.168.0.15/LocalStorages/usb1     /mnt/x12        cifs   rw,guest,users,uid=1000,gid=1000,iocharset=utf8,vers=1.0 0 0`

* `vers=1.0` forces using SMB1 to prevent a `"Host is down"` error message with recent samba releases.
# Time capsule (using unsafe SMB1) 
**Lister les partages**

`smbclient -U <username> -I 192.168.0.10 -L.`

En cas d'erreur : `Server does not support EXTENDED_SECURITY but 'client use spnego = yes and 'client ntlmv2 auth = yes`'

Dans `/etc/samba/smb.conf`  section `[global]` ajouter la ligne `client use spnego = no` (disables extended security) ou `client NTLMv2 auth = no`

**Monter dans la fstab**

`//192.168.0.10/Data /mnt/timecapsule cifs user=MY_USER,pass=MY_PASSWORD,domain=WORKGROUP,rw,uid=1000,gid=1000,iocharset=utf8,file_mode=0600,dir_mode=0700,sec=ntlm,vers=1.0 0 0`

* `sec` is the security mode and determines how passwords are encrypted between server and client (even if you don't require passwords).
* `vers=1.0` forces using SMB1 to prevent a `"Host is down"` error message with recent samba releases.
