const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");

    if (links.classList.contains("active")) {
        menu.innerHTML = "✕";
    } else {
        menu.innerHTML = "☰";
    }
});