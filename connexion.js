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
        let valide = true;

     

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
