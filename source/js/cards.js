if( window.innerWidth <= 1080 && window.pageXOffset <= 1080){
    $('.categories__wrapper--good').simpleLoadMore({
    item: '.categories__cards',
    count: 2,
    itemsToLoad: 1,
    easing: 'slide',
    btnHTML: '<a href="#" class="goods__button"><span class="visually-hidden">Показать еще товары</span></a>',
    onComplete: function() {
      $(this).after('<span class="visually-hidden">Все товары были загружены</span>');
    },
  });
};