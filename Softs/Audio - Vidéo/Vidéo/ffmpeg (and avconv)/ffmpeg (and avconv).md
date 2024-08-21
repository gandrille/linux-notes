2020 [Generating a crossfaded slideshow video from images with ffmpeg and melt](https://advancedweb.hu/generating-a-crossfaded-slideshow-video-from-images-with-ffmpeg-and-melt/) → see also https://github.com/mifi/editly
# GUI frontend 
https://mystiqapp.com/
# ffmpeg help 
**Online resources**
* [Official Wiki](https://trac.ffmpeg.org/wiki) 
* [H.264 Video Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264) 
* [Convert an AVCHD / MTS file to MP4 using ffmpeg](https://www.reeltoreel.nl/wiki/index.php/Convert_an_AVCHD_/_MTS_file_to_MP4_using_ffmpeg) 

**Man pages**
* `man ffmpeg`
* `man ffmpeg-all`
* `ffmpeg -h encoder=libx264 -hide_banner`
* `ffmpeg -h full`

`ffmpeg -codecs`

```
Codecs:
 D..... = Decoding supported
 .E.... = Encoding supported
 ..V... = Video codec
 ..A... = Audio codec
 ..S... = Subtitle codec
 ...I.. = Intra frame-only codec
 ....L. = Lossy compression
 .....S = Lossless compression
```
# File infos 
* Avec [ffprobe](https://ffmpeg.org/ffprobe.html) 
	* `ffprobe -i file_name  -hide_banner`
	* `ffprobe -i file_name -v quiet -print_format json -show_format -show_streams`
Sinon : `ffmpeg -i file_name -hide_banner`
# 1 image → 1 video 
If you want to create a video out of just one image, this will do (output video duration is set to 30 seconds with `-t 30`)
`ffmpeg -loop 1 -i img.png -c:v libx264 -t 30 -pix_fmt yuv420p out.mp4`
# x images → 1 video (Stop motion) 
**In order to speedup image processing, you can first do the following**
`mogrify -auto-orient -resize 1024x768! *.JPG`

**Video generation**
`ffmpeg -f image2 -pattern_type glob -r 4 -i '*.JPG' -vcodec mpeg4 -b 15000k video.mp4`

* `-f image2` not required, but maybe a good idea to write it (!?)
* `-pattern_type glob` use blob pattern for input files
* `-r 4` number of images per second (rate)
* `-i '*.JPG`' input file names with glob pattern
* `-vcodec mpeg4` video codec
* `-b 15000k` bitrate. 30000k can be a nice value as well.

Tip
* `-start_number 1` default for file names interpolation

**Sources**
* [How do I encode single pictures into movies?](https://ffmpeg.org/faq.html#How-do-I-encode-single-pictures-into-movies_003f) 
* [Transformer une séquence d’images en une vidéo avec ffmpeg](https://www.lemondedustopmotion.fr/news/voir/7/Transformer_une_squence_dimages_en_une_vido_avec_ffmpeg) 
* [Stop-motion with ffmpeg](https://lukecyca.com/2013/stop-motion-with-ffmpeg.html) 
# 1 image + 1 audio file → 1 video 
`ffmpeg -f image2 -loop 1 -i image.jpg -i audio.wav -c:v libx264 -tune stillimage -c:a aac -strict experimental -b:a 192k -shortest out.mp4`

This would use the `libx264` encoder and provide you with better compression than the MJPEG codec. The audio is AAC, with the built-in ffmpeg AAC encoder.
# 1 video + 1 audio file → 1 video 
`ffmpeg -i audio.wav -i video.avi final.mpg`
# Concat 
You can also use ffmpeg to concatenate multiple videos into one long video. Start by transcoding all the individual videos into MPEG format, all with exactly the same bit rates, codecs, image resolutions, frame rates etc. Mistakes can be avoided by using one of ffmpeg's predefined targets such as ntsc-dvd or pal-dvd. Once that's done, simply string the resulting .mpg files together using "cat" and redirect the output to another .mpg file. Now, the timestamps inside the resulting, big .mpg file are all going to be messed up, so you'll have to process the big .mpg file with ffmpeg again. This will have the effect of putting the timestamps right. 

* http://ffmpeg.org/faq.html#How-can-I-concatenate-video-files
* https://trac.ffmpeg.org/wiki/Concatenate
# Découper une vidéo 
`ffmpeg -i source.mp4 -codec:v libx264 -codec:a copy -codec:d copy -ss 00:10:21 -to 00:12:44.250 destination.mp4`

* `-i source.mp4` source file
* `-codec:v libx264` video codec. Important : `copy` does not reencodes the video... which may cause some issues during the first seconds of the video.
* `-codec:a copy` audio codec
* `-codec:d copy` data codec
* `-ss` start timestamp
* `-to` end timestamp. Can be replaced by `-t <duration>` 
# Retourner à 180° une vidéo 
`avconv -i original.mp4 -vf "hflip,vflip" -codec:v libx264 -preset slow -crf 20 -codec:a copy flipped.mp4`

Notice the `-crf` option. That sets the output quality. It goes from 0 (lossless) upwards logarithmically. You'll probably want a value between 19 and 25 in most cases. -preset sets the speed of the encoding, either "slow", "medium", or "fast". Slow should get you smaller file sizes with an obvious tradeoff. You should adjust `-codec:v` to match the original. If you don't set these options you'll get the defaults, which don't work well when flipping iphone video.
# Conversion de formats 
## ogv to avi 
`ffmpeg -i input.ogv -qscale:v 1 output.avi`
* `-qscale:v` 1 Note : qscale is codec-dependent. Ici entre 1 (haute qualité) et 31 (basse qualité)
## mov to mp4 
`ffmpeg -i input.mov -codec:v libx264 -b:v 1500k -g 30 output.mp4`

**to be tested...**
`ffmpeg -i input.mov -codec:v h264 -codec:a aac -strict -2 output.mp4`
`ffmpeg -i input.mov -b 1500k -codec:v libx264 -vpre slow -vpre baseline -g 30 output.mp4`
## mov to WebM 
`ffmpeg -i input.mov -codec:v vp8 -c:a libvorbis output.webm`
**to be tested**
`ffmpeg -i input.mov -codec:v libvpx -crf 10 -b:v 1M -codec:a libvorbis output.webm`
`ffmpeg -i input.mov -b 1500k -codec:v libvpx -codec:a libvorbis -ab 160000 -f webm -g 30 output.webm`
## mov to ogg 
**to be tested...**
`ffmpeg -i input.mov -codec:v libtheora -qscale:v 7 -codec:a libvorbis -qscale:a 5 output.ogv`
`ffmpeg -i input.mov -b 1500k -vcodec libtheora -acodec libvorbis -ab 160000 -g 30 output.ogv`
