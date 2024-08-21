* [General documentation](https://wiki.mozilla.org/Firefox/Search) 
* Related topic : [Open Search](https://developer.mozilla.org/en-US/docs/Web/OpenSearch) 
# Introduction 
In Firefox, search engines have been widely abused in the past. The curent complexity comes from hijacking-protection. ( [source](https://mail.mozilla.org/pipermail/firefox-dev/2013-August/000778.html) )

**What does NOT work anymore**
* user_pref `Keyword.Url` → [BUG#873734](https://bugzilla.mozilla.org/show_bug.cgi?id=873734) 
* user_pref `browser.search.selectedEngine` → [BUG#1029148](https://bugzilla.mozilla.org/show_bug.cgi?id=1029148) 

**So, how does it works?**
* AT STARTUP, preferences "browser.urlbar.placeholderName" and "browser.search.defaultenginename" are used to display the search engine name... but it's ONLY a label (see [BUG #1449317](https://bugzilla.mozilla.org/show_bug.cgi?id=1449317) ).
* THEN, when the `search.json.mozlz4` has been read from the profile, the full configuration is loaded and the previous preferences are not used anymore during the session.
# Decoding/Encoding search.json.mozlz4 
`search.json.mozlz4` has a magic number header ( ["mozLz40\0"](https://dxr.mozilla.org/mozilla-central/source/toolkit/components/lz4/lz4.js#32) ) followed by the content itself, encoded using LZ4 algorithm. That's why, in order to decompress the file, the magic number needs to be skiped, then the remaining bytes can be extracted using LZ4 algorithm.

This python program does the job well ( [source](https://unix.stackexchange.com/questions/326897/how-to-decompress-jsonlz4-files-firefox-bookmark-backups-using-the-command-lin?rq=1) )

```
#!/usr/bin/env python
from sys import stdin, stdout, argv, stderr
import os
try:
    import lz4.block as lz4
except ImportError:
    import lz4

stdin = os.fdopen(stdin.fileno(), 'rb')
stdout = os.fdopen(stdout.fileno(), 'wb')

if argv[1:] == ['-c']:
    stdout.write(b'mozLz40\0' + lz4.compress(stdin.read()))
elif argv[1:] == ['-d']:
    assert stdin.read(8) == b'mozLz40\0'
    stdout.write(lz4.decompress(stdin.read()))
else:
    stderr.write('Usage: %s -c|-d < infile > outfile\n' % argv[0])
    stderr.write('Compress or decompress Mozilla-flavor LZ4 files.\n\n')
    stderr.write('Examples:\n')
    stderr.write('\t%s -d < infile.json.mozlz4 > outfile.json\n' % argv[0])
    stderr.write('\t%s -c < infile.json > outfile.json.mozlz4\n' % argv[0])
    exit(1)
```

**Requires**
* Python2 : `python-lz4` package
* Python3 : `python3-lz4tools` package
# Reverse engineering of search.json.mozlz4 Json schema 
* [SearchService.jsm](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchService.jsm#l659) → see comments!
* [SearchEngine.jsm](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchEngine.jsm) 
# Hash computation 
Hashes are used to ensure that the file has been updated by Firefox itself. So computing hashes has been designed to be difficult, in order to prevent malicious program from updating silently `search.json.mozlz4` file.

**Source code**
* [SearchService.jsm](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchService.jsm) 
* [SearchEngine.jsm](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchEngine.jsm#l228) → `function getVerificationHash(name)`

**Using jsconsole**
* prerequisite: inside Firefox, set the `devtools.chrome.enabled` preference to `true` inside `about:config` to enable the browser console command line ( [source](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console) ).
* run `firefox -jsconsole` from the command line
* copy/paste `getVerificationHash` function from [SearchEngine.jsm](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchEngine.jsm#l228) .
* ask for `getVerificationHash("Qwant")`

**Using Bash commands**

```
# getVerificationHash("Qwant")
name=Qwant
# OS.Path.basename(OS.Constants.Path.profileDir) → profile dependent, of course
profileDir="fbhzwefm.default"
# Services.appinfo.name
appName="Firefox"
# Copy/Pasted disclaimer from https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchEngine.jsm#l228
disclaimer="By modifying this file, I agree that I am doing so only within $appName itself, using official, user-driven search engine selection processes, and in a way which does not circumvent user consent. I acknowledge that any attempt to change this file from outside of $appName is a malicious act, and will be responded to accordingly."

salt=$profileDir$name$(echo $disclaimer | sed "s/\$appName/$appName/g")

printf "$salt" | openssl sha256 -binary | base64
```
# Appendix 
Here is `getVerificationHash` function from [SearchEngine.jsm](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/search/SearchEngine.jsm#l228) .

```
function getVerificationHash(name) {
  let disclaimer 
    "By modifying this file, I agree that I am doing so " +
    "only within $appName itself, using official, user-driven search " +
    "engine selection processes, and in a way which does not circumvent " +
    "user consent. I acknowledge that any attempt to change this file " +
    "from outside of $appName is a malicious act, and will be responded " +
    "to accordingly.";

  let salt 
    OS.Path.basename(OS.Constants.Path.profileDir) +
    name +
    disclaimer.replace(/\$appName/g, Services.appinfo.name);

  let converter = Cc[
    "@mozilla.org/intl/scriptableunicodeconverter"
  ].createInstance(Ci.nsIScriptableUnicodeConverter);
  converter.charset = "UTF-8";

  // Data is an array of bytes.
  let data = converter.convertToByteArray(salt, {});
  let hasher = Cc["@mozilla.org/security/hash;1"].createInstance(
    Ci.nsICryptoHash
  );
  hasher.init(hasher.SHA256);
  hasher.update(data, data.length);

  return hasher.finish(true);
}
```
