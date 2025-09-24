document.addEventListener('DOMContentLoaded', () => {
    const allBooks = document.querySelectorAll('.book');

    // Afficher chaque livre un par un avec un délai
    let delay = 300;
    allBooks.forEach((book) => {
        setTimeout(() => {
            book.classList.add('is-visible');
        }, delay);
        delay += 300;
    });
});