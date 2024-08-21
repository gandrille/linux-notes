# Contrôle d'accès 
Note: `htpasswd` tool is provided by `apache2-utils` package
## Fichier 
`.htaccess`
Dans le répertoire à protéger, mettre un fichier `.htaccess`, contenant par exemple :

```
AuthName "Restricted Area" 
AuthType Basic 
AuthUserFile /homepages/14/d194403428/htdocs/.htpasswd 
AuthGroupFile /dev/null 
require valid-user
```
## Créer le htpassword 
La base de mots de passes est un fichier `.htpasswd`. Celui-ci contient un ensemble de lignes telles que :

`etienne:$apr1$SehCbOSh$2VjT.jyBljdJgh5YGGldg1`

On retrouve le login et le mot de passe salé. Pour calculer le mot de passe salé, utiliser `htpasswd -n etienne`.
Attention, deux exécutions successives ne donnent pas le même résultat !
## TIP : pour calculer le path du `AuthUserFile` 
```
<?php
echo getcwd() . "\n";
?>
```

OU BIEN

```
<?php
echo realpath("path.php");
?>
```
# Redirection HTTP → HTTPS 
**References**
* https://httpd.apache.org/docs/current/rewrite/intro.html
* https://httpd.apache.org/docs/current/rewrite/flags.html

**HTTP → HTTPS**
```
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteCond %{HTTP:X-Forwarded-Proto} !https
	RewriteCond %{HTTPS} !=on
	RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [NE,L,R=301]
</IfModule>
```
