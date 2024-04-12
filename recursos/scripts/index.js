const animation = () => {

    const elements = ["header", "h1", "h2", "img", "nav"];
    for (let i=0; i<elements.length; i++){
        elements[i] = document.querySelector(elements[i]);
    }

    setTimeout(() => {
        elements[0].style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        elements[1].style.opacity = 1;
    }, 2000);

    setTimeout(() => {
        elements[2].style.opacity = 1;
    }, 3000);

    setTimeout(() => {
        elements[3].style.opacity = 1;
    }, 4000);

    setTimeout(() => {
        elements[4].style.opacity = 1;
    }, 5000);

    setTimeout(() => {
        elements[3].className = "animation";
    }, 6000);
};




// Función para scrollear a través del botón.
const scrollAutomatic = () => {
    const btn = document.querySelector(".header__content img");
    btn.addEventListener("click", () => {
        const section = document.querySelector(".main__description");
        section.scrollIntoView({ behavior: "smooth" });
    });
};





// Funcion para scrollear a las distintas secciones de la web.
const scrollRun = () => {
    const link = document.querySelectorAll(".nav__links");
    link[0].addEventListener("click", () => {
        const section = document.querySelector(".main__description");
        section.scrollIntoView({ behavior: "smooth" });
    });
};





// Función para detectar la posición del scroll y activar animación.
const scrollFunction = () => {
    let positionScroll = window.scrollY || window.pageYOffset;
    let alturaHeader = document.querySelector(".header").offsetHeight;
    if(positionScroll >= alturaHeader){
        const main = document.querySelector(".main");
        main.style.opacity = 1;
    }
}


// Run App
document.addEventListener("DOMContentLoaded", () => {
    animation();
    window.addEventListener("scroll", scrollFunction);
    scrollAutomatic();
    scrollRun();
});