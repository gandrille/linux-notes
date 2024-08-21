# Targets 
A group of units, used as a synchronization points during start-up. Some of them are runlevels equivalents for backward compatibility. Some others can be user defined.

| Runlevel | Target Units                        | Description                               |
|:---------|:------------------------------------|:------------------------------------------|
| 0        | runlevel0.target, poweroff.target   | Shut down and power off the system.       |
| 1        | runlevel1.target, rescue.target     | Set up a rescue shell.                    |
| 2        | runlevel2.target, multi-user.target | Set up a non-graphical multi-user system. |
| 3        | runlevel3.target, multi-user.target | Set up a non-graphical multi-user system. |
| 4        | runlevel4.target, multi-user.target | Set up a non-graphical multi-user system. |
| 5        | runlevel5.target, graphical.target  | Set up a graphical multi-user system.     |
| 6        | runlevel6.target, reboot.target     | Shut down and reboot the system.          |

**Other important targets**
* `network.target`
* `network-online.target`
* `sound.target`
# Unit dependency directives 
source : [man systemd.unit](https://www.freedesktop.org/software/systemd/man/systemd.unit.html) 

**HOW is the unit activated**
* Wants: services to be started when the current service is. The activation of those third parties may fail silently.
* Requires: services to be started when the current service is. Activation failure causes the current service to fail activating.
* WantedBy: to add a wants clause to another service

Example: `WantedBy=multi-user.target`

**WHEN is the unit activated**
* Before: 
* After: 
→ Before or After ssth.service do NOT imply that ssth.service has to get started!

Example : `After=network.target`
# Basic unit: a service example 
```
[Unit]
Description=My service
After=syslog.target network.target

[Service]
ExecStart=/usr/local/bin/montest.sh

[Install]
WantedBy=multi-user.target
```

**Always run the **`systemctl daemon-reload`** command after creating new unit files or modifying existing unit files. Otherwise, the **`systemctl start`** or **`systemctl enable`** commands could fail due to a mismatch between states of systemd and actual service unit files on disk.**
