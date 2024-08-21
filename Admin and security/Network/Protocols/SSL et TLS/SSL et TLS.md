 [source : cet article totalement génial](https://openweb.eu.org/articles/https-de-ssl-a-tls-1-3) 

HTTPS est apparu dans Netscape Navigator en 1995. Initialement c’est le protocole SSL —Secure Sockets Layer— qui était intercalé entre TCP et HTTP.
https://www.ssi.gouv.fr/guide/recommandations-de-securite-relatives-a-tls/

Le client web propose, le serveur web dispose : La règle de base est que le client propose, il va donc faire étalage de toutes ses capacités, parfois dans un ordre préférentiel. Puis c’est le serveur qui dispose vu que c’est lui qui va retenir quels algorithmes seront utilisés en fonction de ses propres capacités.

Seuls des électrochocs comme BEAST, POODLE ou Heartbleed et certaines des révélations d’Edward Snowden ont eu pour effet d’accélérer l’adoption de technologies plus récentes. Le fait que la crypto sur le web n’évolue qu’en réaction à des incidents majeurs est plutôt inquiétant, on est loin d’une situation d’amélioration continue.
# Test de site web 
* [En ligne de commande](https://github.com/drwetter/testssl.sh) 
* [Via une interface web](https://www.ssllabs.com/ssltest/) 
* [CryptCheck d’Aeris](https://tls.imirhil.fr/) 
* [Panorama des serveurs actuels](https://www.ssllabs.com/ssl-pulse/) 
# Les versions de SSL et TLS 
## 1995 SSLv2 
Ne doit SURTOUT PAS être utilisé (cf RFC 6176 de 2011). A désactiver sur les serveurs.
## 1996 SSLv3 (RFC 6101) 
Ne doit SURTOUT PAS être utilisé (cf RFC 7568 de 2015). La seule contre-mesure à l'attaque POODLE est la désactivation de SSL au profit de TLS
## 1999 TLS 1.0 (RFC 2246) 
en sursis, planifier sa désactivation car la faiblesse de certains algo rend TRES difficile de le configurer correctement. Problème : en 2017 désactiver TLS 1.0 revient à tourner le dos à environ 5 à 10 % des navigateurs utilisés et plus particulièrement IE 8 et antérieurs sur Windows XP et IE 9 et antérieurs sur Windows Vista, les versions de Safari antérieures à la 7 sur OS X ainsi que le navigateur intégré (pas Chrome) des appareils Android antérieurs à 5.0.

* 2002 Chiffrement symétrique AES intégré dans TLS (RFC 3268). Aujourd'hui TRES utilisé.
* 2003 SNI —Server Name Indication— (RFC 3546) pour mettre plusieurs serveurs derrière la même IP. Aujourd'hui TRES utilisé.
* 2006 TLS 1.1 (RFC 4346) est une version de transition qui ne sert pratiquement à rien ;
* 2006 ECC —Elliptic Curve Cryptography— (RFC 4492) C'est l'avenir car nécessite des nombres plus petits que les algos de type RSA.
* 2008 TLS 1.2 (RFC 5246)ajoute le chiffrement authentifié AEAD —Authenticated Encryption with Associated Data— (RFC 5116) sous la forme des modes GCM et CCM. Malheureusement TLS 1.2 autorise l’usage de vieilles suites cryptographiques ce qui permet de réaliser des mélanges de modernité et d’archaïsme potentiellement dangereux. ATTENTION à la configuration ! (ordre et activation/désactivation des suites cryptographiques)
* 2008 AES-GCM (RFC 5288) GCM —Galois Counter Mode— est le premier mode de chiffrement authentifié défini et le plus utilisé de nos jours…
* 2008 HMAC SHA2, ECC et AES-GCM (RFC 5289) d'autres suites cryptoraphiques plus sûres
* 2012 AES-CCM (RFC 6655) second mode de chiffrement… que personne n'utilise puisque AES-GCM fait déjà correctement le travail
* 2014 extension ALPN —Application-Layer Protocol Negotiation— (RFC 7301) support HTTP/2 et SPDY + TLS 1.2 Cipher Suite Black List
* 2014 Encrypt then MAC (RFC 7366) non utilisé pour des raisons de timing
* 2015 TLS Fallback SCSV (RFC 7507) pour éviter des attaques man in the middle
* 2015 Extended Master Secret (RFC 7627) amélioration pour prévenir un autre type d'attaque
* 2016 Curve25519 et Curve448 (RFC 7748) courbes elliptiques NON issues du NIST (donc avec moins de suspission de faiblesses cachées)
* 2016 ChaCha20-Poly1305 (RFC 7905) algo de chiffrement créé pour être tres efficace sur les processeurs ARM. Il a très vite été déployé (il faut OpenSSL 1.1.0 ou une version récente de LibreSSL pour en disposer côté serveur).
* 2017 EdDSA —Edwards-curve Digital Signature Algorithm— (RFC 8032) courbes similaires à ECDSA mais est plus rapide et fait exclusivement usage des courbes Ed25519 et Ed448.
## 2017 TLS 1.3 
C'est l’avenir (simplicité, de vitesse et de sécurité). Contrairement à TLS 1.2 fait pour faire une transition en douceur depuis TLS 1.1, TLS 1.3 préfère retirer tout ce qui peut présenter des failles de sécurité, quitte à être moins rétro compatible.

* vitesse accrue (en accélérant la négociation en réduisant les allers-retours entre le client et le serveur) ;
* sécurité renforcée (en désactivant ou améliorant tout ce qui pouvait être abusé dans TLS 1.2 et en incluant de nouveaux algorithmes).
	- le mode CBC disparait 
	- Triple DES disparait

Le seul point sensible, a priori, est la possibilité de faire du 0 RTT mais qui ne devrait pas être activé par défaut.
