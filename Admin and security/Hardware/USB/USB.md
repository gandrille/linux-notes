Tip : [Anker](https://www.anker.com/) is a very reliable hardware manufacturer (chargers, power banks,...).
# Versions 
source: [Wikipedia](https://en.wikipedia.org/wiki/USB#Receptacle_(socket)_identification) 
![[usb.png]]
# lsusb 
`lsusb` is a utility for displaying information about USB buses in the system and the devices connected to them.
`usbutils` package

```
$ lsusb
Bus 002 Device 004: ID 413c:2107 Dell Computer Corp. 
Bus 002 Device 003: ID 046d:c05a Logitech, Inc. M90/M100 Optical Mouse
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
# Énergy 
* Charge standard
* USB Power Delivery pour une charge rapide

Pour rappel jusqu’à présent, il était possible de fournir 5V à 500 mA à un périphérique USB, soit 2,5 watts. Dans le cadre de la définition du nouveau connecteur Type-C, il est maintenant possible, grâce à la spécification Power Delivery de délivrer jusqu’à 100 watts. En effet, le Type-C introduit plusieurs profils, allant de 10 Watts à 100 Watts, comme illustré ci-dessous.
→ Pour aller au-delà d’une intensité de 1,5A ou d’une tension de 5V, il faut disposer de câbles spéciaux.
