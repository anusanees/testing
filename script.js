
// Mobile Navigation Menu

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

// Contact Form - Send Message on WhatsApp

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const phone = "923361266050";

        const whatsappMessage =
            "Hello Sheikh Product!" +
            "\nName: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message;

        const url = "https://wa.me/" + phone +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.open(url, "_blank");
    });
}
