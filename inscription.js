$(document).ready(function () {

    const form = $('#form-inscription');

    //Fonction pour affichage d'erreurs (Jai intégré des éléments qu'on a pas vu en classe pour avoir une page plus professionnelle.)
    function showError(selector, labelSelector, message) {
        const field = $(selector);
        const label = $(labelSelector);

        //Condition JQuery qui permet de m'assurer que le champ sélectionné est pas un radio-button ni checkbox.
        if (field.is('input:not([type="radio"]):not([type="checkbox"]), select')) {
            field.addClass('border-danger');
        }

        if (label.find('.error-msg').length === 0) {
            label.append('<span class="error-msg text-danger ms-2 fw-bold" style="font-size: 0.9em;">- ' + message + '</span>');
        }
    }

    //Effacer les erreurs
    function clearErrors() {
        $('.border-danger').removeClass('border-danger');
        $('.error-msg').remove();
    }

    //Clique sur le bouton Ouvrir un compte
    //J'ai pas utilisé throw New error à chaque if car ça aurait empéché l'affichage de toutes les erreurs présentes dans le formulaire.
    form.on('submit', function (e) {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        try {
            if (!$('#prenom').val().trim()) {
                showError('#prenom', 'label[for="prenom"]', 'Le prénom est requis.');
                hasError = true;
            }

            if (!$('#nom').val().trim()) {
                showError('#nom', 'label[for="nom"]', 'Le nom est requis.');
                hasError = true;
            }

            const courriel = $('#courriel').val().trim();
            if (!courriel) {
                showError('#courriel', 'label[for="courriel"]', 'Le courriel est requis.');
                hasError = true;
            } else {
                const atIndex = courriel.indexOf('@');
                if (atIndex === -1) {
                    showError('#courriel', 'label[for="courriel"]', 'Doit contenir un symbole @.');
                    hasError = true;
                } else {
                    const afterAt = courriel.substring(atIndex + 1);
                    if (afterAt.indexOf('.') === -1) {
                        showError('#courriel', 'label[for="courriel"]', 'Doit contenir un point (.) après le @.');
                        hasError = true;
                    }
                }
            }

            //J'ai utilisé une expression régulière pour valider facilement que le numéro contient 10 chiffres.
            const tel = $('#telephone').val().trim();
            const telRegex = /^\d{10}$/;
            if (!tel) {
                showError('#telephone', 'label[for="telephone"]', 'Le téléphone est requis.');
                hasError = true;
            } else if (!telRegex.test(tel)) {
                showError('#telephone', 'label[for="telephone"]', 'Doit contenir exactement 10 chiffres.');
                hasError = true;
            }

            //Même chose pour le NAS que pour le téléphone sauf qu'il contient 9 chiffres.
            const nas = $('#nas').val().trim();
            const nasRegex = /^\d{9}$/;
            if (!nas) {
                showError('#nas', 'label[for="nas"]', 'Le NAS est requis.');
                hasError = true;
            } else if (!nasRegex.test(nas)) {
                showError('#nas', 'label[for="nas"]', 'Doit contenir exactement 9 chiffres.');
                hasError = true;
            }

            if (!$('#adresse').val().trim()) {
                showError('#adresse', 'label[for="adresse"]', 'L\'adresse est requise.');
                hasError = true;
            }

            if (!$('#ville').val().trim()) {
                showError('#ville', 'label[for="ville"]', 'La ville est requise.');
                hasError = true;
            }
            if (!$('#province').val()) {
                showError('#province', 'label[for="province"]', 'Veuillez sélectionner une province.');
                hasError = true;
            }

            //J'ai reprodui la même vérification que quand on entre notre code postal sur un site du gouvernement.
            const cp = $('#codePostal').val().trim();
            const cpRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
            if (!cp) {
                showError('#codePostal', 'label[for="codePostal"]', 'Le code postal est requis.');
                hasError = true;
            } else if (!cpRegex.test(cp)) {
                showError('#codePostal', 'label[for="codePostal"]', 'Format invalide (ex: H0H0H0 sans espace).');
                hasError = true;
            }

            if (!$('input[name="typeClient"]:checked').length) {
                const radioLabel = $('label:contains("Quel type de client")');
                if (radioLabel.find('.error-msg').length === 0) {
                    radioLabel.append('<span class="error-msg text-danger ms-2 fw-bold" style="font-size: 0.9em;">- Veuillez choisir un profil.</span>');
                }
                hasError = true;
            }

            //Le mot de passe utilise aussi des expressions régulières parce que je trouve ça plus pratique.
            const mdp = $('#mdp').val();
            const mdpConfirm = $('#mdpConfirm').val();
            const mdpRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

            if (!mdp) {
                showError('#mdp', 'label[for="mdp"]', 'Le mot de passe est requis.');
                hasError = true;
            } else if (!mdpRegex.test(mdp)) {
                showError('#mdp', 'label[for="mdp"]', 'Min. 8 caractères, 1 majuscule, 1 chiffre.');
                hasError = true;
            }

            if (!mdpConfirm) {
                showError('#mdpConfirm', 'label[for="mdpConfirm"]', 'La confirmation est requise.');
                hasError = true;
            } else if (mdp !== mdpConfirm) {
                showError('#mdpConfirm', 'label[for="mdpConfirm"]', 'Les mots de passe ne correspondent pas.');
                hasError = true;
            }

            if (!$('#conditions').is(':checked')) {
                showError('#conditions', 'label[for="conditions"]', 'Vous devez accepter les conditions.');
                hasError = true;
            }

            if (hasError) {
                throw new Error("Erreur : Le formulaire contient des champs invalides ou manquants. Vérifiez les champs en rouge pour corriger les erreurs.");
            }

            window.location.href = "tableau-de-bord.html";

        } catch (error) {
            console.error(error.message);
        }
    });

    //Clique sur le bouton Réinitialiser
    form.on('reset', function () {
        clearErrors();
    });
});
