// index.js

const animation = () => {
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const bt = document.querySelector("img");
    const nav = document.querySelector("nav");

    setTimeout(() => {
        h1.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        h2.style.opacity = 1;
    }, 2000);

    setTimeout(() => {
        bt.style.opacity = 1;
    }, 3000);

    setTimeout(() => {
        nav.style.opacity = 1;
    }, 4000);

    setTimeout(() => {
        bt.className = "desplazar";
    }, 5000);
};

// Run App
document.addEventListener("DOMContentLoaded", () => {
    animation();
    const btn = document.querySelector(".txt_ctn img");
    btn.addEventListener("click", () => {
        const mainElement = document.querySelector(".about_ctn");
        const mainPosition = mainElement.offsetTop;

        window.scrollTo({
            top: mainPosition,
            behavior: "smooth"
        })
    })
});