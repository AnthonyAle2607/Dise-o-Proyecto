// Obtener elementos del DOM
var tabs = document.querySelectorAll('#tabsMenu li');
var tabContents = document.querySelectorAll('.tabContent');

// Agregar evento clic a los tabs
tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        // Remover la clase 'active' de los tabs
        tabs.forEach(function (tab) {
            tab.classList.remove('active');
        });

        // Ocultar todos los tabContents
        tabContents.forEach(function (tabContent) {
            tabContent.classList.remove('active');
        });

        // Agregar la clase 'active' al tab seleccionado
        this.classList.add('active');

        // Obtener el índice del tab seleccionado
        var index = Array.from(tabs).indexOf(this);

        // Mostrar el tabContent correspondiente
        tabContents[index].classList.add('active');
    });
});