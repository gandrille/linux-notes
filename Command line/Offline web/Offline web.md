**wget images sur une page web**
`wget -nd --span-hosts --page-requisites --accept jpg,jpeg,png,gif,webp -e robots=off https://korben.info`

**Mirror d'un site web**
`wget -m http://www.example.com/`

**All in one webpage**
`docker run capsulecode/singlefile https://www.wikipedia.org`
