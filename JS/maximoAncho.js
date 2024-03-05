// Verificar el ancho de la ventana solo si es mayor que 769px antes de redirigir
if (window.innerWidth > 769) {
  window.onload = function() {
    var width = window.innerWidth;

    // Redirigir a otra página si el ancho de la ventana es mayor que 769px
    if (width > 769) {
      window.location.href = 'Error.html';
    }
  }
}
