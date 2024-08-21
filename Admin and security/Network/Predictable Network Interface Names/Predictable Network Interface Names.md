**First part**
* `en` for Ethernet,
* `wl` for wireless LAN (WLAN),
* `ww` for wireless wide area network (WWAN).

**Second part**
* `oN` Onboard device with index number N. 
* `pBsS[fF][dD]` PCI device with bus number B, slot number S, function number F, and device ID D. 
* `pBsS[fF][uP]...[cC][iI]` USB device with bus number B, slot number S, function number F, port number P, configuration number C, and interface number I. 
* `sS[fF][dD]` Hot-plug device with slot number S, function number F, and device ID D. 
* `xM` Device with MAC address M. 

**sources**
* https://www.freedesktop.org/wiki/Software/systemd/PredictableNetworkInterfaceNames/
* https://docs.oracle.com/cd/E52668_01/E54669/html/ol7-nic-names.html
