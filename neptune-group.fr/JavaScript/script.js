// script.js

const starContainer = document.querySelector('.star-container');
const starTemplate = document.getElementById('star-template');

function createStar() {
    const star = starTemplate.content.cloneNode(true).querySelector('.star');
    
    // Position de départ X : plutôt vers la droite de l'écran (ex: de 50% à 100% de la largeur)
    // ou même au-delà pour qu'elles viennent de l'extérieur du champ de vision
    const startX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.2; // Commence de 20% à 100% de la largeur
    
    // Position de départ Y : pour qu'elles commencent un peu au-dessus de l'écran
    const startY = Math.random() * -window.innerHeight * 0.2; // Commence entre 0% et -20% de la hauteur de l'écran

    const animationDuration = Math.random() * 1.5 + 1; // Durée entre 3 et 5 secondes (plus lent pour moins d'étoiles)
    const animationDelay = Math.random() * 2; // Délai de départ aléatoire (plus court pour qu'elles apparaissent plus vite après l'intervalle)

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`; // Applique la position de départ Y
    star.style.animationDuration = `${animationDuration}s`;
    star.style.animationDelay = `${animationDelay}s`;

    starContainer.appendChild(star);

    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Crée une nouvelle étoile toutes les 1500 millisecondes (1.5 secondes)
setInterval(createStar, 2500);