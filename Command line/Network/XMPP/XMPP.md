# Free account creation 
https://xmpp.chapril.org/
https://www.chapril.org/XMPP.html
# go-sendxmpp 
**Example with everything defined**
`echo "sms send 0611223344  foo" | go-sendxmpp -u username -j my-domain.org -p mysecret --tls recipient@domain.org`

**Using ~/.config/go-sendxmpp/sendxmpprc**
`echo "sms send 0611223344  foo" | go-sendxmpp --tls recipient@domain.org`
# Local XMPP server 
`docker pull ejabberd/ecs`
https://docs.ejabberd.im/admin/installation/
https://hub.docker.com/r/ejabberd/ecs
