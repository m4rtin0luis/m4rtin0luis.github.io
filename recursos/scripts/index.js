const animation = () => {

    const elements = ["h1", "h2", "img", "nav"];
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
        elements[2].className = "animation";
    }, 5000);
};





// Run App
document.addEventListener("DOMContentLoaded", () => {
    animation();
});