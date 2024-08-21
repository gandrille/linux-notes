# Packages list (popularity contest) 
`popularity-contest` package

With file configuration: `/etc/popularity-contest.conf` 
* `PARTICIPATE="yes"` → packages list is sent
* `PARTICIPATE="no"` → packages list is NOT sent

Using dpkg: `sudo dpkg-reconfigure popularity-contest`

See
* [Popcorn project](https://popcon.ubuntu.com/) 
* Package: `popularity-contest`
* File: `/usr/share/popularity-contest/default.conf`
# Crash report management 
There are TWO separate jobs
* generating the crash report: this is `apport` job
* uploading the crash report: this is `whoopsie` job
→ `apport` can trigger `whoopsie` by writing a `.upload` file in `/var/crash` 
see: https://wiki.ubuntu.com/ErrorTracker
## Crash report generation 
If the crash handler is `apport` (package installed by default on Ubuntu)
Crash reports are generated in `/var/crash`

With file configuration: `/etc/default/apport`
* `enabled=1` → apport is enabled
* `enabled=0` → apport is disabled

Using service management
* `systemctl status apport.service`
* `systemctl start|stop|enable|disable apport.service`
## Crash report publication 
`whoopsie` package (previously `reporterd`)
`/etc/init/whoopsie.conf`

`systemctl status whoopsie.service` 
# System reports 
`ubuntu-report` package
