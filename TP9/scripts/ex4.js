function calendrier(premierJour, mois, annee, taille = "moyen", fond = "#fff", texte = "#000") {
    const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const nbJours = new Date(annee, mois, 0).getDate(); // dernier jour du mois
  
    let html = `<table class="calendrier calendrier-${taille}" style="background:${fond}; color:${texte}">`;
    html += `<caption><strong>${getNomMois(mois)} ${annee}</strong></caption>`;
    html += "<tr>" + jours.map(j => `<th>${j}</th>`).join("") + "</tr><tr>";
  
    for (let i = 1; i < premierJour; i++) html += "<td></td>";
  
    for (let j = 1; j <= nbJours; j++) {
      html += `<td>${j}</td>`;
      if ((j + premierJour - 1) % 7 === 0) html += "</tr><tr>";
    }
  
    html += "</tr></table>";
    return html;
  }
  
  function getNomMois(mois) {
    const noms = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return noms[mois - 1];
  }
  
  document.getElementById("calendar-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const premierJour = parseInt(document.getElementById("jour").value);
    const mois = parseInt(document.getElementById("mois").value);
    const annee = parseInt(document.getElementById("annee").value);
    const taille = document.getElementById("taille").value;
    const fond = document.getElementById("fond").value;
    const texte = document.getElementById("texte").value;
  
    const html = calendrier(premierJour, mois, annee, taille, fond, texte);
    document.getElementById("calendrier-container").innerHTML = html;
  });
  