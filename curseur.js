
// Code JavaScript pour personnaliser le curseur

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélection des éléments du curseur
    let cursor = document.querySelector(".curseur-customisation");

    // Ajout d'un écouteur d'événements pour suivre le mouvement de la souris
    document.addEventListener('mousemove', function (e) {
        // Mettre à jour la position du curseur en fonction de la position de la souris
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

    });
});