$(document).ready(function() {
    console.log("Connexion script chargé");
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
        const regexCourriel = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        let valide = true;

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
            window.location.href = "tableau-de-bord.html";
        }
    });
});
