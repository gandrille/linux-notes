https://www.freedesktop.org/wiki/Software/systemd/resolved/
https://wiki.archlinux.org/index.php/Systemd-resolved
# Introduction 
`systemd-resolved` is a system service that provides network name resolution to local applications. It implements a caching and validating DNS/DNSSEC stub resolver, as well as an LLMNR and MulticastDNS resolver and responder.

* **Service :** `systemd-resolved.service` → `man systemd-resolved.service`
* **Configuration file :** `/etc/systemd/resolved.conf` → `man resolved.conf`
* **CLI :** `resolvectl` → `man resolvectl`
# Basic commands 
**DNS resolver config and status (in order to check upstream DNS servers in use, for instance)**
`systemd-resolve --status` 

**DNS cache status**
`systemd-resolve --statistics`

**Flush DNS cache**
`systemd-resolve --flush-caches`
