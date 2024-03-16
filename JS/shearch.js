/* Obtiene la fecha actual en formato YYYY-MM-DD
var currentDate = new Date().toISOString().slice(0, 10);

// Selecciona todas las cards
var cards = document.querySelectorAll(".card");

// Itera sobre cada card
cards.forEach(function(card) {
  var cardFecha = card.getAttribute("data-fecha");

  // Si la card tiene una fecha definida, la oculta
  if (cardFecha) {
    card.style.display = "none";
  } else {
    card.style.display = "block"; // Muestra la card si no tiene fecha definida
  }

  // Si tiene fecha, añade el ícono y la fecha dentro de un contenedor div
  if (cardFecha) {
    // Crear el contenedor div para el ícono y la fecha
    var divContenido = document.createElement("div");
    divContenido.classList.add("contenido-card");

    // Crea el elemento de ícono
    var iconoReloj = document.createElement("i");
    iconoReloj.classList.add("far", "fa-clock");

    // Crea el elemento de span para la fecha y asigna la fecha actual
    var spanFecha = document.createElement("span");
    spanFecha.textContent = cardFecha;
    spanFecha.classList.add("fecha-card"); // Agregar la clase al span

    // Agregar el ícono y la fecha al contenedor
    divContenido.appendChild(iconoReloj);
    divContenido.appendChild(spanFecha);

    // Agrega el contenedor al principio de la card
    card.insertBefore(divContenido, card.firstChild);
  }
});*/

// Obtiene la fecha y hora actual en formato yyyy-MM-dd hh:mm a
var currentDate = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});

// Selecciona todas las cards
var cards = document.querySelectorAll(".card");

function checkScheduledCards() {
    var currentDate = new Date();
    var formattedCurrentDate = currentDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    cards.forEach(function(card) {
        var cardFechaHoraString = card.getAttribute("data-fecha-hora");

        if (cardFechaHoraString) {
            // Parsea la fecha almacenada en data-fecha-hora a un objeto Date
            var cardFechaHora = new Date(cardFechaHoraString);

            if (cardFechaHora <= currentDate) {
                // Si la fecha es anterior o igual a la fecha actual, muestra la card
                card.style.display = "block";
                
                // Elimina el contenedor de ícono y fecha si existe
                var divContenido = card.querySelector(".contenido-card");
                if (divContenido) {
                    divContenido.parentNode.removeChild(divContenido);
                }
            } else {
                // Si la fecha aún no ha llegado, oculta la card
                card.style.display = "none";

                // Si tiene fecha y no es la fecha actual, añade el ícono y la fecha dentro de un contenedor div
                // Crear el contenedor div para el ícono y la fecha
                var divContenido = document.createElement("div");
                divContenido.classList.add("contenido-card");

                // Crea el elemento de ícono
                var iconoReloj = document.createElement("i");
                iconoReloj.classList.add("far", "fa-clock");

                // Crea el elemento de span para la fecha y asigna la fecha actual
                var spanFecha = document.createElement("span");
                spanFecha.textContent = cardFechaHoraString;
                spanFecha.classList.add("fecha-card"); // Agregar la clase al span

                // Agregar el ícono y la fecha al contenedor
                divContenido.appendChild(iconoReloj);
                divContenido.appendChild(spanFecha);

                // Agrega el contenedor al principio de la card
                card.insertBefore(divContenido, card.firstChild);
            }
        } else {
            // Si no hay fecha definida, muestra la card
            card.style.display = "block";
        }
    });
}

// Ejecutar la función inicialmente
checkScheduledCards();

// Verificar cada 1 minuto si las tarjetas deben mostrarse o no
setInterval(checkScheduledCards, 60000);


/*Buscador*/

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

// Verificar el ancho de la ventana solo si es mayor que 769px antes de redirigir
if (window.innerWidth > 769) {
  window.onload = function() {
    var width = window.innerWidth;

    // Redirigir a Error.html si el ancho de la ventana es mayor que 769px
    if (width > 769) {
      redirigirAError();
    }
  }
}

// Función para redirigir a Error.html
function redirigirAError() {
  var currentPage = window.location.pathname;

  // Redirigir a Error.html incluso si hay parámetros en la URL
  if (currentPage !== 'Error.html') {
    window.location.href = 'Error.html';
  }
}

