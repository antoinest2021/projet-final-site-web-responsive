$(document).ready(function() {
    console.log("Tableau de bord script chargé");

    // Protection de la page + lecture des données de l'utilisateur connecté
    const utilisateurJSON = sessionStorage.getItem("utilisateurConnecte");
    if (!utilisateurJSON) {
        window.location.href = "connexion.html";
        return;
    }
    const utilisateur = JSON.parse(utilisateurJSON);

    // Affichage des infos du profil
    document.getElementById('profilNom').textContent = utilisateur.nom;
    document.getElementById('profilCourriel').textContent = utilisateur.courriel;
    document.getElementById('profilNumeroClient').textContent = utilisateur.numeroClient;
    document.getElementById('profilMembreDepuis').textContent = utilisateur.membreDepuis;
    document.getElementById('profilAdresse').textContent = utilisateur.adresse;
    document.getElementById('profilTelephone').textContent = utilisateur.telephone;
    document.getElementById('profilStatut').textContent = utilisateur.statut;

//-- script affichage compte--//


//-- script Flexycarte--//

const soldeFlexyCarte = 607.13;

document.getElementById('soldeCarteAffiche').textContent = soldeFlexyCarte.toFixed(2) + ' $';
document.getElementById('soldeCarteModal').textContent = soldeFlexyCarte.toFixed(2) + ' $';
document.getElementById('montantPaiement').value = soldeFlexyCarte.toFixed(2);
document.getElementById('montantPaiement').placeholder = soldeFlexyCarte.toFixed(2)
//-- script FlexyCheque--//

const soldeFlexycheque = 1843.20;

document.getElementById('soldeChequeAffiche').textContent = soldeFlexycheque.toFixed(2) + ' $';
document.getElementById('soldeChequeModal').textContent = soldeFlexycheque.toFixed(2) + ' $';

//-- Script solde épargne --//

const soldeEpargne = 3407.95;

document.getElementById('soldeEpargneAffiche').textContent = soldeEpargne.toFixed(2) + ' $';
document.getElementById('soldeEpargneModal').textContent = soldeEpargne.toFixed(2) + ' $';

//-- script popup flexyque --//

document.querySelectorAll('[data-bs-target-next]').forEach(btn => {
  btn.addEventListener('click', function () {
    const currentModalEl = this.closest('.modal');
    const nextModalId = this.getAttribute('data-bs-target-next');
    const currentModal = bootstrap.Modal.getInstance(currentModalEl);

    currentModalEl.addEventListener('hidden.bs.modal', function handler() {
      new bootstrap.Modal(document.querySelector(nextModalId)).show();
      currentModalEl.removeEventListener('hidden.bs.modal', handler);
    });

    currentModal.hide();
  });
});

 //-- Script solde marge --//

 const soldeMarge = 982.35;

document.getElementById('soldeMargeAffiche').textContent = soldeMarge.toFixed(2) + ' $';
document.getElementById('soldeMargeModal').textContent = soldeMarge.toFixed(2) + ' $';
document.getElementById('montantPaiementMarge').value = soldeMarge.toFixed(2);
document.getElementById('montantPaiementMarge').placeholder = soldeMarge.toFixed(2);

//-- avertissement transfert de fonds --//


//-- Fexy-Marge--//
document.getElementById('formTransfertMarge').addEventListener('submit', function (e) {
  e.preventDefault();

  const transfertModalEl = document.getElementById('modalTransfertMarge');
  const transfertModal = bootstrap.Modal.getInstance(transfertModalEl);

  transfertModalEl.addEventListener('hidden.bs.modal', function handler() {
    new bootstrap.Modal(document.getElementById('modalAvertissementMarge')).show();
    transfertModalEl.removeEventListener('hidden.bs.modal', handler);
  });

  transfertModal.hide();
});

document.getElementById('btnAccepterTransfertMarge').addEventListener('click', function () {
  bootstrap.Modal.getInstance(document.getElementById('modalAvertissementMarge')).hide();
  alert('Transfert effectué avec succès.');
});

document.getElementById('btnRefuserTransfertMarge').addEventListener('click', function () {
  bootstrap.Modal.getInstance(document.getElementById('modalAvertissementMarge')).hide();
});

//-- Flexy-Carte--//

document.getElementById('formTransfertCarte').addEventListener('submit', function (e) {
  e.preventDefault();

  const transfertModalEl = document.getElementById('modalTransfertCarte');
  const transfertModal = bootstrap.Modal.getInstance(transfertModalEl);

  transfertModalEl.addEventListener('hidden.bs.modal', function handler() {
    new bootstrap.Modal(document.getElementById('modalAvertissementCarte')).show();
    transfertModalEl.removeEventListener('hidden.bs.modal', handler);
  });

  transfertModal.hide();
});

document.getElementById('btnAccepterTransfertCarte').addEventListener('click', function () {
  bootstrap.Modal.getInstance(document.getElementById('modalAvertissementCarte')).hide();
  alert('Transfert effectué avec succès.');
});

document.getElementById('btnRefuserTransfertCarte').addEventListener('click', function () {
  bootstrap.Modal.getInstance(document.getElementById('modalAvertissementCarte')).hide();
});

//-- Paiement Flexy-carte --//

document.getElementById('formPaiementCarte').addEventListener('submit', function (e) {
  e.preventDefault();

  const paiementModalEl = document.getElementById('modalPaiementCarte');
  const paiementModal = bootstrap.Modal.getInstance(paiementModalEl);

  paiementModalEl.addEventListener('hidden.bs.modal', function handler() {
    alert('Paiement effectué avec succès.');
    paiementModalEl.removeEventListener('hidden.bs.modal', handler);
  });

  paiementModal.hide();
});

//-- Paiement Marge de crédit --//

document.getElementById('formPaiementMarge').addEventListener('submit', function (e) {
  e.preventDefault();

  const paiementModalEl = document.getElementById('modalPaiementMarge');
  const paiementModal = bootstrap.Modal.getInstance(paiementModalEl);

  paiementModalEl.addEventListener('hidden.bs.modal', function handler() {
    alert('Paiement effectué avec succès.');
    paiementModalEl.removeEventListener('hidden.bs.modal', handler);
  });

  paiementModal.hide();
});

//-- Transfert Flexychèque --//

document.getElementById('formTransfertFlexycheque').addEventListener('submit', function (e) {
  e.preventDefault();

  const transfertModalEl = document.getElementById('modalTransfertFlexycheque');
  const transfertModal = bootstrap.Modal.getInstance(transfertModalEl);

  transfertModalEl.addEventListener('hidden.bs.modal', function handler() {
    alert('Transfert effectué avec succès.');
    transfertModalEl.removeEventListener('hidden.bs.modal', handler);
  });

  transfertModal.hide();
});

//-- Transfert FlexÉpargne --//

document.getElementById('formTransfertEpargne').addEventListener('submit', function (e) {
  e.preventDefault();

  const transfertModalEl = document.getElementById('modalTransfertEpargne');
  const transfertModal = bootstrap.Modal.getInstance(transfertModalEl);

  transfertModalEl.addEventListener('hidden.bs.modal', function handler() {
    alert('Transfert effectué avec succès.');
    transfertModalEl.removeEventListener('hidden.bs.modal', handler);
  });

  transfertModal.hide();
});

    //--- Affiche données utilisateur connecté---//

    document.getElementById('soldeCarteAffiche').textContent = utilisateur.soldes.carte.toFixed(2) + ' $';
    document.getElementById('soldeCarteModal').textContent = utilisateur.soldes.carte.toFixed(2) + ' $';
    document.getElementById('montantPaiement').value = utilisateur.soldes.carte.toFixed(2);
    document.getElementById('montantPaiement').placeholder = utilisateur.soldes.carte.toFixed(2);

    document.getElementById('soldeChequeAffiche').textContent = utilisateur.soldes.cheque.toFixed(2) + ' $';
    document.getElementById('soldeChequeModal').textContent = utilisateur.soldes.cheque.toFixed(2) + ' $';

    document.getElementById('soldeMargeAffiche').textContent = utilisateur.soldes.marge.toFixed(2) + ' $';
    document.getElementById('soldeMargeModal').textContent = utilisateur.soldes.marge.toFixed(2) + ' $';
    document.getElementById('montantPaiementMarge').value = utilisateur.soldes.marge.toFixed(2);
    document.getElementById('montantPaiementMarge').placeholder = utilisateur.soldes.marge.toFixed(2);

    document.getElementById('soldeEpargneAffiche').textContent = utilisateur.soldes.epargne.toFixed(2) + ' $';
    document.getElementById('soldeEpargneModal').textContent = utilisateur.soldes.epargne.toFixed(2) + ' $';

});