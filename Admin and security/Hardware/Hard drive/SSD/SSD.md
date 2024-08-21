# How to choose an M.2 SSD card? 
https://www.dell.com/support/kbdoc/fr-fr/000144170/comment-identifier-les-diff%C3%A9rences-entre-les-cartes-m-2

* Check the size: 2280 stands for 22mm x 80mm. 2242 fits inside 2280, but the opposite is obviously false
* Check the keys. For an SSD, it is always key M (PCI Express x4 or SATA)
* Check the protocol: is your motherboard compliant with PCI Express (using NVMe protocol) or SATA (using AHCI protocol)? or both?
* Check the protocol release: is it PCIe 3.0 or 4.0?
* Check the SSD type (see below)
# SSD and periodic trim support 
Source: [Enable periodic trim support](https://www.guyrutenberg.com/2019/09/11/enable-periodic-trim-support/) 

By default, trimming is disabled in Debian Buster. If you have an SSD, you can enable periodic trimming:
`sudo systemctl enable fstrim.timer`

The alternative is continuous trimming, which is enabled by passing `discard` option to the filesystem in `/etc/fstab/`.
# SSD types 
* **SLC (Single Level Cell)** opimized for read/write
* **MLC (Multi Level Cell)** good for writing data (~10 000 cycles).
* **TLC (Triple Level Cell)** good for storing, bad for writing (~ 500 to 1000 cycles)
* **QLC (Quad Level Cell)** cheap... but only for storing data!!!

Notes: TBW stands for Terabytes Written
For instance 4TB SSD / TBW 2400 → 600 cycles

![[nand-flash.png]]
