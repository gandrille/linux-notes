# CLI 
**With an existing filesystem**
1. Insert USB drive and type `df -h` in order to find the partition file system.
2. unmount the filesystem, for instance : `sudo umount /dev/sdb23` (23, in order to avoid a bad copy paste)
3. (re)create the file system : `sudo mkfs.vfat /dev/sdb23`

**From scratch**
 [How to format and mount a USB drive on Raspberry Pi?](https://raspberrytips.com/format-mount-usb-drive/) 
# GUI 
`gnome-disks` (`gnome-disk-utility` package)
