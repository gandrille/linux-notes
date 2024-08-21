→ [Spec des contents](https://github.com/zxing/zxing/wiki/Barcode-Contents) 
# Génération 
## CLI qrencode 
Pour afficher le png sur la sortie std (et le convertir par exemple en base 64 avec un pipe…) utiliser `-o -` où `-` est le nom de fichier désignant stdout.

* vcard : `echo -e "BEGIN:VCARD\nVERSION:3.0\nN:Doo;John;;Dr.\nFN:John Doo\nTEL;TYPE=WORK,VOICE:(33)649808080\nEMAIL;TYPE=PREF,INTERNET:john.doo@gmail.com\nEND:VCARD" | qrencode -t utf8`
* wifi : `echo -e "WIFI:T:WPA;S:mynetwork;P:mypass;;" | qrencode -t utf8`

```
qrencode 'WIFI:T:WPA;S:mon_ssid;P:mon_password;;' -o a.png
base64 -w0 a.png
```
## GUI "qtqr" 

Package `qtqr`
 [page de développement](http://launchpad.net/qr-tools) 
# Lecture 
Dans le package `zbar-tools` : utilitaire [zbarcam](https://www.systutorials.com/docs/linux/man/1-zbarcam/) 
`qtqr` permet aussi de scanner un qrcode (from file or webcam).
