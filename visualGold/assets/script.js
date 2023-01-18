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
		prevEl: '.swiper-button-prev'
	},
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // effect: "coverflow",
  // coverflow: {
  //   rotate: 20,
  //   stretch: 0,
  //   depth: 200,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  // mousewheel: true, // можно прокручивать изображения курсором
  grabCursor: true, // менять иконку курсора
  parallax:true,
});

const smallWindow = 1080;
let cardsWindow = null;
let widthWindow;

function initSwiper () {
  if (!cardsWindow) {
    cardsWindow = new Swiper('.cards', {
      loop: true,
      slidesPerView: 1,
      slidesOffsetBefore: 531, // некорректное отображение
      navigation: {
      	nextEl: '.swiper-button-next',
      	prevEl: '.swiper-button-prev'
      },
      grabCursor: true,
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
  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (window.innerWidth <= smallWindow) {
    // Инициализировать слайдер если он ещё не был инициализирован
    initSwiper()
  } else {
    // Уничтожить слайдер если он был инициализирован
    destroySwiper()
  }
}

window.addEventListener("resize", updateSize());
