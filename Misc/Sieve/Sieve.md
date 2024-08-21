* [Wikipedia](https://en.wikipedia.org/wiki/Sieve_(mail_filtering_language)) 
* http://sieve.info/

Sieve is a language created and used for mail filtering. They work basically by comparing different keys using different comparators and comparison methods, against headers of a mail message. Based on the result of the comparison, you can apply different actions to the corresponding mail message, i.e. reject, discard, redirect, etc.

Each server having Sieve script support has a set of [Sieve extensions](https://www.iana.org/assignments/sieve-extensions/sieve-extensions.xhtml) activated. This means that depending on the extensions used by a Sieve script, a server may or may not be able to install and execue a given script.

In order to install Sieve scripts on a server, two solutions may be available:
* using a given, server specific interface (if provided)
* using MANAGESIEVE protocol thanks to a software 
	* CLI: `sieve-connect` (perl script) from `sieve-connect` package
	* GUI: KSieve (`sieveeditor` executable), from package `pim-sieve-editor`
	* Python: `python3-sievelib` (see https://github.com/tonioo/sievelib)

**RFC**
* [RFC5293 Sieve Email Filtering: Editheader Extension](https://datatracker.ietf.org/doc/html/rfc5293) 
* [RFC 5804 A Protocol for Remotely Managing Sieve Scripts](https://datatracker.ietf.org/doc/html/rfc5804) 
# Email hosting 
**Gandi**
✅ [Sieve Support](https://docs.gandi.net/fr/gandimail/sieve/index.html) 
❌ [NO "editheader" extension support](https://docs.gandi.net/fr/gandimail/sieve/extensions_sieve.html) 

**Infomaniak**
✅ [Sieve support](https://www.infomaniak.com/fr/support/faq/1729/infomaniak-mail-trier-automatiquement-les-e-mails-entrants-filtres-sieve) 
✅ ["editheader" extension support](https://www.infomaniak.com/fr/support/faq/1729/trier-les-e-mails-entrants-selon-des-regles-filtres-sieve) 

**Fastmail**
✅ [Sieve support](https://www.fastmail.help/hc/en-us/articles/1500000280481-Sieve-scripts) 
✅ ["editheader" extension support](https://www.fastmail.help/hc/en-us/articles/360058753814-Sieve-frequently-asked-questions) 
https://app.fastmail.com/sievetester/

**Proton**
✅ [Sieve support](https://proton.me/support/sieve-advanced-custom-filters) 
❌ [NO "editheader" extension support](https://proton.me/support/sieve-advanced-custom-filters#supported-actions-tests) 

**AlwaysData**
✅ [Sieve support](https://help.alwaysdata.com/fr/emails/utiliser-les-scripts-sieve/) 
✅ ["editheader" extension support](https://help.alwaysdata.com/fr/emails/utiliser-les-scripts-sieve/) 

**OVH**
❌ NO sieve support :-( 
❌ NO editheader extension support, of course
# Sieve scripts examples 
* https://www.fastmail.help/hc/en-us/articles/360058753794-Sieve-examples
* https://support.tigertech.net/sieve
* https://ceng.metu.edu.tr/server-side-mail-filtering-using-sieve
* https://blog.hbis.fr/2010/03/14/mail-sieve_filters/
