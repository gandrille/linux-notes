# Token / API Key creation 
For managing API Keys... an API Key is required! 

`https://eu.api.ovh.com/createToken/?GET=/me/api/application&GET=/me/api/application/*&DELETE=/me/api/application/*`

```
AK="...."
AS="...."
CK="...."
```
# Liste des id des applications 
 [GET /me/api/application](https://api.ovh.com/console/#/me/api/application#GET) 

**Request**
```
METHOD=GET
QUERY="https://eu.api.ovh.com/1.0/me/api/application"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $AS+$CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $AK" -H "X-Ovh-Consumer: $CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```

**Response**
`[12345,67890]`
# Détail d'une application (par son id) 
 [GET /me/api/application/{id}](https://api.ovh.com/console/#/me/api/application/%7BapplicationId%7D#GET) 

**Request**
```
METHOD=GET
ID=...
QUERY="https://eu.api.ovh.com/1.0/me/api/application/$ID"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $AS+$CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $AK" -H "X-Ovh-Consumer: $CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```

**Response**
`{"applicationKey":"YY1KwXXVJXcX2U2U","applicationId":52471,"description":"...","name":"...","status":"active"}`
# Suppression d'une API Key 
```
METHOD=DELETE
ID=...
QUERY="https://eu.api.ovh.com/1.0/me/api/application/$ID"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $AS+$CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $AK" -H "X-Ovh-Consumer: $CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```
