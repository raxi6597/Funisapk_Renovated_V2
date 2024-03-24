// Asignar evento de clic a las tarjetas para abrir el popup al hacer clic en ellas
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var extraInfo = card.querySelector('#Extra_Info');
        if (extraInfo) {
            // Obtener el contenido de Extra_Info
            var extraInfoContent = extraInfo.innerHTML;

            // Mostrar el contenido de Extra_Info en el elemento <p id="extra-info-content">
            document.getElementById('extra-info-content').innerHTML = extraInfoContent;

            // Mostrar el popup
            document.getElementById('popup').style.display = 'block';
        }
    });
});

