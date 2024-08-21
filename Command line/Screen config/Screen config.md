# Disper 
 [Disper](http://willem.engen.nl/projects/disper/) is a high level, on-the-fly display switcher.

**Available backends**
* a basic XRandR backend, for the communication with Xorg
* an nvidia backend
* ...

**Examples**
* `disper --clone --displays=auto --resolution=1600x1200`
* `disper --extend --direction=left --displays=auto --resolution=1280x1024,1280x1024`
# Xrandr 
CLI to RandR (resize and rotate)  extension of the X11 protocol.

* `xrandr` infos about connected screens
* `xrandr | grep connected | cut -d ' ' -f 1` list display name(s)
* `xrandr --output <<display-name>> --size 4:3`
* `xrandr --output <<display-name>> --size 1366x768`
* `xrandr --output <<display-name>> --brightness 0.75` brightness between 0 and 1
