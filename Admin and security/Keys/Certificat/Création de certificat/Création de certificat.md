https://doc.ubuntu-fr.org/tutoriel/comment_creer_un_certificat_ssl

**CertBot**
* https://certbot.eff.org/
* [tutorial](https://korben.info/securiser-facilement-gratuitement-site-https.html) 

https://mkcert.dev
A simple zero-config tool to make locally trusted development certificates with any names you'd like. 
# Certificate signing request (CSR) 
Cela va permettre de générer une clé privée, ainsi que 
* création : `openssl req -new`
	* affiche sur la sortie standard une demande de certificat encodée en base64, qui contient les informations demandées ainsi que la clé publique. 
	* créé un fichier `privkey.pem` avec la clé privée correspondante
* affichage : `openssl req -text -noout -in request.pem`
# Générer un certificat autosigné 
`openssl x509 -in request.csr -out new.cert.cert -req -signkey unlocked-privkey.key -days NNN`
