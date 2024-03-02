// Función para agregar una categoría al menú lateral
function addCategoryToMenu(categoryName, isGame) {
    var menu = document.querySelector('.menu-lateral ul');
    var categoriesInMenu = menu.querySelectorAll('.dropdown2 li a');

    // Verificar si la categoría ya está presente en el menú
    for (var i = 0; i < categoriesInMenu.length; i++) {
        if (categoriesInMenu[i].textContent === categoryName) {
            return; // La categoría ya está en el menú, salir de la función
        }
    }

    // Determinar la sección del menú en la que se debe agregar la categoría
    var menuSection = isGame ? document.querySelector('.menu-lateral ul > li:nth-child(3) > ul') : document.querySelector('.menu-lateral ul > li:nth-child(2) > ul');

    // Crear un nuevo elemento de lista para la nueva categoría
    var newCategoryItem = document.createElement('li');
    var newCategoryLink = document.createElement('a');
    newCategoryLink.textContent = categoryName;
    newCategoryLink.href = '#'; // Puedes definir la acción del enlace aquí

    // Agregar el nuevo elemento al menú correspondiente
    newCategoryItem.appendChild(newCategoryLink);
    menuSection.appendChild(newCategoryItem);
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
