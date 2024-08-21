# Record network i/o 
`tcpdump port 8080 -w log.pcap` : saves trafic to a pcap file (the de facto standard).

`wireshark log.pcap`

**Filters**
* `ip.src == 1.2.3.4`
* `ip.dst == 5.6.7.8`
