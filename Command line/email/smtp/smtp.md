# Using only Mailx 
* [documentation](http://heirloom.sourceforge.net/mailx/mailx.1.html) 
* package: `bsd-mailx`
* configuration file `~/.mailrc`

```
$ echo "This is the message body and contains the message" | mailx -v \
> -r "someone@example.com" \
> -s "This is the subject" \
> -S smtp="mail.example.com:587" \
> -S smtp-use-starttls \
> -S smtp-auth=login \
> -S smtp-auth-user="someone@example.com" \
> -S smtp-auth-password="abc123" \
> -S ssl-verify=ignore \
> yourfriend@gmail.com
```
# Using only Msmtp 
* [documentation](https://doc.ubuntu-fr.org/msmtp) 
* package: `msmtp-mta`
* configuration file: `~/.msmtprc`

`echo 'message' | msmtp user@domain.com`
# Using mailx and msmtp 
**MTA**
* package: `msmtp-mta`
* configure your remote smtp credentials into: `~/.msmtprc`

**Mailx, for CLI interface**
* package: `bsd-mailx`
* configuration file `~/.mailrc`
	* `set sendmail="/usr/bin/msmtp"`
	* `set message-sendmail-extra-arguments="-a my-msmtp-account-defined-inside-msmtprc"`

`mail -s "subject" -a "attachment-if-any" "receiver@some-domain.com"`
