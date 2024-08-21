In order to mitigate [CVE-2019-3462](https://security-tracker.debian.org/tracker/CVE-2019-3462) , use https inside  `/etc/apt/sources.list` thanks to `apt-transport-https` packet.
# dpkg 
**Basic usage**
* `dpkg -i|--install <deb-package.deb>`
* `dpkg -r|--remove <package-name>`
* `dpkg -P|--purge <package-name>` → even configuration files are removed

**"Advanced" usage**
* `dpkg -l|--list` → lists all installed packages
* `dpkg-query -l 'libc6*`' → list packages matching pattern
* `dpkg --info <deb-package.deb>` → gives a lot of info about a deb package

**List files of a Debian package**
* `dpkg --contents <deb-package.deb>` → with a deb file
* `dpkg --listfiles <deb-package>` → with an already installed package

**Search (filename → package)**
* `dpkg --search <filename>` → search for a filename from installed packages.

**Is a package installed?**
* `dpkg --status <package-name>` → check `$?`: 0=installed; 1=not installed
* `dpkg-query -W -f='${Package} ${Status}\n' <package-name>` show package status (installed or not)
# apt 
`apt install <deb-package.deb>` correctly resolve the dependencies!
→ Important: you have to specify a path to the debian package (even if it is `./`)
https://lists.debian.org/debian-devel-announce/2015/08/msg00006.html

* apt-get update            →  apt update
* apt-get upgrade            →  apt upgrade
* apt-get dist-upgrade       →  apt full-upgrade
* apt-get install package    →  apt install package
* apt-get remove package    →  apt remove package
* apt-get autoremove         →  apt autoremove
* apt-cache search string    →  apt search string
* apt-cache policy package   →  apt list -a package
* apt-cache show package     →  apt show package
* apt-cache showpkg package  →  apt show -a package
# Questions auto-answer 
**List already answered questions**
`debconf-get-selections` (package `debconf-utils`)

**Register an answer** 
`echo "wireshark-common wireshark-common/install-setuid boolean true" | debconf-set-selections -v`
# Using package version 
**Installed version**

* `dpkg-query --showformat='${Version}\n' --show <package-name>`
* `dpkg-query --showformat='${Package}\t${Version}\n' --show <package-name1> <package-name2>...`

**Available versions**

* `apt-cache policy <package-name>`
* `apt-cache show <package-name> | grep Version`
* `apt-cache showpkg <package-name>`

**Installation of a specific version**

`sudo apt-get install <package-name>=<package-version>`

"**holding" a package, for preventing automatic upgrades**

* `apt-mark hold <package-name>`
* `apt-mark showhold`
* `apt-mark unhold <package-name>`
# Using dependencies 
`apt-cache depends <packagename>`
# Known bugs 
```
EN: dpkg-deb: error: archive has premature member 'control.tar.xz' before 'control.tar.gz'
FR: dpkg-deb : erreur : le membre « control.tar.xz » figure prématurément avant « control.tar.gz ». Abandon.
```

→ This bug was fixed in the package version `dpkg - 1.17.5ubuntu5.8` (see LP [#1730627](https://bugs.launchpad.net/ubuntu/+source/dpkg/+bug/1730627) ).
