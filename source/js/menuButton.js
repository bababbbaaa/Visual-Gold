const buttonMenu = document.querySelector(".menu-link__client-button");
const menuClose = document.querySelector(".menu-link__close");
buttonMenu.addEventListener("click", (function() {
    menuClose.classList.contains("menu-link__opened") ? (menuClose.classList.remove("menu-link__opened"),
    menuClose.classList.add("menu-link__close")) : (menuClose.classList.add("menu-link__opened"),
    menuClose.classList.remove("menu-link__close"))
}));

const mainHeader = document.querySelector(".main-header");
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    mainHeader.classList.remove("main-header-out");
  } else {
    mainHeader.classList.add("main-header-out");
  }
  prevScrollpos = currentScrollPos;
};
