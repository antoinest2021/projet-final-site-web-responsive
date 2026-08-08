$(document).ready(function () {
  console.log("Tableau de bord script chargé");

  // Protection de la page + lecture des données de l'utilisateur connecté
  const utilisateurJSON = sessionStorage.getItem("utilisateurConnecte");
  if (!utilisateurJSON) {
    window.location.href = "connexion.html";
    return;
  }
  const utilisateur = JSON.parse(utilisateurJSON);

  //-- Fonction de confirmation (remplace alert()) --//

  function afficherConfirmation(message) {
    $("#messageConfirmation").text(message);
    new bootstrap.Modal($("#modalConfirmation").get(0)).show();
  }

  // Affichage des infos du profil

  $("#profilNom").text(utilisateur.nom);
  $("#profilCourriel").text(utilisateur.courriel);
  $("#profilNumeroClient").text(utilisateur.numeroClient);
  $("#profilMembreDepuis").text(utilisateur.membreDepuis);
  $("#profilAdresse").text(utilisateur.adresse);
  $("#profilTelephone").text(utilisateur.telephone);
  $("#profilStatut").text(utilisateur.statut);

  //--- Affiche données utilisateur connecté (soldes) ---//

  $("#soldeCarteAffiche").text(utilisateur.soldes.carte.toFixed(2) + " $");
  $("#soldeCarteModal").text(utilisateur.soldes.carte.toFixed(2) + " $");
  $("#montantPaiement").val(utilisateur.soldes.carte.toFixed(2));
  $("#montantPaiement").attr("placeholder", utilisateur.soldes.carte.toFixed(2));

  $("#soldeChequeAffiche").text(utilisateur.soldes.cheque.toFixed(2) + " $");
  $("#soldeChequeModal").text(utilisateur.soldes.cheque.toFixed(2) + " $");

  $("#soldeMargeAffiche").text(utilisateur.soldes.marge.toFixed(2) + " $");
  $("#soldeMargeModal").text(utilisateur.soldes.marge.toFixed(2) + " $");
  $("#montantPaiementMarge").val(utilisateur.soldes.marge.toFixed(2));
  $("#montantPaiementMarge").attr("placeholder", utilisateur.soldes.marge.toFixed(2));

  $("#soldeEpargneAffiche").text(utilisateur.soldes.epargne.toFixed(2) + " $");
  $("#soldeEpargneModal").text(utilisateur.soldes.epargne.toFixed(2) + " $");

  //-- script popup "faire un transfert / payer" (chaînage de modales) --//

  $("[data-bs-target-next]").on("click", function () {
    const $currentModalEl = $(this).closest(".modal");
    const nextModalId = $(this).attr("data-bs-target-next");
    const currentModal = bootstrap.Modal.getInstance($currentModalEl.get(0));

    $currentModalEl.one("hidden.bs.modal", function () {
      new bootstrap.Modal($(nextModalId).get(0)).show();
    });

    currentModal.hide();
  });

  //-- avertissement transfert de fonds --//

  //-- Flexy-Marge --//

  $("#formTransfertMarge").on("submit", function (e) {
    e.preventDefault();

    const $transfertModalEl = $("#modalTransfertMarge");
    const transfertModal = bootstrap.Modal.getInstance($transfertModalEl.get(0));

    $transfertModalEl.one("hidden.bs.modal", function () {
      new bootstrap.Modal($("#modalAvertissementMarge").get(0)).show();
    });

    transfertModal.hide();
  });

  $("#btnAccepterTransfertMarge").on("click", function () {
    const $avertissementEl = $("#modalAvertissementMarge");
    bootstrap.Modal.getInstance($avertissementEl.get(0)).hide();

    $avertissementEl.one("hidden.bs.modal", function () {
      afficherConfirmation("Transfert effectué avec succès.");
    });
  });

  $("#btnRefuserTransfertMarge").on("click", function () {
    bootstrap.Modal.getInstance($("#modalAvertissementMarge").get(0)).hide();
  });

  //-- Flexy-Carte --//

  $("#formTransfertCarte").on("submit", function (e) {
    e.preventDefault();

    const $transfertModalEl = $("#modalTransfertCarte");
    const transfertModal = bootstrap.Modal.getInstance($transfertModalEl.get(0));

    $transfertModalEl.one("hidden.bs.modal", function () {
      new bootstrap.Modal($("#modalAvertissementCarte").get(0)).show();
    });

    transfertModal.hide();
  });

  $("#btnAccepterTransfertCarte").on("click", function () {
    const $avertissementEl = $("#modalAvertissementCarte");
    bootstrap.Modal.getInstance($avertissementEl.get(0)).hide();

    $avertissementEl.one("hidden.bs.modal", function () {
      afficherConfirmation("Transfert effectué avec succès.");
    });
  });

  $("#btnRefuserTransfertCarte").on("click", function () {
    bootstrap.Modal.getInstance($("#modalAvertissementCarte").get(0)).hide();
  });

  //-- Paiement Flexy-carte --//

  $("#formPaiementCarte").on("submit", function (e) {
    e.preventDefault();

    const $paiementModalEl = $("#modalPaiementCarte");
    const paiementModal = bootstrap.Modal.getInstance($paiementModalEl.get(0));

    $paiementModalEl.one("hidden.bs.modal", function () {
      afficherConfirmation("Paiement effectué avec succès.");
    });

    paiementModal.hide();
  });

  //-- Paiement Marge de crédit --//

  $("#formPaiementMarge").on("submit", function (e) {
    e.preventDefault();

    const $paiementModalEl = $("#modalPaiementMarge");
    const paiementModal = bootstrap.Modal.getInstance($paiementModalEl.get(0));

    $paiementModalEl.one("hidden.bs.modal", function () {
      afficherConfirmation("Paiement effectué avec succès.");
    });

    paiementModal.hide();
  });

  //-- Transfert Flexychèque --//

  $("#formTransfertFlexycheque").on("submit", function (e) {
    e.preventDefault();

    const $transfertModalEl = $("#modalTransfertFlexycheque");
    const transfertModal = bootstrap.Modal.getInstance($transfertModalEl.get(0));

    $transfertModalEl.one("hidden.bs.modal", function () {
      afficherConfirmation("Transfert effectué avec succès.");
    });

    transfertModal.hide();
  });

  //-- Transfert FlexÉpargne --//

  $("#formTransfertEpargne").on("submit", function (e) {
    e.preventDefault();

    const $transfertModalEl = $("#modalTransfertEpargne");
    const transfertModal = bootstrap.Modal.getInstance($transfertModalEl.get(0));

    $transfertModalEl.one("hidden.bs.modal", function () {
      afficherConfirmation("Transfert effectué avec succès.");
    });

    transfertModal.hide();
  });
});