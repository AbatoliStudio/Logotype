$(function(){

  $('.slider__item, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});


$('#menu-burger').click(function() {
  var overlayMenu = $('#overlay-menu'),
      menuIconLines = $('#menu-burger .menu-icon'),
      menuBurger = $('#menu-burger');
  
  if(overlayMenu.hasClass('open')) {
    overlayMenu.removeClass('open');
    menuIconLines.removeClass('open');
    menuBurger.removeClass('open');
  }else{    overlayMenu.addClass('open');
            menuIconLines.addClass('open');
            menuBurger.addClass('open');
  };
  
  
})