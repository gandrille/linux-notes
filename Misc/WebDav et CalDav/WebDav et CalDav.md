# WebDAV 
## Spec 
* [WebDav](https://tools.ietf.org/html/rfc3744) 
## vdirsyncer 
* https://vdirsyncer.pimutils.org/en/stable/
* https://github.com/pimutils/vdirsyncer
## Davix 
* [Davix home page](http://dmc.web.cern.ch/projects/davix/home) 

Simple et efficace… mais il semble y avoir un souci avec les dernières versions.

`davix-get --userlogin xxxx --userpass xxxxx davs://user:pass@server.com/calendars/user/ /local/directory`
## Sitecopy 
* Package `sitecopy`
* [Home page](http://www.manyfish.co.uk/sitecopy/) 

Un peu plus puissant/complexe, sitecopy propose une synchro locale distante.

**Initialisation**
```
mkdir -m 700 ~/.sitecopy
touch ~/.sitecopyrc
chmod 600 ~/.sitecopyrc
```

**Exemple de .sitecopyrc**

```
site nomdusite
  server server.com
  protocol webdav
  http secure
  local /home/me/tmp/
  remote /remote.php/webdav/
  username toto
  password mysecret
```

→ La page de man est très bien faite.

**Initialiser le local avec le sontenu distant**
```
sitecopy --fetch nomdusite
sitecopy --synch nomdusite
```

**Debug**
ajouter `--debug=files,rcfile,http,httpbody,ftp,xml,xmlparse,httpauth`  (et éventuellement `cleartext` pour afficher les mots de passe en clair).
# CalDAV avec curl 
## Spec 
* [Spec CalDav](https://tools.ietf.org/html/rfc4791) 
* [Exemples de la doc de Sabre](http://sabre.io/dav/building-a-caldav-client/) 

Note : le getetag, présent sur chaque fichier ics sert à savoir si un fichier a été modifié. Chez infomaniak, c'est juste le md5sum du fichier ics (mais l'algo de hashage n'est pas dans la spec).
## Connaitre ce que le serveur supporte 
`curl -i -s -u "${login}:${password}" -X OPTIONS https://server.com/calendars/user/`
## Lister les calendriers 
Liste basique
`curl -s -u "${login}:${password}" -X PROPFIND https://server.com/calendars/user/`

Liste avec les display name
`curl -s -u "${login}:${password}" -X PROPFIND https://server.com/calendars/user/ -d '<d:propfind xmlns:d="DAV:"><d:prop><d:displayname /></d:prop></d:propfind>`'
## Lister les events 
`curl -s -u "${login}:${password}" -X PROPFIND -H "Depth: 1" https://server.com/calendars/user/36b01ba5-81b4-4cd9-967d-5992fa5d059b`
## Télécharger un event 
`curl -s -u "${login}:${password}" -o event.ics https://server.com/calendars/user/36b01ba5-81b4-4cd9-967d-5992fa5d059b/ff79a1b9-5fe3-4432-88a2-03aa6e2cdfb6.ics`
## Mettre à jour un événement 
`curl -s -u "${login}:${password}" -T event.ics https://server.com/calendars/user/36b01ba5-81b4-4cd9-967d-5992fa5d059b/ff79a1b9-5fe3-4432-88a2-03aa6e2cdfb6.ics`
# CLI Application 
Ces programmes utilisent un dossier local qui contient le WebDAV. Généralement, on utilise pour cela `vdirsyncer`.
* [khal](https://lostpackets.de/khal/) ( [GitHub](https://github.com/pimutils/khal) ) : CLI calendar application
* [khard](https://github.com/scheibler/khard/) : Console carddav client
# Java library 
* [Biweekly ](https://github.com/mangstadt/biweekly) : pour parser les vcf
* [Ez-vcard](https://github.com/mangstadt/ez-vcard) : pour parser les vcard
