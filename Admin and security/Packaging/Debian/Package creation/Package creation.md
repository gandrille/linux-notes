Here are some info for building a Debian package.
Thoses notes are **NOT** in line with the best practices promoted by Debian since a package should be constructed from the sources. To that purpose, `dpkg-buildpackage` is the command to be used.

**References**
* [Debian Policy Manual](https://www.debian.org/doc/debian-policy/) 
* [Basics of the Debian package management system](https://www.debian.org/doc/manuals/debian-faq/ch-pkg_basics.en.html) 
* [Debian New Maintainers' Guide](https://www.debian.org/doc/devel-manuals#maint-guide) 
# Package sources 
## Directories layout (example) 
```
ProgramName-Version/
ProgramName-Version/DEBIAN
ProgramName-Version/DEBIAN/control
ProgramName-Version/DEBIAN/copyright
ProgramName-Version/DEBIAN/changelog
ProgramName-Version/DEBIAN/postinst
ProgramName-Version/DEBIAN/postrm
ProgramName-Version/DEBIAN/preinst
ProgramName-Version/DEBIAN/prerm
ProgramName-Version/usr/
ProgramName-Version/usr/bin/
ProgramName-Version/usr/bin/your_script
```
## Control file 
* [What is a Debian control file?](https://www.debian.org/doc/manuals/debian-faq/ch-pkg_basics.en.html#s-controlfile) 
* [Control files and their fields, in Debian Policy Manual](https://www.debian.org/doc/debian-policy/ch-controlfields.html) 

**Example**

```
Package: hello
Version: 2.9-2+deb8u1
Architecture: amd64
Maintainer: Santiago Vila <sanvila@debian.org>
Installed-Size: 145
Depends: libc6 (>= 2.14)
Conflicts: hello-traditional
Breaks: hello-debhelper (<< 2.9)
Replaces: hello-debhelper (<< 2.9), hello-traditional
Section: devel
Priority: optional
Homepage: http://www.gnu.org/software/hello/
Description: example package based on GNU hello
 The GNU hello program produces a familiar, friendly greeting.  It
 allows non-programmers to use a classic computer science tool which 
 would otherwise be unavailable to them.
 .
 Seriously, though: this is an example of how to do a Debian package.
 It is the Debian version of the GNU Project's `hello world' program
 (which is itself an example for the GNU Project).
```

* **Package:** the name of the binary package.
* **Version:** best practice is `<major version>.<minor version>-<package revision>`
* **Architecture:**
	* `all` → same content on all architectures
	* `any` → It is needed to compile the sources for each architecture
	* `amd64`, `i386`… → only for a specific architecture
	* `source` → source package.
* **Installed-Size:** as an integer, in kilo-bytes. Used to ensure there is enough space left on the disk.
* **Section:** `section/category`, but it's possible to provide only the `category` if section is `main`
	* Section
		* `main`: the free software
		* `non-free`: the not really free software
		* `contrib`: free software that depends on non-free software
	* Category
		* `admin` for administrator-only programs
		* `devel` for programmer tools
		* `doc` for documentation
		* `libs` for libraries
		* …
* **Priority:** usualy, it is `optional`.
## Advanced packages dependencies 
**Virtual packages dependencies** 

`Depends: openjdk-8-jre-headless | java7-runtime-headless | java8-runtime-headless`

In this example, we want to have a Java7 or Java8 runtime, and we provide a default (`openjdk-8-jre-headless)` in case we need to install a Java runtime.

* According to the [Debian Policy Manual](https://www.debian.org/doc/debian-policy/ch-relationships.html#virtual-packages-provides) : "To specify which of a set of real packages should be the default to satisfy a particular dependency on a virtual package, list the real package as an alternative before the virtual one."
* According to [The Debian Administrator's Handbook](https://debian-handbook.info/browse/stable/sect.package-meta-information.html) : "Virtual packages used to suffer from some limitations, the most significant of which was the absence of a version number". The problem is that this feature is not (yet?) heavily used. That's why it's preferable listing the different virtual packages, instead of using a range operator.

**Usage of the tilde symbol (~)**

According to the [Debian Policy Manual](https://www.debian.org/doc/debian-policy/ch-controlfields.html#id22) : "One common use of ~ is for upstream pre-releases. For example, 1.0~beta1~svn1245 sorts earlier than 1.0~beta1, which sorts earlier than 1.0."

The `dpkg` command can be used for trouble shooting:
* `dpkg --compare-versions '1.0~beta1~svn1245' '>=' '1.0~beta1'; echo $?`
* `dpkg --compare-versions '1.0~beta1' '>=' '1.0'; echo $?`

The tilde symbol can be used at the end of the string:
* `dpkg --compare-versions '1.0~beta1~svn1245' '>=' '1.0~'; echo $?`
* `dpkg --compare-versions '1.0~beta1~svn1245' '>=' '1.0'; echo $?`
## Copyright file 
This file has to be both machine and human readable… so its syntax is very strict.
See : [Machine-readable debian/copyright file](https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/) 
## Changelog file 
This file has to be both machine and human readable… so its syntax is very strict.
See : [Debian changelog, in the Debian Policy Manual](https://www.debian.org/doc/debian-policy/ch-source.html#s-dpkgchangelog) 

Thats' why the `devscripts` packet provides the `dch` tool to manipulate the changelog file.

`dch --create`
`dch --increment`
## {pre,post}{inst,rm} 
preinst, postinst, prerm and postrm are called package maintainer scripts.

* [Package maintainer scripts and installation procedure, in the Debian Policy Manual](https://www.debian.org/doc/debian-policy/ch-maintainerscripts.html) 
* [Maintainer script flowcharts, in the Debian Poicy Manual](https://www.debian.org/doc/debian-policy/ap-flowcharts.html) 

|                                                 <| preinst                | postinst                 | prerm                   | postrm                                 |
|:-------------------------------------------------|:-----------------------|:-------------------------|:------------------------|:---------------------------------------|
| 1 Installation of foo (not installed)            | install                | configure                |                         | abort-install                          |
| 2 Installation of foo 1.2-4 (Config-Files 1.2-3) | install                | configure                |                         | abort-install                          |
| 3 Upgrade of foo 1.2-3 to 1.2-4                  | upgrade, abort-upgrade | abort-upgrade, configure | upgrade, failed-upgrade | abort-upgrade, upgrade, failed-upgrade |
| 4 Removal of foo (installed)                     |                        | abort-remove             | remove                  | remove                                 |
| 5 Purge of foo (conf files)                      |                        |                          |                         | purge                                  |
| 6 Removal+purge of foo (installed)               |                        | abort-remove             | remove                  | remove, purge                          |
# Building the package 
## Understanding the choices 
**dpkg-deb**
This is the very basic command for compiling. The one we are going to use
`dpkg-deb --build helloworld_1.0-1`

**Using a debian/rules file**
This is the modern way of doing things. 
The debian/rules file acts as a Makefile for building the packet, using the `debhelper` tools under the hood.
The key command is `dh` (introduced in 2008), which orchestrates the usage of all the `debhelper` tools.
Before 2008, `CDBS` (Common Debian Build System, introduced in 2005) was the only approach to create a simple and clean debian/rules file. For new projects, **CDBS** should not be used.

**Using dpkg-buildpackage**
…
## Lintian usage 
https://lintian.debian.org/manual/index.html
# Debian repository 
## Repository creation 
Basically, a Debian repository is a folder accessible using HTTP protocol. This folder only needs to provides a descriptor named `Packages.gz`.

* First, you need the `dpkg-dev` to be installed.
* Then, generate the `Packages.gz` file using the following command : `dpkg-scanpackages /repository/root /dev/null | gzip -9c > /repository/root/Packages.gz`
* Of course, the repository folder needs to be served by an HTTP server.

Source: https://askubuntu.com/questions/170348/how-to-create-a-local-apt-repository

On créé le package

apt-ftparchive packages . > Packages
## Client configuration 

Edit the `/etc/apt/sources.list` file (as an administrator) and add the following line : `deb <repo url> ./`

`deb [trusted=yes] <repo url> ./`

`deb <repo url> ./` by `deb [trusted=yes] <repo url> ./`

https://help.ubuntu.com/community/CreateAuthenticatedRepository
## Using a certificate 
* see : debsign
