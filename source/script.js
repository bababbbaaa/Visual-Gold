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

//Слайдер главного экрана
const slider = new Swiper('.header-slider', {
  loop: true,
  slidesPerView: 1,
	spaceBetween: 1000,
	navigation: {
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

//Слайдер каталога
const news = new Swiper('.news__wrapper .swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
	navigation: { 
    nextEl: '.news__scroll-next',
    prevEl: '.news__scroll-prev',
  },
  grabCursor: true,
});

//Слайдер товара, инициализация превью слайдера
const goodsSliderThumbs = new Swiper('.goods__slider--thumbs .swiper-container', { // ищем слайдер превью по селектору
	loop: true,
	slidesPerView: 3,
	spaceBetween: 24,
	navigation: {
		nextEl: '.goods__slider-button-next',
		prevEl: '.goods__slider-button-prev',
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле	
});

const goodsSlider = new Swiper('.goods__slider--images .swiper-container', { // ищем слайдер превью по селектору
	loop: true,
	slidesPerView: 1,
	mousewheel: true,
	navigation: {
		nextEl: '.goods__slider-button-next',
		prevEl: '.goods__slider-button-prev',
	},
	grabCursor: true,
	thumbs: { // указываем на превью слайдер
		swiper: goodsSliderThumbs,
	},
});

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
});

modalClose.addEventListener("click", (e=>{
  e.target == modalClose && modalClose.classList.contains("modal") && modalClose.classList.add("modal-close")
}
));

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    modalClose.classList.add('modal-close');
  }
});
