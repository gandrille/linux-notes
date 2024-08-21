# Hostname or hostnames ? 
* `static` host name: the traditional hostname, which can be chosen by the user, and is stored in the `/etc/hostname` file.
* `transient` hostname: a dynamic host name maintained by the kernel. It is initialized to the static host name by default, whose value defaults to `localhost`. It can be changed by DHCP or mDNS at runtime.
* The `pretty` hostname is a free-form UTF8 host name for presentation to the user. 
# Read 
```
$ hostnamectl
   Static hostname: joepc
         Icon name: computer-laptop
           Chassis: laptop
        Machine ID: e68168c9bd5f4a80b3620222ba462d88
           Boot ID: 2aef9ea8493f48799dac7db67a2959dc
  Operating System: Ubuntu 19.10
            Kernel: Linux 5.3.0-19-generic
      Architecture: x86-64
```
# Write 
* `hostnamectl --static set-hostname "Stephen"` 
* `hostnamectl --pretty set-hostname "Stephen's notebook"` 
* `hostnamectl --transient set-hostname "notebook"` 
