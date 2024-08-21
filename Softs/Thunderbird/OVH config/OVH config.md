( [source](http://guides.ovh.com/ConfigurationEmail/) )

**Serveurs imap**

Les identifiants à utiliser pour chaque compte e-mail sont de la forme

* Utilisateur (login)     : compte@server.com (remplacez "compte" par le compte existant à utiliser)
* Mot de passe (password) : indiquez le mot de passe défini lors de la création du compte

Accès SSL (sécurisé)

* Serveur POP/IMAP : ssl0.ovh.net (port 995 au lieu de 110)
* Serveur SMTP     : ssl0.ovh.net (port 465 au lieu de 25)

Accès en clair (non sécurisé)

* Serveur POP/IMAP :  pop3.username.com ou ns0.ovh.net (port 110)
* Serveur SMTP     : smtp.username.com ou ns0.ovh.net (port 587 au lieu de 25)

**Config dossiers imap**

Dans les paramètres du serveur, bouton "Avancés…", mettre : 

* Dossier sur le serveur IMAP : INBOX (sans guillemets)
* Espace de noms personnel : "INBOX." (avec guillemets)

Pour tous les mappings de dossier, mettre :

* mettre dans ce dossier : "Corbeille sur…"
* Autre dossier "Envoyés sur…"
* Autre dossier "Archives sur…"
* Autre dossier "Brouillons sur…"
* Autre dossier "Modèle sur…"

http://forum.ovh.com/showthread.php?89381-Configuration-client-IMAP-chez-OVH-et-dossiers

**Webmail**

https://ssl0.ovh.net/
