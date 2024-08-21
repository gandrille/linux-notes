==Using any tool for removing metadata does NOT mean that all metadata will be removed...==
# General purpose toolkit 
**MAT = Metadata Anonymisation Toolkit**

* [MAT v1 (deprecated)](https://mat.boum.org/) 
* [MAT v2](https://0xacab.org/jvoisin/mat2) (debian package `mat2`)

**Metadata Cleaner**

* https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner
→ Available with Flatpack.
# Exif 
 [Exchangeable image file format](https://en.wikipedia.org/wiki/Exif) 
## Exiv2 
`exiv2 package`
* Display metadata: `exiv2 file.jpg`
* Remove metadata: `exiv2 rm file.jpg` 
## Exiftool-perl 
To edit/remove Exif data from images: `libimage-exiftool-perl` package
`sudo apt-get install libimage-exiftool-perl`

To remove all Exif data from an image: `exiftool -all= image.jpg`
(there is a space after the equal symbol).

`exiftool -gps:all= -make= -model= -alldates= -lensmake= -lens= -lensmodel= -scene= -fnumber= -exposuretime= -iso= -focallength= -shutter=`
## Photini 
* [Read the docs](https://photini.readthedocs.io) 
* [GitHub](https://github.com/jim-easterbrook/Photini) 

**Installation**
```
sudo apt install python3-pip
sudo apt install gir1.2-gexiv2-0.10
pip3 install -U photini
```
# Exif cleaner 
https://exifcleaner.com/
# Adobe XMP 
* [Extensible Metadata Platform](https://en.wikipedia.org/wiki/Extensible_Metadata_Platform) 
* https://www.adobe.com/products/xmp.html
