function saludar() {
  console.log("¡Hola, mundo!");
  let a = 10;
  let b = 5;
  let suma = a + b;
  console.log("Resultado de la suma:", suma);
  alert("¡Bienvenidos a la página!");
}

function multiplicar() {
  let numero1 = 3;
  let numero2 = 4;
  let m = numero1 * numero2;
  alert(`El producto de ${numero1} x ${numero2} es igual a ${m}.`);
}

function cuenta() {
  let total = 100;
  let amigos = 4;
  let cuota = total / amigos;
  alert(
    `La cuenta total es de S/. ${total}.\nDividida entre ${amigos} amigos, cada uno debe pagar S/. ${cuota}.`
  );
}

function mayor() {
  let edad = 20;
  if (edad >= 18) {
    alert("Acceso permitido: Es mayor de edad.");
  }
}

function buclecito() {
  let i = 0;
  while (i <= 14) {
    console.log("Iteración: " + i);
    i++;
  }

  for (let j = 0; j <= 4; j++) {
    alert("Alerta de Bucle For: " + j);
  }
}

function cambiarTitulo() {
  let titulo = document.getElementById("titulo");
  
  if (titulo.textContent !== "JS") {
    titulo.textContent = "JS";
    titulo.style.color = "red";
  } else {
    titulo.textContent = "Javascript";
    titulo.style.color = "black";
  }
}


function cambiarMenu() {
  let m1 = document.getElementById("m1");
  m1.textContent = "Imágenes";
  let m2 = document.getElementById("m2");
  m2.textContent = "Listas";
  let m3 = document.getElementById("m3");
  m3.textContent = "Tablas";
  let m4 = document.getElementById("m4");
  m4.textContent = "JavaScript";
  let m5 = document.getElementById("m5");
  m5.textContent = "Contacto";
}

function cambiarLogo() {
  let logo = document.getElementById("logo");
  
  let imagenOriginal = "https://st3.depositphotos.com/31206640/36834/v/450/depositphotos_368340424-stock-illustration-single-black-pear-symbol-white.jpg";
  let imagenNueva = "https://st.depositphotos.com/1069290/5111/v/450/depositphotos_51110573-stock-illustration-logo-of-some-fruit-company.jpg";
  if (!logo.src.endsWith(imagenNueva)) {
    logo.src = imagenNueva;
  } else {
    logo.src = imagenOriginal;
  }
}


function sad() {
  let carita = document.getElementById("carita");
  carita.src =
    "https://static.vecteezy.com/system/resources/thumbnails/018/931/547/small_2x/sad-face-of-emoticons-png.png";
}

function happy() {
  let carita = document.getElementById("carita");
  carita.src =
    "https://media.istockphoto.com/id/689364180/es/vector/sonriente-icono-de-emoci%C3%B3n-de-personas-positivas-de-cara-de-dibujos-animados.jpg?s=612x612&w=0&k=20&c=WmsDAjUpqWkPR7eGixUhWjfnC1_jcyEaUiB5h1nEWVc=";
}