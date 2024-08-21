https://pipewire.org/
https://gitlab.freedesktop.org/pipewire/pipewire
https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/FAQ

**see also**
* https://docs.pipewire.org/page_objects_design.html
* https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Migrate-PulseAudio#sinksource-port-volumemuteport-latency
* https://github.com/smasher164/pw-volume

 [Programs](https://docs.pipewire.org/page_programs.html) 
* [pw-metadata](https://docs.pipewire.org/page_man_pw-metadata_1.html) easy access to what is available using `pw-dump` looking for `PipeWire:Interface:Metadata`
* [pw-dump](https://docs.pipewire.org/page_man_pw-dump_1.html) 
* [pw-cli](https://docs.pipewire.org/page_man_pw-cli_1.html) 

**Script to set volume (jq utility required)**
https://stackoverflow.com/questions/77953845/pipewire-volume-change-with-pw-cli-doesnt-notify-other-programs

```
#!/bin/bash
# Extract the partial name of the default device
device_partial_name=$(pw-metadata | grep "key:'default.audio.source'" | awk -F"'" '{print $4}' | sed 's/\\//g' | jq .name | awk -F"." '{print $2}')
# Retrieve the device ID using pw-dump and jq
device_id=$(pw-dump Device | jq '.[].info.props|select(."device.name" | contains('\"$device_partial_name\"'))' | jq '."object.id"')
# Dump route information and extract index and device for the specified device ID
route_values=($(pw-dump $device_id | jq '.[0].info.params.Route[0]| (.index, .device)'))
# Extract route index and profile
route_index=${route_values[0]}
route_device=${route_values[1]}
# Set the desired volume level
VOLUME=0.125 # 0.5^3 = 50%
# Use pw-cli to set the route properties including channel volumes and mute status
pw-cli s $device_id Route "{index: $route_device, device: $route_device, props: {channelVolumes: [$VOLUME, $VOLUME], mute: false}}"
```
