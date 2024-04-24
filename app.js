const hamburgerMenu = document.querySelector("#hamburgerMenu");
const menuLinks = document.querySelector("#menuLinks");
const menuLink = document.querySelectorAll(".menuLink");

const body = document.querySelector("body");
const darkModeBtn = document.querySelector("#DarkBtn");

hamburgerMenu.addEventListener("click", () => {
    menuLinks.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("bg-white");
})

menuLink.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.toggle("hidden");
        hamburgerMenu.classList.toggle("bg-white");
    })
})

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    
})