$(document).ready(function() {
    console.log("Tableau de bord script chargé");
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
  // Ici tu ajouteras la logique réelle du transfert plus tard
  alert('Transfert effectué avec succès.');
});

document.getElementById('btnRefuserTransfertMarge').addEventListener('click', function () {
  bootstrap.Modal.getInstance(document.getElementById('modalAvertissementMarge')).hide();
});
    
});
