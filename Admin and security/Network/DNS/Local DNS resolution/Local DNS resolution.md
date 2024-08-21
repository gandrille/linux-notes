https://wiki.archlinux.org/index.php/Domain_name_resolution
https://www.tldp.org/LDP/nag2/x-087-2-resolv.html

passe par `/etc/resolve.conf` 

The  resolver  configuration file  contains  information  that  is read by the resolver routines the first time they are invoked by a process

Le fichier `/etc/resolv.conf` permet de configurer les DNS.
`nameserver 122.168.10.14`
`/etc/resolv.conf` → `man resolv.conf`
# systemd-resolved.service 
See [[Systemd]] dedicated to this specific service.
