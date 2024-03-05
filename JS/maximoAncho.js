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
  if (currentPage !== '/Error.html') {
    window.location.href = 'Error.html';
  }
}
