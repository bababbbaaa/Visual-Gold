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
  spaceBetween: 40,
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

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4
  
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// const cards = new Swiper('.cards', {
//   loop: true,
//   slidesPerView: 1,
//   navigation: {
//    	nextEl: '.categories__scroll-next',
//     prevEl: '.categories__scroll-prev',
//   },
//   effect: "fade",
//     fadeEffect: {
//     crossFade: true,
//   },
//   grabCursor: true, // менять иконку курсора
//   parallax:true,
//   breakpoints: {
//     // when window width is >= 1080px
//     1080: {
//       init: false,
//       slidesPerView: 4,
//       mousewheel: true, // можно прокручивать изображения курсором
//     },
//   }
// });



// const smallWindow = 1080;
// let cardsWindow = null;
// let widthWindow;

// function initSwiper () {
//   if (!cardsWindow) {
//     cardsWindow = new Swiper('.cards', {
//       loop: true,
//       slidesPerView: 1,
//       navigation: {
//       	nextEl: '.categories__scroll-next',
//         prevEl: '.categories__scroll-prev',
//       },
//       effect: "fade",
//       fadeEffect: {
//         crossFade: true,
//       },
//       // mousewheel: true, // можно прокручивать изображения курсором
//       grabCursor: true, // менять иконку курсора
//       parallax:true,
//     });
//   }
// };

// function destroySwiper () {
//   if (cardsWindow) {
//     cardsWindow.destroy();
//     cardsWindow = null;
//   }
// }

// function updateSize() {
//   if (window.innerWidth <= smallWindow) {
//     initSwiper()
//   } else {
//     destroySwiper()
//   }
// }

// window.addEventListener("resize", updateSize());

const modalButton = document.querySelectorAll(".modal-button");
const modalClose = document.querySelector(".modal-close");
const modalCloseBtn = document.querySelector(".modal__form__button-close");

modalButton.forEach((e=>e.addEventListener("click", (e=>{
  modalClose.classList.contains("modal-close") && (e.preventDefault(),
  modalClose.classList.remove("modal-close"))
}
)))),

modalCloseBtn.addEventListener("click", function() {
  modalClose.classList.add("modal-close")
}
);

modalButton.forEach((e=>e.addEventListener("click", (e=>{
  modalClose.classList.contains("modal-close") && (e.preventDefault(),
  modalClose.classList.remove("modal-close"))
}
)))),
modalClose.addEventListener("click", (e=>{
  e.target == modalClose && modalClose.classList.contains("modal") && modalClose.classList.add("modal-close")
}
));