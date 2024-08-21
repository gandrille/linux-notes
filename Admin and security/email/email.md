2020 [Emails avec SPF, DKIM, DMARC, ARC et BIMI : à quoi ça sert, comment en profiter ?](https://www.nextinpact.com/article/30341/109074-emails-avec-spf-dkim-dmarc-arcet-bimi-a-quoi-ca-sert-comment-en-profiter) 
2020 [« I don’t want any spam ! »](https://framablog.org/2020/11/13/i-dont-want-any-spam/) 
2019 [Getting Email Sending Settings Right](https://techblog.bozho.net/getting-email-sending-settings-right/) 

* [SPF (Sender Policy Framework)](https://en.wikipedia.org/wiki/Sender_Policy_Framework) a DNS recrod that lists the permitted senders (IP addresses) and an instruction flag on what to do with those that don’t match.
* [DKIM (DomainKeys Identified Mail)](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) a DNS record that lets email senders sign their emails.
* [DMARC (Domain-based Message Authentication, Reporting and Conformance)](https://en.wikipedia.org/wiki/DMARC) – this DNS record contains the policy according to which your emails should be validated – it enforces SPF and DKIM and tells the receiving side what to do if they fail.
* [ARC (Authenticated Received Chain)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) is an email authentication system designed to allow an intermediate mail server like a mailing list or forwarding service to sign an email's original authentication results.
* [BIMI (Brand Indicators for Message Identification)](https://tools.ietf.org/html/draft-blank-ietf-bimi-00) : Brand logo on validated emails thanks to a DNS record

→ Anonymous Email Forwarding https://addy.io/
