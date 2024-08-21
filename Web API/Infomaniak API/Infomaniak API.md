**Documentation:** https://developer.infomaniak.com/getting-started
**Token generation:** https://manager.infomaniak.com/v3/ng/accounts/token/list

Notes:
1. even if a user is allowed to edit aliases, he is not allowed to use the API to manage them. Admin is required. (Edit: not anymore?)
2. mail_hosting_id can be found in the URL of the admin mail management interface
3. the official documentation is sometimes wrong. Double check the response payload format!

```
INFOMANIAK_TOKEN="my_token_with_mail_scope"
INFOMANIAK_MAIL_HOSTING_ID=0123456
INFOMANIAK_MAILBOX=part_before_the_@
```
# Aliases 
**Aliases list**
https://developer.infomaniak.com/docs/api/get/1/mail_hostings/%7Bmail_hosting_id%7D/mailboxes/%7Bmailbox_name%7D/aliases

```
curl \
 -H "Authorization: Bearer $INFOMANIAK_TOKEN" \
 -H "Content-Type: application/json" \
https://api.infomaniak.com/1/mail_hostings/$INFOMANIAK_MAIL_HOSTING_ID/mailboxes/$INFOMANIAK_MAILBOX/aliases
```

**Alias creation**
https://developer.infomaniak.com/docs/api/post/1/mail_hostings/%7Bmail_hosting_id%7D/mailboxes/%7Bmailbox_name%7D/aliases

```
curl -X POST \
 -H "Authorization: Bearer $INFOMANIAK_TOKEN" \
 -H "Content-Type: application/json" \
 -d '{ "alias": "foo" }' \
https://api.infomaniak.com/1/mail_hostings/$INFOMANIAK_MAIL_HOSTING_ID/mailboxes/$INFOMANIAK_MAILBOX/aliases
```

**Alias removal**
https://developer.infomaniak.com/docs/api/delete/1/mail_hostings/%7Bmail_hosting_id%7D/mailboxes/%7Bmailbox_name%7D/aliases/%7Balias%7D

```
curl -X DELETE \
 -H "Authorization: Bearer $INFOMANIAK_TOKEN" \
 -H "Content-Type: application/json" \
https://api.infomaniak.com/1/mail_hostings/$INFOMANIAK_MAIL_HOSTING_ID/mailboxes/$INFOMANIAK_MAILBOX/aliases/foo
```
# Sieve filters 
**List filters**
https://developer.infomaniak.com/docs/api/get/1/mail_hostings/%7Bmail_hosting_id%7D/mailboxes/%7Bmailbox_name%7D/auth/filters

```
curl \
 -H "Authorization: Bearer $INFOMANIAK_TOKEN" \
 -H "Content-Type: application/json" \
https://api.infomaniak.com/1/mail_hostings/$INFOMANIAK_MAIL_HOSTING_ID/mailboxes/$INFOMANIAK_MAILBOX/auth/filters
```
