// get the elements in palette id div
document.getElementById("palette").addEventListener('click', function(event) {
    // verify button clicked to find a match using target property
    if (event.target && event.target.matches("button")) {
        // change background color based in button background color matched
        document.getElementById("box").style.backgroundColor = event.target.style.backgroundColor;
    }
});

/*
// Obtener los elementos dentro del div con id palette
document.getElementById("palette").addEventListener('click', function(event) {
    // Verificar si se hizo clic en un botón para encontrar una coincidencia usando la propiedad target
    if (event.target && event.target.matches("button")) {
        // Cambiar el color de fondo basado en el color de fondo del botón coincidente
        document.getElementById("box").style.backgroundColor = event.target.style.backgroundColor;
    }
});

*/