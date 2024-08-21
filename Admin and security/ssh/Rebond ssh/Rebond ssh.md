# By hand 
`ssh -t mygateway ssh mydestination`
# Using .ssh/config 
```
Host mygateway
  Hostname 1.2.3.4
  User gwUser

Host mydestination
  Hostname 10.11.12.13
  User dstUser
  ForwardAgent yes
  ProxyCommand ssh mygateway -W %h:22
```

Then only `ssh mydestination` is needed… and it works out of the box with `scp` ☺
