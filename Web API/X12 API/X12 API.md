**Status**
`curl 'http://192.168.0.15/nov_new/nov_DBTool/ajax/sync.php`'

**Basic commands**
`curl 'http://192.168.0.15/nov_new/nov_DBTool/ajax/quickpanel.php' --data 'key=PlayNextItem&type=Remote`'
* `"Stop"`
* `"Play"`
* `"PlayPrevItem"`
* `"PlayNextItem"`
* `"Shuffle"`
* `"Power" (shutdown)`

**Set Play Postion**
`curl 'http://192.168.0.15/nov_new/nov_DBTool/ajax/quickpanel.php' --data 'key=44&type=SetPlayPosition`'

**Volume control**
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/ajax/quickpanel.php' --data 'key=17&type=SetVol`'
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/ajax/remote.php' --data '_caV=pack-32&mode=key&key=VolDown`'
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/ajax/remote.php' --data '_caV=pack-32&mode=key&key=VolUp`'
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/ajax/remote.php' --data '_caV=pack-32&mode=key&key=Mute`'

**Display**
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/ajax/remote.php' --data '_caV=pack-32&mode=key&key=Clock`'
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/ajax/remote.php' --data '_caV=pack-32&mode=key&key=NowPlay`'
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/ajax/remote.php' --data '_caV=pack-32&mode=key&key=Home`'

**Reading a folder**
* `curl 'http://192.168.0.15/nov_new/nov_DBTool/musicDB/fancytree/ajax/ajax.php' --data '_caV=pack-32&mode=play&nodeKey=%2Fmnt%2Fusb1%2Fdirname&index=0`'
