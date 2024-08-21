 [Dans les PC DELL](https://www.dell.com/support/article/us/en/19/sln308295/caract%C3%A9ristiques-des-disques-nvme-m-2-et-exigences-de-mise-%C3%A0-niveau-pour-les-syst%C3%A8mes-precision-optiplex-latitude-et-xps?lang=fr) 

**Il faut distinguer**
* les bus : [PCI](https://en.wikipedia.org/wiki/Conventional_PCI) , [AGP](https://fr.wikipedia.org/wiki/Port_AGP) , [SATA](https://fr.wikipedia.org/wiki/Serial_ATA) , [PCIe](https://en.wikipedia.org/wiki/PCI_Express) , USB,...
* le protocole de transfert de données (l'interface logique) : [AHCI](https://fr.wikipedia.org/wiki/Advanced_Host_Controller_Interface) , [NVMe](https://en.wikipedia.org/wiki/NVM_Express) ,...
* l'interface physique : [SATA](https://fr.wikipedia.org/wiki/Serial_ATA) , [SATAe](https://en.wikipedia.org/wiki/SATA_Express) , [M.2](https://en.wikipedia.org/wiki/M.2) , [U.2](https://en.wikipedia.org/wiki/U.2) ,...
# Historiquement : IDE et PCI 
**IDE**
L'interface [IDE (Parallel ATA)](https://fr.wikipedia.org/wiki/Parallel_ATA) était historiquement utilisée pour le stockage de masse. Elle utilise des nappes larges avec détrompeur, et les équipements ont des cavaliers pour régler la configuration maitre/escave,...

Côté protocole de transfert des données
* ATA : disques durs IDE 
* [ATAPI (ATA with Packet Interface extension)](https://en.wikipedia.org/wiki/ATA_Packet_Interface) :  lecteurs et graveurs de CD-ROM et DVD-ROM ainsi que par quelques lecteurs de disquettes spéciales de type ZIP par exemple. 

**PCI**
Le [bus PCI](https://en.wikipedia.org/wiki/Conventional_PCI) (qui remplace le [bus ISA](https://en.wikipedia.org/wiki/Industry_Standard_Architecture) ) est le bus d'extension générique historique. Introduit en 1992, il a été très populaire de 1995 à 2005.
# Le port AGP 
Le [port AGP](https://fr.wikipedia.org/wiki/Port_AGP) , exclusivement destiné aux cartes graphiques est introduit pour remplacer les cartes graphiques PCI (même si le [bus PCI](https://en.wikipedia.org/wiki/Conventional_PCI) continue d'être utilisé pour d'autres usages).
* lancé par Intel en 1997
* déclin à partir de 2004 au profit de [PCIe](https://en.wikipedia.org/wiki/PCI_Express) 
* quasi disparition en 2009-2010
# de IDE vers SATA 
==→ regarder également== [Serial Attached SCSI (SAS)](https://fr.wikipedia.org/wiki/Serial_Attached_SCSI) 

Le port [SATA](https://fr.wikipedia.org/wiki/Serial_ATA) se diffuse à partir de 2003 en remplacement de l' [IDE](https://fr.wikipedia.org/wiki/Parallel_ATA) . [SATA](https://fr.wikipedia.org/wiki/Serial_ATA) est optimisé pour les disques durs mécaniques à plateaux.

**Protocoles de transfert**
* IDE (legacy)
* [AHCI](https://fr.wikipedia.org/wiki/Advanced_Host_Controller_Interface) à privilégier

**Versions**
* SATA 1 - 1.5 Gbit/s
* SATA 2 - 3 Gbit/s
* SATA 3 - 6 Gbit/s

**Interfaces physiques**
* [eSATA](https://fr.wikipedia.org/wiki/Serial_ATA#eSATA) : external SATA
* [eSATAp](https://en.wikipedia.org/wiki/ESATAp) : avec power
* [mSATA](https://en.wikipedia.org/wiki/Serial_ATA#Mini-SATA_(mSATA)) : Mini-SATA data storage for netbooks and laptops → remplacé depuis 2015 par [M.2](https://en.wikipedia.org/wiki/M.2) , plus polyvalent.
# PCIe : vers le nouveau couteau suisse? 
**Le bus PCI Express (PCIe)**
* v1 publiée en 2003
* initialement pour remplacer le [port AGP](https://fr.wikipedia.org/wiki/Port_AGP) et le [bus PCI](https://en.wikipedia.org/wiki/Conventional_PCI) → devenu le standard des cartes graphiques depuis 2010 (à la place du [port AGP](https://fr.wikipedia.org/wiki/Port_AGP) )
* depuis la v3 qui propose plusieurs voies, le PCIe vient remplacer SATA pour le stockage de masse
* Most laptop computers built after 2005 use [PCI Express](https://en.wikipedia.org/wiki/PCI_Express) for expansion cards

**Protocole de transfert de données**
* [AHCI](https://fr.wikipedia.org/wiki/Advanced_Host_Controller_Interface) pour la partie legacy 
* [NVM Express (NVMe)](https://en.wikipedia.org/wiki/NVM_Express) : spécification d'interface permettant à un ordinateur d'accéder à un périphérique de stockage permanent à travers un bus PCI Express. Cette interface à tout son sens avec des disques SSD car:
	* la bande passante passante des SSD dépasse ce que peut offrir un port SATA
	* SATA est optimisé pour des disques mécaniques ; au contraire, NVMe peut demander des lectures et écritures à chaque "bout" de l'espace d'adressage de manière concurrente.

**Interface physique**
* Interface standard : les connecteurs existent en version ×1, ×2, ×4, ×8, ×16 et ×32 selon leur nombre de lignes (voir [tableau récapitulatif](https://fr.wikipedia.org/wiki/PCI_Express#Tableau_r%C3%A9capitulatif) pour la bande passante)
* [PCI Express Mini Card](https://en.wikipedia.org/wiki/PCI_Express#PCI_Express_Mini_Card) : diffusées depuis 2005 pour les portables (carte bluetooth, wifi,...). Remplacées depuis 2015 par [M.2](https://en.wikipedia.org/wiki/M.2) .
# Connecteurs multi-bus 
## SATA Express connector 
 [SATA Express](https://en.wikipedia.org/wiki/SATA_Express) 

**Buses**
* Serial ATA (SATA)
* 2 x PCI Express (PCIe)

**Notes**
* initially standardized in the SATA 3.2 specification
* peu de devices ?
## M.2 connector 
 [M.2](https://en.wikipedia.org/wiki/M.2) remplaces [mSATA](https://en.wikipedia.org/wiki/Serial_ATA#Mini-SATA_(mSATA)) et [PCI Express Mini Card](https://en.wikipedia.org/wiki/PCI_Express#PCI_Express_Mini_Card) .
### Form factor 
**Card size**
* widths of 12, 16, 22 and 30 mm
* lengths of 16, 26, 30, 38, 42, 60, 80 and 110 mm
→ 2280 denotes a module 22 mm wide and 80 mm long

**Key (other may come later....)**
* Key A : 2x PCI Express x1, USB 2.0, I2C or Display Port x4 
* Key B : PCI Express x2, S-ATA, USB 2.0/3.0 (with HSIC/SSIC), I2C or Audio
* Key E : 2x PCI Express x1,USB 2.0, SDIO, UART and PCM
* Key M : PCI Express x4 or S-ATA
## U.2 connector 
 [U.2](https://en.wikipedia.org/wiki/U.2) 

**Buses**
* 4xPCIe
* 2xSATA
# Note : stockage "de masse" pour les tablettes et équipements grand public 
* [eMMC](https://en.wikipedia.org/wiki/MultiMediaCard#eMMC) : chip de mémoire flash soudé sur la carte mère.
* [UFS](https://en.wikipedia.org/wiki/Universal_Flash_Storage) : UFS is positioned as a replacement for eMMCs and SD cards.
