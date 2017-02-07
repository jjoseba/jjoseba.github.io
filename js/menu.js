$(function(){
  $('body').scrollspy({ target: '#header' });
  $('[data-toggle="tooltip"]').tooltip();

  var navToggle = $('.nav-toggle-wrapper');
  navToggle.on('click', '.nav-toggle-btn', function(){
    navToggle.toggleClass('expand');
  });

  $('.header__nav__item a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 900);
      event.preventDefault();
      navToggle.removeClass('expand');
  });

  $('.projects article').find('.flip').on('click', function(e){
    e.preventDefault();
    $(this).parents('article').toggleClass('flipped');
    $(':focus').blur();
  });

});