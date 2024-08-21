# **How to set up the bluetooth profile from the command line?** 
**Find the card name**
`pacmd list-cards | grep -E 'name:' | cut -d '<' -f 2 | cut -d '>' -f 1`
→ for instance, `bluez_card.65_AB_D2_79_0B_0C`

**Find the name of the active profile**
`pacmd list-cards | grep -E 'active profile|name:`'

It can be for instance
* `a2dp_sink` → Advanced Audio Distribution Profile, high quality audio streaming
* `handsfree_head_unit` → Hands-Free Profile (HFP)

**Configure**
`pactl set-card-profile bluez_card.65_AB_D2_79_0B_0C a2dp_sink`
`pactl set-card-profile bluez_card.65_AB_D2_79_0B_0C handsfree_head_unit`
