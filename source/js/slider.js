//Слайдер главного экрана
const slider = new Swiper('.header-slider', {
    loop: true,
    slidesPerView: 1,
      spaceBetween: '10%',
    autoplay: {
      delay: 10000,
    },
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
const categoriesSlide = new Swiper('.categories__wrapper .swiper-container', {
      loop: true,
    navigation: {
      nextEl: '.categories__scroll-next',
      prevEl: '.categories__scroll-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 40,
        spaceBetween: '3%',
        grabCursor: true,
        centeredSlides: true,
      },
      // when window width is >= 1081px
      1081: {
        slidesPerView: 4,
        // spaceBetween: 20,
        spaceBetween: '1.5%',
      },
    },
});
  
//Слайдер новостей
const news = new Swiper('.news__wrapper .swiper-container', {
    loop: true,
      navigation: { 
      nextEl: '.news__scroll-next',
      prevEl: '.news__scroll-prev',
    },
    grabCursor: true,
  
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 40,
        spaceBetween: '5%',
      },
      // when window width is >= 1081px
      1081: {
        slidesPerView: 3,
        // spaceBetween: 20,
        spaceBetween: '3%',
      },
    },
});
  
//Слайдер товара, инициализация превью слайдера
const goodsSliderThumbs = new Swiper('.goods__slider--thumbs .swiper-container', { // ищем слайдер превью по селектору
      loop: true,
      slidesPerView: 3,
      // spaceBetween: 24,
      spaceBetween: '6%',
    slideThumbActiveClass: 'swiper-slide-thumb-active',
      navigation: {
          nextEl: '.goods__slider-button-next',
          prevEl: '.goods__slider-button-prev',
      },
      freeMode: true, // при перетаскивании превью ведет себя как при скролле	
});
  
const goodsSlider = new Swiper('.goods__slider--images .swiper-container', { // ищем слайдер превью по селектору
      loop: true,
      slidesPerView: 1,
    spaceBetween: '6%',
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
