Note: Ubuntu installs `xul-ext-ubufox` to tweek firefox. Today, it acts as a placeholder for future updates (see [package content](https://packages.ubuntu.com/focal/xul-ext-ubufox) ).

`about:certificate`
# Basic infos 
**Manual Config**
* [key descriptions](https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml) → the MUST read file!
* using `about:config` 
* using [developer toolbar](http://kb.mozillazine.org/Editing_configuration) 

**Misc**
* Firefox "obfuscation" : by default, Firefox expects obfuscated files to be byte shifted by 13 bytes (ROT13). Here is a [basic encoder/decoder](http://www.alain.knaff.lu/howto/MozillaCustomization/cgi/byteshf.cgi) .
* [Troubleshooting preferences](http://kb.mozillazine.org/Preferences_not_saved) 
# User defined preferences 
All the following configuration is stored inside the user home folder (the profile folder, to be precise).

**Documentation**
* [A brief guide to Mozilla preferences](https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/A_brief_guide_to_Mozilla_preferences) 
* [Resetting preferences](http://kb.mozillazine.org/Resetting_preferences) 
* [OLD but interesting example](http://web.mit.edu/~firefox/www/maintainers/config.html) 
* [Example](https://github.com/pyllyukko/user.js) (do NOT use as it is)

**The following files are located inside the profile folder**
* [prefs.js](http://kb.mozillazine.org/Prefs.js_file) stores the preferences. It MUST NOT be edited!
* [user.js](http://kb.mozillazine.org/User.js_file) stores a configuration which is written back to `prefs.js` file each time you restart your application.
→ See homemade [[user.js|user.js file]] 
# Simple system level config 
Inside `/etc/firefox/syspref.js` → WARNING: This path may be installation dependant

**Changes the default value : the user can update it**
`pref("browser.startup.homepage", "https://ubuntu.com/");`

**Forces the value (user can't change it!)**
`pref("browser.startup.homepage", "https://ubuntu.com", locked);`
NOTE : `lockPref("browser.startup.homepage", "https://ubuntu.com");` does NOT work on recent releases!
# Advanced system level config 
PRO tip : it is possible to reference a REMOTE file. See `autoadmin.global_config_url`

**Sources**
* [Locking preferences](http://kb.mozillazine.org/Locking_preferences) 
* [Firefox AutoConfig](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig) 
* [Ubuntu documentation](https://doc.ubuntu-fr.org/tutoriel/verrouiller_les_parametres_de_firefox) 

```
$ cat /usr/lib/firefox/defaults/pref/autoconfig.js
// The first line MUST be a comment
// a "good" name for this file can be local-settings.js or autoconfig.js
pref("general.config.filename", "firefox.cfg");
pref("general.config.obscure_value", 0);
```

```
$ cat /usr/lib/firefox/firefox.cfg
// the first line MUST be a comment
...
```

* **pref(prefName, value)** – sets the user value of a preference. This function explicitly sets the preference as a user preference. That means that if the user has changed the value, it will get reset every time the browser is started.
* **defaultPref(prefName, value)** – sets the default value of a preference. This is the value that a preference has when the user has not set any value or the user resets the preference. It can be permanently changed by the user.
* **lockPref(prefName, value)** – sets the default value of a preference and locks it. This is the most commonly used function. Locking a preference prevents a user from changing it, and in most cases, disables the UI in preferences so it is obvious to the user that the preference has been disabled.
* **clearPref(prefName)** – removes the user value of a preference, resetting it to its default value. 
# In an enterprise environment : using policies.json 
* `about:policies`
* [List of policies](https://github.com/mozilla/policy-templates/releases) 
* [Customizing Firefox Using policies.json](https://support.mozilla.org/en-US/kb/customizing-firefox-using-policiesjson) 
