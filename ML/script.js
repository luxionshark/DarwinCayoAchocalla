const menuBtn = document.getElementById("menuBtn")
const navlinks = document.getElementById("navLinks")

menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
    if(navlinks.classList.contains("active")){
        menuBtn.innerHTML = "⛌";
        menuBtn.setAttribute("aria-expanded", "true")
    } else {
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false")
    }
});