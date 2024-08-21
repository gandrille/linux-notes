==→ To troubleshoot, you MUST know which daemon is in use ! (use systemctl status daemon-name)==
# Daemons 
**[LEGACY] networking.service**
* package: `ifupdown`
* main config. directory: `/etc/network/interfaces`
* commands : `/sbin/ifdown`, `/sbin/ifup`

**[ACTUAL] network-manager.service**
* package: `network-manager`
* main config. directory : `/etc/NetworkManager/system-connections`
* commands : `/usr/bin/nmcli`, `/usr/bin/nmtui` (text user interface)
→ see also `network-manager-gnome` package for gnome integration.

**[NOT YET USED?] systemd-networkd.service**
* package : `systemd`
* main config. directory : `/etc/systemd/network/`
* commands : `networkctl`
# networking.service configuration 
Static ip configuration, stored inside `/etc/network/interfaces`
Here is an example with a static IP address
```
iface eth0 inet static
address 10.255.5.100
network 10.255.5.0
gateway 10.255.5.254
netmask 255.255.255.0
```
# network-manager.service configuration 
**Connection profiles**
 [NetworkManager connection profiles](https://developer.gnome.org/NetworkManager/1.14/nm-settings.html) are stored in `/etc/NetworkManager/system-connections/` folder.
They must be kept private, thats why each file must
* have permissions set with 600
* be owned by `root:root`
→ To list Wifi passwords : `sudo grep psk= /etc/NetworkManager/system-connections/*`

**Common keys in config files**
* `id`: A human readable unique identifier for the connection, like "Work Wi-Fi" or "T-Mobile 3G".
* `uuid`: A universally unique identifier for the connection, for example generated with libuuid.
* `interface-name`: The name of the network interface this connection is bound to.
* `mac-address`: If specified, this connection will only apply to the Ethernet device whose permanent MAC address matches.

**Here is an example with a static IP address**
```
[connection]
id=enp9s0
uuid=464873c8-def9-4255-993e-e88338dde7b3
type=ethernet
autoconnect=true
interface-name=enp9s0
permissions
timestamp=1537363963

[ethernet]
mac-address=18:66:DA:25:70:A7
mac-address-blacklist

[ipv4]
address1=10.255.5.200/24,10.255.5.254
dns=13.16.122.2;13.16.17.100;
dns-priority=100
dns-search
method=manual

[ipv6]
addr-gen-mode=stable-privacy
dns-priority=100
dns-search
ip6-privacy=0
method=link-local
```
# systemd-networkd.service configuration 
* [the systemd-networkd daemon](https://www.freedesktop.org/software/systemd/man/systemd-networkd.html#) 
* [network files](https://www.freedesktop.org/software/systemd/man/systemd.network.html) stored into `/etc/systemd/network/`

`networkctl` est la commande qui permet d'interagir avec le démon.ex : `networkctl status` donne le statut de systemd-networkd
