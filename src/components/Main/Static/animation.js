const navSlide = () => {
    const burger = document.querySelector(".burger-bttn");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const content = document.querySelector("section");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        content.classList.toggle("dim");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    });

    content.addEventListener("click", () => {
        if (content.classList.contains("dim")) {
            content.classList.remove("dim");
        }
    })
}

export default navSlide;