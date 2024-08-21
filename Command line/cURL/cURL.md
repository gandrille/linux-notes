**References**
* [cURL Cookbook](https://catonmat.net/cookbooks/curl) : TLDR; tips
* [Everything cURL:](https://ec.haxx.se) full documentation

See also, to convert cURL commands into any language : https://curlconverter.com/
# JSON 
This feature requires  cURL 7.82.0.
The `--json` option is the equivalent of setting

```
--data [arg]
--header "Content-Type: application/json"
--header "Accept: application/json"
```

Instead of this :
```
curl --data '{"msg": "hello"}' \
	--header "Content-Type: application/json" \
	--header "Accept: application/json" \
	https://example.com
```

Write that !
`curl --json '{"msg": "hello"}' https://example.com`
# **Auth with Cookies** 
 [source](https://www.linuxjournal.com/video/use-curl-login-websites-script) / [Youtube](https://www.youtube.com/watch?v=tCfB6BP-PN4) 

`curl -k -A 'Mozilla/5.0' -u login:pass -b /tmp/cookie -c /tmp/cookie https://domain.tld`

`curl --cookie-jar cjar --output /dev/null http://www.linuxjournal.com/user/login`

```
curl --cookie cjar --cookie-jar cjar \
	 --date 'name=USERNAME' \
	 --date 'pass=PASSWORD' \
	 --location \
	 --output ~/toto.txt \
	 http://www.linuxjournal.com/user/login

curl --cookie cjar \
	 --output ~/titi.txt \
	 http://www.linuxjournal.com/user/login
```
