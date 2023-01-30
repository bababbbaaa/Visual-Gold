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
	spaceBetween: 30,
  autoplay: {
    // delay: 10000,
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
      spaceBetween: 40,
      grabCursor: true,
      centeredSlides: true,
    },
    // when window width is >= 1081px
    1081: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

//Слайдер новостей
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

$(document).ready(function() {
  $('.form-head__select').each(function() {
    let $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 300;
  
    $this.hide();
    $this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'form-head__select--inner',
      // text: 'Россия'
      text: $this.children('option:disabled').text(),
    }).insertAfter($this);
  
    let selectGap = $this.next('.form-head__select--inner');
    $('<ul>', {
      class: 'form-head__select--list'
    }).insertAfter(selectGap);
  
    let selectList = selectGap.next('.form-head__select--list');
    // Add li - option items
    for (let i = 0; i < selectOptionLength; i++) {
      $('<li>', {
          class: 'form-head__select--item',
          html: $('<span>', {
            text: selectOption.eq(i).text()
          })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    let selectItem = selectList.find('li');
  
    selectList.slideUp(0);
    selectGap.on('click', function() {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(dur);
  
        selectItem.on('click', function() {
          let chooseItem = $(this).data('value');
  
          $('select').val(chooseItem).attr('selected', 'selected');
          selectGap.text($(this).find('span').text());
  
          selectList.slideUp(dur);
          selectGap.removeClass('on');
        });
  
      }
      else {
        $(this).removeClass('on');
        selectList.slideUp(dur);
      }
    });
    $( window ).scroll(function() {
      $( ".form-head__select--list" ).css( "display", "none" );
      selectGap.removeClass('on');
    });
  });
});