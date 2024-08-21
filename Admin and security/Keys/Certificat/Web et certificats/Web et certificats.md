# Récupérer un certificat sur un site web 
* `echo -n | openssl s_client -connect mywebsite.com:443`
* `echo -n | openssl s_client -connect mywebsite.com:443 2>/dev/null | openssl x509 -in /dev/stdin`

 [Liste des certificats des sites web](https://www.grc.com/fingerprints.htm) 
# Tester une config ssl 
* [ssltest](https://www.ssllabs.com/ssltest/) : web 
* [ssl scan](https://github.com/rbsec/sslscan) : script
* [calomel ssl validation](https://addons.mozilla.org/fr/firefox/addon/calomel-ssl-validation/?src=ss) : plugin firefox 
