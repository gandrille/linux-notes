 [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) 
 [XDG user dirs](https://freedesktop.org/wiki/Software/xdg-user-dirs/) 

**Default values**
```
$XDG_DATA_HOME    → $HOME/.local/share
$XDG_CONFIG_HOME  → $HOME/.config
$XDG_CACHE_HOME   → $HOME/.cache
$XDG_DATA_DIRS    → /usr/local/share/:/usr/share/
$XDG_CONFIG_DIRS  → /etc/xdg
$XDG_RUNTIME_DIR  →
```

By default, the directories are stored into  `${XDG_CONFIG_HOME:-~/.config}/user-dirs.dirs` file.

**Inside a script**
```
test -f ${XDG_CONFIG_HOME:-~/.config}/user-dirs.dirs && source ${XDG_CONFIG_HOME:-~/.config}/user-dirs.dirs
dataHome=${XDG_DATA_HOME:-$HOME/.local/share}
configHome=${XDG_CONFIG_HOME:-$HOME/.config}
cacheHome=${XDG_CACHE_HOME:-$HOME/.cache}
```

**Query / Update commands**
* **Query:** `xdg-user-dir TEMPLATE`
* **Update:** `xdg-user-dirs-update --set TEMPLATE "$HOME/foo"`
* **Unset:** `xdg-user-dirs-update --set TEMPLATE "$HOME/"` → value must be $HOME to unset
