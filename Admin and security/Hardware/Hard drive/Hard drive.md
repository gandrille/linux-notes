# Finding information 
`lsblk` lists information about all available or the specified block devices.
`util-linux` package

```
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0    7:0    0  89,1M  1 loop /snap/core/8213
loop1    7:1    0  89,1M  1 loop /snap/core/8268
sda      8:0    0 232,9G  0 disk 
├─sda1   8:1    0  41,9G  0 part /
├─sda2   8:2    0  93,1G  0 part /home
├─sda3   8:3    0   3,8G  0 part [SWAP]
└─sda4   8:4    0    94G  0 part /srv
sr0     11:0    1  1024M  0 rom
```

→ see also `hdparm` command
# Effacer un disque dur 
Faire ça… `sudo dd if=/dev/random of=/dev/diskX`
7 fois, selon les experts !!!
# Récupérer un disque dur 
DEFT Linux Computer Forensics live cd

Dump d'un disque dur

* `dd_rescue /dev/sda /mnt/darkstream/image.dd`

Envoyer l'image à travers le réseau sur un partage quelconque…

Démarrage du disque dans une machine virtuelle

* `liveview`
* `Sleuth kit` et `Autopsy`
* le très onéreux `EnCase® Forensic`
