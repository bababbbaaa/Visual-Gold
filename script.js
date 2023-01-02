const button = document.querySelector(".menu-link__client-button");
const menuClose = document.querySelector(".menu-link__close");

button.addEventListener("click", (function() {
    menuClose.classList.contains("menu-link__opened") ? (menuClose.classList.remove("menu-link__opened"),
    menuClose.classList.add("menu-link__close")) : (menuClose.classList.add("menu-link__opened"),
    menuClose.classList.remove("menu-link__close"))
}
))