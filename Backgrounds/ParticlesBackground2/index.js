// Preparamos el elemento del DOM para una partícula
const circle = document.createElement("DIV");
circle.classList.add("circle");
const circleContainer = document.createElement("DIV");
circleContainer.classList.add("circle-container");
circleContainer.appendChild(circle);

// Definimos el número de partículas a añadir
const nParticulas = 100;

// Contenedor de la animación de partículas
const container = document.getElementById("particles-container");

// Añadimos las partículas al contenedor
if (container) {
    for (let i = 0; i < nParticulas; i++) {
        container.appendChild(circleContainer.cloneNode(true));
    }
}
