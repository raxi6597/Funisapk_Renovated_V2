

document.getElementById('default').addEventListener('click', function() {
  document.body.style.backgroundColor = '#ffffff';
  var elementos = document.querySelectorAll('header, .container');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#333';
    elemento.style.color = '#000';
  });
  document.body.style.color = '#000';
  var elementos = document.querySelectorAll('.card');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#ffffff';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.compartir, .descripcion');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#ddd';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('#search-button');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#444';
    elemento.style.color = '#fff';
  });
  var elementos = document.querySelectorAll('.popup');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#fff';
    elemento.style.color = '#000';
  });
});

document.getElementById('classic').addEventListener('click', function() {
  document.body.style.backgroundColor = '#121212';
  document.body.style.color = '#000';
  var elementos = document.querySelectorAll('header, .container');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#121212';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.card');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#fff';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.compartir');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#ddd';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.descripcion');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#ddd';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.popup');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#fff';
    elemento.style.color = '#000';
  });
});

document.getElementById('blue').addEventListener('click', function() {
  document.body.style.backgroundColor = '#66a6ff';
  document.body.style.color = '#000';
  var elementos = document.querySelectorAll('.card');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#89f7fe';
    elemento.style.color = '#000';
  });
    var elementos = document.querySelectorAll('.container, header');
    elementos.forEach(function(elemento) {
      elemento.style.backgroundColor = '#508ADC';
      elemento.style.color = '#000';
    });
  var elementos = document.querySelectorAll('.compartir, .descripcion, #search-button');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#02ACFA';
    elemento.style.color = '#000';
  });
  
});

document.getElementById('green').addEventListener('click', function() {
  document.body.style.backgroundColor = '#330867';
  document.body.style.color = '#000';
  var elementos = document.querySelectorAll('.card');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#30cfd0';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('header, .container');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#30C4C4';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.compartir, .descripcion, #search-button');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#02ACFA';
    elemento.style.color = '#000';
  });
  var elementos = document.querySelectorAll('.popup');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#02ACFA';
    elemento.style.color = '#000';
  });
});
/*loading */
window.addEventListener('load', function() {
  // Ocultar el spinner cuando el contenido esté completamente cargado
  document.getElementById('loading-spinner').style.display = 'none';
});

/*contador de cards*/
var cards = document.querySelectorAll('.card');
var contador = 0;

cards.forEach(function(card) {
    var computedStyle = window.getComputedStyle(card);
    var displayStyle = computedStyle.getPropertyValue('display');
    if (displayStyle === 'block') {
        contador++;
    }
});

var divContador = document.getElementById('contadorTarjetas');
divContador.textContent = "TOTAL DE APPS: " + contador;



/*menu toggle*/

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Event listener para abrir/cerrar el menú al hacer clic en el botón
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('menu-visible');
    });

    // Event listener para cerrar el menú al hacer clic en cualquier otro lugar de la página
    document.addEventListener('click', function(event) {
        const target = event.target;
        const isMenu = target.closest('#menu');
        const isMenuToggle = target.closest('#menu-toggle');

        if (!isMenu && !isMenuToggle && menu.classList.contains('menu-visible')) {
            menu.classList.remove('menu-visible');
        }
    });
});



/*mostrar autor en keywords automáticamente*/
var author = document.querySelector('meta[name="author"]').getAttribute("content");
var authorElement = document.getElementById("authorName");
if (author) {
    authorElement.textContent = author;
}


// Obtiene las etiquetas meta con las palabras clave
var keywordsMeta = document.querySelector('meta[name="keywords"]');
var keywordsArray = [];

// Si la etiqueta meta con las palabras clave existe, obtén su contenido
if (keywordsMeta) {
    var keywords = keywordsMeta.getAttribute("content");
    // Divide las palabras clave en un array
    keywordsArray = keywords.split(',');
}

// Obtiene todos los títulos de las tarjetas
var cardTitles = document.querySelectorAll('.card .title');

// Itera sobre cada título de tarjeta y agrega su contenido al array de palabras clave
cardTitles.forEach(function(titleElement) {
    var cardTitle = titleElement.textContent.trim();
    // Verifica si el título ya está en el array de palabras clave
    if (!keywordsArray.includes(cardTitle)) {
        keywordsArray.push(cardTitle);
    }
});

// Obtiene el div con el ID "tags"
var tagsDiv = document.getElementById('tags');

// Limpia el contenido anterior del div "tags"
tagsDiv.innerHTML = "";

// Itera sobre el array de palabras clave y las muestra en el div "tags"
keywordsArray.forEach(function(keyword) {
    var span = document.createElement('span');
    span.textContent = keyword.trim(); // Elimina espacios en blanco al principio y al final
    tagsDiv.appendChild(span);
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollButton = document.getElementById("scroll-btn");

  if (window.scrollY > 0) {
    scrollButton.innerHTML = "↑";
  } else {
    scrollButton.innerHTML = "↓";
  }
}

function scrollToPosition() {
  if (window.scrollY > 0) {
    // Si no estamos al principio de la página, vamos al principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Si estamos al principio de la página, vamos al final
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
}
