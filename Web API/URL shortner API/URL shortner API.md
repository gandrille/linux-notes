# rel.ink 
**Creation**
Request : `curl --header 'Content-Type: application/json' --data '{"url": "https://news.ycombinator.com/"}' https://rel.ink/api/links/`
Response: `{"hashid":"Nn8y9p","url":"https://news.ycombinator.com/","created_at":"2019-06-18T21:29:57.922801Z"}`
→ use `https://rel.ink/Nn8y9p`

**Infos**
Request: `curl https://rel.ink/api/links/Nn8y9p/`
Response: `{"hashid":"Nn8y9p","url":"https://news.ycombinator.com/","created_at":"2019-06-18T21:29:57.922801Z"}`
# Bitly 
https://dev.bitly.com/api-reference

* [GET groups](https://dev.bitly.com/api-reference#getGroups) : `GET https://api-ssl.bitly.com/v4/groups`
* [Shorten a Link](https://dev.bitly.com/api-reference#createBitlink) : `POST https://api-ssl.bitly.com/v4/shorten`
