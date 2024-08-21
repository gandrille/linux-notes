See
* [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) 
* [Classful network](https://en.wikipedia.org/wiki/Classful_network) 

CIDR notation is a compact representation of an IP address and its associated routing prefix. The notation is constructed from an IP address, a slash ('/') character, and a decimal number. The number is the count of leading 1 bits in the subnet mask.

**Examples**
* `/8` (Class A) → subnet mask 255.0.0.0
* `/16` (Class B) → subnet mask 255.255.0.0
* `/24` (Class C) → subnet mask 255.255.255.0

**linux package**
package ipcalc
ipcalc 10.0.24.0/21

```
$ ipcalc 10.0.24.0/21
Address:   10.0.24.0            00001010.00000000.00011 000.00000000
Netmask:   255.255.248.0 = 21   11111111.11111111.11111 000.00000000
Wildcard:  0.0.7.255            00000000.00000000.00000 111.11111111
=>
Network:   10.0.24.0/21         00001010.00000000.00011 000.00000000
HostMin:   10.0.24.1            00001010.00000000.00011 000.00000001
HostMax:   10.0.31.254          00001010.00000000.00011 111.11111110
Broadcast: 10.0.31.255          00001010.00000000.00011 111.11111111
Hosts/Net: 2046                  Class A, Private Internet
```



