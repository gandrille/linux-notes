* [Convert Filenames to Lowercase through Ubuntu Command Line](https://vitux.com/convert-filenames-to-lowercase-through-ubuntu-command-line/) 
* [How to Replace Spaces in Filenames with Underscores on the Linux Shell](https://vitux.com/how-to-replace-spaces-in-filenames-with-underscores-on-the-linux-shell/) 
# Ligne de commande 
**Script**

```
for fichier in "$@"; do
  echo "$fichier"
done
```

**Avec un find et xargs**

`find ... -print0 | xargs -0 ...`
# Accents 
`unaccent UTF-8`
