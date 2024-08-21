See also: [poppler-utils](https://en.wikipedia.org/wiki/Poppler_(software)#poppler-utils) 

https://github.com/Stirling-Tools/Stirling-PDF
# Booklet creation 
## Using bookletimposer (GUI and CLI) 
* Package: `bookletimposer`
* [bookletimposer website](http://kjo.herbesfolles.org/bookletimposer/) 

**Converts in.pdf into a booklet with two pages per sheet an saves the result as out.pdf**
`bookletimposer --no-gui --booklet --pages-per-sheet=2x1 --output=out.pdf in.pdf`

**Converts the two-pages-per-sheet booklet in.pdf into a page-by-page PDF**
`bookletimposer --no-gui --linearise --pages-per-sheet=2x1 in.pdf`
As the output file name is not defined, it will default to in-conv.pdf.
## Using pdfbook2 (CLI only) 
* Package `texlive-extra-utils`
* [pdfbook2 website](https://www.ctan.org/pkg/pdfbook2) 

`pdfbook2 input.pdf` → generates input-book.pdf
## Using jPdf tweek (GUI only) 
* [jPdf tweak website](http://jpdftweak.sourceforge.net/) 

Old Java program, which still does it job well.
# Multiple pages per output page (for economical printing) 
## Using bookletimposer 
* Package: `bookletimposer`
* [bookletimposer website](http://kjo.herbesfolles.org/bookletimposer/) 
* `bookletimposer --no-gui -o output.pdf --no-reorganisation -p 2x2 input.pdf` 
## Using pdfjam 
* Package: `texlive-extra-utils`
* `pdfjam --suffix multi --nup 2x2 --frame true --delta "0.5cm 0.5cm" --a4paper --landscape --scale 0.95 input.pdf`
	* `--suffix multi` suffix used for output file generation
	* `--nup 2x2` grid to be used
	* `--frame true` draw a border around every input page
	* `--delta "0.5cm 0.5cm"` space between slides, NOT arround all of them (margin)
	* `--a4paper` papaer size
	* `--landscape` rotation mode
	* `--scale 0.93` this is a way for addind a border around all the slides
		* `0.93` → `29.7*(1-93%)/2=1,0395cm` de marge à droite et à gauche
	* `input.pdf`

**With page numbering**

```
pdfjam \
  --preamble "\RequirePackage[a4paper,top=2cm,left=2cm,right=2cm,bottom=2cm]{geometry} \usepackage{fancyhdr} \renewcommand{\headrulewidth}{0pt} \pagestyle{fancy} \cfoot{\thepage}" \
  --pagecommand "{}" \
  --suffix multi \
  --nup 2x2 \
  --frame true \
  --delta "0.5cm 0.5cm" \
  --a4paper --landscape \
  --scale 0.93 \
  file1.png file2.png
```
# Remove password protection 
`qpdf --password=mySecret --decrypt  input.pdf output.pdf`
# Multiple pages per output page (for notes taking) 
**Using pdfjam**
* Package: `texlive-extra-utils`
* `pdfjam --suffix 3up --nup 1x3 --frame true --noautoscale false --delta "0cm 3cm" --a4paper --scale 0.7 --offset "-3cm 0.2cm" slides.pdf` 

**Using pdfxup**
* Package: `texlive-extra-utils`
* `pdfxup -x 2 -y 2 -im 0pt -m 30pt -is 10pt -fw .3pt slides.pdf` 
# One file per page 
`qpdf --split-pages input.pdf output-%d.pdf`
# Subset of pages 
**Using qpdf**
* Package: `qpdf`
* [manual](http://qpdf.sourceforge.net/files/qpdf-manual.html) 

`qpdf input.pdf --pages . 1-10 -- output.pdf`
* `--pages` → [see Page Selection Options](http://qpdf.sourceforge.net/files/qpdf-manual.html#ref.page-selection) 
* the shortcut `.` (instead of input.pdf) requires qpdf 8.4

**Using pdfjam (only portrait with this example)**
* Package: `texlive-extra-utils`
* `pdfjam all.pdf 5-10 -o output.pdf`

**Using pdfseparate (one page per pdf)**
* Package: `poppler-utils`
* `pdfseparate -f 1 -l 10 all.pdf output%d.pdf`
# Pages reordered 
`qpdf input.pdf --pages . 10,9,8,7,6,5,4,3,2,1 -- output.pdf`
# File concatenation 
**Using pdfunite**
* Package: `poppler-utils`
* `pdfunite source1.pdf source2.pdf source3.pdf destination.pdf`
# pdf → text 
* package: `poppler-utils`
* `pdftotext`
# images → pdf 
See [[ImageMagick]] .

Other solution: `img2pdf input1.png input2.png -o output.pdf`
# pdf → images 
See [[ImageMagick]] .
# Images extraction from a pdf file 
As jpeg images : `pdfimages -j file.pdf perfix-for-images`
As png images : `pdfimages -png file.pdf perfix-for-images`
# Office document → pdf (using Libre Office) 
Package: `libreoffice-writer`
`lowriter --convert-to pdf filename.doc`
`lowriter --convert-to pdf filename.docx`
