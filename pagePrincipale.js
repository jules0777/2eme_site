
document.addEventListener("DOMContentLoaded", function () {
    // Sélection de la balise a
    let pointI = document.querySelector(".point_i");
    let curseur = document.querySelector(".curseur-customisation");

    // Ajout d'un écouteur d'événement pour le survol
    pointI.addEventListener("mouseover", function () {
        // Modification de la classe du curseur lors du survol
        curseur.className = "curseur-customisation_sur_point_i";
    });

    // Ajout d'un écouteur d'événement pour la sortie du survol
    pointI.addEventListener("mouseleave", function () {
        // Rétablissement de la classe du curseur après la sortie du survol
        curseur.className = "curseur-customisation";
    });
});

