emailjs.init("Vw9fQh5gpjHjC0af5");

const form = document.getElementById("contact-form");
const button = form.querySelector(".send-btn");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "service_0ivggmg",
        "template_gskpkua",
        form
    )
    .then(() => {
        form.reset();

        button.disabled = false;
        button.textContent = "Send Message ➜";

        popup.classList.add("show");
    })
    .catch((error) => {
        console.error(error);

        button.disabled = false;
        button.textContent = "Send Message ➜";

        alert("Failed to send message. Please try again.");
    });
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});