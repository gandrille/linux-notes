# References 
* [GitHub repo](https://github.com/sshuttle/sshuttle) 
* [Documentation](https://sshuttle.readthedocs.io/en/latest/) 
# Installation 
`apt-get install sshuttle` 

**Requirements**
* Client side: sudo, or root access on your client machine. (The server doesn’t need admin access.). Python 2 or 3 ( [see supported versions)](https://sshuttle.readthedocs.io/en/latest/requirements.html) .
* Server side: The server can run in Python 2 or 3 ( [see supported versions)](https://sshuttle.readthedocs.io/en/latest/requirements.html) .
# Usage 
`sshuttle [options] [-r [username@]sshserver[:port]] <subnets …>`

**Example **`sshuttle --dns -r username@sshserver 0/0`
* `--dns` DNS queries will be proxied through the DNS server of the server you are connect to
* `-r username@sshserver` the remote server
* `0/0` the networks to be proxied. In this case, `0/0` is a shorthand for `0.0.0.0/0`, meaning every network.
