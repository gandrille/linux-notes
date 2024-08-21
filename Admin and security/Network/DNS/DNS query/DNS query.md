# High level CLI : nslookup 
```
nslookup google.com
Server:		127.0.0.53
Address:	127.0.0.53#53

Non-authoritative answer:
Name:	google.com
Address: 216.58.213.142
Name:	google.com
Address: 2a00:1450:4007:810::200e
```
# Low level CLI : dig 
 [Online dig with Google web interface](https://toolbox.googleapps.com/apps/dig/) 

Parameters
* `ANY` : all infos
* `@1.1.1.1` use a given DNS resolver instead of the default one

```
dig ANY google.com

; <<>> DiG 9.11.3-1ubuntu1.10-Ubuntu <<>> ANY google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 25037
;; flags: qr rd ra; QUERY: 1, ANSWER: 18, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;google.com.			IN	ANY

;; ANSWER SECTION:
google.com.		300	IN	AAAA	2a00:1450:4007:805::200e
google.com.		300	IN	TXT	"facebook-domain-verification=22rm551cu4k0ab0bxsw536tlds4h95"
google.com.		300	IN	TXT	"docusign=1b0a6754-49b1-4db5-8540-d2c12664b289"
google.com.		300	IN	TXT	"v=spf1 include:_spf.google.com ~all"
google.com.		300	IN	TXT	"globalsign-smime-dv=CDYX+XFHUw2wml6/Gb8+59BsH31KzUr6c1l2BPvqKX8="
google.com.		300	IN	TXT	"docusign=05958488-4752-4ef2-95eb-aa7ba8a3bd0e"
google.com.		600	IN	MX	10 aspmx.l.google.com.
google.com.		600	IN	MX	20 alt1.aspmx.l.google.com.
google.com.		600	IN	MX	30 alt2.aspmx.l.google.com.
google.com.		600	IN	MX	40 alt3.aspmx.l.google.com.
google.com.		600	IN	MX	50 alt4.aspmx.l.google.com.
google.com.		86400	IN	CAA	0 issue "pki.goog"
google.com.		60	IN	SOA	ns1.google.com. dns-admin.google.com. 279181558 900 900 1800 60
google.com.		273	IN	A	172.217.18.206
google.com.		3817	IN	NS	ns1.google.com.
google.com.		3817	IN	NS	ns3.google.com.
google.com.		3817	IN	NS	ns4.google.com.
google.com.		3817	IN	NS	ns2.google.com.

;; Query time: 113 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: Fri Nov 09 17:42:56 CET 2019
;; MSG SIZE  rcvd: 649
```

Flags
* `A` IPv4
* `AAAA` IPv6
* `PTR` recupérer le nom d'hôte depuis l'adresseIP
* `MX` serveur de mail
* `TXT` chaîne de caractères libres
* `SOA` Serveur Maitre du domaine
* `NS` serveur de noms pour la zone
