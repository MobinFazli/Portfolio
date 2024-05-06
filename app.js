const hamburgerMenu = document.querySelector("#hamburgerMenu");
const menuLinks = document.querySelector("#menuLinks");
const menuLink = document.querySelectorAll(".menuLink");

const body = document.querySelector("body");
const darkModeBtn = document.querySelector("#DarkBtn");
const darkeModeBtnMobile = document.querySelector("#DarkBtnMobile");

hamburgerMenu.addEventListener("click", () => {
    menuLinks.classList.toggle("hidden");
})

menuLink.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.toggle("hidden");
    })
})

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
})

darkeModeBtnMobile.addEventListener("click", () => {
    body.classList.toggle("dark");
})