

$(document).ready(function () {
    console.log("Demande de crédit script chargé");

    /* ======UTILISATEUR CONNECT================= */

    const utilisateur = JSON.parse(sessionStorage.getItem("utilisateurConnecte"));

 
    if (!utilisateur) {
        window.location.href = "connexion.html";
        return;
    }

    // Affichage des informations déjà connues de la banque
    $("#nomClient").text(utilisateur.nom);
    $("#contactClient").text(utilisateur.courriel + " · " + utilisateur.telephone);
    $("#dossierClient").text("Dossier " + utilisateur.numeroClient
        + " · Membre depuis " + utilisateur.membreDepuis);

    // L'adresse est déjà au dossier : on la pré-remplit
    $("#adresse").val(utilisateur.adresse);


      //  COMPTEUR DE CARACTÈRES
      

    $("#but").on("input", function () {
        const nbCaracteres = $(this).val().length;
        $("#compteurBut").text(nbCaracteres);
    });

    
       // SOUMISSION ET VALIDATION
       

    $("#formCredit").on("submit", function (e) {
        e.preventDefault();

       
        $("#messageSucces").addClass("d-none");
        $("#messageErreur").addClass("d-none");

        // Lecture de tous les champs
        const adresse = $("#adresse").val().trim();
        const codePostal = $("#codePostal").val().trim();
        const emploi = $("#emploi").val();
        const employeur = $("#employeur").val().trim();
        const revenuAnnuel = $("#revenuAnnuel").val();
        const typeCredit = $("#typeCredit").val();
        const duree = $("#duree").val();
        const montant = $("#montant").val();
        const compteDebit = $("#compteDebit").val();
        const but = $("#but").val().trim();

        let valide = true;

        /* ---------- Adresse ---------- */
        if (adresse.length < 5) {
            $("#adresse").addClass("is-invalid");
            valide = false;
        } else {
            $("#adresse").removeClass("is-invalid");
        }

        /* ---------- Code postal ---------- */
        
        const regexCodePostal = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
        if (!regexCodePostal.test(codePostal)) {
            $("#codePostal").addClass("is-invalid");
            valide = false;
        } else {
            $("#codePostal").removeClass("is-invalid");
        }

        /* ---------- Situation d'emploi ---------- */
       
        if (emploi === null) {
            $("#emploi").addClass("is-invalid");
            valide = false;
        } else {
            $("#emploi").removeClass("is-invalid");
        }

        /* ---------- Revenu annuel ---------- */
      
        if (Number(revenuAnnuel) < 12000) {
            $("#revenuAnnuel").addClass("is-invalid");
            valide = false;
        } else {
            $("#revenuAnnuel").removeClass("is-invalid");
        }

        /* ---------- Type de crédit ---------- */
        if (typeCredit === null) {
            $("#typeCredit").addClass("is-invalid");
            valide = false;
        } else {
            $("#typeCredit").removeClass("is-invalid");
        }

        /* ---------- Durée ---------- */
        if (duree === null) {
            $("#duree").addClass("is-invalid");
            valide = false;
        } else {
            $("#duree").removeClass("is-invalid");
        }

        /* ---------- Montant ---------- */
        if (Number(montant) < 1000 || Number(montant) > 100000) {
            $("#montant").addClass("is-invalid");
            valide = false;
        } else {
            $("#montant").removeClass("is-invalid");
        }

        /* ---------- Compte de prélèvement ---------- */
        if (compteDebit === null) {
            $("#compteDebit").addClass("is-invalid");
            valide = false;
        } else {
            $("#compteDebit").removeClass("is-invalid");
        }

        /* ---------- Consentement ---------- */
        if (!$("#consentement").is(":checked")) {
            $("#consentement").addClass("is-invalid");
            valide = false;
        } else {
            $("#consentement").removeClass("is-invalid");
        }

        /* ======= RÉSULTAT =============== */

        if (valide) {
            
            const demande = {
                numeroClient: utilisateur.numeroClient,
                adresse: adresse,
                codePostal: codePostal.toUpperCase(),
                emploi: emploi,
                employeur: employeur,
                revenuAnnuel: Number(revenuAnnuel),
                typeCredit: typeCredit,
                montant: Number(montant),
                duree: Number(duree),
                compteDebit: compteDebit,
                but: but,
                infolettre: $("#infolettre").is(":checked")
            };

            console.log("Demande envoyée :", demande);

            $("#numeroDemande").text(
                "Un conseiller vous répond sous 48 heures au " + utilisateur.courriel + "."
            );
            $("#messageSucces").removeClass("d-none").addClass("d-flex");

            // On bloque le bouton pour éviter un double envoi
            $("#boutonEnvoyer").prop("disabled", true);

        } else {
            $("#texteErreur").text(
                "Certains champs sont incomplets ou invalides. Vérifiez les cases en rouge."
            );
            $("#messageErreur").removeClass("d-none").addClass("d-flex");
        }
    });

  

    $("#formCredit").on("reset", function () {
        
        setTimeout(function () {
            $(".is-invalid").removeClass("is-invalid");
            $("#messageSucces").addClass("d-none");
            $("#messageErreur").addClass("d-none");
            $("#compteurBut").text("0");

            // On remet l'adresse connue de la banque
            $("#adresse").val(utilisateur.adresse);

            $("#boutonEnvoyer").prop("disabled", false);
        }, 10);
    });
});