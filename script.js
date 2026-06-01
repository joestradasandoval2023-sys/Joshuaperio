document.addEventListener("DOMContentLoaded", function () {
    const botonHamburguesa = document.querySelector(".menu-movil-v2");
    // Cambiamos ".nav-links-v2" por ".nav-v2" para que coincida exactamente con tus HTML
    const menuNavegacion = document.querySelector(".nav-v2");

    if (botonHamburguesa && menuNavegacion) {
        botonHamburguesa.addEventListener("click", function () {
            menuNavegacion.classList.toggle("show");
        });
    }
});