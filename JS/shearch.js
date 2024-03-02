var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        var title = card.textContent.trim().toLowerCase(); // Obtener texto completo de la tarjeta

        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Mostrar la tarjeta que coincide
        } else {
            card.style.display = 'none'; // Ocultar la tarjeta que no coincide
        }
    });
});
