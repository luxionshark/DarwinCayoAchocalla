alert("Practicando JavaScript");

function ejemplo01() {
  // Entradas
  let precio1 = parseFloat(prompt("Ingrese el precio del producto 1:"));
  let precio2 = parseFloat(prompt("Ingrese el precio del producto 2:"));
  let precio3 = parseFloat(prompt("Ingrese el precio del producto 3:"));

  let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto 1:"));
  let cantidad2 = parseInt(prompt("Ingrese la cantidad del producto 2:"));
  let cantidad3 = parseInt(prompt("Ingrese la cantidad del producto 3:"));

  // Proceso
  let subTotal = (precio1 * cantidad1) + (precio2 * cantidad2) + (precio3 * cantidad3);
  let total = 0;

  alert(`Su subtotal a pagar es de: S/. ${subTotal.toFixed(2)}`);

  if (subTotal > 100) {
    total = subTotal * 0.95;
    alert("¡Felicidades! Ha obtenido un 5% de descuento por compras mayores a S/. 100.00");
  } else {
    total = subTotal;
  }

  // Salida
  alert(`El total a pagar es de: S/. ${total.toFixed(2)}`);
}

function Pnombre() {
  let nombre = prompt("¿Cómo te llamas?");
  if (nombre) {
    alert(`¡Hola, ${nombre}! Bienvenido/a.`);
  }
}

function taxi() {
  // Entradas
  let km = parseFloat(prompt("Ingrese los kilómetros recorridos:"));

  // Proceso
  let total = 10 + (km * 3);

  // Salida
  alert(`El costo total del viaje por ${km} km recorridos es de: S/. ${total.toFixed(2)}`);
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

// 2. Ejercicio 02: Área y perímetro de un terreno
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
