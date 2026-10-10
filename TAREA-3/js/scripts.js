function cambiarLogo() {
  let logo = document.getElementById("logo");
  
  let imagenOriginal = "images/alya.webp";
  let imagenNueva = "images/alya-2.webp";
  if (!logo.src.endsWith(imagenNueva)) {
    logo.src = imagenNueva;
  } else {
    logo.src = imagenOriginal;
  }
}

function cambiarTitulo() {
  let titulo = document.getElementById("titulo");
  
  if (titulo.textContent !== "Lámpara LED Anya Forger (Spy × Family)") {
    titulo.textContent = "Lámpara LED Anya Forger (Spy × Family)";
    titulo.style.color = "red";
  } else {
    titulo.textContent = "Lámpara LED Acrílica Anime Premium 3D";
    titulo.style.color = "black";
  }
}

function convertirmoneda() {
  // Entradas
  let dolares = parseFloat(prompt("Ingrese la cantidad en dólares ($):"));
  let tasaCambio = parseFloat(prompt("Ingrese la tasa de cambio a moneda local:"));

  // Proceso
  let monedaLocal = dolares * tasaCambio;

  // Salida
  alert(`$${dolares} dólares equivalen a S/. ${monedaLocal.toFixed(2)} en moneda local.`);
}

function calcularterreno() {
  // Entradas
  let largo = parseFloat(prompt("Ingrese el largo del terreno (metros):"));
  let ancho = parseFloat(prompt("Ingrese el ancho del terreno (metros):"));

  // Proceso
  let area = largo * ancho;
  let perimetro = 2 * (largo + ancho);

  // Salida
  alert(`Resultados del terreno:\n- Área: ${area} m²\n- Perímetro: ${perimetro} metros`);
}
