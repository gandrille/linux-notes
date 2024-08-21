2017 [Secure SSH using two-factor authentication on Ubuntu 16.04](https://www.rosehosting.com/blog/secure-your-ssh-using-two-factor-authentication-on-ubuntu-16-04/) 
2020 [OpenSSH updates with U2F Support](https://wiki.ubuntu.com/FocalFossa/ReleaseNotes#OpenSSH_updates_with_U2F_Support) 
2020 [OpenSSH 8.2 Released With FIDO/U2F Hardware Authentication](https://hackersonlineclub.com/openssh-8-2-released-with-fido-u2f-hardware-authentication/) 
# Configuration du compte utilisateur 
```
sudo apt-get install libpam-google-authenticator
google-authenticator
```
# Configuration de sshd 
* dans le fichier `/etc/pam.d/sshd`
* ajouter la ligne `auth required pam_google_authenticator.so`

* dans le fichier `/etc/ssh/sshd_config`
* mettre `ChallengeResponseAuthentication yes`

Relancer ssh : `sudo /etc/init.d/ssh restart`

**IMPORTANT !!!!** Pour le premier essai de connexion, lancer une **nouvelle** connexion ssh en gardant la connexion ssh courante active pour récupérer la situation si le login est impossible ☺
# Créer un QR code 
`echo "otpauth://totp/monDisplayName?secret=mySecret" | qrencode -t utf8 -l` 

Voir le format complet de l'URL dans la documentation de Google : https://github.com/google/google-authenticator/wiki/Key-Uri-Format

**ATTENTION** le scan des QR code de Free OTP n'accepte pas tous les paramètres.
# Clients OTP 
* app : `FreeOTP`, l'app de RedHat
* app : `andOTP`, une nouvelle application plus jolie…
* app : `Sophos Authenticator`
* app : `google authenticator`
* `oathtool --totp --base32 MA_CLE` (du package `oathtool)`
# Achat de tokens time based et event based 
* http://www.dongleauth.com/dongles/
* http://www.dongleauth.com/

**Faire attention**

* au nombre de chiffres de l'afficheur (6 ou 8)
* event based ou time based
* si time based, 30 secondes (le défaut) ou 60 secondes entre deux codes

**Format token**

https://www.microcosm.com/pdf/products/oath-otp-authentication-tokens?target=tokens
* OTP c100 : event based
* OTP c200 : time based

**Format carte de crédit**

OTP Cards VC-N200L - Mini und Standard

**Exemples de sites d'achat de tokens**

* http://www.usbtoken.ro/shop_en/otp-tokens-server-authentication/c200-otptoken
* https://www.microcosm.co.uk/order/product.php?ProductID=346
* https://www.proteccionsoftware.es/otp-authentication-token/one-time-password-authentication-token-c200.html

# TOTP algo in Python
* https://hendrik-erz.de/post/understanding-totp-two-factor-authentication-eli5
