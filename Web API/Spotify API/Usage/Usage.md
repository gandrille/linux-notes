**In order to use the API, an access token is required. See in Authentication section how to get one.**
==IMPORTANT: access token that are available using Client credential flow do NOT allow to access user data !==
# Player statistics 
`curl` [`https://api.spotify.com/v1/me/player`](https://api.spotify.com/v1/me/player) `-H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
```
{
  "device" : {
	"id" : "....",
	"is_active" : true,
	"is_private_session" : false,
	"is_restricted" : false,
	"name" : "egandrille",
	"type" : "Computer",
	"volume_percent" : 79
  },
  "shuffle_state" : false,
  "repeat_state" : "off",
  "item" : {
	"name" : "Le bilan",
	"popularity" : 60,
	"uri" : "spotify:track:4hElE1DmCfpoFVjczvfB5U"
  },
  "is_playing" : true,
  ...
  ...
  ...
}
```
# PLAYER CONTROL 
* `curl` [`https://api.spotify.com/v1/me/player/pause`](https://api.spotify.com/v1/me/player/pause) `-X PUT -H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
* `curl` [`https://api.spotify.com/v1/me/player/play`](https://api.spotify.com/v1/me/player/play) `-X PUT -H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
* `curl` [`https://api.spotify.com/v1/me/player/volume?volume_percent=80`](https://api.spotify.com/v1/me/player/volume?volume_percent=80) `-X PUT  -H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
* `curl` [`https://api.spotify.com/v1/me/player/next`](https://api.spotify.com/v1/me/player/next) `-X POST -H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
* `curl` [`https://api.spotify.com/v1/me/player/previous`](https://api.spotify.com/v1/me/player/previous) `-X POST -H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
# User's Saved Tracks 
**Get current playing track**
`curl -s` [`https://api.spotify.com/v1/me/player`](https://api.spotify.com/v1/me/player) `-H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN" | jq '.item.id`'

**Check if a song is a prefered one**
`ID=.....`
`curl` [`https://api.spotify.com/v1/me/tracks/contains?ids=$ID`](https://api.spotify.com/v1/me/tracks/contains?ids=$ID) `-H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`

**Set as prefered one**
`curl` [`https://api.spotify.com/v1/me/tracks?ids=$ID`](https://api.spotify.com/v1/me/tracks?ids=$ID) `-X PUT -H "Authorization: Bearer $SPOOTIFY_ACCESS_TOKEN"`
