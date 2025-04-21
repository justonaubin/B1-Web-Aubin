document.getElementById('visitForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const etudes = document.getElementById('etudes').value;
  
    const table = document.getElementById('visiteurs');
    const row = table.insertRow();
    row.innerHTML = `<td>${nom}</td><td>${prenom}</td><td>${etudes}</td>`;
  
    this.reset();
  });
  