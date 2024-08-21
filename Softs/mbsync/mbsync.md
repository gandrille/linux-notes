Mailbox synchronization tool. 
# Example: synchronization of two IMAP folders 
Sync command: `/usr/bin/mbsync transfer`

```
# ~/.mbsyncrc
#
# Source
IMAPAccount imap-src-account
Host imap.here.com
User my.name
Pass my.pass
SSLType STARTTLS
CertificateFile /etc/ssl/certs/ca-certificates.crt
# Destination
IMAPAccount imap-dest-account
Host imap.there.com
User other.user
Pass s3cr3t!
SSLType IMAPS
CertificateFile /etc/ssl/certs/ca-certificates.crt
# Link IMAP server to remote used below
IMAPStore imap-src
Account imap-src-account

IMAPStore imap-dest
Account imap-dest-account
# ensures that dates of messages will be set correctly
CopyArrivalDate yes

Channel transfer
Master :imap-src:
Slave :imap-dest:
# Transfer all folders
#Patterns *
Create Slave
Sync Pull New
# important otherwise you will get 'Error: store ... does not support in-box sync state'
SyncState ~/.mail/imap-transfer
```
