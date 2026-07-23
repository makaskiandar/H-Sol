console.log("Navbar JS Loaded");
const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});

// Mobile dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const link = dropdown.querySelector("a");

    link.addEventListener("click", (e) => {

        if (window.innerWidth <= 992) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        }

    });

});