# Sources 
**Websites**
* [Official website](https://www.freedesktop.org/wiki/Software/systemd/) 
* Implementation
	* [systemd.io](https://systemd.io/) 
	* [GitHub](https://github.com/systemd/systemd) 
* [Documentation Red Hat](https://access.redhat.com/documentation/fr-fr/red_hat_enterprise_linux/7/html/system_administrators_guide/chap-managing_services_with_systemd) 

**Manpages**
* `man systemctl`
* `man systemd.unit`
* `man systemd.service`
* `man systemd.target`
* `man bootup`
# Pourquoi Systemd ? 
* "successeur" de SysVinit
* créé par RedHat
* adopté par RedHat (bien entendu !), Suse, Debian (depuis Debian 8), par Ubuntu (depuis 15.04),…
* et aussi très controversé et donc non utilisé par slackware, Gentoo, Antix.
* accélère le temps de boot, car parallélisé
* no more K and S links ;-)
* no more complex init scripts :-)
# Terminologie de base 
`Systemd` manipule des `unit`. Chaque `unit` a un type qui peut être `service`, `socket`… ainsi, la `unit` `ssh.service` a pour nom `ssh` et elle est de type `service`.
Une `unit` peut être dans l'état : `active`, `inactive`, `activating`, `deactivating`, `failed`. 
