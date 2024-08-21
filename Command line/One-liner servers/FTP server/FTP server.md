# pyftpdlib 
package: `python3-pyftpdlib`

Basic FTP server: `python3 -m pyftpdlib`

**Basic options**
* `-p 21` → port 21 (default: 2121)
* `-w` → write access (default: read-only)
* `-d /foo/bar` → folder to be shared (default: current)
* `-u john` → username (default is anonymous user)
* `-P mypass` → password

example: `python3 -m pyftpdlib -w -u etienne -P foo -p 21`
see also: `python3 -m pyftpdlib --help`
# twistd3 
package: `python3-txtftp`

`twistd3 -n ftp` → read only
`twistd3 -n ftp --auth memory:john:secretpass`
`twistd ftp --help`
