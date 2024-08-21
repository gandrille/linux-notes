# Token / API Key creation 
`https://eu.api.ovh.com/createToken/?GET=/email/domain/*/redirection&GET=/email/domain/*/redirection/*&POST=/email/domain/*/redirection&DELETE=/email/domain/*/redirection/*`

```
AK="...."
AS="...."
CK="...."
```
# Liste des id des redirections 
 [GET  /email/domain/{domain}/redirection](https://api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#GET) 

**Request**
```
METHOD=GET
QUERY="https://eu.api.ovh.com/1.0/email/domain/gandrille.com/redirection"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $OVH_EMAIL_AS+$OVH_EMAIL_CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $OVH_EMAIL_AK" -H "X-Ovh-Consumer: $OVH_EMAIL_CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```

**Response**
`[12345,67890]`
# Détail d'une redirection (par son id) 
 [GET  /email/domain/{domain}/redirection/{id}](https://api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#GET) 

**Request**
```
METHOD=GET
ID=...
QUERY="https://eu.api.ovh.com/1.0/email/domain/gandrille.com/redirection/$ID"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $OVH_EMAIL_AS+$OVH_EMAIL_CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $OVH_EMAIL_AK" -H "X-Ovh-Consumer: $OVH_EMAIL_CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```

**Response**
`{"id":"...","from":"...","to":"..."}`
# Création d'une redirection 
 [POST /email/domain/{domain}/redirection](https://api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#POST) 

**Request**
`METHOD=POST`
`QUERY="https://eu.api.ovh.com/1.0/email/domain/gandrille.com/redirection"`
`FROM="...@gandrille.com"`
`TO="...@..."`
`LOCALCOPY="false"`
`BODY="{\"from\": \"$FROM\", \"localCopy\": $LOCALCOPY, \"to\": \"$TO\"}"`
`TSTAMP=$(date +%s)`

`SHA=$(echo -n "$OVH_EMAIL_AS+$OVH_EMAIL_CK+$METHOD+$QUERY+$BODY+$TSTAMP" | shasum | cut -d ' ' -f 1)`
`SIGNATURE="\$1\$$SHA"`

`curl -X $METHOD --data "$BODY" -H "Content-type: application/json" -H "X-Ovh-Application: $OVH_EMAIL_AK" -H "X-Ovh-Consumer: $OVH_EMAIL_CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY`

**Response**
`{"type":"forward","account":"...","domain":"gandrille.com","action":"add","id":...,"date":"..."}`
# Suppression d'une redirection 
**Request**
```
METHOD=DELETE
ID=...
QUERY="https://eu.api.ovh.com/1.0/email/domain/gandrille.com/redirection/$ID"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $OVH_EMAIL_AS+$OVH_EMAIL_CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $OVH_EMAIL_AK" -H "X-Ovh-Consumer: $OVH_EMAIL_CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```
