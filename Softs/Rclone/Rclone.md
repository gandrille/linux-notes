https://rclone.org/
# Basic usage 
* `rclone version`
* `rclone config file` → prints the location of the config file
# Using OVH object storage 
**Configuration file, to be downloaded from OVH GUI**

```
[BackupStorage]
type = swift
env_auth = false
auth_version = 3
auth = https://auth.cloud.ovh.net/v3
endpoint_type = public
tenant_domain = default
tenant = ...
domain = default
user = ...
key = ...
region = GRA
```

**Commands**
* https://rclone.org/swift/
* https://docs.ovh.com/fr/storage/s3/rclone/
* https://docs.ovh.com/fr/storage/sync-rclone-object-storage/

* Lister tous les buckets : `rclone lsd <profile_name>:` ==Don't forget to append ':' at the end!==
* Créer un nouveau bucket : `rclone mkdir <profile_name>:mybucket`
* Lister le contenu d’un bucket : `rclone ls <profile_name>:mybucket`
* Synchroniser /home/user/documents vers un bucket : `rclone sync /home/user/documents <profile_name>:mybucket`
* Copier un fichier /home/user/file.txt dans un bucket : `rclone copy /home/user/file.txt <profile_name>:mybucket`
* Télécharger un fichier file.txt depuis un bucket : `rclone copy <profile_name>:mybucket/file.txt fichier.txt`
