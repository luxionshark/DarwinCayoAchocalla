let Boton = document.getElementById("botoncito");

Boton.addEventListener("mouseout", function () {
  alert("Hiciste clic");
});
let perita = document.getElementById("perita");

perita.addEventListener("mouseover", function () {
  perita.src =
    "https://st.depositphotos.com/1069290/5111/v/450/depositphotos_51110573-stock-illustration-logo-of-some-fruit-company.jpg";
});
perita.addEventListener("mouseout", function () {
  perita.src =
    "https://st3.depositphotos.com/31206640/36834/v/450/depositphotos_368340424-stock-illustration-single-black-pear-symbol-white.jpg";
});