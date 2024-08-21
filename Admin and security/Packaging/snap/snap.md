* uses SquashFS for the compresed filesystem
* security managed by apparmor

In order to hide the snap folder in the filemanager
`echo snap > ~/.hidden`
# **Find snaps** 
* `snap find <search_term>`
# List installed snaps 
`snap list`
`--all` Show all revisions
# Install and remove 
**Install**
`sudo snap install <package_name>`
* `--jailmode` Put snap in enforced confinement mode
* `--classic` Put snap in classic mode and disable security confinement

**Remove snaps**
`snap remove <package_name>`
* `--revision=9999` Remove only the given revision
* `--purge` Remove the snap without saving a snapshot of its data
# Enable / disable 
* `sudo snap disable <package_name>`
* `sudo snap enable <package_name>`
# Update and manage revisions 
* `sudo snap refresh`
* `snap refresh --time`
* `sudo snap refresh <package_name>`

* `sudo snap revert package_name --revision XXXX`
# Service management 
* `snap services <package_name>` Query the status of services
* `sudo snap restart <package_name>`
* `sudo snap stop [--disable] <service_name>`
* `sudo snap start [--enable] <service_name>`
# Installation logs 
* `snap changes`
* `snap change 12`
# Authorizations 
* `snap connections chromium`
