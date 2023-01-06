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
}


const buttonsSlider = document.querySelectorAll("[data-sliders-direction]");
buttonsSlider.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideDirection === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

const changeSlide = (offset) => {
  const slides = document.querySelector(".slides");
  const activeSlide = slides.querySelector("[data-active-slide]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  newIndex =
    newIndex < 0
      ? slides.children.length - 1
      : newIndex === slides.children.length
      ? 0
      : newIndex;
  slides.children[newIndex].dataset.activeSlide = true;
  delete activeSlide.dataset.activeSlide;
};

const buttonsCard = document.querySelectorAll("[data-card-direction]");
buttonsCard.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideDirection === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

const changeSlideCategories = (offset) => {
  const cards = document.querySelector(".categories__wrapper");
  const activeCard = cards.querySelector("[data-active-card]");
  let newIndex = [...cards.children].indexOf(activeCard) + offset;
  newIndex =
    newIndex < 0
      ? cards.children.length - 1
      : newIndex === cards.children.length
      ? 0
      : newIndex;
  cards.children[newIndex].dataset.activeCard = true;
  delete activeCard.dataset.activeCard;
};

setInterval(changeSlide.bind(null, 1), 6000);
setInterval(changeSlideCategories.bind(null, 1), 6000);