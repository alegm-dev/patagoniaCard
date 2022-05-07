const logo = document.getElementById("logo");
const container = document.querySelector(".patagonia-container");

container.style.pointerEvents = "none";
logo.addEventListener("click", () => {
    logo.style.width = "100rem";
    container.style.clipPath = "circle(100% at 50% 50%)";
    container.style.pointerEvents = "auto";
});