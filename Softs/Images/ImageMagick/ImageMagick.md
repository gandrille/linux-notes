**Sources**
* [ImakeMagick convert documentation](https://www.imagemagick.org/script/convert.php) 
* [Ubuntu documentation [fr](https://doc.ubuntu-fr.org/imagemagick) ]
* [Tips and tricks for using ImageMagick on Linux](https://www.ibm.com/developerworks/library/l-graf2/) 

**NOTE: mitigation of the following error**
```
convert-im6.q16: attempt to perform an operation not allowed by the security policy `PDF' @ error/constitute.c/IsCoderAuthorized/408.
convert-im6.q16: no images defined `image.jpeg' @ error/convert.c/ConvertImageCommand/3258.
```

Inside file `/etc/ImageMagick-6/policy.xml`
Add the following line `<policy domain="coder" rights="read|write" pattern="PDF" />`
# File info 
`identify -verbose <file>`
# Naming 
**Naming**
* `convert source.pdf destination.png` → `destination-0.png`, `destination-1.png`,... 
* `convert source.pdf destination%d.png` → `destination1.png`, `destination2.png`,... 
* `convert source.pdf destination%03d.png` → `destination-000.png`, `destination-001.png`,... 

**Pages restriction**
* `convert source.pdf[1] destination.png` → `destination.png` which is the 2^{nd} page (0 based) 
* `convert source.pdf[1-3] destination.png` → `destination-1.png`, `destination-2.png`, `destination-3.png` 
* `convert source.pdf[1,3] destination.png` → `destination-1.png`, `destination-3.png` 
# Quality, density and scale 
**Quality → compression level**
 [quality documentation](https://www.imagemagick.org/script/command-line-options.php#quality) 
JPEG/MIFF/PNG compression level between 1 (bad quality) and 100 (high quality). Default value (92), 90 or 95 are good values. 
`convert -quality 92 source.pdf[1] destination.jpeg`

**Density → pixels per inch**
 [density documentation](https://www.imagemagick.org/script/command-line-options.php#density) 
Without changing the size of the image, the density changes the number of pixels per inch. Higher density means higher number of pixels for the image. This option is useful to increase text readability. 72 (or 72x72) is the default.
`convert -density 72 source.pdf[1] destination.jpeg`

**Resize → ...**
 [resize documentation](https://www.imagemagick.org/script/command-line-options.php#resize) 
`convert large-square.jpeg -resize 150x150 small-square.jpeg` 

**Scale → ...**
 [scale documentation](https://www.imagemagick.org/script/command-line-options.php#scale) 
`convert -scale` 

**Sample →** ...
 [sample documentation](https://www.imagemagick.org/script/command-line-options.php#sample) 
`convert -sample` resize which does NOT create new color. More compact even if less beautiful.
# Format conversion 
`convert source.png destination.jpeg`

**PNG background : remove alpha and replace with white**
`convert raw-footage.png -background white -alpha remove -flatten -alpha off test1.jpeg`
# Border 
* [border documentation](https://www.imagemagick.org/script/command-line-options.php#border) 
* [bordercolor documentation](https://www.imagemagick.org/script/command-line-options.php#bordercolor) 
* [borderwidth documentation](https://www.imagemagick.org/script/command-line-options.php#borderwidth) 

`convert source.jpeg -bordercolor white -border 50x30 destination.jpeg`
* 50 = right and left border
* 30 = top and bottom border
# Turn transparency into white (NOT black!) 
 [flatten documentation](https://www.imagemagick.org/script/command-line-options.php#flatten) 
Use `-flatten` parameter: `convert source.pdf -flatten destination.jpeg`
# 90° rotation 
 [rotate documentation](https://www.imagemagick.org/script/command-line-options.php#rotate) 
`convert -rotate 90 source.jpeg destination.jpeg`
# Crop file 
 [crop documentation](https://www.imagemagick.org/script/command-line-options.php#crop) 
* `convert source.jpeg -crop 1380x1017+150+0   destination.png`
* `convert source.jpeg -crop '50%x100%+0%+0%'  destination.png`
* `convert source.jpeg -crop '50%x100%+595%'   destination.jpg`
# Text printing on image file 
`convert -size 300x12 -pointsize 9 label:"helloworld" fichier.png`
# Image composition (one on top of the other) 
`composite -compose Over -gravity NorthEast top.png bottom.jpeg result.jpeg`
