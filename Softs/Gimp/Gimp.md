# Autocrop PNG images 
Source: [Batch Autocrop png Images in Gimp](https://www.joelotz.com/blog/2020/batch-autocrop-png-images-in-gimp.html) 

**1. Find the script folder**
Open Gimp and within the top menu bar select Edit\Preferences\Folders, expand Folders out and Select "Scripts".
for instance: `~/.config/GIMP/2.10/scripts`

**2. Create the following script (batch-autocrop.scm)**
```
(define (batch-autocrop pattern)
  (let* ((filelist (cadr (file-glob pattern 1))))
	(while (not (null? filelist))
		   (let* ((filename (car filelist))
				  (image (car (gimp-file-load RUN-NONINTERACTIVE
											  filename filename)))
				  (drawable (car (gimp-image-get-active-layer image))))

			 (plug-in-autocrop RUN-NONINTERACTIVE
								   image drawable)

			 (gimp-file-save RUN-NONINTERACTIVE
							 image drawable filename filename)
			 (gimp-image-delete image))
		   (set! filelist (cdr filelist)))))
```

**3. Run the script!**
`gimp -i -b '(batch-autocrop "*.png")' -b '(gimp-quit 0)`'
