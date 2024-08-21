# Using macchanger 
**Package: **`macchanger`
**Configuration:** `sudo dpkg-reconfigure macchanger`

```
# Set the mac address
sudo macchanger --mac=00:11:22:33:44:55 wlp1s0
# Randomize mac address
sudo macchanger --random wlp1s0
sudo macchanger --another wlp1s0
# Don't change the vendor bytes
sudo macchanger --ending wlp1s0
```

**Error:** `Cannot assign requested address`
Only unicast addresses can be set. The first octet has to be even 1**2**:22:33:44:55:66.

**Full script (with wireless interface wlp1s0)**
```
#!/bin/bash

fatal()     { [ -t 1 ] && tput setaf 1; echo -n "[ERROR] "; [ -t 1 ] && tput sgr0; echo "$*"; exit 1; }
highlight() { [ -t 1 ] && tput setaf 3; echo    "$*";       [ -t 1 ] && tput sgr0; return 0; }

set -euo pipefail
trap "fatal 'Non-null value returned by last executed command'" ERR

highlight "Updating mac address"
ip link set wlp1s0 down
macchanger -e wlp1s0
ip link set wlp1s0 up

highlight "Updating IP address using DHCP…"
dhclient wlp1s0
ip -brief addr
```
# Using ifconfig 
`sudo ifconfig wlp1s0 hw ether 11:22:33:44:55:66`
