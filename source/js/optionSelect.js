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