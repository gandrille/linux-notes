There are 2 types of VPN solutions: OpenVPN and PPTP VPN. 

OpenVPN is not compatible with VPN clients that use the
IPsec over L2TP
PPTP protocols.

Les protocoles de niveau 2 comme Pptp et L2tp.
Les protocoles de niveau 3 comme Ipsec ou Mpls

SSL (Secure Sockets Layer) est un protocole de couche 4 (niveau transport)
# OpenVPN 
OpenVPN Connect is a free VPN Client.

**Network manager GNOME client**
`apt install network-manager-openvpn-gnome network-manager-openvpn`

sudo /etc/init.d/networking restart

* 2014 [Installer OpenVPN (Korben)](https://korben.info/installer-openvpn.html) 
* [Installing OpenVPN Access Server on a Linux system](https://openvpn.net/vpn-server-resources/installing-openvpn-access-server-on-a-linux-system/) 
* [What is OpenVPN Access Server?](https://openvpn.net/faq/what-is-openvpn-access-server/) 
* [Finishing Configuration of Access Server](https://openvpn.net/vpn-server-resources/finishing-configuration-of-access-server/) 
# Wireguard 
**Installation**
* 2020 [Comment installer le VPN Wireguard facilement ? (Korben)](https://korben.info/comment-installer-le-vpn-wireguard-facilement.html) 
* https://www.wireguard.com/install/

**WireGuard VPN server GUI**
* A simple WireGuard VPN server GUI: [Subspace](https://portal.cloud/app/subspace) - [GitHub](https://github.com/subspacecloud/subspace) 
* Simple Web based configuration generator for WireGuard: [Wg Gen Web](https://github.com/vx3r/wg-gen-web) 
