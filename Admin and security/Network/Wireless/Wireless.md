# iwlist: connection info 
Get more detailed wireless information from a wireless interface

`iwlist wlp1s0 scan`
# Registered Wireless passwords 
`sudo grep psk= /etc/NetworkManager/system-connections/*`
# Wifi hotspot 
* Go to network connection (Edit Connections...)
* Click "Add"
* Choose "Wi-Fi" and click "Create"
	* Connection name: as you wish, like "wifi-hotspot"
	* SSID: as you wish
	* Mode: Hotspot
	* Device: the one you want (you can use `ip -c addr` to find it)
	* Cloned mac address: keep
	* Wifi Security tab: "WPA & WPA2 Personal" and set a password.
	* IPv4 Settings tab: Shared to other computers.
	* Then save and close

You're done!

FYI : `sudo gedit /etc/NetworkManager/system-connections/wifi-hotspot`

```
[connection]
id=wifi-hotspot
uuid=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
type=wifi
interface-name=wlx000f12345678
permissions

[wifi]
cloned-mac-address=preserve
mac-address=00:11:22:33:44:aa
mac-address-blacklist
mode=ap
ssid=foo

[wifi-security]
key-mgmt=wpa-psk
psk=foobarbaz

[ipv4]
dns-search
method=shared

[ipv6]
addr-gen-mode=stable-privacy
dns-search
ip6-privacy=0
method=shared
```
