
```
#!/bin/bash

while true; do
  semaine=$(date --date "$(($(date '+%u') - 1)) day ago" "+%Y-%m-%d")
  url="https://rdv.pointvision.com/ajax/rdv_disponible_calendar_ajax.php?idtyperdv=19&idlieux=41&idp=0&datesemaine=$semaine&nbpersonne=1&provenance=web&&useAnonyme=ok"
  nb=$(curl -s "$url" | grep "Aucun rendez vous disponible" | wc -l)
  if [[ $nb -eq 1 ]]; then
    echo $(date) pas de nouveaux créneaux
  else
    echo "$(date) nouveaux créneaux ouverts sur https://www.pointvision.com/grenoble/rdv/?reason=19#/"
    notify-send -i messagebox_info "Point vision" "Les créneaux de RDV sont ouverts !!!!!"
  fi
  sleep 600
done  
```

