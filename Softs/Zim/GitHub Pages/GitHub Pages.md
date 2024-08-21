# The issue 
Since Zim is building static website, you can host the generated content on [GitHub pages](https://pages.github.com/) .

If you are using a template which provides [resources](http://zim-wiki.org/manual/Help/Templates.html) , all the resources will be copied to a `_resources` folder in the static website. And since GitHub pages is using [Jekyll](https://jekyllrb.com/) , all the files and folder names starting with an underscore are ignored during the generation process… That's why, your `_resource` directory will be ignored in GitHub pages.
# The "solution"… which does not work actually! 
Since the issue is well known, [GitHub provides a walkaround](https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/) . You can turn off Jeckyll by adding a .nojekyll file in the root path of the repository. It solves our issue… but now, you can't use the compression anymore !
That's why all modern browsers will not be able to access some ressources… whereas curl can.
This souds incredible, but depending if you are using the `--compress` flag with curl, you obtain a 200 or 404 error code.
# The solution 
Fortunately, [GitHub provides another walkaround](https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/) . We can tell Jeckyll to parse `_resources` folder as any other standard folder. To do this, just add an `_config.yml `file in the root path of the repository with the following content : `include: _resources`

And now, everything works as expected!
