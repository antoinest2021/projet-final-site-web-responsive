$(document).ready(function() {
    console.log("Connexion script chargé");

    //--- Base de données fictive d'utilisateurs ---//
    
    const utilisateurs = [
        {
            courriel: "jean.tremblay@courriel.com",
            motDePasse: "password123",
            nom: "Jean Tremblay",
            numeroClient: "CL-0001234",
            membreDepuis: "Mars 2024",
            adresse: "231 rue Jolie, Ville D'or",
            telephone: "418-555-5555",
            statut: "Actif",
            soldes: { carte: 607.13, cheque: 1843.20, marge: 982.35, epargne: 3407.95 }
        },
        {
            courriel: "marie.gagnon@courriel.com",
            motDePasse: "motdepasse1",
            nom: "Marie Gagnon",
            numeroClient: "CL-0005678",
            membreDepuis: "Janvier 2023",
            adresse: "45 rue des Pins, Amqui",
            telephone: "418-555-1212",
            statut: "Actif",
            soldes: { carte: 210.50, cheque: 980.00, marge: 150.00, epargne: 5200.00 }
        },
        {
            courriel: "marc.boucher@courriel.com",
            motDePasse: "securite2026",
            nom: "Marc Boucher",
            numeroClient: "CL-0009012",
            membreDepuis: "Juin 2025",
            adresse: "12 avenue du Lac, Matapédia",
            telephone: "418-555-3434",
            statut: "Actif",
            soldes: { carte: 1345.99, cheque: 320.15, marge: 0.00, epargne: 875.40 }
        }
    ];

    $("#formConnexion").on("submit", function(e) {
        e.preventDefault();
        console.log("Formulaire soumis");
    });
    $("#formConnexion").on("submit", function(e) {
        e.preventDefault();

        const courriel = $("#courriel").val().trim();
        const motDePasse = $("#motDePasse").val();

        console.log(courriel, motDePasse);
    });
    $("#formConnexion").on("submit", function(e) {
        e.preventDefault();

        const courriel = $("#courriel").val().trim();
        const motDePasse = $("#motDePasse").val();   
        let valide = true;

        // Validation format courriel
        const regexCourriel = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCourriel.test(courriel)) {
            $("#courriel").addClass("is-invalid");
            valide = false;
        } else {
            $("#courriel").removeClass("is-invalid");
        }

        if (motDePasse.length < 8) {
            $("#motDePasse").addClass("is-invalid");
            valide = false;
        } else {
            $("#motDePasse").removeClass("is-invalid");
        }

        if (valide) {
            // Recherche de l'utilisateur dans la "base de données"
            const utilisateurTrouve = utilisateurs.find(u =>
                u.courriel.toLowerCase() === courriel.toLowerCase() &&
                u.motDePasse === motDePasse
            );

            if (utilisateurTrouve) {
                sessionStorage.setItem("utilisateurConnecte", JSON.stringify(utilisateurTrouve));
                window.location.href = "tableau-de-bord.html";
            } else {
                $("#message")
                    .removeClass("d-none alert-success")
                    .addClass("alert-danger")
                    .text("Courriel ou mot de passe incorrect.");
            }
        }
    });
});