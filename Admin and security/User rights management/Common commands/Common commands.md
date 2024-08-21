# Read 
* `groups [username]` → show all the groups a user belongs to (default user : the current one)
# Update 
**High level CLI (manages user account, homedir,...)**
* `adduser <username>` → uses /etc/adduser.conf
* `deluser <username>` → uses /etc/deluser.conf
* `addgroup`

**Low level CLI (don't use unless you know what you are doing...)**
* `useradd`
* `userdel`
* `groupadd`

**Group management**
* `usermod -aG <groupname> <username>`
* `usermod -aG sudo <username>` → for giving a user sudo rights
* `gpasswd -d <username> <group>` → removes a user from a specific group

**Password management**
* `passwd [username]`
