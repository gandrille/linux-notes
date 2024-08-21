 **Sources**
* [GPG Basic usage](http://aplawrence.com/Basics/gpg.html) 
* [The GNU Privacy Handbook](https://www.gnupg.org/gph/en/manual.html) 
* [GnuPG website](https://gnupg.org/index.html) 
* [GnuPG HowTo](https://gnupg.org/documentation/howtos.html) 
* [GnuPG User Guide](https://gnupg.org/documentation/guides.html) 
# Key pair creation 
* `gpg --full-generate-key`
* `gpg --quick-gen-key 'John Doo <john@doo.com>' rsa4096 - 1y`
# Trousseau de clés publiques 
`~/.gnupg/pubring.kbx`

**Lister les clés**
`gpg --list-keys`

**Export**
`gpg --armor --export john@doo.com`
* `--armor` ascii export (ASCII-armored), instead of binary

**Two step import**
* import: `gpg --import myfriend.gpg`
* signing the imported key (means the fingerprint has been validated by any way): `gpg --edit-key myfiend@here.com`
