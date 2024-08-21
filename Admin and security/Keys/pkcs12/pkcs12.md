`openssl pkcs12 <args>`
`man pkcs12`
# Introduction 
**Format de fichier pour stocker**
* certificat
* clés privées
→ le tout protégé par mot de passe symétrique
# pkcs12 file parsing 
**Extraction du certificat**
`openssl pkcs12 -in sourcefile.pkcs12 -out certificate.pem`

**Extraction du certificat (don't encrypt the private keys at all)**
`openssl pkcs12 -in sourcefile.pkcs12 -out certificate.pem -nodes`

**Extraction de la clé privée**
`openssl pkcs12 -in sourcefile.pkcs12 -out id_rsa -nodes -nocerts`
# pkcs12 file creation 
