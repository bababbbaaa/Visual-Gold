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

const slider = new Swiper('.header-slider', {
  loop: true,
  slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 1000, // расстояние между слайдами
	navigation: { // задаем кнопки навигации
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  parallax:true,
  effect: "coverflow",
  coverflow: {
    rotate: 40,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  grabCursor: true, // менять иконку курсора
});

const news = new Swiper('.news__wrapper', {
  loop: true,
  slidesPerView: 3,
	navigation: { 
    nextEl: '.news__scroll-next',
    prevEl: '.news__scroll-prev',
  },
  grabCursor: true,
});

const goods = new Swiper('.goods__slider', {
  loop: true,
  slidesPerView: 1,
	navigation: { 
    nextEl: '.goods__slider-button-next',
    prevEl: '.goods__slider-button-prev',
  },
  grabCursor: true,
});


const smallWindow = 1080;
let cardsWindow = null;
let widthWindow;

function initSwiper () {
  if (!cardsWindow) {
    cardsWindow = new Swiper('.cards', {
      loop: true,
      slidesPerView: 1,
      navigation: {
      	nextEl: '.categories__scroll-next',
        prevEl: '.categories__scroll-prev',
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // mousewheel: true, // можно прокручивать изображения курсором
      grabCursor: true, // менять иконку курсора
      parallax:true,
    });
  }
};

function destroySwiper () {
  if (cardsWindow) {
    cardsWindow.destroy();
    cardsWindow = null;
  }
}

function updateSize() {
  if (window.innerWidth <= smallWindow) {
    initSwiper()
  } else {
    destroySwiper()
  }
}

window.addEventListener("resize", updateSize());
