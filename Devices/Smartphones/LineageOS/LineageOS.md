Note : [Android alternatives](https://www.lemonde.fr/pixels/article/2022/11/12/un-smartphone-android-sans-google-c-est-possible-qu-en-pensent-les-utilisateurs_6149559_4408996.html) → Graphene, Lineage, Calyx, /e/ou Iodé 

**Liens**
* [Guide d'installation](https://wiki.lineageos.org/devices/X00TD/install) 
* [Installation adb et fastboot](https://wiki.lineageos.org/adb_fastboot_guide.html) 
* [Custom Recovery (TWRP)](https://twrp.me) 
# scrcpy 
To display and control an Android device from a PC.
Package `scrcpy` - [GitHub](https://github.com/Genymobile/scrcpy) 

**Features**
* Copy/Paste
* Screen Recording
* SSH tunnel
* and more...
# ZenFoneMax Pro M1 
* [Firmware](https://www.asus.com/Phone/ZenFone-Max-Pro-M1/HelpDesk_BIOS/) 
* https://twrp.me/Devices/Asus/
* https://androidfilehost.com/?w=files&flid=287501

**Remarques / REX 2019**
* après avoir installé le "custom recovery", si le redémarrage du téléphone se fait normalement, le custom recovery est réinitialisé... il faut donc impérativement intercepter le boot avec la combinaison des bouttons, sans quoi, l'installation du custom recovery est à refaire.
* lors de l'exécution du recovery, si l'interface est figée, sans possibilité de l'utiliser, il faut installer une autre version. Ainsi, TWRP 3.2.3-0 ne fonctionnait pas (alors qu'il était listé dans la doc) mais la version 3.3.1-0 fonctionnait convenablement.
* l'installation de lineageOS peut nécessiter une mise à jour du firmware. Cela peut se faire :
	* avant l'install (comment?)
	* pendant l'install, juste avant de flasher LineageOS, avec la commande "adb sideload firmware.zip"

**Remarques / REX 2021**
* https://www.asus.com/supportonly/ZenFone%20Max%20Pro(M1)(ZB602KL)/HelpDesk_Download/
* Pour mettre à jour le custom recovery, un hub usb allimenté est obligatoire.
