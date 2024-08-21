# Flatpak install 
https://flathub.org/apps/org.chromium.Chromium

For convinience, don't forget to create a launcher `/usr/bin/chromium` with the following content :
```
#!/bin/sh
flatpak run org.chromium.Chromium "$@"
```
→ This is a good way to wire Chromium flatpak to the default webbrowser

**ISSUE :** Playing mp4 files may not be possible since mp4 proprietary codecs are not available in the flatpak... and sandboxing prevents flatpak from using system codecs.

**Snap install**

**sudo snap install chromium**

flatpak-launcher  org.chromium.Chromium
