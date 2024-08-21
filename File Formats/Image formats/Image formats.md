Source : https://linuxfr.org/news/des-formats-d-image

Les formats d’image classiques datent des années 1990 : après le format GIF en 1987, sont apparus le JPEG en 1992, le PNG en 1996 et le SVG en 1998. Leur adoption progressive s’est faite dans le contexte de la première guerre des navigateurs.

Ces formats couvrant à peu près tous les usages, les choses en sont restées là pendant plus de dix ans. Mais le paysage a commencé à changer dans les années 2010, avec l’introduction d’un nouveau format d’image moderne, WebP, pensé pour répondre à tous les besoins courants et pouvoir supplanter à la fois JPEG et PNG. Depuis, les nouveautés s’enchaînent, avec HEIF en 2015, AVIF en 2019 et JPEG XL en 2022.

Voici de quoi y voir plus clair.
# Formats d'images matricielles 
## GIF – Graphics Interchange Format 
Publié en 1987, avant même l’invention du Web, le format GIF permet de compresser sans perte une image avec une palette comptant au maximum 256 couleur et une transparence tout-ou-rien.

Le format GIF a longtemps été le seul format largement supporté permettant de stocker des animations, et il est resté utilisé pour cela pendant une trentaine d’années. Aujourd’hui, cette fonctionnalité est disponible avec le format WebP, et GIF peut enfin prendre une retraite bien méritée.

GIF est pris en charge par tous les navigateurs et probablement tous les logiciels d’affichage et de traitement d’image. En revanche, ce format ne présente plus aucun intérêt pour un usage courant, puisqu’il a été complètement supplanté par PNG, qui est lui-même ringard.
## JPEG – Joint Photographic Experts Group 
Publié en 1992 comme norme ISO, le format JPEG sert à compresser des photos avec pertes. Il permet de représenter des images en niveau de gris sur 8 bits ou en RVB sur 24 bits. Il ne supporte aucun mode de transparence. Ce format peut être utilisé au sein d’un document PDF, ce qui est utile pour la composition de documents avec des images, par exemple en LaTeX compilé directement en PDF.

JPEG est pris en charge par tous les navigateurs et tous les logiciels d’affichage et de traitement d’image. Ceci dit, ce format ne présente plus aucun intérêt pour la plupart des usages courants, et peut être remplacé par WebP pour les nouvelles images.
## PNG – Portable Network Graphics 
Publié en 1996 par le W3C, le format PNG a été conçu pour remplacer GIF, qui souffrait de limitations techniques et de problèmes de brevets. Il permet de compresser sans perte une image avec une palette de 8 ou 256 couleurs, en niveau de gris sur 1 à 16 bits ou en RVB sur 8 ou 16 bits par canal, avec une transparence optionnelle par canal alpha sur 8 ou 16 bits.

Comme JPEG, ce format peut être utilisé dans un document PDF.

PNG est une recommandation du W3C, également reprise sous la forme d’une RFC puis d’une norme ISO. Il est pris en charge par tous les navigateurs et tous les logiciels d’affichage et de traitement d’image. Ceci dit, ce format ne présente plus aucun intérêt pour la plupart des usages courants, et peut être remplacé par WebP pour les nouvelles images.

Il a également été étendu par deux formats d’animation qui ont longtemps souffert d’une querelle qui explique l’utilisation persistante de l’antique format GIF :

MNG – Multiple-image Network Graphics – initialement supporté par les logiciels Mozilla ;
APNG – Animated PNG – aujourd’hui largement supporté.
## JPEG 2000 
Publié en… 2000, ce format visait à remplacer JPEG, avec une compression plus performante. L’accès payant à sa spécification, ainsi que des soupçons de problèmes de brevets, ont largement contribué à la très faible adoption de ce format.

Ce format a pourtant un intérêt anecdotique, puisqu’à l’instar de JPEG et PNG, il peut être utilisé dans un document PDF.

Le format JPEG 2000 est assez peu connu et donc supporté par peu de logiciels en dehors de ceux spécifiquement conçus avec le souci de pouvoir traiter des images dans un maximum de formats.
## JBIG2 – Joint Bi-level Image Group 
Publié également en 2000, ce format sert à compresser avec ou sans pertes des images en noir et blanc. Il s’agit ici de vrai noir et blanc, et non de niveaux de gris.

Ce rôle très spécifique limite beaucoup son utilisation, mais il reste intéressant pour stocker avec une efficacité redoutable des textes numérisés en très haute définition. Il peut également être intégré dans un document PDF, ce qui est très utile pour l’archivage de documents.

Comme JPEG 2000, JBIG2 est assez peu connu et supporté par peu de logiciels.
## WebP 
En 2010, Google est venu bousculer ce paysage à peu près stable, en proposant un format moderne, conçu pour s’imposer comme une solution universelle.

Dérivé du format vidéo VP8, WebP est donc un format ouvert, qui permet de compresser de façon efficace avec ou sans perte, en RVB sur 24 bits, avec un canal alpha optionnel (à noter que ce dernier peut être compressé sans perte même pour une image compressée avec pertes). Il permet également de stocker des animations.

Aujourd’hui, WebP est pris en charge par tous les navigateurs et par la majorité des logiciels d’affichage et de traitement d’image. Il peut déjà être considéré comme un format universel largement utilisable.
## HEIC – HEVC dans un conteneur HEIF 
Le format HEIF – High Efficiency Image File Format – est un conteneur, principalement conçu pour le stockage d’images compressées avec HEVC — High Efficiency Video Codec. L’ensemble est publié depuis 2015. Il permet de compresser avec ou sans perte, avec un canal alpha optionnel, et supporte les animations.

Ce format est une norme ISO, issue du travail du groupe MPEG, et souffre de problèmes de brevets. Il n’est pris en charge par aucun navigateur et seulement par certains logiciels d’affichage et de traitement d’image.

Ce format a peu de chance de réellement s’imposer, en dehors du cercle de certains environnements logiciels propriétaires spécifiques comme celui d’Apple.
## AVIF – AV1 Image File Format 
Publié en 2019 par l’Alliance for Open Media fondée par Amazon, Google, Cisco, Microsoft, Mozilla et Netflix, ce format utilise le conteneur HEIF pour stocker des images compressées avec AV1. Comme les autres formats modernes, il permet de compresser avec ou sans pertes les images en niveaux de gris et en couleur, avec un canal alpha optionnel, et supporte les animations. Il permet également l’intégration d’un profil de couleurs et le stockage de grandes gammes de couleurs, jusqu’à 12 bits par couleur.

Ce format est ouvert et disponible sans problème de brevet. Il est pris en charge par tous les navigateurs modernes et par certains logiciels d’affichage et de traitement d’image.

Il est peut-être un peu tôt pour en juger, mais ce format pourrait s’imposer avec une prise en charge assez large.
## JPEG XL 
Finalisé en 2022, ce format a été conçu par le groupe JPEG pour remplacer le format JPEG premier du nom. Il supporte l’ensemble des fonctionnalités modernes : niveaux de gris, couleur, alpha optionnel et animations, et apporte des fonctionnalités utiles pour des usages plus avancés, telles que le support des couleurs en CMJN, des espaces de couleurs larges ou encore les grandes gammes dynamiques. Ce format présente également une fonctionnalité qui apparaît particulièrement intéressante pour la compression d’images existantes, puisqu’il permet de recompresser sans nouvelles pertes une image JPEG, avec évidemment un gain d’espace de stockage.

C’est un format ouvert, apparemment disponible sans problème de brevets. Il commence à être pris en charge par des navigateurs, à savoir Firefox nightly et Safari, ainsi que par bon nombre de logiciels d’affichage et de traitement d’image dans leurs versions récentes.

En clair, ce format est un peu trop jeune pour qu’on puisse compter sur une large prise en charge, mais cela viendra sans doute dans les années à venir.
# Formats d’images vectorielles 
## EPS – Encapsulated PostScript 
Conçu par Adobe, le format PostScript encapsulé est dérivé du PostScript, qui a connu son heure de gloire il y a une ou deux décennies, pour le stockage d’images destinées à être intégrées dans un flux de production de documents.

Il était notamment utile pour intégrer des images vectorielles (ou non !) dans un document LaTeX. Il est aujourd’hui largement supplanté pour ces usages par le format PDF.
## PDF – Portable Document Format 
Inutile de présenter le format PDF, également conçu par Adobe, normalisé et très largement répandu. Je préciserai simplement qu’il permet entre autres de stocker des images vectorielles avec transparence. Il est utile dans cet usage pour stocker des schémas destinés à être intégrés dans un document, par exemple un document LaTeX compilé directement en PDF.

En revanche, son usage habituel étant plutôt celui du stockage de documents de plusieurs pages, il n'est pas utilisable pour intégrer des dessins dans une page Web. Il est bien supporté par tous les navigateurs modernes, mais plutôt dans une optique d’intégration de document externe.
## SVG – Scalable Vector Graphics 
Le format SVG a été publié en 1998 par le W3C. C’est le format standard d’images vectorielles, utilisé nativement par nombre de logiciels de dessin. Il est supporté par tous les navigateurs modernes et par la plupart des logiciels d’affichage d’image. Il est supporté par tous les logiciels de dessin vectoriel libre, et probablement également par les logiciels de dessin propriétaire puisqu’il serait assez indécent de fournir un logiciel de dessin qui ne puisse pas au minimum importer ce format standard.
# Outils 
Pour convertir des images d’un format matriciel à un autre, vous pouvez utiliser :

ImageMagick ou GraphicsMagick ;
les outils spécialisés pour chaque format, par exemple ceux de WebP.
Pour stocker des images matricielles JPEG, PNG ou JPEG 2000 en PDF, sans recodage, vous pouvez utiliser img2pdf. Je ne connais pas de solution simple pour stocker une image JBIG2 dans un document PDF. Pour convertir des dessins vectoriels en PDF, le plus simple est d’utiliser la fonctionnalité d’export PDF de son logiciel de dessin vectoriel. Celle d’Inkscape est utilisable en ligne de commande.
# Conclusion 
## Photos 
Pour stocker une photo existante, gardez l’image JPEG existante. Si vous avez des contraintes de stockage, utilisez JPEG XL. Pour publier une photo ou une création, oubliez JPEG et utilisez WebP. Ou, si vous voulez faire moderne, AVIF.
N’utilisez pas HEIC, ce format n’a pas été correctement conçu pour s’imposer et fait déjà partie des perdants.
## Photos détourées 
Pour stocker et diffuser une photo avec de la transparence (votre visage ?), utilisez WebP. Ou, si vous voulez faire dans la modernité, AVIF. Oubliez PNG, ce format n’est pas adapté et n’était utile dans ce domaine qu’avant l’arrivée de WebP qui a l’avantage d’être vraiment adapté à cet usage.
## Dessins, BD, … 
Pour stocker une image existante, vous pouvez bien garder le PNG existant. Si vous avez des contraintes de stockage, utilisez JPEG XL. Pour publier une image existante ou une création, utilisez WebP ou AVIF. Oubliez PNG, WebP en mode sans perte est juste mieux.
## Dessins et schémas vectoriels 
Pour le stockage comme pour la publication d’images vectorielles, le format standard SVG est presque toujours la meilleure option, sinon la seule. Si vous voulez utiliser un schéma dans un document LaTeX, le mieux est de l’exporter en PDF, en conservant le SVG original. Oubliez le PostScript encapsulé, ce format a été complètement supplanté par PDF pour ses cas d’usage.
