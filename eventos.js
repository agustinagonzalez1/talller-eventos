var contenedorBoton = document.getElementById("contenedorBoton");

contenedorBoton.addEventListener("click", function() {
    alert("Hola! Soy el div");
});


document.getElementById("saludarBoton").onclick = function(event) {
    alert("Hola!");    
    event.stopPropagation();
    event.preventDefault();
};


