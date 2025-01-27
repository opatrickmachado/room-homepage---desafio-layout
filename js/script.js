const navMenu = document.querySelector(".nav-menu");
const toggler = document.querySelector(".hamburger");
const icon = document.querySelector("#imgId");

// Selecionando elementos
const title = document.querySelector(".title-heading");
const description = document.querySelector(".description");
const header = document.querySelector(".header");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

// Definição dos slides
const slides = [
    {
        image: "assets/images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: "assets/images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today."
    },
    {
        image: "assets/images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

let currentSlide = 0;

// Função para atualizar o conteúdo do slide
function updateSlide() {
    header.style.backgroundImage = `url(${slides[currentSlide].image})`;
    title.textContent = slides[currentSlide].title;
    description.textContent = slides[currentSlide].description;
}

// Eventos dos botões
nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// Inicializa o primeiro slide
updateSlide();


let isToggled = false;

toggler.addEventListener('click', () => {
    if (!isToggled) {
        icon.src = "assets/images/icon-close.svg";
        navMenu.classList.add("show");
    } else {
        navMenu.classList.remove("show");
        icon.src = "assets/images/icon-hamburger.svg";
    }

    isToggled = isToggled ? false : true;
});