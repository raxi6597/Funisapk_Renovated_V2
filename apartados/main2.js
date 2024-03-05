window.onload = function() {
  var width = window.innerWidth;

  // Verificar si el ancho de la ventana es mayor que 768px
  if (width > 768) {
    // Obtener el elemento del párrafo
    var textElement = document.querySelector('.text2');
    // Mostrar el párrafo
    textElement.style.display = 'block';
  }
}