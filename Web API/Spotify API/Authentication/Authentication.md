# Introduction 
Start reading this page !
https://developer.spotify.com/documentation/web-api/concepts/authorization

**Takeaway**
* start creating an [app](https://developer.spotify.com/documentation/web-api/concepts/apps) 
* take time to choose your flow !
	* Do you need to access user data? User playlist, for instance. If not, go with Client credentials
	* Do you need to have a long term access? Use Authorization code (with or without PKCE)
# With Client credential flow 
==Client credentials is easy, but it does NOT allow user resources management (play, pause, playlist management,...)==
https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow

```
SPOOTIFY_CLIENT_ID="...."
SPOOTIFY_CLIENT_SECRET="...."
TOKEN=$(echo -n $SPOOTIFY_CLIENT_ID:$SPOOTIFY_CLIENT_SECRET | base64 -w 0)
curl --data "grant_type=client_credentials" -H "Authorization: Basic $TOKEN" https://accounts.spotify.com/api/token
```

Easy ☺
# Implicit Grant Flow 
Provides credentials to act on the behalf of a user... BUT there is no way to have long lived credentials.

```
SPOOTIFY_CLIENT_ID="...."
SPOOTIFY_CLIENT_SECRET="...."
SPOOTIFY_REDIRECT_URI="http%3A%2F%2Flocalhost%3A8080"

SPOOTIFY_STATE=$RANDOM$RANDOM$RANDOM$RANDOM
SPOOTIFY_SCOPES="app-remote-control%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-library-read%20user-library-modify"
```

**browse there to obtain the token:**
https://accounts.spotify.com/authorize?response_type=token&client_id=$SPOOTIFY_CLIENT_ID&scope=$SPOOTIFY_SCOPES&redirect_uri=$SPOOTIFY_REDIRECT_URI&state=$SPOOTIFY_STATE
# Authorization Code Flow 
A bit more complex that Implicit Grant Flow... but provides a refresh token to obtain new valid token upon request (great to send request during more than one hour).
https://developer.spotify.com/documentation/web-api/tutorials/code-flow
## STEP 1: let's get the code 
```
SPOOTIFY_CLIENT_ID="...."
SPOOTIFY_CLIENT_SECRET="...."
SPOOTIFY_REDIRECT_URI="http%3A%2F%2Flocalhost%3A8080"

SPOOTIFY_STATE=$RANDOM$RANDOM$RANDOM$RANDOM
SPOOTIFY_SCOPES="app-remote-control%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-library-read%20user-library-modify"
```

**browse there to obtain the code**
echo "https://accounts.spotify.com/authorize?response_type=code&client_id=$SPOOTIFY_CLIENT_ID&scope=$SPOOTIFY_SCOPES&redirect_uri=$SPOOTIFY_REDIRECT_URI&state=$SPOOTIFY_STATE"
CODE="......."
## STEP 2: exchange code to get access_token and regresh token 
```
SPOOTIFY_CLIENT_ID="...."
SPOOTIFY_CLIENT_SECRET="...."
```

```
TOKEN=$(echo -n $SPOOTIFY_CLIENT_ID:$SPOOTIFY_CLIENT_SECRET | base64 -w 0)
curl --data "grant_type=authorization_code&code=$CODE&redirect_uri=http://localhost:8080" -H "Authorization: Basic $TOKEN" https://accounts.spotify.com/api/token
```

`{"access_token":"...","token_type":"Bearer","expires_in":3600,"refresh_token":"...","scope":"..."}`
## STEP 3: Request a refreshed Access Token when the one you have is not valid anymore (or before, if needed) 
```
REFRESH_TOKEN="..."
SPOOTIFY_CLIENT_ID="...."
SPOOTIFY_CLIENT_SECRET="...."
TOKEN=$(echo -n $SPOOTIFY_CLIENT_ID:$SPOOTIFY_CLIENT_SECRET | base64 -w 0)
```

```
curl --data "grant_type=refresh_token&refresh_token=$REFRESH_TOKEN" -H "Authorization: Basic $TOKEN" https://accounts.spotify.com/api/token
```
