# OVH online config 
First, in `domain` / `DynHost` it is mandatory to create
* a DynHOST (with ip 0.0.0.0, for instance)
* a set of user / password credentials
# Local config 
Install `ddclient` package, and update the configuration.

```
cat /etc/ddclient.conf
# Custom configuration file for ddclient
protocol=dyndns2
daemon=5m
syslog=yes
use=web
server=www.ovh.com
login=foo
password=bar
mysubdomain.mydomain.com
```

**see also:** `/etc/default/ddclient`
```
run_dhclient="false"
run_ipup="false"
run_daemon="true"
daemon_interval="300"
```

see : [Ubuntu ddclient documentation](https://doc.ubuntu-fr.org/ddclient) .
