document.addEventListener('DOMContentLoaded', () => {

    // 1. Animation de Parallaxe Légère (Section Héro)
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            // Calculer le décalage pour un mouvement très lent (vitesse ~ 10%)
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.1}px`;
        });
    }

    // 2. Animations d'Apparition (Intersection Observer)
    const fadeInElements = document.querySelectorAll('.fade-in-on-scroll');

    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.1 // Déclenchement quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // L'élément est visible
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || '0';
                
                // Appliquer la transition avec un délai pour un effet en cascade
                setTimeout(() => {
                    element.classList.add('is-visible');
                }, parseFloat(delay) * 1000);

                // Arrêter d'observer l'élément une fois qu'il est apparu
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Démarrer l'observation pour chaque élément
    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});