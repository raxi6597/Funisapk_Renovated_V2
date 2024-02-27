document.getElementById('default').addEventListener('click', function() {
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.color = '#000';
});

document.getElementById('classic').addEventListener('click', function() {
  document.body.style.backgroundColor = '#121212';
  document.body.style.color = '#000';
});

document.getElementById('blue').addEventListener('click', function() {
  document.body.style.backgroundColor = '#050A30';
  document.body.style.color = '#000';
});

document.getElementById('green').addEventListener('click', function() {
  document.body.style.backgroundColor = '#121917';
  document.body.style.color = '#000';
});

document.getElementById('purple').addEventListener('click', function() {
  document.body.style.backgroundColor = '#2D1F2F';
  document.body.style.color = '#000';
});

document.getElementById('red').addEventListener('click', function() {
  document.body.style.backgroundColor = '#2B0D1E';
  document.body.style.color = '#000';
});



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

