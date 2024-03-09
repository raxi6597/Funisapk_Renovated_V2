/*loading */
window.addEventListener('load', function() {
  // Ocultar el spinner cuando el contenido esté completamente cargado
  document.getElementById('loading-spinner').style.display = 'none';
});

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
