**With GNOME**

* `gsettings list-keys org.gnome.desktop.peripherals.touchpad`
* `gsettings get org.gnome.desktop.peripherals.touchpad edge-scrolling-enabled`
* `gsettings set org.gnome.desktop.peripherals.touchpad edge-scrolling-enabled true`

**With synaptics**

`synclient` command from package `xserver-xorg-input-synaptics`

* `synclient`
* `synclient VertEdgeScroll=0`
