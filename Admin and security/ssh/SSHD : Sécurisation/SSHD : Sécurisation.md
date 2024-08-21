# Key infos 
* fichier de config de OpenSSH server : `/etc/ssh/sshd_config`
* fichier de config de OpenSSH client : `/etc/ssh/ssh_config`
* `man sshd_config`
* `systemctl ssh.service restart`

* `nmap --script ssh2-enum-algos -sV -p 22 127.0.0.1` 
# Diagnostique 
`ssh_scan` → outil de mozilla qui permet de vérifier la configuration d'un server. Il est très simple de l'exécuter avec un container `Docker`.
* GitHub: https://github.com/mozilla/ssh_scan
* https://mozilla.github.io/ssh_scan/

```
docker pull mozilla/ssh_scan
docker run -it mozilla/ssh_scan /app/bin/ssh_scan -t 192.168.0.10
```
# sshd_config usefull tweaks 
`/etc/ssh/sshd_config`
## Authentication 
* **Supprimer le login par password : **`PasswordAuthentication no`
* **Supprimer le login pour root : **`PermitRootLogin no`
* **Ou pour n'autoriser qu'avec une clé ssh : **`PermitRootLogin prohibit-password`
* By default, login is allowed for all users. But `AllowUsers` can allow login only for user names that match one of the patterns.
## Ciphers 
| Encryption ciphers      | Ciphers       | ssh -Q cipher |
|-------------------------|---------------|---------------|
| Key exchange algorithms | KexAlgorithms | ssh -Q kex    |
| MAC algorithms          | MACs          | ssh -Q mac    |

**Key exchange algorithms**
* **Defaults avec OpenSSH_7.5 **`KexAlgorithms curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group14-sha1`
* **Without weak algo **`KexAlgorithms diffie-hellman-group-exchange-sha256,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,curve25519-sha256,curve25519-sha256@libssh.org`

**MAC algorithms**
* **Defaults avec OpenSSH_7.5 **`MACs umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1`
* **Without weak MACs **`MACs hmac-sha2-256,hmac-sha2-512,umac-128@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com`
