# Command line 
**uname**
`coreutils` package
Print certain system information.  With no OPTION, same as -s.
* `-a, --all`: print  all  information,  in the following order, except omit `-p` and `-i` if unknown
* `-s, --kernel-name`: print the kernel name → `Linux`
* `-n, --nodename`: print the network node hostname → `myLaptop`
* `-r, --kernel-release`: print the kernel release → `4.15.0-72-generic`
* `-v, --kernel-version`: print the kernel version → `#81-Ubuntu SMP Tue Nov 26 12:20:02 UTC 2019`
* `-m, --machine`: print the machine hardware name → `x86_64`
* `-p, --processor`: print the processor type (non-portable) → `x86_64`
* `-i, --hardware-platform`: print the hardware platform (non-portable) → `x86_64`
* `-o, --operating-system`: print the operating system → `GNU/Linux`

**inxi**
 [Official website](https://smxi.org/docs/inxi.htm) 
 [GitHub](https://github.com/smxi/inxi) 
`inxi` package

* `inxi` : basic infos
* `inxi -F` : full infos
* `inxi -Fxz`

**lshw**
 [Wikipedia](https://fr.wikipedia.org/wiki/Lshw) 
`lshw` package

* `lshw`
* `lshw -short` (enough for basic info such as processor name, memory,...)
* `lshw -html > file.html`

Note : le frontend lshw-gtk n'est pas terrible...

**lscpu**
`util-linux` package
Display a lot of information about the CPU architecture

**neofetch**
`neofetch` package
Basic infos with ascii art
 [GitHub](https://github.com/dylanaraps/neofetch) 
package `neofetch`
# GUI 
**Hardinfo**
 [GitHub](https://github.com/lpereira/hardinfo) 
 [Wikipedia](https://fr.wikipedia.org/wiki/Hardinfo) 
package `hardinfo`
