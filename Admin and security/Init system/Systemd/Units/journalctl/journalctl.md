Gère les logs, avec possibilité de logrotate.

**Les logs sont stockées en binaire**
* avantage : compressé
* inconvénient : pas de grep possible sur les fichiers binaires directement

**Configuration**
* `/etc/systemd/journald.conf`
* `man journald.conf`

**Commandes de base**
* `journalctl`
* `journalctl -b` depuis le dernier boot
* `journalctl --since=today`
* `journalctl -u ssh` uniquement pour une unit donnée
* `journalctl -f` follow (même comportement que `tail -f`)

**Purge des logs**
* `journalctl --disk-usage`
* `journalctl --vacuum-size=200M`

configuration: `/etc/systemd/journald.conf`
`SystemMaxUse=200M`
