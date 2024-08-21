(en 2017) L'API de LinkedIn est conçue pour qu'on ne puisse pas accéder au profils des autres par navigation. L'id de profil est spécifique à une application, or c'est le point d'entrée de toute l'api… l'api de search est réservée aux partenaires, pas d'api pour récupérer la liste de ses connexions… Bref, pas de possibilité de voir autre chose que le profil d'une personne qui a donné explicitement son accord.

* https://developer.linkedin.com/docs/oauth2
* https://api.linkedin.com/v1/people/{user-id}/picture-url
* https://api.linkedin.com/v1/people/~/picture-urls::(original)
# Configuration sur le site web 
Aller sur `https://www.linkedin.com/developer/apps` et créer une application avec un callback.

Dans notre exemple, nous avons :
* clientId : 88e5uytpi6z23y
* client secret : rPlbVuuSWd3r6INh
* callback : http://localhost:4000/callback
# Obtention du code 
Forger l'url suivante en insérant
* le clientId
* le callback → http%3A%2F%2Flocalhost%3A4000%2Fcallback
* une variable aléatoire state (qui évite le CSRF)

https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=88e5uytpi6z23y&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fcallback&state=1856985478&scope=r_basicprofile

et pointer le navigateur dessus.

Avec l'URL de redirection, on récupère le code :

http://localhost:4000/callback?code=AQSQBs2Gf9qCNAT5P3RjFOGICD_icQJpm3j57eeUaFBRdT26qVbR6dugwLz3ZmStOW44Di5azThqUw4OdgLTe2Ovuv19BkPcd8ehkQpII69eKBlXiWU&state=1856985478

→ AQSQBs2Gf9qCNAT5P3RjFOGICD_icQJpm3j57eeUaFBRdT26qVbR6dugwLz3ZmStOW44Di5azThqUw4OdgLTe2Ovuv19BkPcd8ehkQpII69eKBlXiWU
# Echange du code pour un access token 
Attention : le code a un temps de vie TRES court (une seule minute, peut-être) !

https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=AQQYDxAZlp23Mr7ob7RtMHwJDOIPtEU7Ql8bH82ecMX-6_AtlK0XPCEdHFaL72uikxIGVjb311HwGOk8EwUaFc8oHcpQY49OwH_HFiC0Nrkbaq2DzGI&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fcallback&client_id=88e5uytpi6z23y&client_secret=rPlbVuuSWd3r6INh

```
{
	"access_token": "AQU2mKhRIDArqpw8lFksIcwLbSLXMFZBRA8sRUJB5LY1FqEIcP9qf2pj0j95whvx2WME9E9IRHWhHkfyy39T0W_ENkbmAuqry7HK9F9Y8Qo-alVzCMarGPSi1Dr-y14kpsJEUz-iY4IFu9utDS33z-DsZ3GohR0uIH4YOC-heRRTu-IuZ4U",
	"expires_in": 5183999
}
```
# Récupération d'infos 
Photo :

`curl -H "Authorization: Bearer AQU2mKhRIDArqpw8lFksIcwLbSLXMFZBRA8sRUJB5LY1FqEIcP9qf2pj0j95whvx2WME9E9IRHWhHkfyy39T0W_ENkbmAuqry7HK9F9Y8Qo-alVzCMarGPSi1Dr-y14kpsJEUz-iY4IFu9utDS33z-DsZ3GohR0uIH4YOC-heRRTu-IuZ4U" "https://api.linkedin.com/v1/people/~/picture-urls::(original)"`

Fields names : https://developer.linkedin.com/docs/fields/basic-profile

`curl -H "Authorization: Bearer AQU2mKhRIDArqpw8lFksIcwLbSLXMFZBRA8sRUJB5LY1FqEIcP9qf2pj0j95whvx2WME9E9IRHWhHkfyy39T0W_ENkbmAuqry7HK9F9Y8Qo-alVzCMarGPSi1Dr-y14kpsJEUz-iY4IFu9utDS33z-DsZ3GohR0uIH4YOC-heRRTu-IuZ4U" "https://api.linkedin.com/v1/people/~:(id,public-profile-url)?format=json"`
# People search 
Il faut un partenariat LinkedIn pour utiliser cette api

https://developer.linkedin.com/partner-programs

`curl -H "Authorization: Bearer AQU2mKhRIDArqpw8lFksIcwLbSLXMFZBRA8sRUJB5LY1FqEIcP9qf2pj0j95whvx2WME9E9IRHWhHkfyy39T0W_ENkbmAuqry7HK9F9Y8Qo-alVzCMarGPSi1Dr-y14kpsJEUz-iY4IFu9utDS33z-DsZ3GohR0uIH4YOC-heRRTu-IuZ4U" "https://api.linkedin.com/v1/people-search:(people:(id))?first-name=doo&last-name=john"`

access denied :-(
