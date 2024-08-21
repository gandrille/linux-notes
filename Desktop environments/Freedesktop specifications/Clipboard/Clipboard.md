# Specification 
According to [Freedesktop.org Specification](https://specifications.freedesktop.org/clipboards-spec/clipboards-latest.txt) :

There are three standard selections defined in the [ICCCM](https://en.wikipedia.org/wiki/Inter-Client_Communication_Conventions_Manual) : `PRIMARY`, `SECONDARY`, and `CLIPBOARD`.
* use `PRIMARY` for mouse selection, middle mouse button paste, and explicit cut/copy/paste menu items (Qt 2, GNU Emacs 20)
* use `CLIPBOARD` for the Windows-style cut/copy/paste menu items;
* no one ever does anything interesting with `SECONDARY` as far as I can tell.

 [ICCM specification](https://www.x.org/docs/ICCCM/icccm.pdf) 
* More information about target atoms : ICCCM section 2.6.2
# CLI Clipboard interfaces 
## xclip 
* [Website](https://github.com/astrand/xclip) 
* package: `xclip`

**Primary**
* Print content: `xclip -out`
* Set content: `echo test | xclip`

**Clipboard**
* Print content: `xclip -out -selection clipboard`
* Set content: `printf test | xclip -selection clipboard`

With binary data: `maim -s | xclip -selection clipboard -t image/png`
## xsel 
* [Website](http://www.kfish.org/software/xsel/) 
* package: `xsel`

**Primary**
* Print content: `xsel`
* Set content: `printf test | xsel --input`

**Clipboard**
* Print content: `xsel --clipboard`
* Set content: `printf test | xsel --clipboard --input`
## clipit 
Lightweight GTK+ clipboard manager (fork of Parcellite)
* [Website](https://github.com/CristianHenzel/ClipIt) 
* package: `clipit`

**Primary**
* Print content: `clipit -p`
* Set content: `/`

**Clipboard**
* Print content: `clipit -c`
* Set content: `echo "copied to clipboard" | clipit` or `clipit "copied to clipboard"`
# Clipboard managers 
* `Clipman` : Xfce default pluging
* `Diodon`
* `Klipper` : Kde manager
* `GPaste`
* `clipit` (in daemon mode)
