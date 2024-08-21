# backupmanager.cpp 
**convertWav2Flac**
```
ffmpeg -i <source-file.wav> \
       -c:a flac ①\
       -y ②\
       -hide_banner \
       <destination-file.flac>
```

① audio codec is flac
② overwrite output file without asking

**convertFlac2Wav**

```
ffmpeg -i <source-file.flac> \
       -y ①\
       -hide_banner \
       <destination-file.wav>
```

① overwrite output file without asking
# hoerbertprocessor.cpp 
**convertToWav**

```
ffmpeg -i <source-file> \
       -acodec pcm_s16le ① \
       -ar 32k ② \
       -ac 1 ③ \
       -metadata title=foo \
       -metadata album=bar \
       -metadata comment=baz \
       -filter:a volume=-1.5dB ④\
       -y ⑤ \
       -hide_banner \
       <destination-file.wav>
```

① audio codec
② audio sampling frequency
③ number of audio channels
④ filter audio based on audio volume
⑤ overwrite output file without asking

**splitPer3Mins**

```
ffmpeg -i <source-file> \
       -acodec pcm_s16le ① \
       -ar 32k ② \
       -ac 1 ③ \
       -metadata title=foo \
       -metadata album=bar \
       -metadata comment=baz \
       -f segment ④ \
       -segment_time <SegmentLength> ⑤ \
       -filter:a volume=-1.5dB ⑥ \
       -y ⑦\
       -hide_banner \
       <destination-file-%1d.wav>
```

① audio codec
② audio sampling frequency
③ number of audio channels
④ force output file format → segment
⑤ segment duration
⑥ filter audio based on audio volume
⑦ overwrite output file without asking

**splitOnSilence**

```
# silence detection
# [silencedetect @ 00000257cfefc880] silence_start: 262.275
# [silencedetect @ 00000257cfefc880] silence_end: 267.782 | silence_duration: 5.50717
ffmpeg -i <source-file> \
       -af silencedetect=n=-50dB:d=1.5 ① \
       -f null ② \
       -y ③ \
       - ④
```

① filter audio. `-af` is an alias for `-filter:a`. `n=` defines noise tolerance. `d=` sets the minimum duration of silence (in seconds) to be reported
② output format is null
③ overwrite output file without asking
④ file name ☺

```
# now split on silence
ffmpeg -i <source-file> \
       -ss <split_start> ① \
       -to <split_end> ②\
       -acodec pcm_s16le ③ \
       -ar 32k ④ \
       -ac 1 ⑤ \
       -metadata title=foo \
       -metadata album=bar \
       -metadata comment=baz \
       -filter:a volume=-1.5dB ⑥\
       -y ⑦\
       <destination-file-X.wav>
```

① start timestamp
② end timestamp
③ audio codec
④ audio sampling frequency
⑤ number of audio channels
⑥ filter audio based on audio volume
⑦ overwrite output file without asking
→ NOTE : splitting points are added in order to prevent segments to have a duration longer than 3 minutes.

**createSilenceWav**

```
ffmpeg -f lavfi ① \
       -i anullsrc=r=32000:cl=mono ② \
       -t <duration> \
       -acodec pcm_s16le ③ \
       -metadata title=foo \
       -metadata album=bar \
       -metadata comment=baz \
       -y ④ \
       <destination-file.wav>
```

① lavfi = Libavfilter input virtual device
② audio null source, with 32000Hz rate, channel_layout mono 
③ audio codec
④ overwrite output file without asking

**changeMetaData**

```
ffmpeg -f lavfi \
       -i anullsrc=r=32000:cl=mono \
       -t <duration> \
       -acodec pcm_s16le \
       -metadata title=foo \
       -metadata album=bar \
       -metadata comment=baz \
       -y \
       <destination-file.wav>
```

→ Note : same as createSilenceWav. It overwrites `<destination-file.wav>`.

```
ffmpeg -i <source-file.WAV> \
       -metadata title=foo \
       -metadata album=bar \
       -metadata comment=baz \
       -codec copy \
       -y \
       <destination-file.WAV>
```

→ Note : after new file generation, destination file is moved to source-file in order to update it.
# playlistview.cpp 
```
ffplay -nodisp ① \
       -loop 0 ② \
       <file-name>
```

① Disable graphical display
② Loops audio playback number times. 0 means forever
# audioinfothread.cpp 
```
ffprobe -i <file-name> \
        -hide_banner \
        -show_format \
        -print_format json \
        -v quiet
```
# cdripper.cpp 
```
freaccmd -e flac \
         -o <DEST_FILE> \
         <SOURCE_PATH>
```

https://www.freac.org/
https://github.com/enzo1982/freac
https://github.com/enzo1982/freac/releases
# audiobookconverter.cpp 
**Chapters information reading**

```
ffmpeg -i m_filePath \
       -hide_banner
```

→ output is then parsed to get info about chapters

**Files are splitted to a tmp dir**

```
ffmpeg -i <file-name>
       -ss <START>
       -to <END>
       -acodec pcm_s16le
       -ar 32k
       -ac 1
       -metadata title=<title>
       -filter:a volume=-1.5dB
       <OUTPUT_PATH>
       -y
       -hide_banner
```

NOTE : see hoerbertprocessor.cpp
