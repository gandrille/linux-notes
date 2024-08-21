**Lossless optimization**
GUI
* `trimage` (jpeg & png)
CLI
* jpeg : `jpegoptim`
* png : `pngcrush`
# jpegoptim 
* [GitHub](https://github.com/tjko/jpegoptim) 
* [Man page](https://www.kokkonen.net/tjko/src/man/jpegoptim.txt) 

**Basic usage : overwrite original**
`jpegoptim file.jpg`

**Prints statistics**
`jpegoptim -n sample.jpg`

**Metadata management**
* `--strip-all` Strip  all  (Comment  & Exif) markers from output file. (NOTE! by default only Comment & Exif markers are kept, everything else  is discarded)

* `--strip-com` Strip Comment (COM) markers from output file.
* `--strip-exif` Strip EXIF markers from output file.

**Lossy optimization**
`-m<quality>, --max=<quality>` (Valid values for quality parameter are: 0 - 100)
Sets  the  maximum  image quality factor (disables lossless optimization mode, which is by default  enabled).  This  option  will reduce quality of those source files that were saved using higher quality setting.  While files that  already  have  lower  quality setting  will  be  compressed  using  the  lossless  optimization method.

`-S<size>, --size=<size>`
Try to optimize file  to  given  size  (disables  lossless  optimization mode). Target size is specified either in kilobytes (1 - n) or as percentage (1% - 99%) of the original file size.
