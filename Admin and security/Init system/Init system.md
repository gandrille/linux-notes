# TLDR 
An init system is the first program, other than the kernel, to be run after a Linux distribution is booted.

In Unix-based computer operating systems, init (short for initialization) is the first process started during booting of the computer system. Init is a daemon process that continues running until the system is shut down. It is the direct or indirect ancestor of all other processes and automatically adopts all orphaned processes. Init is started by the kernel during the booting process; a kernel panic will occur if the kernel is unable to start it. Init is typically assigned process identifier 1. 
(source: [wikipedia](https://en.wikipedia.org/wiki/Init) )
# Main Init Systems 
**BSD**
* used by Slackware
→ le legacy system.

**SystemVinit**
* main concept : runlevels
* complex init shell scripts :-(
→ used A LOT before Systemd

**Systemd**
* main concepts: targets and units
* main executable: systemctl
* compatibility layer to use SystemVinit scripts
→ SystemVinit "successor".
# Which is my init system? 
( [source](https://unix.stackexchange.com/questions/196166/how-to-find-out-if-a-system-uses-sysv-upstart-or-systemd-initsystem) )

The init process is always assigned PID 1. The `/proc` filesystem provides a way to obtain the path to an executable given a PID.

In other words:
```
nathan@nathan-desktop:~$ sudo stat /proc/1/exe
  File: '/proc/1/exe' -> '/sbin/upstart'
```

As you can see, the init process on my Ubuntu 14.10 box is Upstart. Ubuntu 15.04 uses systemd, so running that command instead yields:
```
nathan@nathan-gnome:~$ sudo stat /proc/1/exe
  File: '/proc/1/exe' -> '/lib/systemd/systemd'
```

If the system you're on gives /sbin/init as a result, then you'll want to try statting that file:
```
nathan@nathan-gnome:~$ sudo stat /proc/1/exe
  File: '/proc/1/exe' -> '/sbin/init'
nathan@nathan-gnome:~$ stat /sbin/init
  File: ‘/sbin/init’ -> ‘/lib/systemd/systemd’
```

You can also execute it to find out more:
```
[user@centos ~]$ /sbin/init --version
init (upstart 0.6.5)
Copyright (C) 2010 Canonical Ltd.
```
