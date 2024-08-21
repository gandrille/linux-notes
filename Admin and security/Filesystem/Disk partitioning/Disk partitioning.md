https://en.wikipedia.org/wiki/EFI_system_partition
Sur les systèmes EFI, une partition séparée /boot/efi formatée en FAT est obligatoire.
→ taille: 500M

La partition /boot est une habitude que j’ai conservée. Et ça ne sert à rien de ranger le kernel sur un système de fichiers journalisé. Un collègue gourou m’a expliqué ça en détail un jour, mais je serais incapable de reproduire son explication.
→ taille: 500M

SWAP
→ taille: 1x la RAM
