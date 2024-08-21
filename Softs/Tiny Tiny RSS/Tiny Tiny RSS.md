Here is how to install tt-rss on a managed PHP server hosted, for instance, by OVH. According to the documentation, host installations are not supported starting 2021.

* https://tt-rss.org
* [Installation notes](https://tt-rss.org/wiki/InstallationNotesHost) 
* [Feedly compact theme](https://github.com/levito/tt-rss-feedly-theme) 
# 1. Preparation 
Before you start tt-rss installation, you need to find two key informations:
* The available php release on your host
* The associated php path to the executable

To know thoses two informations, you can use lftp. An alternative is to run a cron command (with a non existing file). The information will be displayed inside the error logs ☺ 

`lftp sftp://ovhusername@ftp.cluster0XX.hosting.ovh.net -e "cd www; ls /usr/local; quit"`

In my situation, here is what I have:
```
drwxr-xr-x   17 root     root         4096 Jan 10 13:09 .
drwxr-xr-x   13 root     root         4096 Sep 20 16:44 ..
drwxr-xr-x    2 root     root         4096 Nov 17 13:51 bin
drwxr-xr-x    2 root     root         4096 Sep 20 16:44 etc
drwxr-xr-x    2 root     root         4096 Sep 20 16:44 games
drwxr-xr-x    2 root     root         4096 Sep 20 16:44 include
drwxr-xr-x    4 root     root         4096 Nov 17 13:56 lib
lrwxrwxrwx    1 root     root            9 Sep 20 16:44 man
drwxr-xr-x   10 root     root         4096 Nov 17 13:51 pear
drwxr-xr-x    7 root     root         4096 Nov 17 13:56 php-config
drwxr-xr-x    8 root     root         4096 Mar  1  2022 php7.3
drwxr-xr-x    8 root     root         4096 Mar  1  2022 php7.4
drwxr-xr-x    8 root     root         4096 Mar  1  2022 php8.0
drwxr-xr-x    8 root     root         4096 Mar  1  2022 php8.1
drwxr-xr-x    8 root     root         4096 Jan 10 13:08 php8.2
drwxr-xr-x    2 root     root         4096 Sep 20 16:44 sbin
drwxr-xr-x    6 root     root         4096 Sep 20 16:49 share
drwxr-xr-x    2 root     root         4096 Sep 20 16:44 src
```

→ So, let's use PHP 8.2
→ my php executable is `/usr/local/php8.2/bin/php`
# 2. Clone source repository and upload code to the server 
`git clone...` (see [documentation](https://tt-rss.org/wiki/InstallationNotesHost) )
# 3. Edit configuration 
Copy `config.php-dist` to `config.php`
Define mandatory global settings below and any other you need changed. This is the absolute minimum required to be set:

```
<?php
	putenv('TTRSS_DB_TYPE=mysql');
	putenv('TTRSS_DB_HOST=....mysql.db');
	putenv('TTRSS_DB_USER=...');
	putenv('TTRSS_DB_NAME=...');
	putenv('TTRSS_DB_PASS=...');
	putenv('TTRSS_DB_PORT=3306');
	putenv('TTRSS_SELF_URL_PATH=https://my-domain.com/tt-rss');
	putenv('TTRSS_PHP_EXECUTABLE=/usr/local/php8.2/bin/php');
```

Note: you can have a look at the [source code](https://git.tt-rss.org/fox/tt-rss.git/tree/classes/config.php) to see the full list of env variables.
# 4. Create a lancher and upload it to initialize database schema 
Create a `launcher.php` file with a content like this one:

```
#!/usr/bin/env php
<?php
system('/usr/local/phpX.X/bin/php /home/username/www/tt-rss/update.php --update-schema');
?>
```

Run it using crontab.
# 5. Update feeds 
https://tt-rss.org/wiki/UpdatingFeeds

Update the `launcher.php` file with a content like this one:

```
#!/usr/bin/env php
<?php
system('/usr/local/phpX.X/bin/php /home/username/www/tt-rss/update.php --feeds --quiet');
?>
```

Run it using crontab.
