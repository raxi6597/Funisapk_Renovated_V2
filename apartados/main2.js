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

window.addEventListener('load', function() {
  // Ocultar el spinner cuando el contenido esté completamente cargado
  document.getElementById('loading-spinner').style.display = 'none';
});window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollButton = document.getElementById("scroll-btn");
  
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    scrollButton.innerHTML = "↑";
  } else {
    scrollButton.innerHTML = "↓";
  }
}



function scrollToPosition() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Si estamos al final de la página, vamos al principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Si no estamos al final de la página, vamos al final
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
}
