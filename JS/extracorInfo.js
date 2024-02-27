// JSON con la información de la aplicación
var appInfo = {
  "Minecraft": {
    "app-icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7EUNy0DSNaENx1uKdl6LZJZq1Y2D6oiNFg&usqp=CAU",
    "title-app": "Minecraft",
    "categoría": "entrenamiento",
    "apk-game": "Game",  
    "version": "1.20.0.60",
    "descripcion": "Minecraft es un juego de mundo abierto donde los jugadores pueden construir, explorar y sobrevivir en un entorno tridimensional lleno de bloques. Su característica distintiva es la libertad creativa que ofrece a los jugadores para construir y explorar diferentes mundos generados proceduralmente.",
    "link-descarga-juego": "enlace-juego",
    "link-descarga-aplicacion": "enlace-aplicacion"
  },
  "Duolingo": {
    "app-icon": "https://apkgstore.com/wp-content/uploads/2023/05/duolingo-aprende-idiomas-150x150.png",
    "title-app": "Duolingo",
    "categoría": "Educación",
    "apk-game": "APK",
    "version": "1.20.0.60",
    "descripcion": "uhhihhjuhggghtggggg",
    "link-descarga-juego": "https://download2295.mediafire.com/ll7czvvn3alg0SnXRWsfWk1gx2Bj7A2eQRUx60ml4xohiWHaE0aYro5c5B7LgtjVRqG8JTkmduSmJPAHC2yXj8mS3pIIjjvM_5z1HFkNlRfurlab9G7qb_VeC3MLUOHb0orQTuCJHNEFVzwlJQwEA0Q6BHduAa99ZQxcJgcBB93xBdRP/cbt31q33wk5bgvq/Duolingo_Premium_v5.139.5_apkgstore.com.apk",
    "link-descarga-aplicacion": "https://download2295.mediafire.com/ll7czvvn3alg0SnXRWsfWk1gx2Bj7A2eQRUx60ml4xohiWHaE0aYro5c5B7LgtjVRqG8JTkmduSmJPAHC2yXj8mS3pIIjjvM_5z1HFkNlRfurlab9G7qb_VeC3MLUOHb0orQTuCJHNEFVzwlJQwEA0Q6BHduAa99ZQxcJgcBB93xBdRP/cbt31q33wk5bgvq/Duolingo_Premium_v5.139.5_apkgstore.com.apk"
  },
  // Otras aplicaciones...
};

// Asignar evento de clic a las tarjetas para abrir el popup al hacer clic en ellas
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var title = card.getAttribute('data-title');
        openPopup(appInfo[title]);
    });
});

// Función para abrir el popup y mostrar la información
function openPopup(info) {
    if (info && typeof info === 'object' && info.hasOwnProperty('apk-game')) {
        // Obtener elementos del popup
        var popup = document.getElementById("popup");
        var appIcon = document.getElementById("appIcon");
        var titleApp = document.getElementById("title-app");
        var categoria = document.getElementById("categoría");
        var version = document.getElementById("version");
        var descripcion = document.getElementById("descripcion");
        var linkDescarga = document.querySelector(".link-descarga");

        // Mostrar información del JSON en el popup
        appIcon.src = info["app-icon"];
        titleApp.textContent = info["title-app"];
        categoria.textContent = info["categoría"];
        version.textContent = info["version"];
        descripcion.textContent = info["descripcion"];

        // Verificar si es un juego o una aplicación y actualizar el enlace de descarga
        if (info["apk-game"] === "Game") {
            linkDescarga.href = info["link-descarga-juego"];
        } else if (info["apk-game"] === "APK") {
            linkDescarga.href = info["link-descarga-aplicacion"];
        }

        // Mostrar el popup
        popup.style.display = "block";
    } else {
        console.error('El objeto de información es indefinido o no es válido.');
    }
}

// Función para cerrar el popup
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}


function compartirJuego(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del botón

  var tituloJuego = document.getElementById("title-app").textContent;
  var infoJuego = appInfo[tituloJuego];

  // Construir la URL compartida dependiendo del tipo de juego
  var urlCompartida = window.location.href; // Obtener la URL actual
  
  // Verificar si ya existe un parámetro en la URL
  var parametroExistente = urlCompartida.includes('?');

  if (infoJuego["apk-game"] === "Game" && !parametroExistente) {
    urlCompartida += '?juego=' + encodeURIComponent(tituloJuego);
  } else if (infoJuego["apk-game"] === "APK" && !parametroExistente) {
    urlCompartida += '?aplicacion=' + encodeURIComponent(tituloJuego);
  } else if (infoJuego["apk-game"] === "Game" && parametroExistente) {
    urlCompartida += '&juego=' + encodeURIComponent(tituloJuego);
  } else if (infoJuego["apk-game"] === "APK" && parametroExistente) {
    urlCompartida += '&aplicacion=' + encodeURIComponent(tituloJuego);
  }

  // Mostrar solo la tarjeta compartida y ocultar las demás
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    var title = card.getAttribute('data-title');
    if (title === tituloJuego) {
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
