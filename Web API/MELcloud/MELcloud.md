**Language code**
* 0 en English
* 1 bg Български
* 2 cs Čeština
* 3 da Dansk
* 4 de Deutsch
* 5 et Eesti
* 6 es Español
* 7 fr Français
* 8 hy Հայերեն
* 9 lv Latviešu
* 10 lt Lietuvių
* 11 hu Magyar
* 12 nl Nederlands
* 13 no Norsk
* 14 pl Polski
* 15 pt Português
* 16 ru Русский
* 17 fi Suomi
* 18 sv Svenska
* 19 it Italiano
* 20 uk Українська /div   
* 21 tr Türkçe
* 22 el Ελληνικά
* 23 hr Hrvatski - Srpski
* 24 ro Română
* 25 sl Slovenščina
* 26 sq Shqip

**Latest support info (no auth required)**
`curl `' [`https://app.melcloud.com/Mitsubishi.Wifi.Client/Support/List?language=7`](https://app.melcloud.com/Mitsubishi.Wifi.Client/Support/List?language=7) ``'

**GET Token** 
`curl 'https://app.melcloud.com/Mitsubishi.Wifi.Client/Login/ClientLogin' -X POST -H 'Content-Type: application/json' --data-raw '{"Email":"xxxxxxxxxxx","Password":"xxxxxxxxxxx","Language":7,"AppVersion":"1.27.6.0"}`'

**Get all devices infos**
`curl 'https://app.melcloud.com/Mitsubishi.Wifi.Client/User/ListDevices' -H 'X-MitsContextKey: BDEAE549383C43A3A1FA3A1CF30BBB`'

**Get detailed device infos**
`curl 'https://app.melcloud.com/Mitsubishi.Wifi.Client/Device/Get?id=xxxxxxx&buildingID=xxxxxxxxxx' -H 'X-MitsContextKey: BDEAE549383C43A3A1FA3A1CF30BBB`'
