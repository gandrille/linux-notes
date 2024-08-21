# tran 
package: `tran`

`echo hello world | tran bold`

```
tran 1 2>&1 | sed 1d | while read key; do echo "hello world" | tran $key | sed "s/^/$key: /"; done
armenian: հելլո ւորլդ
ascii: hello world
bold: 𝐡𝐞𝐥𝐥𝐨 𝐰𝐨𝐫𝐥𝐝
bold fraktur: 𝖍𝖊𝖑𝖑𝖔 𝖜𝖔𝖗𝖑𝖉
bold italic: 𝒉𝒆𝒍𝒍𝒐 𝒘𝒐𝒓𝒍𝒅
bold script: 𝓱𝓮𝓵𝓵𝓸 𝔀𝓸𝓻𝓵𝓭
circled: ⓗⓔⓛⓛⓞ ⓦⓞⓡⓛⓓ
cyrillic: хэлло лорлд
devanagari: हएललओ वओरलद
double-struck: 𝕙𝕖𝕝𝕝𝕠 𝕨𝕠𝕣𝕝𝕕
fraktur: 𝔥𝔢𝔩𝔩𝔬 𝔴𝔬𝔯𝔩𝔡
fullwidth: ｈｅｌｌｏ　ｗｏｒｌｄ
futhark: ᚺᛖᛚᛚᛟ ᚹᛟᚱᛚᛞ
georgian: ჰელლო ჳორლდ
gothic: 𐌷𐌴𐌻𐌻𐍉 𐍅𐍉𐍂𐌻𐌳
greek: χελλο υορλδ
hangul: 헬l오 w오rld
hiragana: へllお をrld
italic: ℎ𝑒𝑙𝑙𝑜 𝑤𝑜𝑟𝑙𝑑
katakana: ヘllオ ウォrld
latin: hello world
monospace: 𝚑𝚎𝚕𝚕𝚘 𝚠𝚘𝚛𝚕𝚍
mtavruli: ჰელლო ჳორლდ
negative circled: 🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓
negative squared: 🅷🅴🅻🅻🅾 🆆🅾🆁🅻🅳
old italic: 𐌇𐌄𐌋𐌋𐌏 w𐌏𐌓𐌋𐌃
parenthesized: ⒣⒠⒧⒧⒪ ⒲⒪⒭⒧⒟
regional indicators: 🇭🇪🇱🇱🇴 🇼🇴🇷🇱🇩
sans-serif: 𝗁𝖾𝗅𝗅𝗈 𝗐𝗈𝗋𝗅𝖽
sans-serif bold: 𝗵𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹𝗱
sans-serif bold italic: 𝙝𝙚𝙡𝙡𝙤 𝙬𝙤𝙧𝙡𝙙
sans-serif italic: 𝘩𝘦𝘭𝘭𝘰 𝘸𝘰𝘳𝘭𝘥
script: 𝒽ℯ𝓁𝓁ℴ 𝓌ℴ𝓇𝓁𝒹
smallcaps: ʜᴇʟʟᴏ ᴡᴏʀʟᴅ
squared: 🄷🄴🄻🄻🄾 🅆🄾🅁🄻🄳
```
# banner 
package: `figlet`

```
figlet hello
 _          _ _       
| |==   ==_| | | ==_  
| '_ \ / _ \ | |/ _ \ 
| | | |  ==/ | | (_) |
|_| |_|\==_|_|_|\==_/ 
```

```
figlet -ptk -f slant hello
    ==           == ==     
   / /_   ==_   / // /==== 
  / == \ / _ \ / // // == \
 / / / //  ==// // // /_/ /
/_/ /_/ \==_//_//_/ \====/
```

Font list: http://www.figlet.org/examples.html
