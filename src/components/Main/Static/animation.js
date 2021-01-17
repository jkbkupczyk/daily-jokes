const navSlide = () => {
    const burger = document.querySelector(".burger-bttn");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const content = document.querySelector("body");

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

    if (nav.classList.contains("nav-active")) {
        content.classList.toggle("dim");
    } else if (window.innerWidth >= 768) {
        content.classList.remove("dim");
        console.log(window.innerWidth);
    }
}

const linkClicked = () => {
    document.querySelector("body").classList.remove("dim");
    console.log("xDD");
}

export { navSlide, linkClicked };