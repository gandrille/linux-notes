* [OVH Telecom manager](https://www.ovhtelecom.fr/manager/) 
* [sms Java API](https://docs.ovh.com/fr/sms/envoyer_des_sms_avec_lapi_ovh_en_java/) 
# Token / API Key creation 
`https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs&POST=/sms/*/jobs`

```
AK="...."
AS="...."
CK="...."
```
# API first call 
**Request**
```
METHOD=GET
QUERY="https://eu.api.ovh.com/1.0/sms/"
BODY=""
TSTAMP=$(date +%s)

SHA=$(echo -n $AS+$CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $AK" -H "X-Ovh-Consumer: $CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```

**Response**
`["sms-ge12345-1"]`
# Sending an SMS 
**Request**
```
METHOD=POST
QUERY="https://eu.api.ovh.com/1.0/sms/sms-ge12345-1/jobs"
BODY="{\"receivers\":[\"+33649805431\"],\"message\":\"Test SMS OVH\",\"priority\":\"high\",\"senderForResponse\":true, \"sender\": \"+33649805431\", \"noStopClause\":true}"
TSTAMP=$(date +%s)

SHA=$(echo -n $AS+$CK+$METHOD+$QUERY+$BODY+$TSTAMP | shasum | cut -d ' ' -f 1)
SIGNATURE="\$1\$$SHA"

curl --data "$BODY" -X $METHOD -H "Content-type: application/json" -H "X-Ovh-Application: $AK" -H "X-Ovh-Consumer: $CK" -H "X-Ovh-Signature: $SIGNATURE" -H "X-Ovh-Timestamp: $TSTAMP" $QUERY
```
