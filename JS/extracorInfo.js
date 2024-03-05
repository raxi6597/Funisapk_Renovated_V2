// Función para cargar el JSON y abrir el popup con la información
function loadJSONAndOpenPopup(title) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'Info.json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == "200") {
      var info = JSON.parse(xhr.responseText);
      openPopup(info[title]);
    }
  };
  xhr.send(null);
}

// Función para abrir el popup y mostrar la información
function openPopup(info) {
  if (info && typeof info === 'object' && info.hasOwnProperty('apk-game')) {
    var popup = document.getElementById("popup");
    var appIcon = document.getElementById("appIcon");
    var titleApp = document.getElementById("title-app");
    var categoria = document.getElementById("categoría");
    var version = document.getElementById("version");
    var descripcion = document.getElementById("descripcion");
    var linkDescarga = document.querySelector(".link-descarga");
    var playStoreLink = document.getElementById("playStore");

    appIcon.src = info["app-icon"];
    titleApp.textContent = info["title-app"];
    categoria.textContent = info["categoría"];
    version.textContent = info["version"];
    descripcion.textContent = info["descripcion"];

    if (info["apk-game"] === "Game") {
      linkDescarga.href = info["link-descarga"];
    } else if (info["apk-game"] === "APK") {
      linkDescarga.href = info["link-descarga"];
    }

    if (info["playStore"] !== "#" && info["playStore"] !== "") {
      playStoreLink.style.display = "inline-block";
      playStoreLink.href = info["playStore"];
    } else {
      playStoreLink.style.display = "none";
    }

    popup.style.display = "block";
  }
}

// Asignar evento de clic a las tarjetas para abrir el popup al hacer clic en ellas
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    var title = card.getAttribute('data-title');
    loadJSONAndOpenPopup(title);
  });
});



// Función para cerrar el popup
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Función para compartir la tarjeta
function compartirJuego(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del botón

  var tituloJuego = document.getElementById("title-app").textContent.trim(); // Eliminar espacios en blanco al principio y al final

  // Construir la URL compartida dependiendo del tipo de juego
  var urlCompartida = window.location.href; // Obtener la URL actual

  // Verificar si ya existe un parámetro en la URL
  var parametroExistente = urlCompartida.includes('?');

  var juegoParam = '';
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    var title = card.getAttribute('data-title').trim(); // Eliminar espacios en blanco al principio y al final
    if (title.toLowerCase() === tituloJuego.toLowerCase()) { // Comparación insensible a mayúsculas y minúsculas
      juegoParam = (card.getAttribute('data-apk-game') === "Game") ? 'juego' : 'aplicacion';
    }
  });

  // Función para verificar si es un juego o una aplicación
  function verificarTipo(apkGame) {
    return apkGame.toLowerCase() === 'apk' ? 'aplicación' : 'juego';
  }

  if (juegoParam !== '') {
    if (!parametroExistente) {
      urlCompartida += '?' + juegoParam + '=' + encodeURIComponent(tituloJuego);
    } else {
      urlCompartida += '&' + juegoParam + '=' + encodeURIComponent(tituloJuego);
    }

    // Mostrar solo la tarjeta compartida y ocultar las demás
    cards.forEach(function(card) {
      var title = card.getAttribute('data-title').trim(); // Eliminar espacios en blanco al principio y al final
      if (title.toLowerCase() === tituloJuego.toLowerCase()) { // Comparación insensible a mayúsculas y minúsculas
        card.style.display = "block"; // Mostrar la tarjeta compartida
      } else {
        card.style.display = "none"; // Ocultar otras tarjetas
      }
    });

    // Mostrar un mensaje al usuario con la URL compartida (esto es solo un ejemplo)
    alert("¡Comparte esta URL para compartir el juego:\n" + urlCompartida);

    // Actualizar la URL de la página
    window.history.pushState({}, document.title, urlCompartida);
  }
}

window.onload = function() {
  // Obtener parámetros de la URL
  var urlParams = new URLSearchParams(window.location.search);

  // Verificar si existe el parámetro 'juego' o 'aplicacion'
  if (urlParams.has('juego')) {
    var juegoParam = urlParams.get('juego');
    mostrarTarjetaPorTitulo(juegoParam);
  } else if (urlParams.has('aplicacion')) {
    var aplicacionParam = urlParams.get('aplicacion').trim(); // Eliminar espacios en blanco al principio y al final
    mostrarTarjetaPorTitulo(aplicacionParam);
    var aplicacionParamSinEspacios = aplicacionParam.replace(/\s+/g, ''); // Eliminar todos los espacios
    if (aplicacionParam !== aplicacionParamSinEspacios) { // Si hay diferencia en el nombre sin espacios
      mostrarTarjetaPorTitulo(aplicacionParamSinEspacios);
    }
  }
};

function mostrarTarjetaPorTitulo(titulo) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    var title = card.getAttribute('data-title').trim(); // Eliminar espacios en blanco al principio y al final
    if (title.toLowerCase() === titulo.toLowerCase()) { // Comparación insensible a mayúsculas y minúsculas
      card.style.display = "block"; // Mostrar la tarjeta con el título coincidente
    } else {
      card.style.display = "none"; // Ocultar otras tarjetas
    }
  });
}