The `unattended-upgrades` package can be used to automatically install updated packages, and can be configured to update all packages or just install security updates. It is installed by default on Debian 9 (Stretch) and on receant Ubuntu realeases.
# What should be updated 
Configuration file : `/etc/apt/apt.conf.d/50unattended-upgrades`

The key section is the following
```
Unattended-Upgrade::Allowed-Origins {
        "${distro_id}:${distro_codename}";
	"${distro_id}:${distro_codename}-security";
	// Extended Security Maintenance; doesn't necessarily exist for
	// every release and this system may not have it installed, but if
	// available, the policy for updates is such that unattended-upgrades
	// should also install from here by default.
	"${distro_id}ESM:${distro_codename}";
	"${distro_id}:${distro_codename}-updates";
//	"${distro_id}:${distro_codename}-proposed";
//	"${distro_id}:${distro_codename}-backports";
};
```

* **Security** The security updates are holes in software that need to be patched for, obviously, security reasons.
* **Updates (Recommended Updates)**: The Recommended Updates are just software changes, but not updates that will affect the security of your system, just the apps installed and stuff like that. They tend to fix bugs and annoying problems.
* **Proposed:** The Proposed updates are updates that have to be tested before they can be officially put into the Recommended updates repository. They may have issues that could break your system, and quite often do.
* **Backports:** Backported updates are pieces of software which come from a newer major release. Thus, they can contain new features, but may also break compatibility with their older version
# Which operations sould be triggered 
**Configuration file(s)**
The usual configuration file is `/etc/apt/apt.conf.d/20auto-upgrades` BUT all the files inside /`etc/apt/apt.conf.d/` are evaluated in lexicographical order to compute the values to be used.

Key / value pairs
* `APT::Periodic::Update-Package-Lists "1";` Do "apt-get update" automatically every n-days (0=disable)
* `APT::Periodic::Unattended-Upgrade "1";` Run the "unattended-upgrade" security upgrade script every n-days (0=disabled)
* `APT::Periodic::AutocleanInterval "7";` Do "apt-get autoclean" every n-days (0=disable)
* `APT::Periodic::Download-Upgradeable-Packages "1";` Do "apt-get upgrade --download-only" every n-days (0=disable)

**Reading values**
Because the values can be configured in several files, it's preferable to use `apt-config dump APT::Periodic` in order to read the configuration.

**Writing values**
Editing the file `/etc/apt/apt.conf.d/20auto-upgrades` is a good practice. Here is an example of content:
```
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
```
# Debug 
`unattended-upgrade` can be executed on demand. It can be usefull for testing the configuration. The script accepts several options
* `--debug` extra debug output into `/var/log/unattended-upgrades/unattended-upgrades.log`
* `--dry-run` just simulate installing updates, do not actually do it

**Logs**
* `/var/log/unattended-upgrades.log`
* `/var/log/dpkg.log`

**sources**
* [Debian Wiki](https://wiki.debian.org/UnattendedUpgrades) 
* [Basic step by step guide](https://libre-software.net/ubuntu-automatic-updates/) 
* [Ubuntu server guide](https://help.ubuntu.com/lts/serverguide/automatic-updates.html) 
* [Ubuntu community guide](https://help.ubuntu.com/community/AutomaticSecurityUpdates) 
