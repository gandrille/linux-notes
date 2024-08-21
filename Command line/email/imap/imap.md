**Pour regarder le statut d'une boite mail en ligne de commande, on peut utiliser IMAP**

* Liste de commandes IMAP : `https://donsutherland.org/crib/imap`
* RFC : `https://tools.ietf.org/html/rfc3501`

**Exemple de commandes**

* `03 SELECT INBOX`
* `11 fetch 129 full`
* `12 fetch 129 ENVELOPE`
* `13 FETCH 1:* (FLAGS ENVELOPE)`
* `12 FETCH 1:* (FLAGS RFC822.HEADER)`

```
#!/bin/sh

login=me@foo.com
pass=mypassword

serverhost=imap.server.com
serverport=993

imapscript () {
  echo "01 LOGIN $login $pass"
  echo "03 STATUS INBOX (MESSAGES UNSEEN RECENT)"
  echo "04 SELECT INBOX"
  echo "05 FETCH 1:* (FLAGS RFC822.HEADER)"
  echo "06 LOGOUT"
  while sleep 1; do
    echo "05 logout"
  done
}

imapscript | openssl s_client -connect ${serverhost}:${serverport} -crlf 2> /dev/null | sed "s/\r/ /g" | grep -E "^Subject|^From|^To|^ FLAGS|^\* " | perl -CS -MEncode -ne 'print decode("MIME-Header", $_)'
```
