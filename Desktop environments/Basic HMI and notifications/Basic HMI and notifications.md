# Notify-send 
`notify-send` is a little, simple On-Screen Display (OSD) application.

* package `notify-osd`
* command `notify-send`

**Examples**
* `notify-send Test "Hello World"`
* `notify-send "Message Title" "Message body" -i /usr/share/pixmaps/filezilla.xpm -t 5000`
* `notify-send -i messagebox_info "Message Title" "Message body"`

A regarder : contenu des packages
* `notify-osd`
* `notify-osd-icons`
* `libnotify-bin`

→ [The Desktop Notification Spec Proposal](http://www.galago-project.org/specs/notification/) 
# Utilisation de D-Bus 
https://developer.gnome.org/notification-spec/

```
gdbus call --session --dest org.freedesktop.Notifications --object-path /org/freedesktop/Notifications --method org.freedesktop.Notifications.Notify \
"" 0 \
/usr/share/icons/deepin/apps/16/deepin-feedback.svg \
Subject \
Message \
"[\"id_action1\", \"Pif\", \"id_action2\", \"Paf\"]" \
"{\"urgency\": <byte 1>}" \
"int32 -1"
```

`gdbus monitor --session --dest org.freedesktop.Notifications --object-path /org/freedesktop/Notifications`
# Zenity 
Pour demander des informations basiques avec une UI.
La page de man est très bien faite.

`zenity --forms --title="My title" --text="Hello world" --separator="," --add-entry="Please type ssth" --add-entry="Ssth else" --add-calendar "pick a date"`

`zenity --forms --title="My title" --text="Hello world" --separator="," --checkbox=foo --checkbox=bar`
# yad 
Pour demander des informations avec une UI. Plus complet (et complexe) que Zenity.

```
yad --form --width 300 --center \
          --window-icon application-pdf --image application-pdf \
          --separator=" " \
          --title="PDFextract"\
          --text "Please choose the page range and backend"\
          --field="Start:NUM" 1[!1..$PAGECOUNT[!1]] \
          --field="End:NUM" $PAGECOUNT[!1..$PAGECOUNT[!1]] \
          --field="Backend":CB "$BACKENDSELECTION" \
          --button="gtk-ok:0" --button="gtk-cancel:1"
```

https://askubuntu.com/questions/221962/how-can-i-extract-a-page-range-a-part-of-a-pdf/672001#672001

`yad --file --directory --height=400 --width=500 --title=Choose\ Directory\ to\ Link\ to!`
