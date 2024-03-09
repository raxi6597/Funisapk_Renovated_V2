// Variable para almacenar las categorías ya agregadas
var addedCategories = [];

// Función para agregar una categoría al menú lateral
function addCategoryToMenu(categoryName) {
    // Verificar si la categoría ya está presente en el menú
    if (addedCategories.includes(categoryName)) {
        return; // La categoría ya está en el menú, salir de la función
    }

    addedCategories.push(categoryName); // Agregar la categoría al registro

    var menu = document.querySelector('.menu-lateral ul:nth-child(2)'); // Selecciona la segunda lista del menú lateral
    var menuSection = document.createElement('li');
    var newCategoryLink = document.createElement('a');
    newCategoryLink.textContent = categoryName;
    newCategoryLink.href = '#'; // Puedes definir la acción del enlace aquí

    menuSection.appendChild(newCategoryLink);
    menu.appendChild(menuSection);
}


// Obtener todas las categorías de las tarjetas de aplicaciones
var categories = document.querySelectorAll('.category');
var cardTypes = document.querySelectorAll('.card');

// Iterar sobre las categorías y agregarlas al menú lateral
cardTypes.forEach(function(card) {
    var category = card.querySelector('.category').textContent;
    var isGame = card.getAttribute('data-game') === "true"; // Obtener si es un juego o no

    addCategoryToMenu(category, isGame);
});

// Función para filtrar las tarjetas según la categoría seleccionada
function filterCardsByCategory(categoryName) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        var category = card.querySelector('.category').textContent;
        if (category === categoryName || categoryName === 'Todas') {
            card.style.display = 'block'; // Mostrar tarjeta si coincide con la categoría seleccionada o si se selecciona 'Todas'
        } else {
            card.style.display = 'none'; // Ocultar tarjeta si no coincide con la categoría seleccionada
        }
    });
}

// Manejar clics en las categorías del menú lateral
var categoryLinks = document.querySelectorAll('.dropdown2 li a');
categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        var categoryName = this.textContent; // Obtener el nombre de la categoría seleccionada
        filterCardsByCategory(categoryName); // Filtrar las tarjetas por la categoría seleccionada
    });
});

// Manejar clic en la opción 'Todas las aplicaciones'
var showAllAppsLink = document.querySelector('.show-all-apps');
showAllAppsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    filterCardsByCategory('Todas'); // Mostrar todas las tarjetas
});
