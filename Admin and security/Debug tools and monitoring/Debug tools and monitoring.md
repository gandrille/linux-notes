`strace`: intercepts and print every system call your prgram does. strace java -jar foo.jar (WARNING : can make your program run 50x slower

`opensnoop -p $PID`: prints every file being opened by a program 
https://github.com/iovisor/bcc : BCC - Tools for BPF-based Linux IO analysis, networking, monitoring, and more
package `bpfcc-tools`

`dstat`: prints stats every second : cpu usage, disk i/o, network i/o,...
