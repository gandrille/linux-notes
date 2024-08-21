# UPower 
 [Official Website](https://upower.freedesktop.org/) 

UPower provides an interface to enumerate power sources on the system and control system-wide power management. Any application can access the org.freedesktop.UPower service on the system message bus.

* UPower — System-wide Power Management
* upowerd — UPower Daemon
* upower — simple command line client for the UPower daemon.

**Enumerate devices**
```
$ upower --enumerate
/org/freedesktop/UPower/devices/line_power_AC
/org/freedesktop/UPower/devices/battery_BAT0
/org/freedesktop/UPower/devices/DisplayDevice
```

**Battery infos**
`$ upower --show-info $(upower --enumerate | grep battery)`
# ACPI 
The Advanced Configuration and Power Interface (ACPI) provides an open standard that operating systems can use to discover and configure computer hardware components, to perform power management by (for example) putting unused components to sleep, and to perform status monitoring. ( [source wikipedia](https://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface) )

Package: `acpi`

```
$ acpi
Battery 0: Discharging, 77%, 06:37:47 remaining
```

```
$ acpi --everything
...
```
