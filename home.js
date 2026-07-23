const services = document.querySelectorAll(".service");

services.forEach(service => {

    const img = service.querySelector(".service-btn");

    img.addEventListener("click", () => {

        service.classList.toggle("active");

        if(service.classList.contains("active")){
            img.src = "down.svg";
        }
        else{
            img.src = "next.svg";
        }

    });
});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

hiddenElements.forEach(el => observer.observe(el));