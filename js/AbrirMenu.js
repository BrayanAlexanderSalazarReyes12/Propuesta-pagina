let AbrirSubmenu = 0;

const SubMenu = document.querySelector(".menu_descargable");


function mundo() {
    let menu = document.getElementById("menu_descargable");
    if (menu) {
        // Alternar visibilidad del menú
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    } else {
        console.error("El elemento con ID 'menu_descargable' no se encontró en el DOM.");
    }
}
