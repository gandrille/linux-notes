**Low level configuration tools**
* [net-tools executables](https://packages.ubuntu.com/focal/amd64/net-tools/filelist) : `/bin/netstat`, `/sbin/ifconfig`, `/sbin/ipmaddr`, `/sbin/iptunnel`, `/sbin/mii-tool`, `/sbin/nameif`, `/sbin/plipconfig`, `/sbin/rarp`, `/sbin/route`, `/sbin/slattach`, `/usr/sbin/arp`
* [iproute2 executables](https://packages.ubuntu.com/focal/amd64/iproute2/filelist) : `/bin/ip`, `/bin/ss`, `/sbin/bridge`, `/sbin/devlink`, `/sbin/ip`, `/sbin/rtacct`, `/sbin/rtmon`, `/sbin/tc`, `/sbin/tipc`, `/usr/bin/ctstat`, `/usr/bin/lnstat`, `/usr/bin/nstat`, `/usr/bin/rdma`, `/usr/bin/routef`, `/usr/bin/routel`, `/usr/bin/rtstat`, `/usr/sbin/arpd`, `/usr/sbin/genl`

|                                       | net-tools | iproute2                   |
|:--------------------------------------|:----------|:---------------------------|
| 1. Address and link configuration     | ifconfig  | ip addr, ip link, ip -s    |
| 2. Routing tables                     | route     | ip route                   |
| 3. Neighbors                          | arp       | ip neigh                   |
| 4. Tunnels                            | iptunnel  | ip tunnel                  |
| 5. Rename network interfaces          | nameif    | ifrename, ip link set name |
| 6. Multicast                          | ipmaddr   | ip maddr                   |
| 7. Show various networking statistics | netstat   | ip -s, ss, ip route        |

**list**
* net-tools : `ifconfig`
* iproute2 : `ip -c addr` (a lot of parameters are available such as `-c` for color, `-4` for ipv4 only,…)

**assign an ip to an interface**
* net-tools : `ifconfig eno1 192.168.1.10 netmask 255.255.255.0`
* iproute2 : `ip addr add 192.168.1.10/24 dev eno1`

**turn on an interface**
* net-tools : `ifup eno1`
* iproute2 : `ip link set eno1 up`

**turn off an interface**
* net-tools : `ifdown eno1`
* iproute2 : `ip link set eno1 down`

**register a proxy gateway**
* iproute2 : `ip route add default via 192.168.1.254`
* iproute2 (to be double checked): `route add default gw 192.168.1.254 eth0`

**open ports / sockets statistics**
* net-tools : `netstat -nap`
* iproute2 : `ss -tulpn`
	* `-t`, `--tcp`: To see all TCP sockets
	* `-u`, `--udp`: To see all UDP sockets
	* `-l`, `--listening`: To see all listening sockets
	* `-p`, `--processes`: To see which processes are using sockets
	* `-n`, `--numeric`: Use this option if you want to see a port number instead of service names
