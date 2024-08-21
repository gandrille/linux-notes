Pour afficher du markdown dans firefox, il faut qu'il soit reconnu comme tu texte. On Linux, you'll need to create a new MIME type here:

`~/.local/share/mime/packages/text-markdown.xml`

With the following content:

```
<?xml version="1.0"?>
<mime-info xmlns='http://www.freedesktop.org/standards/shared-mime-info'>
  <mime-type type="text/plain">
	<glob pattern="*.md"/>
	<glob pattern="*.mkd"/>
	<glob pattern="*.markdown"/>
  </mime-type>
</mime-info>
```

Then run: `update-mime-database ~/.local/share/mime`

**Sources**
* https://superuser.com/questions/696361/how-to-get-the-markdown-viewer-addon-of-firefox-to-work-on-linux
* https://github.com/Thiht/markdown-viewer/issues/62#issuecomment-277702230
