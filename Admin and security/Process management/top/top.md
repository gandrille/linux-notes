* [top man page](https://manpages.ubuntu.com/manpages/precise/en/man1/top.1.html) 

**Alternatives**
* [htop](https://hisham.hm/htop/) 
* [atop](https://www.atoptool.nl/) 
* [glances](https://nicolargo.github.io/glances/) (package `glances`)
* [procs](https://github.com/dalance/procs) (written in Rust)
# Config 
**Basic config**
* `<Left>` force a screen redraw (if necessary)
* `V` forest view
* `c` toggle full command path
* `W` saves the modified configuration permanently to `~/.toprc`
* `d` update delay

**Colors**
* `z` toggle color / monochrome mode
* `Z` configure color mode 
* `B` disable/enable bold

**Column selection and sorting **
* `x` highligh sorting column
* `<`,`>` use colum on the left or right as the sort field
* `R` reverse sorting order
* `b` change highlighting of sorting column
* `f` or `F` : colum selection and sorting interface

**Summaries**
* `l` toggle load average
* `t` toggle task/cpu stats
* `m` toggle memory info

**Memory units (from  KiB to EiB)**
* `E` change scale in summary area
* `e` change scale in task area

**Process interaction**
* `k` kill
* `r` renice
# Undestanding default columns 
* `PID`: process ID (**sort key: N**)
* `USER`: User Name
* `PR`: Priority of the task
* `NI`: Nice value
* `VIRT`: total  amount  of virtual memory used by the task
* `RES`: The non-swapped physical memory a task has used 
* `SHR`: memory that could be potentially shared with other processes.
* `S`: Process Status
	* `D` uninterruptible sleep: waiting for an I/O operation to complete
	* `R` running: executing on the CPU, or on the run queue (ready to be executed)
	* `S` sleeping: waiting for an event to complete
	* `T` traced or stopped (by a job control signal such as Ctrl+Z)
	* `Z` zombie: process has finished, but is waiting that his parent has read its exit status ( [see more info](https://vitux.com/how-to-create-a-dummy-zombie-process-in-ubuntu/) ).
* `%CPU`:  CPU usage (**sort key: P**)
* `%MEM`: pourcentage de la mémoire physique totale utilisé (**sort key: M**)
* `TIME+`: total CPU time (**sort key: T**)
* `COMMAND`: 
