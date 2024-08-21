See command : `xfce4-panel`

**Panel definition**
* `xfconf-query --channel xfce4-panel -lv`
	* Storage :  `~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-panel.xml`
	* Default config : `/etc/xdg/xfce4/panel/default.xml`
* `~/.config/xfce4/panel`

**Modifier la liste des Applications favorites dans le menu whisker**
* Editer `~/.config/xfce4/panel/whiskermenu-1.rc`
* Relancer le panel : `xfce4-panel -r`
