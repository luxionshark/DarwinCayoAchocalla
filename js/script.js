document.addEventListener('DOMContentLoaded', () => {
  const botonModo = document.getElementById('toggle-dark');

  // Comprueba si el usuario ya tenía activo el modo oscuro en una sesión previa
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (botonModo) botonModo.textContent = '☀️'; // Si inicia en oscuro, muestra el sol
  } else {
    if (botonModo) botonModo.textContent = '🌙'; // Si inicia en claro, muestra la luna
  }

  // Activa o desactiva la clase al pulsar el botón
  botonModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Guarda el estado del tema elegido y cambia el icono del botón
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      botonModo.textContent = '☀️'; // Cambia el icono a sol
    } else {
      localStorage.setItem('theme', 'light');
      botonModo.textContent = '🌙'; // Cambia el icono a luna
    }
  });
});

f