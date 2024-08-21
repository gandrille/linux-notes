In order to ease copy paste from firefox to Zim wiki, here is a hack to update [Copy Selection as Markdown](https://addons.mozilla.org/en-US/firefox/addon/copy-selection-as-markdown/) extension behaviour.

First, download the latest zip release from the [github repository](https://github.com/0x6b/copy-selection-as-markdown/tree/master/artifacts/firefox) .
Inside the zip file, update `copy.js`
Replace `function(t,e){return"["+t+"]("+e.getAttribute("href")+(e.title?' "'+e.title+'"':"")+")"}`
With `function(t,e){return" [["+e.getAttribute("href")+(e.title?' "'+e.title+'"':"")+"|"+t+"]] "}`

Disable firefox signature checking (this is **VERY** bad!)
→ inside `about:config` switch `xpinstall.signatures.required` to `false`.

Then, install the extension from the updated zip file `about:addons`
Don't forget to have a look at the extension parameters.
