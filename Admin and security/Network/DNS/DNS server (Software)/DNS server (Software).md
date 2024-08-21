 [Wikipedia : Comparison of DNS server software](https://en.wikipedia.org/wiki/Comparison_of_DNS_server_software) 

Seveur DNS menteur... pour bloquer les publicités : https://pi-hole.net
# BIND 
* [Official website](https://www.isc.org/bind/) 
* [Wikipedia](https://fr.wikipedia.org/wiki/BIND) 

**Features**
✅ Authoritative name server
✅ Recursive name server
✅ Caching

BIND is the de facto standard DNS server on the Internet.
# Unbound 
* [Official website](https://nlnetlabs.nl/projects/unbound/about/) 
* [Wikipedia](https://en.wikipedia.org/wiki/Unbound_(DNS_server)) 

**Features**
❌ Authoritative name server
✅ Recursive name server
✅ Caching

→ Installation guide ( [source1](https://www.shaftinc.fr/arretez-google-dns.html) , [source2](https://korben.info/installer-serveur-dns-unbound.html) )
# Dnsmasq 
* [Official website](http://www.thekelleys.org.uk/dnsmasq/doc.html) 
* [Wikipedia](https://en.wikipedia.org/wiki/Dnsmasq) 

**Provides**
❌ Authoritative name server
❌ Recursive name server
✅ Caching
→ Delegates the resolution to upstream recursive DNS servers

**Note:** provides as well a DHCP server... and more...
# And also... 
* [Stubby](https://github.com/getdnsapi/stubby) 
* [DNSCrypt](https://www.dnscrypt.org/) 
* [Knot Resolver](https://www.knot-resolver.cz/) 
* [[resolvectl]]
