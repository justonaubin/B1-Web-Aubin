function calculerDevis() {
    const surface = parseFloat(document.getElementById('surface').value);
    const epaisseur = parseFloat(document.getElementById('epaisseur').value);

    const nomClient = document.getElementById('nomClient').value;
    const telClient = document.getElementById('telClient').value;
    const adresseClient = document.getElementById('adresseClient').value;

    if (!nomClient || !telClient || !adresseClient || surface <= 0 || epaisseur < 15 || epaisseur > 35) {
        alert("Veuillez remplir correctement toutes les informations.");
        return;
    }

    document.getElementById('clientNom').textContent = nomClient;
    document.getElementById('clientTel').textContent = telClient;
    document.getElementById('clientAdresse').textContent = adresseClient;

    const volume = surface * (epaisseur / 100);
    const camions = Math.ceil(volume / 9);

    const prixVolume = volume * 91;
    const prixLivraison = camions * 140;

    const sousTotal = prixVolume + prixLivraison;
    const tva = sousTotal * 0.20;
    const total = sousTotal + tva;

    document.getElementById('quantiteVolume').textContent = volume.toFixed(2);
    document.getElementById('totalVolume').textContent = prixVolume.toFixed(2) + ' €';
    document.getElementById('nbCamions').textContent = camions;
    document.getElementById('totalLivraison').textContent = prixLivraison.toFixed(2) + ' €';
    document.getElementById('sousTotal').textContent = sousTotal.toFixed(2) + ' €';
    document.getElementById('tva').textContent = tva.toFixed(2) + ' €';
    document.getElementById('total').textContent = total.toFixed(2) + ' €';

    document.getElementById('dateDevis').textContent = new Date().toLocaleDateString('fr-FR');
    document.getElementById('numDevis').textContent = genererNumeroDevis();
    document.getElementById('resultat').classList.remove('hidden');

    document.getElementById('formSection').classList.add('hidden');
    document.getElementById('devisSection').classList.remove('hidden');
}

function genererNumeroDevis() {
    let numero = localStorage.getItem("dernierDevis") || 12345;
    numero = parseInt(numero) + 1;
    localStorage.setItem("dernierDevis", numero);
    return numero;
}

window.onload = function () {
    document.getElementById('numDevis').textContent = genererNumeroDevis();
};
