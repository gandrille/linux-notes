https://ubuntuhandbook.org/index.php/2024/02/install-onedrive-ubuntu/

# Installation 
The `onedrive` package in universe is deprecated. Please add an external repository following [Ubuntu installation.](https://software.opensuse.org/download.html?project=home:npreining:debian-ubuntu-onedrive&package=onedrive) 

**For (X)Ubuntu 24.04**
```
echo 'deb http://download.opensuse.org/repositories/home:/npreining:/debian-ubuntu-onedrive/xUbuntu_24.04/ /' | sudo tee /etc/apt/sources.list.d/home:npreining:debian-ubuntu-onedrive.list
curl -fsSL https://download.opensuse.org/repositories/home:npreining:debian-ubuntu-onedrive/xUbuntu_24.04/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_npreining_debian-ubuntu-onedrive.gpg > /dev/null
sudo apt update
sudo apt install onedrive
```

# Configuration

Create or edit `~/.config/onedrive/config`

Example
```
sync_dir = "/srv/foo/onedrive"
skip_file = "~*|.~*|*.tmp"
download_only = "true"
```
All the configartion points can be displayed using `onedrive --display-config`

# First launch
Run `onedrive` command and follow the instructions. This will authorize the cli to access a specific onedrive account.

# Run manual sync 
`onedrive --synchronize --verbose`
# Enable user service 
`systemctl --user enable onedrive`
`systemctl --user start onedrive`

`cat ~/.config/systemd/user/default.target.wants/onedrive.service`
# See also
https://www.linuxuprising.com/2020/02/how-to-keep-onedrive-in-sync-with.html#:~:text=The%20OneDrive%20Free%20Client%20fork,validation%20to%20ensure%20data%20integrity
https://github.com/abraunegg/onedrive/blob/master/docs/USAGE.md#onedrive-service-running-as-a-non-root-user-via-systemd-all-linux-distributions
