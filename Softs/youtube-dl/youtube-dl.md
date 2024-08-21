* Executable: `wget https://yt-dl.org/downloads/latest/youtube-dl`
* [Supported sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html) 

**Forks with additional features and fixes**
* https://github.com/yt-dlp/yt-dlp
# GUI 
 [youtube-dl-gui](https://mrs0m30n3.github.io/youtube-dl-gui/) ( [GitHub](https://github.com/MrS0m30n3/youtube-dl-gui) )
# mp3 dl 
nécessite le package `python3-setuptools`
https://github.com/deepjyoti30/ytmdl
https://korben.info/ytmdl-une-application-pour-recuperer-des-mp3-a-partir-de-youtube-et-les-tagger-au-bon-format-grace-aux-donnees-de-itunes.html
# CLI basic 
**sources**
* [Full documentation](https://github.com/ytdl-org/youtube-dl/blob/master/README.md) 
* [korben.info](https://korben.info/comment-utiliser-et-maitriser-youtube-dl-pour-telecharger-des-videos-comme-un-champion.html) 

**Télécharger une vidéo ou une playlist**
`youtube-dl URL_DE_LA_VIDEO_OU_DE_LA_PLAYLIST`

**Reprendre un téléchargement interrompu**
`youtube-dl -cwi URL_DE_LA_VIDEO`

**Télécharger plusieurs vidéos**
`youtube-dl URL_DE_LA_VIDEO URL_DE_LA_VIDEO2 URL_DE_LA_VIDEO3`
`youtube-dl -a url.txt`

**Ignore errors**
use `-i` flag

**Lister (sans les télécharger) les vidéos d'une playlist ou d'un channel**
 `youtube-dl -o "%(id)s %(duration)s %(title)s" --get-filename <url>`

**Télécharger uniquement l’audio**
`youtuble-dl -x URL_DE_LA_VIDEO`
`youtuble-dl -x --audio-format mp3 URL_DE_LA_VIDEO`
# CLI Sécurité 
**Télécharger une vidéo ou une playlist protégée par mot de passe**
`youtube-dl -u NOM_UTILISATEUR -p MOT_DE_PASSE -o URL_DE_LA_VIDEO`

**Télécharger une vidéo bloquée selon le site d'origine**
`youtube-dl URL-VIDEO --referer URL-SITE-ORIGINE`
# CLI nom du fichier destination 
**Personnaliser le nom de la vidéo que vous téléchargez**
* id (string): Video identifier
* title (string): Video title
* url (string): Video URL
* ext (string): Video filename extension
* alt_title (string): A secondary title of the video
* display_id (string): An alternative identifier for the video
* uploader (string): Full name of the video uploader
* license (string): License name the video is licensed under
* creator (string): The creator of the video
* release_date (string): The date (YYYYMMDD) when the video was released
* timestamp (numeric): UNIX timestamp of the moment the video became available
* upload_date (string): Video upload date (YYYYMMDD)
* uploader_id (string): Nickname or id of the video uploader
* channel (string): Full name of the channel the video is uploaded on
* channel_id (string): Id of the channel
* ... and many more!

`youtube-dl -o '%(title)s.%(ext)s' URL_DE_LA_VIDEO --restrict-filenames`
« restrict-filenames » est important, car il permet d’éliminer les caractères exotiques.
# CLI playlist 
**Télécharger toutes les vidéos d’une playlist dans un dossier et les numéroter**
`youtube-dl -o '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s' https://www.youtube.com/playlist?list=ID_DE_LA_PLAYLIST`

**Télécharger certaines vidéos d’une playlist**
`youtube-dl --playlist-items XX URL_DE_LA_PLAYLIST`
`youtube-dl --playlist-items XX YY ZZ AA BB URL_DE_LA_PLAYLIST`

**Pour télécharger les vidéos d’une playlist en commençant à la XXème**
`youtube-dl --playlist-start XX URL_DE_LA_PLAYLIST`

**Pour télécharger les vidéos d’une playlist en précisant un début et une fin de numéro de vidéos**
`youtube-dl --playlist-start XX --playlist-end YY URL_DE_LA_PLAYLIST`

**Télécharger des vidéos sorties avant, après ou à une certaine date**
`youtube-dl --date YYYYMMDD URL_DE_LA_PLAYLIST`
`youtube-dl --datebefore YYYYMMDD URL_DE_LA_PLAYLIST`
`youtube-dl --dateafter YYYYMMDD URL_DE_LA_PLAYLIST`
`youtube-dl --dateafter YYYYMMDD --datebefore YYYYMMDD URL_DE_LA_PLAYLIST`
`youtube-dl --dateafter now-6months URL_DE_LA_PLAYLIST`
Pattern: `(now|today)[+-][0-9](day|week|month|year)(s)?`

**Télécharger les vidéos d’une certaine taille**
`youtube-dl --min-filesize 100M URL_DE_LA_PLAYLIST`
`youtube-dl --max-filesize 100M URL_DE_LA_PLAYLIST`
# CLI Sous-titres 
**Comment télécharger les sous-titres**
`youtube-dl --all-subs --skip-download URL_DE_LA_VIDEO`

**Et si vous n’en voulez qu’un, il faut lister les sous-titres disponibles. Pour cela faites un**
`youtube-dl --list-subs URL_DE_LA_VIDEO`
Vous verrez alors une liste de sous-titres disponibles dans tout un tas de langages et de formats.
Ensuite pour télécharger la vidéo avec ses sous-titres dans la langue de votre choix. Remplacez XX par le code de la langue (en, fr, de…etc.)
`youtube-dl --write-sub --sub-lang 'XX' URL_DE_LA_VIDEO`
# CLI Infos, qualité et formats,... 
**Télécharger une vidéo et les informations liées (vignette, description…etc.)**
`youtube-dl --write-description --write-info-json --write-annotations --write-sub --write-thumbnail URL_DE_LA_VIDEO`

**Télécharger une vidéo dans une qualité spécifique**
* Il faut d’abord lister les formats proposés avec la commande: `youtube-dl -F URL_DE_LA_VIDEO`
* Puis : `youtube-dl -f NUMERO_FORMAT_CODE URL_DE_LA_VIDEO`

Ou bien `youtube-dl -f PARAM_DE_QUALITE URL_DE_LA_VIDEO`
En remplaçant PARAM_DE_QUALITE par l’un de ces paramètres :
* best – La meilleure qualité vidéo et audio disponible
* worst – La pire qualité vidéo et audio disponible
* bestvideo – La meilleure qualité vidéo disponible
* worstvideo – La pire qualité vidéo disponible
* bestaudio – La meilleure qualité audio disponible
* worstaudio – La pire qualité vidéo disponible

**Télécharger une vidéo ou une playlist au format MP4**
`youtube-dl -f mp4 URL_DE_LA_VIDEO`
# Subtitles 
avec le package `mkvtoolnix`

youtube-dl --write-subs --sub-langs "fr" $url
mkvmerge -o a.mkv  --default-track 0 --language 0:fr ARTE\ Reportage\ \[112233-000-A\].fr.vtt ARTE\ Reportage\ \[112233-000-A\].mp4 
