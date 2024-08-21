Note: `xmllint` is provided by `libxml2-utils` package.

**Pretty print**
`echo '<root><foo a="b">lorem</foo><bar value="ipsum" /></root>' | xmllint --format -`

**Web scraping XPath**
`cat test.html | xmllint --html --xpath "//link[@rel][@href]" -`

```
<link rel="shortcut icon" href="http://example.com/myicon.ico" />
<link rel="icon" type="image/vnd.microsoft.icon" href="http://example.com/image.ico" />
<link rel="icon" type="image/x-icon" href="http://example.com/image.ico" />
<link rel="icon" href="http://example.com/image.ico" />
<link rel="icon" type="image/gif" href="http://example.com/image.gif" />
<link rel="icon" type="image/png" href="http://example.com/image.png" />

<link rel="icon" type="image/png" href="favicon.png" />
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

<link rel="apple-touch-icon" href="somepath/image.png" />
<link rel="apple-touch-icon-precomposed" href="somepath/image.png" />
```
