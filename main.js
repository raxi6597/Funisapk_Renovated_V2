document.getElementById('default').addEventListener('click', function() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000';
    var elementos = document.querySelectorAll('.card');
    elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = '#ffffff';
        elemento.style.color = '#000';
    });
});

document.getElementById('classic').addEventListener('click', function() {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#000';
    var elementos = document.querySelectorAll('.card');
    elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = '#fff';
        elemento.style.color = '#000';
    });
});

document.getElementById('blue').addEventListener('click', function() {
    document.body.style.backgroundColor = '#050A30';
    document.body.style.color = '#000';
    var elementos = document.querySelectorAll('.card');
    elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = '#fff';
        elemento.style.color = '#000';
    });
});

document.getElementById('green').addEventListener('click', function() {
  document.body.style.backgroundColor = '#121917';
  document.body.style.color = '#000';
  var elementos = document.querySelectorAll('.card');
  elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = '#fff';
    elemento.style.color = '#000';
  });
});
/*conatdor de cards*/

// Seleccionar todos los elementos con la clase ".card"
var cards = document.querySelectorAll('.card');

// Obtener el número total de elementos con la clase ".card"
var contador = cards.length;

// Mostrar el número total en el div de contador
var divContador = document.getElementById('contadorTarjetas');
divContador.textContent = "TOTAL  DE APPS: " + contador;


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

